import { AssetTypeV2 } from "@rarible/tezos-common";
import {testScript} from "../../../main/script";
import {awaitItem} from "../../common/utils";

export async function floor_bid_fa12() {
  console.log("--------------------")
  console.log("Running floor_bid_fa12 test")
  console.log("--------------------")
  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

  const mintedItemId = await testScript('mint', {
    edsk: sellerEdsk,
    contract: "KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA",
    metadata: `{"": "ipfs://QmQ4x5BR7ecGVjyhZ7o87m2rPgzp8sBzxFbM4gtHiQQ6ay"}`,
    royalties: `{"tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC": 1000}`,
    amount: 100
  })
  console.log('mintedItemId', mintedItemId)

  await awaitItem(mintedItemId as string)
  // const mintedItemId = ""
  const bid = await testScript('put_floor_bid', {
    edsk: buyerEdsk,
    item_id: mintedItemId,
    sale_type: AssetTypeV2.FA12,
    ft_contract: "KT1WsXMAzcre2MNUjNkGtVQLpsTnNFhBJhLv"
  })
  console.log('bid', bid)

  const acceptBid = await testScript('accept_floor_bid', {
    edsk: sellerEdsk,
    item_id: mintedItemId,
    owner: "tz1U6HmK5feYQ7VzrLdho7u5aRbBssNeMsU9",
    sale_type: AssetTypeV2.FA12,
    ft_contract: "KT1WsXMAzcre2MNUjNkGtVQLpsTnNFhBJhLv"
  })
  console.log('acceptBid', acceptBid)
}
