import {asset_factor, AssetTypeV2, Config, Provider} from "./base"
import fetch from 'node-fetch'
import BigNumber from "bignumber.js"

export async function get_balance(
    config: Config,
    owner: string,
    asset_type: AssetTypeV2,
    asset_contract?: string,
    asset_token_id?: BigNumber
    ) : Promise<BigNumber> {
  switch (asset_type) {
    case AssetTypeV2.XTZ: return get_xtz_balance(config, owner)
    case AssetTypeV2.FA12:
    case AssetTypeV2.FA2: {
      if (asset_contract == undefined) {
        throw new Error("Contract can't be empty for FA12 and FA2 assets")
      }
      const tokenIdQuery = asset_token_id !== undefined ? `&token.tokenId=${asset_token_id.toString()}` : ""
      const r = await fetch(`${config.tzkt}/v1/tokens/balances?account=${owner}&token.contract=${asset_contract}${tokenIdQuery}`)
      if (r.ok) {
        const json = await r.json()
        if (!json.length) {
          return new BigNumber(0)
        }
        const factor = await asset_factor(config, asset_type, asset_contract, asset_token_id)
        return new BigNumber(json[0].balance || 0).div(factor)
      } else {
        throw new Error(r.statusText)
      }
    }
    default: throw new Error("Unknown asset type")
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
