import { Provider, XTZAssetType, FTAssetType } from "../common/base"
import { ExtendedAssetType, check_asset_type } from "../common/check-asset-type"
import { Part, OrderForm, salt } from "./utils"
import { upsert_order } from "./upsert-order"
import BigNumber from "bignumber.js"

export type BidRequest = {
  maker: string
  maker_edpk: string
  make_asset_type: XTZAssetType | FTAssetType
  amount: BigNumber
  take_asset_type: ExtendedAssetType
  price: BigNumber
  payouts: Array<Part>
  origin_fees: Array<Part>
}

export async function bid(
  provider: Provider,
  request: BidRequest
) {
  const order: OrderForm = {
    maker: request.maker,
    maker_edpk: request.maker_edpk,
    make: {
      asset_type: request.make_asset_type,
      value: new BigNumber(request.price).multipliedBy(request.amount),
    },
    take: {
      asset_type: await check_asset_type(provider, request.take_asset_type),
      value: request.amount,
    },
    type: "RARIBLE_V2",
    data: {
      data_type: "V1",
      payouts: request.payouts,
      origin_fees: request.origin_fees,
    },
    salt: salt()
  }
  return upsert_order(provider, order, false)
}
