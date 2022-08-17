import {testScript} from "../../../../main/script";
import * as assert from "assert";

export async function get_objkt_order_v2() {
  console.log("--------------------")
  console.log("Running get_objkt_order_v2 test")
  console.log("--------------------")
  const order: any = await testScript('get_objkt_order_v2', {
    item_id: "KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA:2042"
  })
  console.log(JSON.stringify(order))
  assert(order[0].id == "dad0b2e6-6b68-5542-ba3d-5a9a86bbe190")
}
