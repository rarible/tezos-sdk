import { AssetType } from "../common/base"

export function is_nft(a: AssetType) : boolean {
  return (a.asset_class === "NFT" || a.asset_class === "MT")
}
