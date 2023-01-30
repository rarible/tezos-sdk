import {testScript} from "../../../main/script";

export async function versum_cancel_swap() {
  console.log("--------------------")
  console.log("Running versum_cancel_swap test")
  console.log("--------------------")

  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"

  const cancel = await testScript('versum_cancel_swap', {
    edsk: sellerEdsk,
    item_id: "TEZOS:ee1d547b-9d9d-55a3-9775-bd96c76fdf7c",
  })
  console.log('cancel', cancel)

}
versum_cancel_swap()
