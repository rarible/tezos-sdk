import {testScript} from "../../../main/script";

export async function hen_cancel_swap() {
  console.log("--------------------")
  console.log("Running hen_cancel_swap test")
  console.log("--------------------")

  const sellerEdsk = "edskRpm2mUhvoUjHjXgMoDRxMKhtKfww1ixmWiHCWhHuMEEbGzdnz8Ks4vgarKDtxok7HmrEo1JzkXkdkvyw7Rtw6BNtSd7MJ7"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

  const cancel = await testScript('hen_cancel_swap', {
    edsk: sellerEdsk,
    item_id: "TEZOS:b70ee52e-ff45-5851-a96c-f3ea5f291c2d",
  })
  console.log('cancel', cancel)

}
hen_cancel_swap()
