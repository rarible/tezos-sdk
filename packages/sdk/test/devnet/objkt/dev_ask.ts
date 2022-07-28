import {testScript} from "../../../main/script";
import {awaitDevItem} from "../../common/utils";

export async function dev_objkt_ask() {
  console.log("--------------------")
  console.log("Running dev_objkt_ask test")
  console.log("--------------------")

  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

  const mintedItemId = await testScript('mint', {
    edsk: sellerEdsk,
    contract: "KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK",
    amount: 100,
    metadata: `{"": "ipfs://QmQ4x5BR7ecGVjyhZ7o87m2rPgzp8sBzxFbM4gtHiQQ6ay"}`,
    royalties: `{"tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC": 1000}`,
    is_dev: true
  })
  console.log('mintedItemId', mintedItemId)

  const item = await awaitDevItem(mintedItemId)
  console.log('item', item)
  // const mintedItemId = ""
  const sellOrder = await testScript('ask_v2_objkt', {
    edsk: sellerEdsk,
    item_id: mintedItemId,
    qty: 1,
    amount: 0.000002,
    is_dev: true
  })
  console.log('sellOrder', sellOrder)

  const buyOrder = await testScript('fulfill_ask_v2_objkt', {
    edsk: sellerEdsk,
    item_id: sellOrder,
    qty: 1,
    is_dev: true
  })
  console.log('buyOrder', buyOrder)

}
