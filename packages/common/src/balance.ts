import {asset_factor, AssetTypeV2} from "./base"
import BigNumber from "bignumber.js"
import {fetchWrapper, NetworkErrorCode} from "./fetch-wrapper";
import { Config } from "./types";

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
      const r = await fetchWrapper(`${config.tzkt}/v1/tokens/balances?account=${owner}&token.contract=${asset_contract}${tokenIdQuery}`, {
        defaultErrorCode: NetworkErrorCode.TEZOS_EXTERNAL_ERR,
      })
      const json = await r.json()
      if (!json.length) {
        return new BigNumber(0)
      }
      const factor = await asset_factor(config, asset_type, asset_contract, asset_token_id)
      return new BigNumber(json[0].balance || 0).div(factor)
    }
    default: throw new Error("Unknown asset type")
  }
}

export async function get_xtz_balance(config: Config, account: string) : Promise<BigNumber> {
  const r = await fetchWrapper(`${config.node_url}/chains/main/blocks/head/context/contracts/${account}/balance`, {
    defaultErrorCode: NetworkErrorCode.TEZOS_EXTERNAL_ERR,
  })
  const json = await r.json()
  return (new BigNumber(json)).div(1000000)
}
