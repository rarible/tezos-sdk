import { Provider, send_batch, TransactionArg, OperationResult } from "../common/base"
import { OrderForm } from "./utils"
import { order_to_struct } from "./sign-order"
import { unwrap_arg } from "./wrapper"
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
  if (order.make.asset_type.asset_class == "FT" && order.make.asset_type.contract == provider.config.wrapper && order.make.asset_type.token_id != undefined && order.make.asset_type.token_id.isZero()) {
    arg = arg.concat(await unwrap_arg(provider, order.make.value))
  }
  return send_batch(provider, arg)
}
