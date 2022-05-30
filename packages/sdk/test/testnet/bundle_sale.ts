import { AssetTypeV2 } from "@rarible/tezos-common";
import {testScript} from "../../main/script";
import {awaitItem} from "../common/utils";

export async function bundle_sale() {
  console.log("--------------------")
  console.log("Running dev_bundle_sale test")
  console.log("--------------------")
  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

  const mintedItemId_0 = await testScript('mint', {
    edsk: sellerEdsk,
    contract: "KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA",
    metadata: `{"": "ipfs://QmQ4x5BR7ecGVjyhZ7o87m2rPgzp8sBzxFbM4gtHiQQ6ay"}`,
    amount: 100,
  })
  console.log('mintedItemId_0', mintedItemId_0)

  await awaitItem(mintedItemId_0)

  const mintedItemId_1 = await testScript('mint', {
    edsk: sellerEdsk,
    contract: "KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA",
    metadata: `{"": "ipfs://QmQ4x5BR7ecGVjyhZ7o87m2rPgzp8sBzxFbM4gtHiQQ6ay"}`,
    amount: 100,
  })
  console.log('mintedItemId_1', mintedItemId_1)

  await awaitItem(mintedItemId_1)

  // const mintedItemId = ""
  const sellOrder = await testScript('sell_bundle', {
    edsk: sellerEdsk,
    item_id: `${mintedItemId_0},${mintedItemId_1}`,
    sale_type: AssetTypeV2.XTZ,
    ft_contract: undefined,
    ft_token_id: undefined,
    qty: 1,
    amount: 0.000002,
  })
  console.log('sellOrder', sellOrder)

  const buyOrder = await testScript('buy_bundle', {
    edsk: buyerEdsk,
    item_id: `${mintedItemId_0},${mintedItemId_1}`,
    owner: "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC",
    sale_type: AssetTypeV2.XTZ,
    ft_contract: undefined,
    ft_token_id: undefined,
    qty: 1,
    amount: 0.000002,
  })
  console.log('buyOrder', buyOrder)
}
