import {testScript} from "../../../main/script";

export async function hen_cancel_swap() {
  console.log("--------------------")
  console.log("Running hen_cancel_swap test")
  console.log("--------------------")

  const sellerEdsk = "edskRpm2mUhvoUjHjXgMoDRxMKhtKfww1ixmWiHCWhHuMEEbGzdnz8Ks4vgarKDtxok7HmrEo1JzkXkdkvyw7Rtw6BNtSd7MJ7"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

  const cancel = await testScript('hen_cancel_swap', {
    edsk: sellerEdsk,
    item_id: "42b95037-4d84-5f85-b19b-8e20f0c64555",
  })
  console.log('cancel', cancel)

}
