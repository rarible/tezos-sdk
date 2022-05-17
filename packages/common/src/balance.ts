import {asset_factor, AssetTypeV2, Config, Provider} from "./base"
import fetch from 'node-fetch'
import BigNumber from "bignumber.js"

export async function get_balance(
    provider: Provider,
    owner: string,
    asset_type: AssetTypeV2,
    asset_contract?: string,
    asset_token_id?: BigNumber
    ) : Promise<string> {
  let balance = "0"
  if(asset_type == AssetTypeV2.XTZ){
    const b_tz = await get_xtz_balance(provider.config, owner)
    balance = b_tz.toString()
  } else if (asset_type == AssetTypeV2.FA2 || asset_type ==  AssetTypeV2.FA12){
    if(asset_contract == undefined){
      throw new Error("Contract can't be empty for FA12 and FA2 assets")
    }
    const tokenIdQuery = asset_token_id !== undefined ? `&token.tokenId=${asset_token_id.toString()}` : ""
    const r = await fetch(`${provider.config.tzkt}/v1/tokens/balances?account=${owner}&token.contract=${asset_contract}${tokenIdQuery}`)
    if (r.ok) {
      const json = await r.json()
      const factor = await asset_factor(provider, asset_type, asset_contract, asset_token_id)
      balance = new BigNumber(json[0].balance).div(factor).toString()
    } else {
      throw new Error(r.statusText)
    }
  } else {
    throw new Error("Unknown asset type")
  }
  return balance
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
