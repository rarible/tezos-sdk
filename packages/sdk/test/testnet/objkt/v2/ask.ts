import {testScript} from "../../../../main/script";

export async function objkt_ask_v2() {
  console.log("--------------------")
  console.log("Running objkt_ask_v2 test")
  console.log("--------------------")

  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

  const sellOrder = await testScript('ask_v2_objkt', {
    edsk: sellerEdsk,
    item_id: "KT1TcrYJatTbrg9GoYDbsCu3phPGzMcTSaJn:0",
    qty: 1,
    amount: 0.0002,
  })
  console.log('sellOrder', sellOrder)

  const buyOrder = await testScript('fulfill_ask_v2_objkt', {
    edsk: buyerEdsk,
    item_id: sellOrder,
  })
  console.log('buyOrder', buyOrder)

}
