import {AssetTypeV2} from "@rarible/tezos-common";
import {testScript} from "../../main/script";
import {awaitDevItem} from "../common/utils";

export async function dev_get_order_type() {
    console.log("--------------------")
    console.log("Running dev_get_order_type test")
    console.log("--------------------")

    const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"

    const mintedItemIdV1 = await testScript('mint', {
        edsk: sellerEdsk,
        contract: "KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK",
        amount: 100,
        is_dev: true
    })
    console.log('mintedItemIdV1', mintedItemIdV1)
    await awaitDevItem(mintedItemIdV1)

    const mintedItemIdV1FA2 = await testScript('mint', {
        edsk: sellerEdsk,
        contract: "KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK",
        amount: 100,
        is_dev: true
    })
    console.log('mintedItemIdV1FA2', mintedItemIdV1FA2)
    await awaitDevItem(mintedItemIdV1FA2)

    const mintedItemIdV1FA12 = await testScript('mint', {
        edsk: sellerEdsk,
        contract: "KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK",
        amount: 100,
        is_dev: true
    })
    console.log('mintedItemIdV1FA12', mintedItemIdV1FA12)
    await awaitDevItem(mintedItemIdV1FA12)

    const mintedItemIdV2 = await testScript('mint', {
        edsk: sellerEdsk,
        contract: "KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK",
        amount: 100,
        is_dev: true
    })
    console.log('mintedItemIdV2', mintedItemIdV2)
    await awaitDevItem(mintedItemIdV2)
    const mintedItemIdV2FA2 = await testScript('mint', {
        edsk: sellerEdsk,
        contract: "KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK",
        amount: 100,
        is_dev: true
    })
    console.log('mintedItemIdV2FA2', mintedItemIdV2FA2)
    await awaitDevItem(mintedItemIdV2FA2)

    const mintedItemIdV2FA12 = await testScript('mint', {
        edsk: sellerEdsk,
        contract: "KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK",
        amount: 100,
        is_dev: true
    })
    console.log('mintedItemIdV2FA12', mintedItemIdV2FA12)
    await awaitDevItem(mintedItemIdV2FA12)

    // const mintedItemId = ""
    const sellOrderV1 = await testScript('sell', {
        edsk: sellerEdsk,
        item_id: mintedItemIdV1,
        is_dev: true
    })
    console.log('sellOrder V1', sellOrderV1)

    const sellOrderV1FA2 = await testScript('sell_with_ft_fa2', {
        edsk: sellerEdsk,
        item_id: mintedItemIdV1FA2,
        ft_contract: "KT1HvTfYG7DgeujAQ1LDvCHiQc29VMycoJh5",
        ft_token_id: 0,
        is_dev: true
    })
    console.log('sellOrderV1FA2', sellOrderV1FA2)

    const sellOrderV1FA12 = await testScript('sell_with_ft_fa12', {
        edsk: sellerEdsk,
        item_id: mintedItemIdV1FA12,
        ft_contract: "KT1X9S5Z69r36kToUx2xSi32gmhRjEW64dMS",
        is_dev: true
    })
    console.log('sellOrder', sellOrderV1FA12)

    const sellOrderV2 = await testScript('sell_v2', {
        edsk: sellerEdsk,
        item_id: mintedItemIdV2,
        qty: 1,
        amount: 0.000002,
        is_dev: true
    })
    console.log('sellOrder V2', sellOrderV2)

    const sellOrderV2FA2 = await testScript('sell_v2', {
        edsk: sellerEdsk,
        item_id: mintedItemIdV2FA2,
        sale_type: AssetTypeV2.FA2,
        ft_contract: "KT1HvTfYG7DgeujAQ1LDvCHiQc29VMycoJh5",
        ft_token_id: 0,
        qty: 1,
        amount: 0.000002,
        is_dev: true
    })
    console.log('sellOrderV2FA2', sellOrderV2FA2)

    const sellOrderV2FA12 = await testScript('sell_v2', {
        edsk: sellerEdsk,
        item_id: mintedItemIdV2FA12,
        sale_type: AssetTypeV2.FA12,
        ft_contract: "KT1X9S5Z69r36kToUx2xSi32gmhRjEW64dMS",
        qty: 1,
        amount: 0.000002,
        is_dev: true
    })
    console.log('sellOrderV2FA12', sellOrderV2FA12)

    await delay(1000)
    const typeV1 = await testScript('get_order_type', {
        edsk: sellerEdsk,
        item_id: mintedItemIdV1,
        is_dev: true
    })
    console.log('typeV1', typeV1)

    const typeV1FA2 = await testScript('get_order_type', {
        edsk: sellerEdsk,
        item_id: mintedItemIdV1FA2,
        ft_contract: "KT1HvTfYG7DgeujAQ1LDvCHiQc29VMycoJh5",
        ft_token_id: 0,
        is_dev: true
    })
    console.log('typeV1FA2', typeV1FA2)

    const typeV1FA12 = await testScript('get_order_type', {
        edsk: sellerEdsk,
        item_id: mintedItemIdV1FA12,
        ft_contract: "KT1X9S5Z69r36kToUx2xSi32gmhRjEW64dMS",
        is_dev: true
    })
    console.log('typeV1FA12', typeV1FA12)

    await delay(1000)
    const typeV2 = await testScript('get_order_type', {
        edsk: sellerEdsk,
        item_id: mintedItemIdV2,
        is_dev: true
    })
    console.log('typeV2', typeV2)

    const typeV2FA2 = await testScript('get_order_type', {
        edsk: sellerEdsk,
        item_id: mintedItemIdV2FA2,
        ft_contract: "KT1HvTfYG7DgeujAQ1LDvCHiQc29VMycoJh5",
        ft_token_id: 0,
        is_dev: true
    })
    console.log('typeV2FA2', typeV2FA2)

    const typeV2FA12 = await testScript('get_order_type', {
        edsk: sellerEdsk,
        item_id: mintedItemIdV2FA12,
        ft_contract: "KT1X9S5Z69r36kToUx2xSi32gmhRjEW64dMS",
        is_dev: true
    })
    console.log('typeV2FA12', typeV2FA12)

}

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}