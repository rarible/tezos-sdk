import {AssetTypeV2} from "@rarible/tezos-common";
import {testScript} from "../../../main/script";
import {awaitItem} from "../../common/utils";

export async function get_order_type() {
    console.log("--------------------")
    console.log("Running get_order_type test")
    console.log("--------------------")

    const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"

    const typeV1= await testScript('get_order_type', {
        edsk: sellerEdsk,
        item_id: "KT1ANmrMfq6SfPe2b59JGVu2CDacoaoL6hW8:7",
        owner: "tz1RLtXUYvgv7uTZGJ1ZtPQFg3PZkj4NUHrz"
    })
    console.log('typeV1', typeV1)

    await delay(1000)
    const typeV2 = await testScript('get_order_type', {
        edsk: sellerEdsk,
        item_id: "KT1RuoaCbnZpMgdRpSoLfJUzSkGz1ZSiaYwj:407",
        owner: "tz1Pd5qKoPhvsn6Q9JT5MhibpuZVfsBpQGLK"
    })
    console.log('typeV2', typeV2)


}

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
