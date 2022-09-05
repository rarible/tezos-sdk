import { Provider, send_batch, TransactionArg, OperationResult } from "@rarible/tezos-common"
import { OrderForm } from "./utils"
import { order_to_struct } from "./sign-order"
import BigNumber from "bignumber.js"

export async function cancel_arg(
  provider: Provider,
  order: OrderForm
): Promise<TransactionArg> {
  const parameter = await order_to_struct(provider, order)
  return {
    destination: provider.config.exchange,
    entrypoint: "cancel", parameter, amount: new BigNumber(0)
  }
}

export async function cancel(
  provider: Provider,
  order: OrderForm
): Promise<OperationResult> {
  let arg = [ await cancel_arg(provider, order) ]
  return send_batch(provider, arg)
}
