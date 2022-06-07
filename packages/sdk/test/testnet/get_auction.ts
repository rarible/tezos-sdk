import {testScript} from "../../main/script";

export async function get_auction() {
  console.log("--------------------")
  console.log("Running get_auction test")
  console.log("--------------------")
  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

  const mintedItemId = "KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA:247"
  const auction = await testScript('get_auction', {
    edsk: sellerEdsk,
    item_id: mintedItemId
  })
  console.log('auction', auction)
}
