import {testScript} from "../../../main/script";

export async function dev_get_auction() {
  console.log("--------------------")
  console.log("Running dev_get_auction test")
  console.log("--------------------")
  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"

  const mintedItemId = "KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK:247"
  const auction = await testScript('get_auction', {
    edsk: sellerEdsk,
    item_id: mintedItemId,
    is_dev: true
  })
  console.log('auction', auction)
}
