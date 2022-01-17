import { OrderForm } from "./utils"
import { pk_to_pkh } from "../common/base"
import { is_nft } from "./is-nft"
import BigNumber from "bignumber.js"

function calculate_amounts(
  make: BigNumber,
  take: BigNumber,
  amount: BigNumber,
  bid: boolean
): [BigNumber, BigNumber] {
  if (bid) return [amount, new BigNumber(amount).multipliedBy(make).div(take) ]
  else return [new BigNumber(amount).multipliedBy(take).div(make), amount]
}

export function invert_order(
  order: OrderForm,
  amount: BigNumber,
  maker_edpk: string,
  salt: string = '0'
): OrderForm {
  const [makeValue, takeValue] = calculate_amounts(
    order.make.value,
    order.take.value,
    amount,
    is_nft(order.take.asset_type)
  )
  return {
    ...order,
    make: {
      ...order.take,
      value: makeValue,
    },
    take: {
      ...order.make,
      value: takeValue,
    },
    maker: pk_to_pkh(maker_edpk),
    maker_edpk,
    taker: order.maker,
    taker_edpk: order.maker_edpk,
    salt,
    signature: undefined,
  }
}
