import {AssetTypeV2} from "@rarible/tezos-common";
import {testScript} from "../../main/script";
import {awaitItem} from "../common/utils";

export async function v2_cancel() {
    console.log("--------------------")
    console.log("Running v2_cancel test")
    console.log("--------------------")

    const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"

    const mintedItemId = await testScript('mint', {
        edsk: sellerEdsk,
        contract: "KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA",
        amount: 100
    })
    console.log('mintedItemId', mintedItemId)

    await awaitItem(mintedItemId)
    // const mintedItemId = ""
    const sellOrder = await testScript('sell_v2', {
        edsk: sellerEdsk,
        item_id: mintedItemId,
        qty: 1,
        amount: 0.000002
    })
    console.log('sellOrder', sellOrder)

    const cancelOrder = await testScript('cancel_v2', {
        edsk: sellerEdsk,
        item_id: mintedItemId,
        owner: "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC",
        sale_type: AssetTypeV2.XTZ,
        ft_contract: undefined,
        ft_token_id: undefined
    })
    console.log('cancelOrder', cancelOrder)

}