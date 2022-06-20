import {testScript} from "../../../main/script";
import * as assert from "assert";
import {AssetTypeV2, Part} from "@rarible/tezos-common";
import BigNumber from "bignumber.js";

export async function dev_get_royalties() {
  console.log("--------------------")
  console.log("Running dev_get_royalties test")
  console.log("--------------------")
  const royalties: Array<Part> = await testScript('get_royalties', {
    item_id: "KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK:1767",
    is_dev: true
  })
  console.log(JSON.stringify(royalties))
  const expectedPart: Part = {
    account: "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC",
    value: new BigNumber(1000)
  }
  assert(royalties.length == 1)
  assert(royalties[0].account == expectedPart.account)
  assert(royalties[0].value == expectedPart.value)

}
