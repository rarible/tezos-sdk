import { Asset, Provider } from "../common/base"
import { get_decimals } from "./sign-order"
import BigNumber from "bignumber.js"

export async function add_fee(provider: Provider, asset: Asset, fee: BigNumber) : Promise<Asset> {
  const v = new BigNumber(asset.value)
    .times(new BigNumber(10000).plus(fee))
    .div(10000)
  let decimals: BigNumber
  switch (asset.asset_type.asset_class) {
    case 'XTZ':
      decimals = new BigNumber(6)
      break
    case 'NFT': case 'MT':
      decimals = new BigNumber(0)
      break
    case 'FT':
      decimals = await get_decimals(provider, asset.asset_type.contract, asset.asset_type.token_id)
      break
  }
  const factor = new BigNumber(10).pow(decimals)
  const value = v.times(factor).integerValue().div(factor)
  return { ...asset, value }
}
