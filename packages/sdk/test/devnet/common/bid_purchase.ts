import {testScript} from "../../../main/script";
import {AssetTypeV2} from "@rarible/tezos-common";
import {awaitDevItem} from "../../common/utils";

export async function bid_purchase() {
	console.log("--------------------")
	console.log("Running bid_purchase test")
	console.log("--------------------")

	const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
	const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

	// const mintedItemId_v2 = await testScript('mint', {
	// 	edsk: sellerEdsk,
	// 	contract: "KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA",
	// 	metadata: `{"": "ipfs://QmQ4x5BR7ecGVjyhZ7o87m2rPgzp8sBzxFbM4gtHiQQ6ay"}`,
	// 	royalties: `{"tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC": 1000}`,
	// 	amount: 100,
	// 	is_dev: true
	// })
	// console.log('mintedItemId_v2', mintedItemId_v2)
	//
	// await awaitDevItem(mintedItemId_v2 as string)

	const mintedItemId_v2 = "KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA:994"

	const objkt_v1_order = await testScript('bid_v1_objkt', {
		edsk: buyerEdsk,
		item_id: "KT1TcrYJatTbrg9GoYDbsCu3phPGzMcTSaJn:0",
		qty: 1,
		amount: 0.1,
		is_dev: true
	})
	console.log('objkt_v1_order', objkt_v1_order)

	const objkt_v2_order = await testScript('bid_v2_objkt', {
		edsk: buyerEdsk,
		item_id: "KT1TcrYJatTbrg9GoYDbsCu3phPGzMcTSaJn:0",
		qty: 1,
		amount: 0.1,
		is_dev: true
	})
	console.log('objkt_v2_order', objkt_v2_order)

	const versum_order = await testScript('versum_bid', {
		edsk: buyerEdsk,
		item_id: "KT1UH5RSbomuV1o6UuDB9yeACbqRMup3utGu:0",
		qty: 1,
		amount: 0.1,
		is_dev: true
	})
	console.log('versum_order', versum_order)

	const fxhash_v2_order = await testScript('fxhash_v2_bid', {
		edsk: buyerEdsk,
		item_id: "KT1WSwXCWPPAxAy4ibPmFyCm4NhmSJT9UuxQ:0",
		qty: 1,
		amount: 0.1,
		is_dev: true
	})
	console.log('fxhash_v2_order', fxhash_v2_order)

	const rarible_v2_order = await testScript('put_bid', {
		edsk: buyerEdsk,
		item_id: mintedItemId_v2,
		sale_type: AssetTypeV2.XTZ,
		qty: 1,
		amount: 0.1,
		is_dev: true
	})
	console.log('rarible_v2_order', rarible_v2_order)

	const cart_purchase = await testScript('bid_purchase', {
		edsk: sellerEdsk,
		item_id: `${objkt_v1_order},${objkt_v2_order},${rarible_v2_order},${versum_order},${fxhash_v2_order}`,
		is_dev: true
	})
	console.log('cart_purchase', cart_purchase)

}