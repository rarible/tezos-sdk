import {testScript} from "../../main/script";
import {awaitDevItem} from "../common/utils";
import {in_memory_provider} from "../../providers/in_memory/in_memory_provider";

export async function dev_burn() {
  console.log("--------------------")
  console.log("Running dev_v2_sale_fa2 test")
  console.log("--------------------")
  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"
  const buyerProvider = in_memory_provider(buyerEdsk, "http://tezos-node.dev.rarible.int")

  const mintedItemId = await testScript('mint', {
    edsk: sellerEdsk,
    contract: "KT1PuABq2ReD789KtKetktvVKJcCMpyDgwUx",
    metadata: `{"": "ipfs://QmQ4x5BR7ecGVjyhZ7o87m2rPgzp8sBzxFbM4gtHiQQ6ay"}`,
    royalties: `{"tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC": 1000}`,
    is_dev: true
  })
  console.log('mintedItemId', mintedItemId)

  const item = await awaitDevItem(mintedItemId)

  console.log('item', item)

  const burnOp = await testScript('burn', {
    edsk: sellerEdsk,
    item_id: item.id,
    is_dev: true
  })
  console.log('burn op', burnOp)

}
