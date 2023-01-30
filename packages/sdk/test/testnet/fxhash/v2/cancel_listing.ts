import {testScript} from "../../../../main/script";

export async function fxhash_v2_cancel_listing() {
  console.log("--------------------")
  console.log("Running fxhash_v2_cancel_listing test")
  console.log("--------------------")

  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"

  const cancel = await testScript('fxhash_v2_cancel_listing', {
    edsk: sellerEdsk,
    item_id: "TEZOS:e5fdfc89-c12b-57f4-b724-9547ebf4250f",
  })
  console.log('cancel', cancel)

}
fxhash_v2_cancel_listing()
