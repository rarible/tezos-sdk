import {testScript} from "../../main/script";
import * as assert from "assert";
import {AssetTypeV2} from "@rarible/tezos-common";

export async function dev_get_balance() {
  console.log("--------------------")
  console.log("Running dev_get_balance test")
  console.log("--------------------")
  const balanceFA2 = await testScript('get_balance', {
    ft_contract: "KT1HvTfYG7DgeujAQ1LDvCHiQc29VMycoJh5",
    ft_token_id: "0",
    owner: "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC",
    sale_type: AssetTypeV2.FA2,
    is_dev: true
  })
  console.log(balanceFA2)
  assert(balanceFA2 != 0)
  const balanceFA12 = await testScript('get_balance', {
    ft_contract: "KT1X9S5Z69r36kToUx2xSi32gmhRjEW64dMS",
    owner: "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC",
    sale_type: AssetTypeV2.FA12,
    is_dev: true
  })
  console.log(balanceFA12)
  assert(balanceFA12 != 0)
}
