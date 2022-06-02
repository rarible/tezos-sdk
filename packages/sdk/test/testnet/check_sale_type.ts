import {AssetTypeV2} from "@rarible/tezos-common";
import {testScript} from "../../main/script";
import {awaitItem} from "../common/utils";

export async function get_order_type() {
    console.log("--------------------")
    console.log("Running get_order_type test")
    console.log("--------------------")

    const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"

    const mintedItemIdV1 = await testScript('mint', {
        edsk: sellerEdsk,
        contract: "KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA",
        metadata: `{"": "ipfs://QmQ4x5BR7ecGVjyhZ7o87m2rPgzp8sBzxFbM4gtHiQQ6ay"}`,
    royalties: `{"tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC": 1000}`,
        amount: 100
    })
    console.log('mintedItemIdV1', mintedItemIdV1)
    await awaitItem(mintedItemIdV1)

    const mintedItemIdV1FA2 = await testScript('mint', {
        edsk: sellerEdsk,
        contract: "KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA",
        metadata: `{"": "ipfs://QmQ4x5BR7ecGVjyhZ7o87m2rPgzp8sBzxFbM4gtHiQQ6ay"}`,
    royalties: `{"tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC": 1000}`,
        amount: 100
    })
    console.log('mintedItemIdV1FA2', mintedItemIdV1FA2)
    await awaitItem(mintedItemIdV1FA2)

    const mintedItemIdV1FA12 = await testScript('mint', {
        edsk: sellerEdsk,
        contract: "KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA",
        metadata: `{"": "ipfs://QmQ4x5BR7ecGVjyhZ7o87m2rPgzp8sBzxFbM4gtHiQQ6ay"}`,
    royalties: `{"tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC": 1000}`,
        amount: 100
    })
    console.log('mintedItemIdV1FA12', mintedItemIdV1FA12)
    await awaitItem(mintedItemIdV1FA12)

    const mintedItemIdV2 = await testScript('mint', {
        edsk: sellerEdsk,
        contract: "KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA",
        metadata: `{"": "ipfs://QmQ4x5BR7ecGVjyhZ7o87m2rPgzp8sBzxFbM4gtHiQQ6ay"}`,
    royalties: `{"tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC": 1000}`,
        amount: 100
    })
    console.log('mintedItemIdV2', mintedItemIdV2)
    await awaitItem(mintedItemIdV2)
    const mintedItemIdV2FA2 = await testScript('mint', {
        edsk: sellerEdsk,
        contract: "KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA",
        metadata: `{"": "ipfs://QmQ4x5BR7ecGVjyhZ7o87m2rPgzp8sBzxFbM4gtHiQQ6ay"}`,
    royalties: `{"tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC": 1000}`,
        amount: 100
    })
    console.log('mintedItemIdV2FA2', mintedItemIdV2FA2)
    await awaitItem(mintedItemIdV2FA2)

    const mintedItemIdV2FA12 = await testScript('mint', {
        edsk: sellerEdsk,
        contract: "KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA",
        metadata: `{"": "ipfs://QmQ4x5BR7ecGVjyhZ7o87m2rPgzp8sBzxFbM4gtHiQQ6ay"}`,
    royalties: `{"tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC": 1000}`,
        amount: 100
    })
    console.log('mintedItemIdV2FA12', mintedItemIdV2FA12)
    await awaitItem(mintedItemIdV2FA12)


    // const mintedItemId = ""
    const sellOrderV1 = await testScript('sell', {
        edsk: sellerEdsk,
        item_id: mintedItemIdV1
    })
    console.log('sellOrder V1', sellOrderV1)

    const sellOrderV1FA2 = await testScript('sell_with_ft_fa2', {
        edsk: sellerEdsk,
        item_id: mintedItemIdV1FA2,
        ft_contract: "KT1PEBh9oKkQosYuw4tvzigps5p7uqXMgdez",
        ft_token_id: 0
    })
    console.log('sellOrderV1FA2', sellOrderV1FA2)

    const sellOrderV1FA12 = await testScript('sell_with_ft_fa12', {
        edsk: sellerEdsk,
        item_id: mintedItemIdV1FA12,
        ft_contract: "KT1WsXMAzcre2MNUjNkGtVQLpsTnNFhBJhLv"
    })
    console.log('sellOrder', sellOrderV1FA12)

    const sellOrderV2 = await testScript('sell_v2', {
        edsk: sellerEdsk,
        item_id: mintedItemIdV2,
        qty: 1,
        amount: 0.000002
    })
    console.log('sellOrder V2', sellOrderV2)

    const sellOrderV2FA2 = await testScript('sell_v2', {
        edsk: sellerEdsk,
        item_id: mintedItemIdV2FA2,
        sale_type: AssetTypeV2.FA2,
        ft_contract: "KT1PEBh9oKkQosYuw4tvzigps5p7uqXMgdez",
        ft_token_id: 0,
        qty: 1,
        amount: 0.000002
    })
    console.log('sellOrderV2FA2', sellOrderV2FA2)

    const sellOrderV2FA12 = await testScript('sell_v2', {
        edsk: sellerEdsk,
        item_id: mintedItemIdV2FA12,
        sale_type: AssetTypeV2.FA12,
        ft_contract: "KT1WsXMAzcre2MNUjNkGtVQLpsTnNFhBJhLv",
        qty: 1,
        amount: 0.000002
    })
    console.log('sellOrderV2FA12', sellOrderV2FA12)

    await delay(1000)
    const typeV1 = await testScript('get_order_type', {
        edsk: sellerEdsk,
        item_id: mintedItemIdV1
    })
    console.log('typeV1', typeV1)

    const typeV1FA2 = await testScript('get_order_type', {
        edsk: sellerEdsk,
        item_id: mintedItemIdV1FA2,
        ft_contract: "KT1PEBh9oKkQosYuw4tvzigps5p7uqXMgdez",
        ft_token_id: 0
    })
    console.log('typeV1FA2', typeV1FA2)

    const typeV1FA12 = await testScript('get_order_type', {
        edsk: sellerEdsk,
        item_id: mintedItemIdV1FA12,
        ft_contract: "KT1WsXMAzcre2MNUjNkGtVQLpsTnNFhBJhLv"
    })
    console.log('typeV1FA12', typeV1FA12)

    await delay(1000)
    const typeV2 = await testScript('get_order_type', {
        edsk: sellerEdsk,
        item_id: mintedItemIdV2
    })
    console.log('typeV2', typeV2)

    const typeV2FA2 = await testScript('get_order_type', {
        edsk: sellerEdsk,
        item_id: mintedItemIdV2FA2,
        ft_contract: "KT1PEBh9oKkQosYuw4tvzigps5p7uqXMgdez",
        ft_token_id: 0
    })
    console.log('typeV2FA2', typeV2FA2)

    const typeV2FA12 = await testScript('get_order_type', {
        edsk: sellerEdsk,
        item_id: mintedItemIdV2FA12,
        ft_contract: "KT1WsXMAzcre2MNUjNkGtVQLpsTnNFhBJhLv"
    })
    console.log('typeV2FA12', typeV2FA12)

}

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
