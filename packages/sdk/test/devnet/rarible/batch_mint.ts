import {testScript} from "../../../main/script";
import {awaitDevItem} from "../../common/utils";
import {BatchMintResult} from "@rarible/tezos-common";

export async function batch_mint() {
  console.log("--------------------")
  console.log("Running batch_mint test")
  console.log("--------------------")

  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"

  const mintedItemId = await testScript('batch_mint', {
    edsk: sellerEdsk,
    contract: "KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA",
    amount: 1,
    metadata: `{"": "ipfs://QmQ4x5BR7ecGVjyhZ7o87m2rPgzp8sBzxFbM4gtHiQQ6ay"}`,
    royalties: `{"tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC": 1000}`,
    qty: 5,
    is_dev: true
  }) as BatchMintResult

  for(let id of mintedItemId.token_ids){
    console.log(`Waiting for item KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA:${id}`)
    await awaitDevItem(`KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA:${id}`)
    console.log(`KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA:${id} found`)
  }
}
