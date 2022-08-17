import {testScript} from "../../../../main/script";
import {awaitItem} from "../../../common/utils";

export async function retract_ask_v1_objkt() {
  console.log("--------------------")
  console.log("Running retract_ask_v1_objkt test")
  console.log("--------------------")

  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"

  const sellOrder = await testScript('ask_v1_objkt', {
    edsk: sellerEdsk,
    item_id: "KT1TcrYJatTbrg9GoYDbsCu3phPGzMcTSaJn:0",
    qty: 1,
    amount: 0.1,
  })
  console.log('sellOrder', sellOrder)

  const cancel = await testScript('retract_ask_v1_objkt', {
    edsk: sellerEdsk,
    item_id: sellOrder,
  })
  console.log('cancel', cancel)

}
