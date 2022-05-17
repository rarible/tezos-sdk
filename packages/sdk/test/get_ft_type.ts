import {testScript} from "../main/script";
import * as assert from "assert";
import {AssetTypeV2} from "@rarible/tezos-common";

async function get_ft_type() {
  const typeFA2 = await testScript('get_ft_type', {
    ft_contract: "KT1PEBh9oKkQosYuw4tvzigps5p7uqXMgdez",
  })
  assert(typeFA2 == AssetTypeV2.FA2)
  const typeFA12 = await testScript('get_ft_type', {
    ft_contract: "KT1WsXMAzcre2MNUjNkGtVQLpsTnNFhBJhLv",
  })
  assert(typeFA12 == AssetTypeV2.FA12)
}
get_ft_type()
