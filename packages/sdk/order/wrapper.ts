import { Provider, TransactionArg, OperationResult, send } from "@rarible/tezos-common"
import { MichelsonData } from "@taquito/michel-codec"
import BigNumber from "bignumber.js"

export async function wrap_arg(
  provider: Provider,
  amount: BigNumber,
  owner?: string,
) : Promise<TransactionArg> {
  return {
    destination: provider.config.wrapper,
    entrypoint: "wrap",
    parameter: { string: owner || await provider.tezos.address() },
    amount
  }
}

export async function unwrap_arg(
  provider: Provider,
  amount: BigNumber,
  owner?: string,
) : Promise<TransactionArg> {
  let owner_p : MichelsonData = (owner) ? { prim: 'Some', args: [ {string: owner} ] } : { prim: 'None' }
  return {
    destination: provider.config.wrapper,
    entrypoint: "unwrap",
    parameter: [ { int: amount.times(new BigNumber(1000000)).toString() }, owner_p ]
  }
}

export async function wrap(
  provider: Provider,
  amount: BigNumber,
  owner?: string,
) : Promise<OperationResult> {
  return send(provider, await wrap_arg(provider, amount, owner))
}

export async function unwrap(
  provider: Provider,
  amount: BigNumber,
  owner?: string,
) : Promise<OperationResult> {
  return send(provider, await unwrap_arg(provider, amount, owner))
}
