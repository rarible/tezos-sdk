import {AssetTypeV2} from "@rarible/tezos-common";
import {testScript} from "../../../main/script";
import {awaitItem} from "../../common/utils";

export async function v2_cancel() {
    console.log("--------------------")
    console.log("Running v2_cancel test")
    console.log("--------------------")

    const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"

    const mintedItemId = await testScript('mint', {
        edsk: sellerEdsk,
        contract: "KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA",
        metadata: `{"": "ipfs://QmQ4x5BR7ecGVjyhZ7o87m2rPgzp8sBzxFbM4gtHiQQ6ay"}`,
        royalties: `{"tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC": 1000}`,
        amount: 100,
        is_dev: true
    })
    console.log('mintedItemId', mintedItemId)

    await awaitItem(mintedItemId as string)
    // const mintedItemId = ""
    const sellOrder = await testScript('sell_v2', {
        edsk: sellerEdsk,
        item_id: mintedItemId,
        qty: 1,
        amount: 0.000002,
        is_dev: true
    })
    console.log('sellOrder', sellOrder)

    const cancelOrder = await testScript('cancel_v2', {
        edsk: sellerEdsk,
        item_id: mintedItemId,
        owner: "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC",
        sale_type: AssetTypeV2.XTZ,
        ft_contract: undefined,
        ft_token_id: undefined,
        is_dev: true
    })
    console.log('cancelOrder', cancelOrder)

}