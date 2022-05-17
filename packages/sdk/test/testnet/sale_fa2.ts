import {testScript} from "../../main/script";
import {awaitItem} from "../common/utils";

export async function sale_fa2() {
  console.log("--------------------")
  console.log("Running sale_fa2 test")
  console.log("--------------------")
  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

  const mintedItemId = await testScript('mint', {
    edsk: sellerEdsk,
    contract: "KT1EreNsT2gXRvuTUrpx6Ju4WMug5xcEpr43"
  })
  console.log('mintedItemId', mintedItemId)

  await awaitItem(mintedItemId)

  // const mintedItemId = "KT1EreNsT2gXRvuTUrpx6Ju4WMug5xcEpr43:73"
  const sellOrder = await testScript('sell_with_ft_fa2', {
    edsk: sellerEdsk,
    item_id: mintedItemId,
    ft_contract: "KT1PEBh9oKkQosYuw4tvzigps5p7uqXMgdez",
    ft_token_id: 0
  })
  console.log('sellOrder', sellOrder)

  const fillOp = await testScript('fill', {
    edsk: buyerEdsk,
    order_id: sellOrder.hash
  })
  console.log(fillOp)
}
