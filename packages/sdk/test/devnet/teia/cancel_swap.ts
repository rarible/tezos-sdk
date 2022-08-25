import {testScript} from "../../../main/script";

export async function teia_cancel_swap() {
  console.log("--------------------")
  console.log("Running teia_cancel_swap test")
  console.log("--------------------")

  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"

  const cancel = await testScript('teia_cancel_swap', {
    edsk: sellerEdsk,
    item_id: "7be536de-c106-5bb7-ae88-56d26216851c",
  })
  console.log('cancel', cancel)

}
