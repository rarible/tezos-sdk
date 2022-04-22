import { Provider, Asset, NFTAssetType, MTAssetType, asset_to_json, asset_of_json, AssetTypeV2 } from "@rarible/tezos-common"
import BigNumber from "bignumber.js"
import fetch from "node-fetch"
const getRandomValues = require('get-random-values')
import { MichelsonData, packDataBytes } from "@taquito/michel-codec"

export interface Part {
  account: string;
  value: BigNumber;
}

export interface OrderRaribleV2DataV1 {
  data_type: "V1";
  payouts: Array<Part>;
  origin_fees: Array<Part>;
}

export declare type OrderForm = {
  type: "RARIBLE_V2";
  maker: string;
  maker_edpk: string;
  taker?: string;
  taker_edpk?: string;
  make: Asset;
  take: Asset;
  salt: string;
  start?: number;
  end?: number;
  signature?: string;
  data: OrderRaribleV2DataV1;
}

export declare type OrderFormV2 = {
  s_asset_contract: string;
  s_asset_token_id: BigNumber;
  s_sale_type: AssetTypeV2;
  s_sale_asset_contract?: string;
  s_sale_asset_token_id?: BigNumber;
  s_sale: RaribleSaleDataV2;
}

export declare type RaribleSaleDataV2 = {
  sale_origin_fees: Array<Part>;
  sale_payouts: Array<Part>;
  sale_amount: BigNumber;
  sale_asset_qty: BigNumber;
  sale_start?: number;
  sale_end?: number;
  sale_max_fees_base_boint: number;
  sale_data_type?: string;
  sale_data?: string;
}


export function parts_to_micheline(p : Array<Part>): MichelsonData[]{
  let parts: MichelsonData[] = []
  for (let part of p) {
    parts.concat([
      {
        prim: "Pair",
        args: [{
            string: part.account
        }, {
            int: `${part.value}`
        }]
      }])
    }
  return parts
}

export function optional_date_arg(date? : number): MichelsonData {
  if(date){
    return {
      prim: "Some",
      args: [{
          int: `${date}`
      }]
    }
  } else {
    return {
      prim: "None"
    }
  }
}

function part_to_json(p: Part) {
  return { account: p.account, value: Number(p.value) }
}

function part_of_json(p: any) : Part {
  return { account: p.account, value: new BigNumber(p.value) }
}

function data_to_json(d: OrderRaribleV2DataV1) {
  let payouts = []
  let originFees = []
  for (let p of d.payouts) { payouts.push(part_to_json(p)) }
  for (let o of d.origin_fees) { originFees.push(part_to_json(o)) }
  return {
    dataType: "V1",
    payouts: d.payouts.map(part_to_json),
    originFees: d.origin_fees.map(part_to_json)
  }
}

function data_of_json(d: any) : OrderRaribleV2DataV1 {
  return {
    data_type: "V1",
    payouts: d.payouts.map(part_of_json),
    origin_fees: d.originFees.map(part_of_json)
  }
}

export function order_to_json(order: OrderForm) : any {
  const { make, take, data, maker_edpk, taker_edpk, ...rest } = order
  return {
    make: asset_to_json(order.make),
    take: asset_to_json(order.take),
    data: data_to_json(data),
    makerEdpk: maker_edpk,
    takerEdpk: taker_edpk,
    ...rest }
}

export function order_of_json(order: any ) : OrderForm {
  const { make, take, data, makerEdpk, takerEdpk, ...rest } = order
  return {
    make: asset_of_json(order.make),
    take: asset_of_json(order.take),
    data: data_of_json(data),
    maker_edpk: makerEdpk,
    taker_edpk: takerEdpk,
    ...rest }
}

export function salt() : string {
  let a = new Uint8Array(32)
  a = getRandomValues(a)
  return a.reduce((acc, x) => acc + x.toString(10).padStart(2, '0'), '')
}

export async function fill_offchain_royalties(provider : Provider, order: OrderForm) : Promise<OrderForm> {
  let assett : NFTAssetType | MTAssetType | undefined ;
  if ((order.make.asset_type.asset_class=="NFT" || order.make.asset_type.asset_class=="MT") && order.take.asset_type.asset_class!="NFT" && order.take.asset_type.asset_class!="MT") {
    assett = order.make.asset_type }
  if (!assett) return order
  let contract = (assett.contract) ? assett.contract
    : (assett.asset_class=="NFT") ? provider.config.nft_public
    : provider.config.mt_public
  let id = contract + ':' + assett.token_id.toString()
  const r = await fetch(provider.config.api + '/items/' + id + '/royalties')
  if (r.ok) {
    const json = await r.json()
    if (json.onchain) return order
    let royalties = json.royalties.map(function(x : { account: string, value: number }) {
      return {...x, value: new BigNumber(x.value)}
    })
    let data = { ...order.data, origin_fees: order.data.origin_fees.concat(royalties) }
    return { ...order, data }
  } else throw new Error(`cannot get royalties for ${id}, reason:${r.statusText}`)
}

export function packFA2Asset(assetContract: String, assetId: BigNumber) {
  return packDataBytes({
      prim: "Pair",
      args: [
          {
              string: `${assetContract}`,
          },
          {
              int: `${assetId}`,
          },
      ],
  }, {
      prim: "pair",
      args: [
          {
              prim: "address",
          },
          {
              prim: "nat",
          },
      ],
  });
};

export function packFA12Asset(assetContract: string){
  return packDataBytes({
      string: `${assetContract}`,
  }, {
      prim: "address",
  });
};

export function getAsset(sale_type: AssetTypeV2, assetContract?: string, assetId?: BigNumber): string {
  let asset = ""
  if(sale_type == AssetTypeV2.FA2){
	asset = packFA2Asset(assetContract!, assetId!).bytes
  } else if(sale_type == AssetTypeV2.FA12){
	asset = packFA12Asset(assetContract!).bytes
  }
  return asset
}