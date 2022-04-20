import { Provider, send_batch, OperationResult, AssetBase, AssetType, FTAssetType, XTZAssetType, NFTAssetType, MTAssetType, get_address, asset_type_contract, TransactionArg } from "@rarible/tezos-common"
import { MichelsonType, MichelsonData } from "@taquito/michel-codec"
import BigNumber from "bignumber.js"
import { Part } from "../order/utils"
import { XTZ, FA_1_2, FT_FA_2, FA_2, get_decimals } from "../order/sign-order"
import { get_big_map_value, approve_arg } from "../order/approve"

export interface Auction {
  sell_asset: AssetBase<NFTAssetType | MTAssetType>;
  buy_asset_type: FTAssetType | XTZAssetType;
  seller?: string;
  start?: Date;
  duration: BigNumber;
  minimal_price: BigNumber;
  buyout_price: BigNumber;
  minimal_step: BigNumber;
  payouts: Array<Part>;
  origin_fees: Array<Part>;
}

export interface AuctionBid {
  bid_asset_type: NFTAssetType | MTAssetType;
  bidding_asset_type?: FTAssetType | XTZAssetType;
  payouts: Array<Part>;
  origin_fees: Array<Part>;
  amount: BigNumber;
  bidder?: string;
}

export interface AuctionInfo {
  sell_asset: AssetBase<NFTAssetType | MTAssetType>;
  buy_asset_type: FTAssetType | XTZAssetType;
  last_bid: AuctionBid | undefined;
  seller: string;
  start: Date;
  end: Date;
  minimal_price: BigNumber;
  buyout_price: BigNumber;
  minimal_step: BigNumber;
  payouts: Array<Part>;
  origin_fees: Array<Part>;
  protocol_fee: BigNumber;
}

function option_struct<T>(x?: [T | undefined,(x:T) => MichelsonData] ) : MichelsonData {
  if (x && x[0]) return { prim: 'Some', args: [ x[1](x[0]) ] }
  else return { prim: 'None' }
}

function str_struct(s : string) : MichelsonData { return {string: s} }
function int_struct(i : string) : MichelsonData { return {int: i} }

function asset_type_to_struct(p: Provider, a : AssetType) : MichelsonData {
  switch (a.asset_class) {
    case "XTZ":
      return [ XTZ, [option_struct(), option_struct()] ]
    case "FT":
      if (a.token_id==undefined) {
        return [ FA_1_2, [option_struct([a.contract, str_struct]), option_struct()] ]
      } else {
        return [ FT_FA_2, [option_struct([a.contract, str_struct]), option_struct([a.token_id.toString(), int_struct])] ]
      }
    case "NFT": case "MT" :
      return [ FA_2, [
        option_struct([a.contract || p.config.nft_public, str_struct]),
        option_struct([a.token_id.toString(), int_struct]) ] ]
  }
}

async function asset_factor(provider: Provider, asset_type: XTZAssetType | FTAssetType) : Promise<BigNumber> {
  let decimals: BigNumber
  switch (asset_type.asset_class) {
    case 'XTZ':
      decimals = new BigNumber(6)
      break
    case 'FT':
      decimals = await get_decimals(provider, asset_type.contract, asset_type.token_id)
      break
  }
  return new BigNumber(10).pow(decimals)
}

async function absolute_amount(provider: Provider, amount: BigNumber, asset_type: XTZAssetType | FTAssetType) : Promise<BigNumber> {
  const factor = await asset_factor(provider, asset_type)
  return amount.times(factor).integerValue()
}

async function decimal_amount(provider: Provider, amount: BigNumber, asset_type: XTZAssetType | FTAssetType) : Promise<BigNumber> {
  const factor = await asset_factor(provider, asset_type)
  return amount.div(factor)
}

export async function start_auction(provider: Provider, auction: Auction, use_all = false) : Promise<OperationResult> {
  const sell_asset_type = asset_type_to_struct(provider, auction.sell_asset.asset_type)
  const buy_asset_type = asset_type_to_struct(provider, auction.buy_asset_type)
  const seller = auction.seller || await get_address(provider)
  const arg_approve = await approve_arg(provider, seller, auction.sell_asset, undefined, use_all, provider.config.auction)
  const parameter : MichelsonData = [
    sell_asset_type,
    {int: auction.sell_asset.value.toString()},
    buy_asset_type,
    {string: seller},
    option_struct([ auction.start, (d : Date) => { return {string: d.toISOString()} } ]),
    {int: auction.duration.toString()},
    {int: absolute_amount(provider, auction.minimal_price, auction.buy_asset_type).toString()},
    {int: absolute_amount(provider, auction.buyout_price, auction.buy_asset_type).toString()},
    {int: absolute_amount(provider, auction.minimal_step, auction.buy_asset_type).toString()},
    auction.payouts.map((p) => {
      return [ {string: p.account}, {int: p.value.toString()} ] }),
    auction.origin_fees.map((p) => {
      return [ {string: p.account}, {int: p.value.toString()} ] }),
  ]
  const arg = { destination: provider.config.auction, entrypoint: "start_auction", parameter }
  const args = (arg_approve) ? [ arg_approve, arg ] : [ arg ]
  return send_batch(provider, args)
}

function parse_asset_type(m: any) : AssetType {
  if (m.args[0].prim == 'Left') return { asset_class: 'XTZ' }
  else if (m.args[0].args[0].prim == 'Left') {
    return { asset_class: 'FT', contract: m.args[1].args[0].string, token_id: undefined }
  }
  else if (m.args[0].args[0].args[0].args[0].int == '0') {
    return { asset_class: 'FT', contract: m.args[1].args[0].string, token_id: new BigNumber(m.args[2].args[0].int) }
  }
  else if (m.args[0].args[0].args[0].args[0].int == '1') {
    return { asset_class: 'NFT', contract: m.args[1].args[0].string, token_id: new BigNumber(m.args[2].args[0].int) }
  }
  else throw new Error('Cannot parse asset type')
}

function parse_parts(m: Array<any>) : Array<Part> {
  return m.map((p) => {
    return { account: p.args[0].string, value: new BigNumber(p.args[1].int) }
  })
}

function parse_bid(m: any, bid_asset_type: NFTAssetType | MTAssetType) : AuctionBid | undefined {
  if (m.prim=='None') return undefined
  else {
    return {
      bid_asset_type,
      payouts: parse_parts(m.args[0].args[0]),
      origin_fees: parse_parts(m.args[0].args[1]),
      amount: new BigNumber(m.args[0].args[2].int),
      bidder: m.args[0].args[3].string
    }
  }
}

async function parse_auction(provider: Provider, m: any) : Promise<AuctionInfo> {
  let { args: [ sell_asset_type, amount, buy_asset, last_bid, seller, start, end, minimal_price, buyout_price, minimal_step, protocol_fee, payouts, origin_fees ] } = m
  const asset_type = parse_asset_type(sell_asset_type) as NFTAssetType
  const sell_asset = { asset_type, value: new BigNumber(amount.int) }
  const buy_asset_type = parse_asset_type(buy_asset) as XTZAssetType | FTAssetType
  return {
    sell_asset,
    buy_asset_type,
    last_bid: parse_bid(last_bid, asset_type),
    seller: seller.string,
    start: new Date(start.string),
    end: new Date(end.string),
    minimal_price: await decimal_amount(provider, new BigNumber(minimal_price.int), buy_asset_type),
    buyout_price: await decimal_amount(provider, new BigNumber(buyout_price.int), buy_asset_type),
    minimal_step: await decimal_amount(provider, new BigNumber(minimal_step.int), buy_asset_type),
    protocol_fee: new BigNumber(protocol_fee.int),
    payouts: parse_parts(payouts),
    origin_fees: parse_parts(origin_fees)
  }
}

export async function get_auction(provider: Provider, asset_type: NFTAssetType | MTAssetType) : Promise<AuctionInfo> {
  const st : { auctions : any } = await provider.tezos.storage(provider.config.auction_storage)
  const id = st.auctions.toString()
  const contract = asset_type_contract(provider, asset_type)
  const typ : MichelsonType = { prim: 'pair', args: [{prim: 'address'}, {prim:'nat'}] }
  const value : MichelsonData = { prim: 'Pair', args: [{string: contract}, {int: asset_type.token_id.toString()}] }
  const r = await get_big_map_value(provider, id, value, typ)
  return await parse_auction(provider, r)
}

function calculate_amount(amount: BigNumber, protocol_fee: BigNumber, origin_fees: Array<Part>) : BigNumber {
  amount = amount.plus(amount.times(protocol_fee).div(10000).integerValue())
  for (let f of origin_fees) {
    amount = amount.plus(amount.times(f.value).div(10000).integerValue())
  }
  return amount
}

export async function auction_bid(provider: Provider, bid: AuctionBid) : Promise<OperationResult> {
  const contract = asset_type_contract(provider, bid.bid_asset_type)
  const bidder = bid.bidder || await get_address(provider)
  let arg_approve : TransactionArg | undefined
  let bidding_asset_type : FTAssetType | XTZAssetType | undefined = bid.bidding_asset_type
  if (bidding_asset_type==undefined) {
    const auction = await get_auction(provider, bid.bid_asset_type)
    bidding_asset_type = auction.buy_asset_type }
  let amount = await absolute_amount(provider, bid.amount, bidding_asset_type)
  amount = calculate_amount(amount, provider.config.fees, bid.origin_fees)
  if (bidding_asset_type.asset_class=='FT') {
    arg_approve = await approve_arg(provider, bidder, {asset_type: bidding_asset_type, value: amount }, amount, false, provider.config.auction_storage)
  }
  const parameter : MichelsonData = [
    {string: contract},
    {int: bid.bid_asset_type.token_id.toString()},
    bid.payouts.map((p) => {
      return [ {string: p.account}, {int: p.value.toString()} ] }),
    bid.origin_fees.map((p) => {
      return [ {string: p.account}, {int: p.value.toString()} ] }),
    {int: amount.toString()},
    {string: bidder}
  ]
  const arg = {
    destination: provider.config.auction, entrypoint: "put_bid", parameter,
    amount: (bidding_asset_type.asset_class=='XTZ') ? await decimal_amount(provider, amount, bidding_asset_type) : undefined
  }
  const args = (arg_approve) ? [ arg_approve, arg ] : [ arg ]
  return send_batch(provider, args)
}

export async function cancel_auction(provider: Provider, asset_type: (NFTAssetType | MTAssetType), seller?: string, use_all = false) : Promise<OperationResult> {
  seller = seller || await get_address(provider)
  const asset = { asset_type, value: new BigNumber(0) }
  const arg_approve = await approve_arg(provider, seller, asset, undefined, use_all, provider.config.auction_storage)
  const contract = asset_type_contract(provider, asset_type)
  const parameter : MichelsonData = [
    {string: contract},
    {int: asset_type.token_id.toString() } ]
  const arg = { destination: provider.config.auction, entrypoint: "cancel_auction", parameter }
  const args = (arg_approve) ? [ arg_approve, arg ] : [ arg ]
  return send_batch(provider, args)
}
