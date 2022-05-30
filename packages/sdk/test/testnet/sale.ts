import {testScript} from "../../main/script";
import {awaitItem} from "../common/utils";

export async function sale() {
  console.log("--------------------")
  console.log("Running sale test")
  console.log("--------------------")
  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

  const mintedItemId = await testScript('mint', {
    edsk: sellerEdsk,
    contract: "KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA",
    metadata: `{"": "ipfs://QmQ4x5BR7ecGVjyhZ7o87m2rPgzp8sBzxFbM4gtHiQQ6ay"}`,
    amount: 100
  })
  console.log('mintedItemId', mintedItemId)

  await awaitItem(mintedItemId)
  // const mintedItemId = ""
  const sellOrder = await testScript('sell', {
    edsk: sellerEdsk,
    item_id: mintedItemId
  })
  console.log('sellOrder', sellOrder)

  const fillOp = await testScript('fill', {
    edsk: buyerEdsk,
    order_id: sellOrder.hash
  })
  console.log(fillOp)
}
