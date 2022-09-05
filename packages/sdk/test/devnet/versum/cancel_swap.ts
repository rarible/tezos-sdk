import {testScript} from "../../../main/script";

export async function versum_cancel_swap() {
  console.log("--------------------")
  console.log("Running versum_cancel_swap test")
  console.log("--------------------")

  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"

  const cancel = await testScript('versum_cancel_swap', {
    edsk: sellerEdsk,
    item_id: "4a1860e5-1ba8-53fd-b20f-6c6548e10c51",
  })
  console.log('cancel', cancel)

}
