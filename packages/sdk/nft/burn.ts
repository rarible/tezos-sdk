import { MichelsonData } from "@taquito/michel-codec"
import { Provider, TransactionArg, send, OperationResult } from "../common/base"
import { check_asset_type, ExtendedAssetType } from "../common/check-asset-type"
import BigNumber from "bignumber.js"

function burn_param(
  token_id: BigNumber,
  amount?: BigNumber) : MichelsonData {
  if (amount==undefined) return { int: token_id.toString() }
  else return [ { int: token_id.toString() }, { int : amount.toString() } ]
}

export async function burn_arg(
  provider: Provider,
  asset_type: ExtendedAssetType,
  amount?: BigNumber) : Promise<TransactionArg> {
  const checked_asset = await check_asset_type(provider, asset_type)
  switch (checked_asset.asset_class) {
    case "NFT":
      const p_nft = burn_param(checked_asset.token_id, amount)
      const dst_nft = checked_asset.contract || provider.config.nft_public
      return { destination: dst_nft, entrypoint: "burn", parameter: p_nft }
    case "MT":
      const p_mt = burn_param(checked_asset.token_id, amount)
      const dst_mt = checked_asset.contract || provider.config.mt_public
      return { destination: dst_mt, entrypoint: "burn", parameter: p_mt }
    default: throw new Error("Cannot burn non NFT/MT tokens")
  }
}

export async function burn(
  provider: Provider,
  asset_type: ExtendedAssetType,
  amount?: BigNumber) : Promise<OperationResult> {
  const arg = await burn_arg(provider, asset_type, amount)
  return send(provider, arg)
}
