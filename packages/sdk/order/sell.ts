import {
  Provider,
  XTZAssetType,
  FTAssetType, Part
} from "@rarible/tezos-common"
import { ExtendedAssetType, check_asset_type } from "@rarible/tezos-common"
import { OrderForm, salt, fill_offchain_royalties } from "./utils"
import { upsert_order } from "./upsert-order"
import BigNumber from "bignumber.js"

export interface SellRequest {
  maker: string,
  maker_edpk: string,
  make_asset_type: ExtendedAssetType
  amount: BigNumber
  take_asset_type: XTZAssetType | FTAssetType
  price: BigNumber
  payouts: Array<Part>
  origin_fees: Array<Part>,
  start?: number;
  end?: number;
}

export async function sell(
  provider: Provider,
  request: SellRequest
) {
  let order: OrderForm = {
    maker: request.maker,
    maker_edpk: request.maker_edpk,
    make: {
      asset_type: await check_asset_type(provider, request.make_asset_type),
      value: request.amount,
    },
    take: {
      asset_type: request.take_asset_type,
      value: new BigNumber(request.price).multipliedBy(request.amount),
    },
    type: "RARIBLE_V2",
    data: {
      data_type: "V1",
      payouts: request.payouts,
      origin_fees: request.origin_fees,
    },
    salt: salt(),
    start: request.start,
    end: request.end
  }
  order = await fill_offchain_royalties(provider, order)
  return upsert_order(provider, order, false)
}