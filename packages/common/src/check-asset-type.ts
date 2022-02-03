import { Provider, TokenAssetType } from "./base"
import BigNumber from "bignumber.js"
import fetch from "node-fetch"

export interface UnknownTokenAssetType {
  contract: string;
  token_id: BigNumber
}

export type ExtendedAssetType = TokenAssetType | UnknownTokenAssetType

export async function get_asset_type(
  provider: Provider,
  asset: UnknownTokenAssetType) : Promise<TokenAssetType> {
  const r = await fetch(provider.config.api + '/collections/' + asset.contract)
  if (r.ok) {
    let json = await r.json()
    if (json.type == "NFT") return { ...asset, asset_class:"NFT" }
    else if (json.type == "MT") return { ...asset, asset_class:"MT" }
    else throw new Error("Contract " + asset.contract + " is not a collection")
  }
  else throw new Error("Cannot get asset type of contract " + asset.contract)
}

export async function check_asset_type(
  provider: Provider,
  asset: ExtendedAssetType,
): Promise<TokenAssetType> {
  if ("asset_class" in asset) return asset
  else return get_asset_type(provider, asset)
}
