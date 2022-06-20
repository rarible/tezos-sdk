import {testScript} from "../../../main/script";
import * as assert from "assert";
import {AssetTypeV2} from "@rarible/tezos-common";

export async function get_balance() {
  console.log("--------------------")
  console.log("Running get_balance test")
  console.log("--------------------")
  const balanceFA2 = await testScript('get_balance', {
    ft_contract: "KT1PEBh9oKkQosYuw4tvzigps5p7uqXMgdez",
    ft_token_id: "0",
    owner: "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC",
    sale_type: AssetTypeV2.FA2
  })
  console.log(balanceFA2)
  assert(balanceFA2 != 0)
  const balanceFA12 = await testScript('get_balance', {
    ft_contract: "KT1WsXMAzcre2MNUjNkGtVQLpsTnNFhBJhLv",
    owner: "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC",
    sale_type: AssetTypeV2.FA12
  })
  console.log(balanceFA12)
  assert(balanceFA12 != 0)
}
