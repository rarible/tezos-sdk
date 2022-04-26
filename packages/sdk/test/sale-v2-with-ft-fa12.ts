import { AssetTypeV2 } from "@rarible/tezos-common";
import {testScript} from "../main/script";
import {awaitItem} from "./common/utils";

async function sale() {
  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

  const mintedItemId = await testScript('mint', {
    edsk: sellerEdsk,
    contract: "KT1EreNsT2gXRvuTUrpx6Ju4WMug5xcEpr43"
  })
  console.log('mintedItemId', mintedItemId)

  await awaitItem(mintedItemId)

  //const mintedItemId = "KT1EreNsT2gXRvuTUrpx6Ju4WMug5xcEpr43:218"

  const sellOrder = await testScript('sell_v2_with_fa12', {
    edsk: sellerEdsk,
    item_id: mintedItemId,
    ft_contract: "KT1WsXMAzcre2MNUjNkGtVQLpsTnNFhBJhLv",
    ft_token_id: undefined,
  })
  console.log('sellOrder', sellOrder)

  const buyOrder = await testScript('buy_v2', {
    edsk: buyerEdsk,
    item_id: mintedItemId,
    owner: "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC",
    sale_type: AssetTypeV2.FA12,
    ft_contract: "KT1WsXMAzcre2MNUjNkGtVQLpsTnNFhBJhLv",
    ft_token_id: undefined,
    amount: 2
  })
  console.log('buyOrder', buyOrder)
}
sale()
