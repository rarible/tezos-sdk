import { MichelsonData, MichelsonType, packDataBytes } from "@taquito/michel-codec"
import { Provider, send, StorageFA1_2, StorageFA2,
         Asset, TransactionArg, OperationResult, hex_to_uint8array, b58enc } from "../common/base"
import BigNumber from "bignumber.js"
const blake = require('blakejs')

function key_expr(value: MichelsonData, type: MichelsonType) : string {
  const b = packDataBytes(value, type).bytes
  const hash = blake.blake2b(hex_to_uint8array(b), null, 32)
  return b58enc(hash, new Uint8Array([13, 44, 64, 27]))
}

async function get_big_map_value(provider: Provider, id: string, value: MichelsonData, type: MichelsonType) : Promise<any | undefined> {
  try {
    const rpc = provider.tezos.tk.rpc
    let expr = key_expr(value, type)
    return await rpc.getBigMapExpr(id, expr)
  } catch {
    return undefined
  }
}

export async function approve_fa1_2_arg(
  provider: Provider,
  owner: string,
  contract: string,
  value: BigNumber,
  infinite: boolean = true
) : Promise<TransactionArg | undefined > {
  const spender = provider.config.transfer_proxy
  const st : StorageFA1_2 = await provider.tezos.storage(contract)
  let key_exists = false
  let balance = undefined
  try {
    let r : any = await st.ledger.get(owner)
    key_exists = r!=undefined
    if (r!=undefined) balance = r[Object.keys(r)[0]]
  } catch {
    key_exists = false
  }
  if (!key_exists) {
    let v =
      (!infinite) ? value.toString() :
      (balance) ? balance.toString() :
      Number.MAX_SAFE_INTEGER.toString()
    const parameter : MichelsonData = [ { prim: 'Pair', args : [ { string: spender }, { int: v } ] } ]
    return { destination: contract, entrypoint: "approve", parameter }
  }
}

export async function approve_fa1_2(
  provider: Provider,
  owner: string,
  contract: string,
  value: BigNumber,
  infinite: boolean = true,
) : Promise<OperationResult | undefined> {
  const arg = await approve_fa1_2_arg(provider, owner, contract, value, infinite)
  if (arg) {
    try { return send(provider, arg) } catch(e) { return undefined }
  }
  else return undefined
}

export async function approve_fa2_arg(
  provider: Provider,
  owner: string,
  contract: string,
  token_id: BigNumber,
  use_all = false) : Promise<TransactionArg | undefined> {
  const operator = provider.config.transfer_proxy
  const st : StorageFA2 = await provider.tezos.storage(contract)
  let key_exists = false
  if (use_all && st.operator_for_all) {
    try {
      let r = await st.operator_for_all.get({ 0 : operator, 1 : owner })
      key_exists = (r!=undefined)
    } catch {
      key_exists = false
    }
    if (!key_exists) {
      let parameter : MichelsonData = [ { prim: 'Left', args : [ { string: operator } ] } ]
      return { destination: contract, entrypoint: "update_operators_for_all", parameter }
    }
  } else {
    try {
      if (st.operator) {
        let r = await st.operator.get({ 0 : operator, 1 : token_id, 2: owner })
        key_exists = (r!=undefined)
      } else if (st.operators) {
        let id = st.operators.toString()
        let value : MichelsonData = { prim: "Pair", args: [ { string: owner }, { prim: "Pair", args: [ { string: operator }, { int : token_id.toString() } ] } ] }
        let type : MichelsonType = { prim: "pair", args: [ { prim: "address" }, { prim: "pair", args: [ { prim: "address" }, { prim: "nat" } ] } ] }
        let r = await get_big_map_value(provider, id, value, type)
        key_exists = (r!=undefined)
      }
    } catch {
      key_exists = false
    }
    if (!key_exists) {
      let parameter : MichelsonData = [
        { prim: 'Left', args: [
          { prim: "Pair", args: [
            { string: owner },
            { prim: 'Pair', args: [
              { string : operator },
              { int : token_id.toString() } ] } ] } ] } ]
      return { destination: contract, entrypoint: "update_operators", parameter }
    }
  }
}

export async function approve_fa2(
  provider: Provider,
  owner: string,
  contract: string,
  token_id: BigNumber,
  use_all = false) : Promise<OperationResult | undefined> {
  const arg = await approve_fa2_arg(provider, owner, contract, token_id, use_all)
  if (arg) {
    return send(provider, arg)
  }
}

export async function approve_arg(
  provider: Provider,
  owner: string,
  asset: Asset,
  use_all = false,
  infinite?: boolean
): Promise<TransactionArg | undefined> {
  if (asset.asset_type.asset_class == "FT" && asset.asset_type.token_id==undefined) {
    return approve_fa1_2_arg(provider, owner, asset.asset_type.contract, asset.value, infinite)
  } else if (asset.asset_type.asset_class == "FT" && asset.asset_type.token_id!=undefined) {
    return approve_fa2_arg(provider, owner, asset.asset_type.contract, asset.asset_type.token_id)
  } else if (asset.asset_type.asset_class == "NFT") {
    return approve_fa2_arg(provider, owner, asset.asset_type.contract || provider.config.nft_public, asset.asset_type.token_id, use_all)
  } else if (asset.asset_type.asset_class == "MT") {
    return approve_fa2_arg(provider, owner, asset.asset_type.contract || provider.config.mt_public, asset.asset_type.token_id, use_all)
  }else
    throw new Error("Asset class " + asset.asset_type.asset_class + " not handled for approve")
}

export async function approve(
  provider: Provider,
  owner: string,
  asset: Asset,
  use_all = false,
  infinite?: boolean,
): Promise<OperationResult | undefined> {
  const arg = await approve_arg(provider, owner, asset, use_all, infinite)
  if (arg) {
    return send(provider, arg)
  }
}
