import {testScript} from "../../../main/script";
import * as assert from "assert";
import {AssetTypeV2, ObjktV2OrderData, Part} from "@rarible/tezos-common";
import BigNumber from "bignumber.js";

export async function dev_get_objkt_order_v2() {
  console.log("--------------------")
  console.log("Running dev_get_objkt_order_v2 test")
  console.log("--------------------")
  const order: ObjktV2OrderData = await testScript('get_objkt_order_v2', {
    item_id: "1000000",
    is_dev: true
  })
  console.log(JSON.stringify(order))
  assert(JSON.stringify(order) == '{"token":{"address":"KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK","token_id":"2030"},"amount":"2","shares":[{"amount":"100","recipient":"tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC"}],"target":null,"creator":"tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC","currency":{"tez":{}},"editions":"1","expiry_time":null}')
}
