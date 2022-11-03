import {
	AssetTypeV2,
	get_legacy_orders,
	get_orders,
	Part,
	Provider,
	send_batch,
	TransactionArg
} from "@rarible/tezos-common";
import BigNumber from "bignumber.js";
import {get_rarible_legacy_buy_transaction, order_of_json, OrderForm} from "../../order";
import {BuyRequest, get_rarible_v2_buy_transaction} from "../../sales/buy";
import {get_objkt_fulfill_ask_v2_transaction} from "../objkt/v2/fulfill_ask";
import {get_objkt_fulfill_ask_v1_transaction} from "../objkt/v1/fulfill_ask";
import {get_hen_collect_transaction} from "../hen/hen_collect";
import {marketplace_order} from "../../marketplace-client";
import {get_teia_collect_transaction} from "../teia/teia_collect";
import {get_versum_collect_transaction} from "../versum/versum_collect";
import {get_fxhash_v1_collect_transaction} from "../fxhash/v1/fxhash_v1_collect";
import {get_fxhash_v2_listing_accept_transaction} from "../fxhash/v2/fxhash_v2_listing_accept";
import {get_aggregator_event_transaction} from "./aggregator_event";

export interface CartOrder {
	order_id: string,
	amount: BigNumber,
	origin_fees: Part[],
	payouts: Part[]
}

export async function cart_purchase(provider: Provider, orders: CartOrder[]) {
	const order_ids = orders.map(function (order) {
		return order.order_id;
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
		platform: true
	}, {
		order_id: order_ids
	})
	const order_map: Map<string, marketplace_order> = new Map()
	for(let order_data of orders_data){
		order_map.set(order_data.id, order_data)
	}
	let transactions: TransactionArg[] = []
	for (let cart_order of orders) {
		const order: marketplace_order = order_map.get(cart_order.order_id)!
		switch (order.platform) {
			case "RARIBLE_V1":
				const response = await get_legacy_orders(
					provider.config, {
						data: true
					}, {
						order_id: [order.id]
					})

				const order_form = order_of_json(response[0].data)
				const rarible_legacy_txs = await get_rarible_legacy_buy_transaction(provider, order_form as OrderForm, {
					amount: new BigNumber(order_form.make.value)
				})
				transactions = transactions.concat(rarible_legacy_txs)
				break;
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
				let take_token_id = undefined;
				if(order.take_token_id != undefined){
					take_token_id = new BigNumber(order.take_token_id)
				} else {
					take_token_id = undefined
				}
				const buyRequest: BuyRequest = {
					asset_contract: order.make_contract!,
					asset_token_id: new BigNumber(order.make_token_id!),
					asset_seller: order.maker,
					sale_type: asset_type,
					sale_asset_contract: order.take_contract,
					sale_asset_token_id: take_token_id,
					sale_amount: order.take_value,
					sale_qty: new BigNumber(cart_order.amount),
					sale_payouts: cart_order.payouts,
					sale_origin_fees: cart_order.origin_fees,
					use_all: false,
				}
				const rarible_v2_txs = await get_rarible_v2_buy_transaction(provider, buyRequest)
				transactions = transactions.concat(rarible_v2_txs)
				break;
			case "OBJKT_V1":
				const objkt_v1_txs = await get_objkt_fulfill_ask_v1_transaction(provider,
					cart_order.order_id)
				transactions = transactions.concat(objkt_v1_txs)
				break;
			case "OBJKT_V2":
				const objkt_v2_txs = await get_objkt_fulfill_ask_v2_transaction(provider,
					cart_order.order_id)
				transactions = transactions.concat(objkt_v2_txs)
				break;
			case "HEN":
				const hen_txs = await get_hen_collect_transaction(provider,
					cart_order.order_id)
				transactions = transactions.concat(hen_txs)
				break;
			case "TEIA_V1":
				const teia_txs = await get_teia_collect_transaction(provider,
					cart_order.order_id)
				transactions = transactions.concat(teia_txs)
				break;
			case "VERSUM_V1":
				const versum_txs = await get_versum_collect_transaction(provider,
					cart_order.order_id, cart_order.amount)
				transactions = transactions.concat(versum_txs)
				break;
			case "FXHASH_V1":
				const fxhash_v1_txs = await get_fxhash_v1_collect_transaction(provider,
					cart_order.order_id)
				transactions = transactions.concat(fxhash_v1_txs)
				break;
			case "FXHASH_V2":
				const fxhash_v2_txs = await get_fxhash_v2_listing_accept_transaction(provider,
					cart_order.order_id)
				transactions = transactions.concat(fxhash_v2_txs)
				break;
		}
	}
	transactions = transactions.concat(get_aggregator_event_transaction(provider))
	const op = await send_batch(provider, transactions);
	return op
}