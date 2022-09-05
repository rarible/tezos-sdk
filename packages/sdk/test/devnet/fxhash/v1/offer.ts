import {testScript} from "../../../../main/script";

export async function fxhash_v1_offer() {
  console.log("--------------------")
  console.log("Running fxhash_v1_offer test")
  console.log("--------------------")

  const sellerEdsk = "edskRpm2mUhvoUjHjXgMoDRxMKhtKfww1ixmWiHCWhHuMEEbGzdnz8Ks4vgarKDtxok7HmrEo1JzkXkdkvyw7Rtw6BNtSd7MJ7"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

  const sellOrder = await testScript('fxhash_v1_offer', {
    edsk: sellerEdsk,
    item_id: "KT1VEXkw6rw6pJDP9APGsMneFafArijmM96j:1",
    qty: 1,
    amount: 1,
    is_dev: true
  })
  console.log('sellOrder', sellOrder)

  const buyOrder = await testScript('fxhash_v1_collect', {
    edsk: buyerEdsk,
    item_id: sellOrder,
    is_dev: true
  })
  console.log('buyOrder', buyOrder)

}
