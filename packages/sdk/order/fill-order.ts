import { MichelsonData } from "@taquito/michel-codec"
import { Provider, send_batch, get_public_key, OperationResult, Asset, get_address } from "../common/base"
import { Part, OrderForm, order_to_json, salt, fill_offchain_royalties } from "./utils"
import { invert_order } from "./invert-order"
import { get_make_fee } from "./get-make-fee"
import { add_fee } from "./add-fee"
import { approve_arg } from "./approve"
import { order_to_struct, some_struct, none_struct, get_decimals, sign_order } from "./sign-order"
import { make_permit } from "../nft/permit"
import { unwrap_arg } from "./wrapper"
import BigNumber from "bignumber.js"
import fetch from "node-fetch"

export interface FillOrderRequest {
  amount: BigNumber;
  payouts?: Array<Part>;
  origin_fees?: Array<Part>;
  infinite?: boolean;
  use_all?: boolean;
  edpk?: string
}

async function get_make_asset(
  provider: Provider,
  order: OrderForm,
  amount: BigNumber,
  edpk: string
) : Promise<Asset> {
  const inverted = invert_order(order, amount, edpk)
  const make_fee = get_make_fee(provider.config.fees, inverted)
  return add_fee(provider, inverted.make, make_fee)
}

async function get_real_value(provider: Provider, order: OrderForm) : Promise<BigNumber> {
  const fee = get_make_fee(provider.config.fees, order)
  const make = await add_fee(provider, order.make, fee)
  return make.value
}

export async function match_order_to_struct(
  p: Provider,
  left : OrderForm,
  right: OrderForm) : Promise<MichelsonData> {
  return {
    prim: "Pair", args:[
      await order_to_struct(p, left),
      { prim: "Pair", args:[
        (left.signature) ? some_struct({string : left.signature}) : none_struct(),
        { prim: "Pair", args:[
          await order_to_struct(p, right),
          (right.signature) ? some_struct({string : right.signature}) : none_struct() ] } ] }] }
}

async function use_permit(provider: Provider, asset: Asset) : Promise<undefined | { contract: string, token_id: BigNumber, amount: BigNumber }> {
  switch (asset.asset_type.asset_class) {
    case "XTZ": return undefined
    case "MT":
      const mt_contract = asset.asset_type.contract || provider.config.mt_public
      if (provider.config.permit_whitelist.includes(mt_contract)) {
        return { contract: mt_contract, token_id: asset.asset_type.token_id, amount: asset.value }
      } else return undefined
    case "NFT":
      const nft_contract = asset.asset_type.contract || provider.config.nft_public
      if (provider.config.permit_whitelist.includes(nft_contract)) {
        return { contract: nft_contract, token_id: asset.asset_type.token_id, amount: asset.value }
      } else return undefined
    case "FT":
      if (provider.config.permit_whitelist.includes(asset.asset_type.contract) && asset.asset_type.token_id != undefined) {
        let decimals = await get_decimals(provider, asset.asset_type.contract, asset.asset_type.token_id)
        return { contract: asset.asset_type.contract, token_id: asset.asset_type.token_id,
                 amount: asset.value.times((new BigNumber(10).pow(decimals))) }
      } else return undefined
  }
}

export async function fill_order(
  provider: Provider,
  left: OrderForm,
  request: FillOrderRequest
): Promise<OperationResult> {
  const pk = (request.edpk) ? request.edpk : await get_public_key(provider)
  if (!pk) throw new Error("cannot get public key")
  const make = await get_make_asset(provider, left, request.amount, pk)
  const up = await use_permit(provider, make)
  let right : OrderForm = {
    ...invert_order(left, request.amount, pk),
    data: {
      ...left.data,
      payouts: request.payouts || [],
      origin_fees: request.origin_fees || [],
    },
  }
  right = await fill_offchain_royalties(provider, right)
  if (up==undefined) {
    const arg_approve =
      (make.asset_type.asset_class != "XTZ")
      ? await approve_arg(provider, await get_address(provider), make, request.use_all, request.infinite)
      : undefined
    let args = (arg_approve) ? [ arg_approve ] : []
    const amount =
      (left.make.asset_type.asset_class === "XTZ" && left.salt == '0')
      ? await get_real_value(provider, left)
      : (right.make.asset_type.asset_class === "XTZ" && right.salt == '0')
      ? await get_real_value(provider, right)
      : undefined
    const parameter = await match_order_to_struct(provider, left, right)
    args = args.concat({
      destination: provider.config.exchange, entrypoint: "match_orders", parameter, amount })
    if (left.make.asset_type.asset_class == "FT" && left.make.asset_type.contract == provider.config.wrapper && left.make.asset_type.token_id != undefined && left.make.asset_type.token_id.isZero()) {
      args = args.concat(await unwrap_arg(provider, left.make.value))
    }
    return send_batch(provider, args)
  }

  else {
    const right_salt = salt()
    right = { ...right, salt: right_salt }
    const signature = await sign_order(provider, right)
    right = { ...right, signature }
    const mp = await make_permit(provider, up.contract, [ {
      destination: left.maker, token_id: up.token_id, amount: up.amount } ])
    const r_add = await fetch(provider.config.api_permit + '/permit/add', {
    method: 'POST', headers: [[ 'content-type', 'application/json' ]],
    body: JSON.stringify(mp.permit)
    })
    if (!r_add.ok) throw new Error(r_add.statusText + ' ' + await r_add.text())
    console.log(JSON.stringify({
      left: order_to_json(left), right: order_to_json(right) }))
    const r_match = await fetch(provider.config.api_permit + '/permit/match_orders', {
      method: 'POST', headers: [[ 'content-type', 'application/json' ]],
      body: JSON.stringify({
        left: order_to_json(left), right: order_to_json(right) }) })
    if (!r_match.ok) throw new Error(r_match.statusText + ' ' + await r_match.text())
    let json = await r_match.json()
    const { hash } = JSON.parse(json)
    return { hash, confirmation: (async() => { return undefined }) }
  }
}
