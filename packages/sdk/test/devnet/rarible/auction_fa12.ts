import {testScript} from "../../../main/script";
import {awaitDevItem} from "../../common/utils";
import {AssetTypeV2} from "@rarible/tezos-common";

export async function auction_fa12() {
  console.log("--------------------")
  console.log("Running auction_fa12 test")
  console.log("--------------------")
  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

  //const mintedItemId = "KT1EreNsT2gXRvuTUrpx6Ju4WMug5xcEpr43:253"

  const mintedItemId = await testScript('mint', {
    edsk: sellerEdsk,
    contract: "KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA",
    metadata: `{"": "ipfs://QmQ4x5BR7ecGVjyhZ7o87m2rPgzp8sBzxFbM4gtHiQQ6ay"}`,
    royalties: `{"tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC": 1000}`,
    amount: 100,
    is_dev: true
  })
  console.log('mintedItemId', mintedItemId)

  await awaitDevItem(mintedItemId as string)

  const auctionOrder = await testScript('auction', {
    edsk: sellerEdsk,
    item_id: mintedItemId,
    sale_type: AssetTypeV2.FA12,
    ft_contract: "KT1WsXMAzcre2MNUjNkGtVQLpsTnNFhBJhLv",
    is_dev: true
  })
  console.log('auctionOrder', auctionOrder)

  const cancelAuctionOrder = await testScript('cancel_auction', {
    edsk: sellerEdsk,
    item_id: mintedItemId,
    is_dev: true
  })
  console.log('cancelAuctionOrder', cancelAuctionOrder)

  const auctionOrder2 = await testScript('auction', {
    edsk: sellerEdsk,
    item_id: mintedItemId,
    sale_type: AssetTypeV2.FA12,
    ft_contract: "KT1WsXMAzcre2MNUjNkGtVQLpsTnNFhBJhLv",
    is_dev: true
  })
  console.log('auctionOrder2', auctionOrder2)

  const bid = await testScript('put_auction_bid', {
    edsk: buyerEdsk,
    item_id: mintedItemId,
    owner: "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC",
    is_dev: true
  })
  console.log('bid', bid)

  console.log("Waiting for auction to finish...")
  await delay(30000);

  const finishAuctionOrder = await testScript('finish_auction', {
    edsk: sellerEdsk,
    item_id: mintedItemId,
    owner: "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC",
    is_dev: true
  })
  console.log('finishAuctionOrder', finishAuctionOrder)
}

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}