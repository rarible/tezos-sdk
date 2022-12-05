import {
	approve_v2,
	AssetTypeV2,
	get_orders_by_ids,
	Part,
	Provider,
	send_batch,
	TransactionArg
} from "@rarible/tezos-common";
import BigNumber from "bignumber.js";
import {accept_bid_arg, AcceptBid} from "../../bids";
import {get_objkt_fulfill_bid_v1_transaction} from "../objkt/v1/fullfil_bid";
import {get_objkt_fulfill_bid_v2_transaction} from "../objkt/v2/fulfill_offer";
import {get_versum_accept_bid_transaction} from "../versum/versum_accept_bid";
import {get_fxhash_v2_bid_accept_transaction} from "../fxhash/v2/fxhash_v2_bid_accept";

export interface CartBid {
	order_id: string,
	amount: BigNumber,
	origin_fees: Part[],
	payouts: Part[],
	token_id?: BigNumber,
}

export async function bid_purchase(provider: Provider, bids: CartBid[]) {
	const order_ids = bids.map(function (bid) {
		return bid.order_id;
	})
	const orders_data = await get_orders_by_ids(provider.config, order_ids)
	const order_map: Map<string, any> = new Map()
	for(let order_data of orders_data.orders){
		order_map.set(order_data.id, order_data)
	}
	let transactions: TransactionArg[] = []
	for (let cart_bid of bids) {
		const order: any = order_map.get(cart_bid.order_id)!
		const token_id = order.take.type.tokenId === undefined ? cart_bid.token_id! : new BigNumber(order.take.type.tokenId)
		const arg_approve = await approve_v2(
			provider,
			await provider.tezos.address(),
			AssetTypeV2.FA2,
			provider.config.transfer_manager,
			order.take.type.contract.split("TEZOS:")[1],
			new BigNumber(token_id)
		)
		if (arg_approve) transactions = transactions.concat(arg_approve)
		switch (order.data["@type"]) {
			case "TEZOS_RARIBLE_V3":
				let asset_type = AssetTypeV2.XTZ
				switch (order.make.type["@type"]) {
					case "XTZ":
						break;
					case "TEZOS_FT":
						if (order.make.type.contract != undefined && order.make.type.tokenId != undefined) {
							asset_type = AssetTypeV2.FA2
						} else {
							asset_type = AssetTypeV2.FA12
						}
				}
				let make_token_id = undefined;
				if(order.make.type.tokenId != undefined){
					make_token_id = new BigNumber(order.make.type.tokenId)
				} else {
					make_token_id = undefined
				}

				const bid_request: AcceptBid = {
					asset_contract: order.take.type.contract!.split("TEZOS:")[1],
					asset_token_id: token_id,
					bidder: order.maker.split("TEZOS:")[1],
					bid_type: asset_type,
					bid_asset_contract: order.make.type.contract === undefined ? undefined : order.make.type.contract.split("TEZOS:")[1],
					bid_asset_token_id: make_token_id,
					bid_origin_fees : cart_bid.origin_fees,
					bid_payouts : cart_bid.payouts
				}

				if (order.take.type.tokenId == undefined){
					const bid_arg = accept_bid_arg(provider, bid_request, true)
					transactions = transactions.concat(bid_arg)
				} else {
					const bid_arg = accept_bid_arg(provider, bid_request, false)
					transactions = transactions.concat(bid_arg)
				}
				break;
			case "TEZOS_OBJKT_V1":
				const objkt_v1_txs = await get_objkt_fulfill_bid_v1_transaction(provider,
					order.data.internalOrderId, order.take.type.contract.split("TEZOS:")[1], order.take.type.tokenId)
				transactions = transactions.concat(objkt_v1_txs)
				break;
			case "TEZOS_OBJKT_V2":
				const objkt_v2_txs = await get_objkt_fulfill_bid_v2_transaction(provider,
					order.data.internalOrderId, order.take.type.contract.split("TEZOS:")[1], order.take.type.tokenId)
				transactions = transactions.concat(objkt_v2_txs)
				break;
			case "TEZOS_VERSUM_V1":
				const versum_txs = await get_versum_accept_bid_transaction(provider,
					order.data.internalOrderId, order.take.type.contract.split("TEZOS:")[1], order.take.type.tokenId)
				transactions = transactions.concat(versum_txs)
				break;
			case "TEZOS_FXHASH_V2":
				const fxhash_v2_txs = await get_fxhash_v2_bid_accept_transaction(provider,
					order.data.internalOrderId, order.take.type.contract.split("TEZOS:")[1], order.take.type.tokenId)
				transactions = transactions.concat(fxhash_v2_txs)
				break;
		}
	}
	try {
		const op = await send_batch(provider, transactions);
		return op
	} catch (e) {
		console.log(e)
	}

}