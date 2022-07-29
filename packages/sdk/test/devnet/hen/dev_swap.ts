import {testScript} from "../../../main/script";

export async function dev_hen_swap() {
  console.log("--------------------")
  console.log("Running dev_hen_swap test")
  console.log("--------------------")

  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

  // const mintedItemId = ""
  const sellOrder = await testScript('hen_swap', {
    edsk: sellerEdsk,
    item_id: "KT1EFwQpD522Vfw7LykZkwbtRXghetRP5jNH:763006",
    qty: 1,
    amount: 10,
    is_dev: true
  })
  console.log('sellOrder', sellOrder)

  const buyOrder = await testScript('hen_collect', {
    edsk: sellerEdsk,
    item_id: "89213c16-e6e1-54e7-b686-13ed830a259f",
    is_dev: true
  })
  console.log('buyOrder', buyOrder)

}
