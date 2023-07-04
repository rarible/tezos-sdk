import { Provider, TokenAssetType } from "./base"
import BigNumber from "bignumber.js"
import { fetchAPI } from "./fetch-wrapper";

export interface UnknownTokenAssetType {
  contract: string;
  token_id: BigNumber
}

export type ExtendedAssetType = TokenAssetType | UnknownTokenAssetType

export async function get_asset_type(
  provider: Provider,
  asset: UnknownTokenAssetType) : Promise<TokenAssetType> {
  const r = await fetchAPI('/collections/TEZOS:' + asset.contract, { config: provider.config })
  let json = await r.json()
  if (json.type == "TEZOS_NFT") return { ...asset, asset_class:"NFT" }
  else if (json.type == "TEZOS_MT") return { ...asset, asset_class:"MT" }
  else throw new Error("Contract " + asset.contract + " is not a collection")
}

export async function check_asset_type(
  provider: Provider,
  asset: ExtendedAssetType,
): Promise<TokenAssetType> {
  if ("asset_class" in asset) return asset
  else return get_asset_type(provider, asset)
}
