import {testScript} from "../../../main/script";

export async function versum_bid() {
  console.log("--------------------")
  console.log("Running versum_bid test")
  console.log("--------------------")

  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

  const sellOrder = await testScript('versum_bid', {
    edsk: sellerEdsk,
    item_id: "KT1UH5RSbomuV1o6UuDB9yeACbqRMup3utGu:0",
    qty: 1,
    amount: 100,
    is_dev: true
  })
  console.log('sellOrder', sellOrder)

  const buyOrder = await testScript('versum_accept_bid', {
    edsk: buyerEdsk,
    item_id: sellOrder,
    qty: 1,
    is_dev: true
  })
  console.log('buyOrder', buyOrder)

}
