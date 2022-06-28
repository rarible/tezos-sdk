import {testScript} from "../../../main/script";
import {awaitItem} from "../../common/utils";

export async function deploy_nft() {
  console.log("--------------------")
  console.log("Running deploy_nft test")
  console.log("--------------------")
  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"

  const deployNftResult = await testScript('deploy_nft', {
    edsk: sellerEdsk
  })
  console.log('deployNftResult', deployNftResult)

}
