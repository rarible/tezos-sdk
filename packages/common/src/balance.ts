import { Provider, Config, XTZAssetType, FTAssetType } from "./base"
import fetch from 'node-fetch'
import BigNumber from "bignumber.js"

export async function get_balance(
  config: Config,
  owner: string,
  asset_type: XTZAssetType | FTAssetType) : Promise<string> {
  switch (asset_type.asset_class) {
    case "XTZ":
      const b_tz = await get_xtz_balance(config, owner)
      return b_tz.toString()
    case "FT":
      const tokenIdQuery = asset_type.token_id !== undefined ? `?tokenId=${asset_type.token_id.toString()}` : ""
      const r = await fetch(`${config.api}/balances/${asset_type.contract}/${owner}${tokenIdQuery}`)
      if (r.ok) {
        const json = await r.json()
        return json.balance
      } else {
        throw new Error(r.statusText)
      }
  }
}

export async function get_xtz_balance(config: Config, account: string) : Promise<BigNumber> {
  const r = await fetch(`${config.node_url}/chains/main/blocks/head/context/contracts/${account}/balance`)
  if (r.ok) {
    const json = await r.json()
    return (new BigNumber(json)).div(1000000)
  } else {
    throw new Error(r.statusText)
  }
}
