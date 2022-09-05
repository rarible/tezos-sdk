import {testScript} from "../../../main/script";
import {awaitItem} from "../../common/utils";
import {AssetTypeV2, BatchMintResult} from "@rarible/tezos-common";

export async function batch_v2_sale() {
  console.log("--------------------")
  console.log("Running batch_v2_sale test")
  console.log("--------------------")

  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

  const mintedItemId = await testScript('batch_mint', {
    edsk: sellerEdsk,
    contract: "KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA",
    amount: 1,
    metadata: `{"": "ipfs://QmQ4x5BR7ecGVjyhZ7o87m2rPgzp8sBzxFbM4gtHiQQ6ay"}`,
    royalties: `{"tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC": 1000}`,
    qty: 5,
    is_dev: true
  }) as BatchMintResult

  let item_ids = ""
  for(let id of mintedItemId.token_ids){
    console.log(`Waiting for item KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA:${id}`)
    await awaitItem(`KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA:${id}`)
    console.log(`KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA:${id} found`)
    if(item_ids == ""){
      item_ids = item_ids + `KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA:${id}`
    } else {
      item_ids = item_ids + `,KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA:${id}`
    }
  }

  const sellOrder = await testScript('batch_sell_v2', {
    edsk: sellerEdsk,
    item_id: item_ids,
    qty: 1,
    amount: 0.000002,
    is_dev: true
  })
  console.log(`sellOrder = ${JSON.stringify(sellOrder)}`)

  const buyOrder = await testScript('batch_buy_v2', {
    edsk: buyerEdsk,
    item_id: item_ids,
    owner: "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC",
    sale_type: AssetTypeV2.XTZ,
    ft_contract: undefined,
    ft_token_id: undefined,
    qty: 1,
    amount: 0.000002,
    is_dev: true
  })
  console.log(`buyOrder = ${JSON.stringify(buyOrder)}`)
}
