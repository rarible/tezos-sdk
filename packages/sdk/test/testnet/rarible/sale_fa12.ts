import {testScript} from "../../../main/script";
import {awaitItem} from "../../common/utils";

export async function sale_fa12() {
  console.log("--------------------")
  console.log("Running sale_fa12 test")
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

  await awaitItem(mintedItemId)

  // const mintedItemId = "KT1EreNsT2gXRvuTUrpx6Ju4WMug5xcEpr43:73"
  const sellOrder = await testScript('sell_with_ft_fa12', {
    edsk: sellerEdsk,
    item_id: mintedItemId,
    ft_contract: "KT1WsXMAzcre2MNUjNkGtVQLpsTnNFhBJhLv",
  })
  console.log('sellOrder', sellOrder)

  const fillOp = await testScript('fill', {
    edsk: buyerEdsk,
    order_id: sellOrder.hash
  })
  console.log(fillOp)
}
