import {testScript} from "../../main/script";
import {awaitDevItem} from "../common/utils";

export async function dev_batch_v2_sale() {
  console.log("--------------------")
  console.log("Running dev_batch_v2_sale test")
  console.log("--------------------")

  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"

  const mintedItemId = await testScript('batch_mint', {
    edsk: sellerEdsk,
    contract: "KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK",
    amount: 1,
    metadata: `{"": "ipfs://QmQ4x5BR7ecGVjyhZ7o87m2rPgzp8sBzxFbM4gtHiQQ6ay"}`,
    royalties: `{"tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC": 1000}`,
    qty: 5,
    is_dev: true
  })

  let item_ids = ""
  for(let id of mintedItemId.token_ids){
    console.log(`Waiting for item KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK:${id}`)
    await awaitDevItem(`KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK:${id}`)
    console.log(`KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK:${id} found`)
    if(item_ids == ""){
      item_ids = item_ids + `KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK:${id}`
    } else {
      item_ids = item_ids + `,KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK:${id}`
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
}
