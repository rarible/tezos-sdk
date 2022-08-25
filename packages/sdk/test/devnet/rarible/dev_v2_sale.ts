import {AssetTypeV2, delay, retry} from "@rarible/tezos-common";
import {testScript} from "../../../main/script";
import {awaitDevItem, getDevItemById} from "../../common/utils";
import {in_memory_provider} from "../../../providers/in_memory/in_memory_provider";

export async function dev_v2_sale() {
  console.log("--------------------")
  console.log("Running dev_v2_sale test")
  console.log("--------------------")

  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"
  const buyerProvider = in_memory_provider(buyerEdsk, "http://tezos-node.dev.rarible.int")

  const mintedItemId = await testScript('mint', {
    edsk: sellerEdsk,
    contract: "KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK",
    amount: 100,
    metadata: `{"": "ipfs://QmQ4x5BR7ecGVjyhZ7o87m2rPgzp8sBzxFbM4gtHiQQ6ay"}`,
    royalties: `{"tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC": 1000}`,
    is_dev: true
  })
  console.log('mintedItemId', mintedItemId)

  const item = await awaitDevItem(mintedItemId)
  console.log('item', item)
  // const mintedItemId = ""
  const sellOrder = await testScript('sell_v2', {
    edsk: sellerEdsk,
    item_id: mintedItemId,
    qty: 1,
    amount: 0.000002,
    is_dev: true
  })
  console.log('sellOrder', sellOrder)

  const buyOrder = await testScript('buy_v2', {
    edsk: buyerEdsk,
    item_id: mintedItemId,
    owner: "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC",
    sale_type: AssetTypeV2.XTZ,
    ft_contract: undefined,
    ft_token_id: undefined,
    qty: 1,
    amount: 0.000002,
    is_dev: true
  })
  console.log('buyOrder', buyOrder)

  const buyerAddress = await buyerProvider.address()
  await retry(10, 2000, async () => {
    const item = await getDevItemById(mintedItemId)
    if (!item.owners.includes(buyerAddress)) {
      throw new Error('Buyer should be owner')
    }
  })
  console.log('itemAfterPurchase', item)

}
