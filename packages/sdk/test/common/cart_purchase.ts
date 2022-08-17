import {testScript} from "../../main/script";
import {AssetTypeV2} from "@rarible/tezos-common";
import {awaitItem} from "./utils";

export async function cart_purchase() {
	console.log("--------------------")
	console.log("Running cart_purchase test")
	console.log("--------------------")

	const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
	const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

	const mintedItemId_v1 = await testScript('mint', {
		edsk: sellerEdsk,
		contract: "KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA",
		metadata: `{"": "ipfs://QmQ4x5BR7ecGVjyhZ7o87m2rPgzp8sBzxFbM4gtHiQQ6ay"}`,
		royalties: `{"tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC": 1000}`,
		amount: 100
	})
	console.log('mintedItemId_v1', mintedItemId_v1)

	await awaitItem(mintedItemId_v1)

	const mintedItemId_v2 = await testScript('mint', {
		edsk: sellerEdsk,
		contract: "KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA",
		metadata: `{"": "ipfs://QmQ4x5BR7ecGVjyhZ7o87m2rPgzp8sBzxFbM4gtHiQQ6ay"}`,
		royalties: `{"tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC": 1000}`,
		amount: 100
	})
	console.log('mintedItemId_v2', mintedItemId_v2)

	await awaitItem(mintedItemId_v1)

	const objkt_v1_order = await testScript('ask_v1_objkt', {
		edsk: sellerEdsk,
		item_id: "KT1TcrYJatTbrg9GoYDbsCu3phPGzMcTSaJn:0",
		qty: 1,
		amount: 0.1,
	})
	console.log('objkt_v1_order', objkt_v1_order)

	const objkt_v2_order = await testScript('ask_v2_objkt', {
		edsk: sellerEdsk,
		item_id: "KT1TcrYJatTbrg9GoYDbsCu3phPGzMcTSaJn:0",
		qty: 1,
		amount: 0.1,
	})
	console.log('objkt_v2_order', objkt_v2_order)

	const hen_order = await testScript('hen_swap', {
		edsk: sellerEdsk,
		item_id: "KT18pXXDDLMtXYxf6MpMGVKjmeSd6MuWnmjn:763002",
		qty: 1,
		amount: 10000,
	})
	console.log('hen_order', hen_order)

	const rarible_v1_order = await testScript('sell', {
		edsk: sellerEdsk,
		item_id: mintedItemId_v1
	})
	console.log('rarible_v1_order', rarible_v1_order)

	const sellOrder = await testScript('sell_v2', {
		edsk: sellerEdsk,
		item_id: mintedItemId_v2,
		sale_type: AssetTypeV2.XTZ,
		ft_contract: undefined,
		ft_token_id: undefined,
		qty: 1,
		amount: 0.1,
	})
	console.log('sellOrder', sellOrder)


}