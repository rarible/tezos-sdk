import { AssetTypeV2 } from "@rarible/tezos-common";
import {testScript} from "../../main/script";
import {awaitDevItem} from "../common/utils";

export async function dev_cancel_bid() {
  console.log("--------------------")
  console.log("Running dev_cancel_bid test")
  console.log("--------------------")
  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

  const mintedItemId = await testScript('mint', {
    edsk: sellerEdsk,
    contract: "KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK",
    amount: 100,
    metadata: `{"": "ipfs://QmQ4x5BR7ecGVjyhZ7o87m2rPgzp8sBzxFbM4gtHiQQ6ay"}`,
    is_dev: true
  })
  console.log('mintedItemId', mintedItemId)

  await awaitDevItem(mintedItemId)
  // const mintedItemId = ""
  const bid = await testScript('put_bid', {
    edsk: buyerEdsk,
    item_id: mintedItemId,
    sale_type: AssetTypeV2.XTZ,
    is_dev: true
  })
  console.log('bid', bid)

  const cancelBid = await testScript('cancel_bid', {
    edsk: buyerEdsk,
    item_id: mintedItemId,
    owner: "tz1U6HmK5feYQ7VzrLdho7u5aRbBssNeMsU9",
    sale_type: AssetTypeV2.XTZ,
    is_dev: true
  })
  console.log('cancelBid', cancelBid)
}
