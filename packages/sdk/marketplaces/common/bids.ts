import {
	approve_v2,
	AssetTypeV2,
	get_legacy_orders,
	get_orders,
	Part,
	Provider,
	send_batch,
	TransactionArg
} from "@rarible/tezos-common";
import BigNumber from "bignumber.js";
import {marketplace_order} from "../../marketplace-client";
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
	const orders_data = await get_orders(provider.config, {
		id: true,
		make_contract: true,
		make_token_id: true,
		make_value: true,
		maker: true,
		make_asset_class: true,
		take_contract: true,
		take_token_id: true,
		take_value: true,
		take_asset_class: true,
		platform: true,
	}, {
		order_id: order_ids
	})
	const order_map: Map<string, marketplace_order> = new Map()
	for(let order_data of orders_data){
		order_map.set(order_data.id, order_data)
	}
	let transactions: TransactionArg[] = []
	for (let cart_bid of bids) {
		const order: marketplace_order = order_map.get(cart_bid.order_id)!
		const token_id = order.take_token_id === undefined ? cart_bid.token_id! : new BigNumber(order.take_token_id)
		const arg_approve = await approve_v2(
			provider,
			await provider.tezos.address(),
			AssetTypeV2.FA2,
			provider.config.transfer_manager,
			order.take_contract,
			new BigNumber(token_id)
		)
		if (arg_approve) transactions = transactions.concat(arg_approve)
		switch (order.platform) {
			case "RARIBLE_V2":
				let asset_type = AssetTypeV2.XTZ
				switch (order.take_asset_class) {
					case "XTZ":
						break;
					case "TEZOS_FT":
						if (order.take_contract != undefined && order.take_token_id != undefined) {
							asset_type = AssetTypeV2.FA2
						} else {
							asset_type = AssetTypeV2.FA12
						}
				}
				let make_token_id = undefined;
				if(order.make_token_id != undefined){
					make_token_id = new BigNumber(order.make_token_id)
				} else {
					make_token_id = undefined
				}

				const bid_request: AcceptBid = {
					asset_contract: order.take_contract!,
					asset_token_id: token_id,
					bidder: order.maker,
					bid_type: asset_type,
					bid_asset_contract: order.make_contract,
					bid_asset_token_id: make_token_id,
					bid_origin_fees : cart_bid.origin_fees,
					bid_payouts : cart_bid.payouts
				}

				if (order.take_token_id == undefined){
					const bid_arg = accept_bid_arg(provider, bid_request, true)
					transactions = transactions.concat(bid_arg)
				} else {
					const bid_arg = accept_bid_arg(provider, bid_request, false)
					transactions = transactions.concat(bid_arg)
				}
				break;
			case "OBJKT_V1":
				const objkt_v1_txs = await get_objkt_fulfill_bid_v1_transaction(provider,
					cart_bid.order_id)
				transactions = transactions.concat(objkt_v1_txs)
				break;
			case "OBJKT_V2":
				const objkt_v2_txs = await get_objkt_fulfill_bid_v2_transaction(provider,
					cart_bid.order_id)
				transactions = transactions.concat(objkt_v2_txs)
				break;
			case "VERSUM_V1":
				const versum_txs = await get_versum_accept_bid_transaction(provider,
					cart_bid.order_id)
				transactions = transactions.concat(versum_txs)
				break;
			case "FXHASH_V2":
				const fxhash_v2_txs = await get_fxhash_v2_bid_accept_transaction(provider,
					cart_bid.order_id)
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