import { AssetTypeV2 } from "@rarible/tezos-common";
import {testScript} from "../main/script";
import {awaitItem} from "./common/utils";

async function bundleSaleFA2() {
  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

  const mintedItemId_0 = await testScript('mint', {
    edsk: sellerEdsk,
    contract: "KT1EreNsT2gXRvuTUrpx6Ju4WMug5xcEpr43"
  })
  console.log('mintedItemId_0', mintedItemId_0)

  await awaitItem(mintedItemId_0)

  const mintedItemId_1 = await testScript('mint', {
    edsk: sellerEdsk,
    contract: "KT1EreNsT2gXRvuTUrpx6Ju4WMug5xcEpr43"
  })
  console.log('mintedItemId_1', mintedItemId_1)

  await awaitItem(mintedItemId_1)

  // const mintedItemId = ""
  const sellOrder = await testScript('sell_bundle', {
    edsk: sellerEdsk,
    item_id: `${mintedItemId_0},${mintedItemId_1}`,
    sale_type: AssetTypeV2.FA2,
    ft_contract: "KT1PEBh9oKkQosYuw4tvzigps5p7uqXMgdez",
    ft_token_id: 0,
  })
  console.log('sellOrder', sellOrder)

  const buyOrder = await testScript('buy_bundle', {
    edsk: buyerEdsk,
    item_id: `${mintedItemId_0},${mintedItemId_1}`,
    owner: "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC",
    sale_type: AssetTypeV2.FA2,
    ft_contract: "KT1PEBh9oKkQosYuw4tvzigps5p7uqXMgdez",
    ft_token_id: 0,
    amount: 0.02
  })
  console.log('buyOrder', buyOrder)
}
bundleSaleFA2()
