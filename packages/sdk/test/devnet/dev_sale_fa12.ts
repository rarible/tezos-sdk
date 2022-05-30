import {testScript} from "../../main/script";
import {awaitDevItem} from "../common/utils";

export async function dev_sale_fa12() {
  console.log("--------------------")
  console.log("Running dev_sale_fa12 test")
  console.log("--------------------")
  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

  const mintedItemId = await testScript('mint', {
    edsk: sellerEdsk,
    contract: "KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK",
    amount: 1,
    metadata: `{"": "ipfs://QmQ4x5BR7ecGVjyhZ7o87m2rPgzp8sBzxFbM4gtHiQQ6ay"}`,
    is_dev: true
  })
  console.log('mintedItemId', mintedItemId)

  await awaitDevItem(mintedItemId)

  // const mintedItemId = "KT1EreNsT2gXRvuTUrpx6Ju4WMug5xcEpr43:73"
  const sellOrder = await testScript('sell_with_ft_fa12', {
    edsk: sellerEdsk,
    item_id: mintedItemId,
    ft_contract: "KT1X9S5Z69r36kToUx2xSi32gmhRjEW64dMS",
    is_dev: true
  })
  console.log('sellOrder', sellOrder)

  const fillOp = await testScript('fill', {
    edsk: buyerEdsk,
    order_id: sellOrder.hash,
    is_dev: true
  })
  console.log(fillOp)
}
