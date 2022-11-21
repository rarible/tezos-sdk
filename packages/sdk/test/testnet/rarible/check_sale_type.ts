import {AssetTypeV2} from "@rarible/tezos-common";
import {testScript} from "../../../main/script";
import {awaitItem} from "../../common/utils";
import * as assert from "assert";

export async function get_order_type() {
    console.log("--------------------")
    console.log("Running get_order_type test")
    console.log("--------------------")

    const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"

    const typeV1= await testScript('get_order_type', {
        edsk: sellerEdsk,
        item_id: "KT18pVpRXKPY2c4U2yFEGSH3ZnhB2kL8kwXS:45225",
        owner: "tz1TJYGTJjhFF8tYG5sVSt5EhVZFDzUv9Csz"
    })
    console.log('typeV1', typeV1)
    assert(typeV1 === 0)

    await delay(1000)
    const typeV2 = await testScript('get_order_type', {
        edsk: sellerEdsk,
        item_id: "KT18pVpRXKPY2c4U2yFEGSH3ZnhB2kL8kwXS:81803",
        owner: "tz2Pu1xPLsV4LaAK9TSDYGAsYG8e6a5AjwyZ"
    })
    console.log('typeV2', typeV2)
    assert(typeV2 === 1)


}

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
