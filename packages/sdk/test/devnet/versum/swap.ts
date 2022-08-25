import {testScript} from "../../../main/script";

export async function dev_versum_swap() {
  console.log("--------------------")
  console.log("Running dev_versum_swap test")
  console.log("--------------------")

  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

  const sellOrder = await testScript('versum_swap', {
    edsk: sellerEdsk,
    item_id: "KT1DtDzPUe7Do3QQQ739RG3Z4fWgwbuy2srB:0",
    qty: 1,
    amount: 100,
    is_dev: true
  })
  console.log('sellOrder', sellOrder)

  const buyOrder = await testScript('versum_collect', {
    edsk: buyerEdsk,
    item_id: sellOrder,
    is_dev: true
  })
  console.log('buyOrder', buyOrder)

}
