import { AssetTypeV2 } from "@rarible/tezos-common";
import {testScript} from "../../main/script";
import {awaitItem} from "../common/utils";

export async function cancel_bundle_sale() {
  console.log("--------------------")
  console.log("Running cancel_bundle_sale test")
  console.log("--------------------")
  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"

  const mintedItemId_0 = await testScript('mint', {
    edsk: sellerEdsk,
    contract: "KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA",
    amount: 100
  })
  console.log('mintedItemId_0', mintedItemId_0)

  await awaitItem(mintedItemId_0)

  const mintedItemId_1 = await testScript('mint', {
    edsk: sellerEdsk,
    contract: "KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA",
    amount: 100
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
    amount: 0.000002
  })
  console.log('sellOrder', sellOrder)

  const cancelOrder = await testScript('cancel_bundle_sale', {
    edsk: sellerEdsk,
    item_id: `${mintedItemId_0},${mintedItemId_1}`,
    owner: "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC",
    sale_type: AssetTypeV2.XTZ,
    ft_contract: undefined,
    ft_token_id: undefined
  })
  console.log('cancelOrder', cancelOrder)
}
