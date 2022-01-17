import { MichelsonData } from "@taquito/michel-codec"
import { Provider, send, TransactionArg, get_address, OperationResult } from "../common/base"
import { check_asset_type, ExtendedAssetType } from "../common/check-asset-type"
import BigNumber from "bignumber.js"

function transfer_param(
  from: string,
  to: string,
  token_id: BigNumber[],
  token_amount?: BigNumber[] ) : MichelsonData {
  const amount : BigNumber[] = (token_amount) ? token_amount : token_id.map((_) => new BigNumber(1))
  return [
    {
      prim: 'Pair',
      args: [
        { string: from },
        token_id.map(function(id, i) {
          return {
            prim: 'Pair',
            args: [
              { string: to },
              { prim: 'Pair', args:[ { int: id.toString() }, { int: amount[i].toString() } ] }
            ] }
        } )
      ]
    }
  ]
}

export function transfer_nft_arg(
  contract: string,
  from: string,
  to: string,
  token_id: BigNumber) : TransactionArg {
  const parameter = transfer_param(from, to, [ token_id ])
  return { destination: contract, entrypoint: 'transfer', parameter }
}

export async function transfer_nft(
  provider: Provider,
  contract: string,
  from: string,
  to: string,
  token_id: BigNumber) : Promise<OperationResult> {
  const arg = transfer_nft_arg(contract, from, to, token_id)
  return send(provider, arg)
}

export function transfer_mt_arg(
  contract: string,
  from: string,
  to: string,
  token_id: BigNumber | BigNumber[],
  token_amount: BigNumber | BigNumber[]) : TransactionArg {
  const ids = (Array.isArray(token_id)) ? token_id : [ token_id ]
  const amounts = (Array.isArray(token_amount)) ? token_amount : [ token_amount ]
  const parameter = transfer_param(from, to, ids, amounts)
  return { destination: contract , entrypoint: 'transfer', parameter }
}

export async function transfer_mt(
  provider: Provider,
  contract: string,
  from: string,
  to: string,
  token_id: BigNumber | BigNumber[],
  token_amount: BigNumber | BigNumber[],
) : Promise<OperationResult> {
  const arg = transfer_mt_arg(contract, from, to, token_id, token_amount)
  return send(provider, arg)
}

export async function transfer_arg(
  provider: Provider,
  asset_type: ExtendedAssetType,
  to: string,
  amount?: BigNumber) : Promise<TransactionArg> {
  const from = await get_address(provider)
  const checked_asset = await check_asset_type(provider, asset_type)
  switch (checked_asset.asset_class) {
    case "NFT":
      const dst_nft = checked_asset.contract || provider.config.nft_public
      if (amount==undefined || amount==new BigNumber(1)) return transfer_nft_arg(dst_nft, from, to, checked_asset.token_id)
      else throw new Error("Cannot transfer an amount of NFT token")
    case "MT":
      const dst_mt = checked_asset.contract || provider.config.mt_public
      if (amount!=undefined) return transfer_mt_arg(dst_mt, from, to, checked_asset.token_id, amount)
      else throw new Error("Cannot transfer an undefined amount of MT token")
    default:
      throw new Error("Cannot transfer non NFT/MT tokens")
  }
}

export async function transfer(
  provider: Provider,
  asset_type: ExtendedAssetType,
  to: string,
  amount?: BigNumber) : Promise<OperationResult> {
  const arg = await transfer_arg(provider, asset_type, to, amount)
  return send(provider, arg)
}
