import {testScript} from "../main/script";
import {awaitItem} from "./common/utils";

async function auction() {
  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

  const mintedItemId = await testScript('mint', {
    edsk: sellerEdsk,
    contract: "KT1EreNsT2gXRvuTUrpx6Ju4WMug5xcEpr43"
  })
  console.log('mintedItemId', mintedItemId)

  await awaitItem(mintedItemId)
  //const mintedItemId = "KT1EreNsT2gXRvuTUrpx6Ju4WMug5xcEpr43:248"
  const auctionOrder = await testScript('auction', {
    edsk: sellerEdsk,
    item_id: mintedItemId
  })
  console.log('auctionOrder', auctionOrder)

  const bid = await testScript('put_bid', {
    edsk: buyerEdsk,
    item_id: mintedItemId,
    owner: "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC"
  })
  console.log('bid', bid)
}
auction()
