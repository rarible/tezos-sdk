import {testScript} from "../../../../main/script";

export async function fxhash_v1_cancel_offer() {
  console.log("--------------------")
  console.log("Running fxhash_v1_cancel_offer test")
  console.log("--------------------")

  const sellerEdsk = "edskRpm2mUhvoUjHjXgMoDRxMKhtKfww1ixmWiHCWhHuMEEbGzdnz8Ks4vgarKDtxok7HmrEo1JzkXkdkvyw7Rtw6BNtSd7MJ7"

  const cancel = await testScript('fxhash_v1_cancel_offer', {
    edsk: sellerEdsk,
    item_id: "7be536de-c106-5bb7-ae88-56d26216851c",
    is_dev: true
  })
  console.log('cancel', cancel)

}
