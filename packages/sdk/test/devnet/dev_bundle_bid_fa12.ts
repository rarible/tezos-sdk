import { AssetTypeV2 } from "@rarible/tezos-common";
import {testScript} from "../../main/script";
import {awaitDevItem} from "../common/utils";

export async function dev_bundle_bid_fa12() {
  console.log("--------------------")
  console.log("Running bundle_bid_fa12 test")
  console.log("--------------------")
  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

  const mintedItemId_0 = await testScript('mint', {
    edsk: sellerEdsk,
    contract: "KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK",
    amount: 100,
    metadata: `{"": "ipfs://QmQ4x5BR7ecGVjyhZ7o87m2rPgzp8sBzxFbM4gtHiQQ6ay"}`,
    is_dev: true
  })
  console.log('mintedItemId_0', mintedItemId_0)

  await awaitDevItem(mintedItemId_0)

  const mintedItemId_1 = await testScript('mint', {
    edsk: sellerEdsk,
    contract: "KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK",
    amount: 100,
    metadata: `{"": "ipfs://QmQ4x5BR7ecGVjyhZ7o87m2rPgzp8sBzxFbM4gtHiQQ6ay"}`,
    is_dev: true
  })
  console.log('mintedItemId_1', mintedItemId_1)

  await awaitDevItem(mintedItemId_1)

  // const mintedItemId = ""
  const bid = await testScript('put_bundle_bid', {
    edsk: buyerEdsk,
    item_id: `${mintedItemId_0},${mintedItemId_1}`,
    sale_type: AssetTypeV2.FA12,
    ft_contract: "KT1X9S5Z69r36kToUx2xSi32gmhRjEW64dMS",
    is_dev: true
  })
  console.log('put_bundle_bid', bid)

  const acceptBid = await testScript('accept_bundle_bid', {
    edsk: sellerEdsk,
    item_id: `${mintedItemId_0},${mintedItemId_1}`,
    owner: "tz1U6HmK5feYQ7VzrLdho7u5aRbBssNeMsU9",
    sale_type: AssetTypeV2.FA12,
    ft_contract: "KT1X9S5Z69r36kToUx2xSi32gmhRjEW64dMS",
    amount: 0.02,
    is_dev: true
  })
  console.log('accept_bundle_bid', acceptBid)
}
