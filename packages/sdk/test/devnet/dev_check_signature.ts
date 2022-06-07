import {testScript} from "../../main/script";
import {pack_string} from "@rarible/tezos-common";
import * as assert from "assert";

export async function dev_check_signature() {
  console.log("--------------------")
  console.log("Running dev_check_signature test")
  console.log("--------------------")
  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"

  const message = "payload to sign"

  const signature = await testScript('check_signature', {
    edsk: sellerEdsk,
    message: pack_string(message),
    is_dev: true
  })
  assert(signature == true)
}
