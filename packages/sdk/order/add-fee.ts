import {Asset, get_decimals, Provider} from "@rarible/tezos-common"
import BigNumber from "bignumber.js"

export async function add_fee(provider: Provider, asset: Asset, fee: BigNumber, remove=false) : Promise<Asset> {
  const v = (!remove)
    ? new BigNumber(asset.value)
      .times(new BigNumber(10000).plus(fee))
      .div(10000)
    : new BigNumber(asset.value)
      .times(new BigNumber(10000).minus(fee))
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
      decimals = await get_decimals(provider.config, asset.asset_type.contract, asset.asset_type.token_id)
      break
  }
  const decimal_factor = new BigNumber(10).pow(decimals)
  const value = v.times(decimal_factor).integerValue().div(decimal_factor)
  return { ...asset, value }
}
