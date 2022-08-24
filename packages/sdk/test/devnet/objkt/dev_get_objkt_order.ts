import {testScript} from "../../../main/script";
import * as assert from "assert";

export async function dev_get_objkt_order_v2() {
  console.log("--------------------")
  console.log("Running dev_get_objkt_order_v2 test")
  console.log("--------------------")
  const order: any = await testScript('get_objkt_order_v2', {
    item_id: "KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK:2042",
    is_dev: true
  })
  console.log(JSON.stringify(order))
  assert(order[0].id == "dad0b2e6-6b68-5542-ba3d-5a9a86bbe190")
}
