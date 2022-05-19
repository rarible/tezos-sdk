import {AssetTypeV2} from "@rarible/tezos-common";
import {testScript} from "../../main/script";
import {awaitDevItem} from "../common/utils";

export async function dev_v2_sale() {
    console.log("--------------------")
    console.log("Running dev_v2_sale test")
    console.log("--------------------")

    const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
    const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

    const mintedItemId = await testScript('mint', {
        edsk: sellerEdsk,
        contract: "KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK",
        amount: 1,
        is_dev: true
    })
    console.log('mintedItemId', mintedItemId)

    await awaitDevItem(mintedItemId)
    // const mintedItemId = ""
    const sellOrder = await testScript('sell_v2', {
        edsk: sellerEdsk,
        item_id: mintedItemId,
        is_dev: true
    })
    console.log('sellOrder', sellOrder)

    const buyOrder = await testScript('buy_v2', {
        edsk: buyerEdsk,
        item_id: mintedItemId,
        owner: "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC",
        sale_type: AssetTypeV2.XTZ,
        ft_contract: undefined,
        ft_token_id: undefined,
        amount: 0.000002,
        is_dev: true
    })
    console.log('buyOrder', buyOrder)

}