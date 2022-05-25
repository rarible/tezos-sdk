import {testScript} from "../../main/script";
import {awaitDevItem} from "../common/utils";
import {AssetTypeV2} from "@rarible/tezos-common";

export async function dev_bundle_auction() {
  console.log("--------------------")
  console.log("Running dev_bundle_auction test")
  console.log("--------------------")
  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

  //const mintedItemId = "KT1EreNsT2gXRvuTUrpx6Ju4WMug5xcEpr43:253"

  const mintedItemId_0 = await testScript('mint', {
    edsk: sellerEdsk,
    contract: "KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK",
    amount: 100,
    is_dev: true
  })
  console.log('mintedItemId_0', mintedItemId_0)

  await awaitDevItem(mintedItemId_0)

  const mintedItemId_1 = await testScript('mint', {
    edsk: sellerEdsk,
    contract: "KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK",
    amount: 100,
    is_dev: true
  })
  console.log('mintedItemId_1', mintedItemId_1)

  await awaitDevItem(mintedItemId_1)

  const auctionOrder = await testScript('bundle_auction', {
    edsk: sellerEdsk,
    item_id: `${mintedItemId_0},${mintedItemId_1}`,
    sale_type: AssetTypeV2.XTZ,
    is_dev: true
  })
  console.log('auctionOrder', auctionOrder)

  const cancelAuctionOrder = await testScript('cancel_bundle_auction', {
    edsk: sellerEdsk,
    item_id: `${mintedItemId_0},${mintedItemId_1}`,
    is_dev: true
  })
  console.log('cancelAuctionOrder', cancelAuctionOrder)

  const auctionOrder2 = await testScript('bundle_auction', {
    edsk: sellerEdsk,
    item_id: `${mintedItemId_0},${mintedItemId_1}`,
    is_dev: true
  })
  console.log('auctionOrder2', auctionOrder2)

  const bid = await testScript('put_bundle_auction_bid', {
    edsk: buyerEdsk,
    item_id: `${mintedItemId_0},${mintedItemId_1}`,
    owner: "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC",
    is_dev: true
  })
  console.log('bid', bid)

  console.log("Waiting for auction to finish...")
  await delay(30000);

  const finishAuctionOrder = await testScript('finish_bundle_auction', {
    edsk: sellerEdsk,
    item_id: `${mintedItemId_0},${mintedItemId_1}`,
    owner: "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC",
    is_dev: true
  })
  console.log('finishAuctionOrder', finishAuctionOrder)
}

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}