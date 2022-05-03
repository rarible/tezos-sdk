import {testScript} from "../main/script";
import {awaitItem} from "./common/utils";

async function auction() {
  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

  //const mintedItemId = "KT1EreNsT2gXRvuTUrpx6Ju4WMug5xcEpr43:253"

  const mintedItemId = await testScript('mint', {
    edsk: sellerEdsk,
    contract: "KT1EreNsT2gXRvuTUrpx6Ju4WMug5xcEpr43"
  })
  console.log('mintedItemId', mintedItemId)

  await awaitItem(mintedItemId)
  const auctionOrder = await testScript('auction', {
    edsk: sellerEdsk,
    item_id: mintedItemId
  })
  console.log('auctionOrder', auctionOrder)

  const cancelAuctionOrder = await testScript('cancel_auction', {
    edsk: sellerEdsk,
    item_id: mintedItemId
  })
  console.log('cancelAuctionOrder', cancelAuctionOrder)

  const auctionOrder2 = await testScript('auction', {
    edsk: sellerEdsk,
    item_id: mintedItemId
  })
  console.log('auctionOrder2', auctionOrder2)

  const bid = await testScript('put_auction_bid', {
    edsk: buyerEdsk,
    item_id: mintedItemId,
    owner: "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC"
  })
  console.log('bid', bid)

  console.log("Waiting for auction to finish...")
  await delay(30000);

  const finishAuctionOrder = await testScript('finish_auction', {
    edsk: sellerEdsk,
    item_id: mintedItemId,
    owner: "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC"
  })
  console.log('finishAuctionOrder', finishAuctionOrder)
}
auction()

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}