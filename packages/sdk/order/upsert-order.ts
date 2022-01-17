import { Provider, TransactionArg, send_batch } from "../common/base"
import { OrderForm, order_to_json } from "./utils"
import { get_make_fee } from "./get-make-fee"
import { add_fee } from "./add-fee"
import { approve_arg } from "./approve"
import { sign_order } from "./sign-order"
import { wrap_arg } from "./wrapper"
import fetch from "node-fetch"
import BigNumber from "bignumber.js"

export async function upsert_order(
  provider: Provider,
  order: OrderForm,
  use_all = false,
  infinite = false) {
  const make_fee = get_make_fee(provider.config.fees, order)
  let make = await add_fee(provider, order.make, make_fee)
  let args : TransactionArg[] = []
  // if (make.asset_type.asset_class == "XTZ" ) {
  //   args = args.concat(await wrap_arg(provider, make.value, order.maker))
  //   make = { asset_type: { asset_class: "FT", contract: provider.config.wrapper, token_id: new BigNumber(0) }, value: make.value }
  // }
  const approve_a = await approve_arg(provider, order.maker, make, use_all, infinite)
  if (approve_a) args = args.concat(approve_a)
  if (args.length!=0) await send_batch(provider, args)
  const order2 = { ...order, make: { asset_type: make.asset_type, value: order.make.value } }
  const signature = await sign_order(provider, order2)
  const r = await fetch(provider.config.api + '/orders', {
    method: 'POST', headers: [[ 'content-type', 'application/json' ]],
    body: JSON.stringify(order_to_json({...order2, signature}))
  })
  if (r.ok) { return r.json() }
  else throw new Error("/orders failed")
}
