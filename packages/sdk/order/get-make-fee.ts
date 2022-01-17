import { OrderForm } from "./utils"
import BigNumber from "bignumber.js"

export function get_make_fee(fees: BigNumber, order: OrderForm) {
  const origin_fees = order.data.origin_fees
    .map(f => f.value)
    .reduce((v, acc) => acc.plus(v), new BigNumber(0))
  return origin_fees.plus(fees)
}
