import {
	AssetTypeV2, get_orders_by_ids,
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
	console.log(order_ids)
	const orders_data = await get_orders_by_ids(provider.config, order_ids)
	console.log(JSON.stringify(orders_data))

	const order_map: Map<string, any> = new Map()
	for(let order_data of orders_data.orders){
		order_map.set(order_data.id, order_data)
	}
	let transactions: TransactionArg[] = []
	for (let cart_order of orders) {
		const order: any = order_map.get(cart_order.order_id)!
		switch (order.data["@type"]) {
			case "TEZOS_RARIBLE_V2":
				const order_form = order_of_json(JSON.parse(order.data.legacyData))
				const rarible_legacy_txs = await get_rarible_legacy_buy_transaction(provider, order_form as OrderForm, {
					amount: new BigNumber(order_form.make.value)
				})
				transactions = transactions.concat(rarible_legacy_txs)
				break;
			case "TEZOS_RARIBLE_V3":
				let asset_type = AssetTypeV2.XTZ
				switch (order.take.type["@type"]) {
					case "XTZ":
						break;
					case "TEZOS_FT":
						if (order.take.type.contract != undefined && order.take.type.tokenId != undefined) {
							asset_type = AssetTypeV2.FA2
						} else {
							asset_type = AssetTypeV2.FA12
						}
				}
				let take_token_id = undefined;
				if(order.take.type.tokenId != undefined){
					take_token_id = new BigNumber(order.take.type.tokenId)
				} else {
					take_token_id = undefined
				}
				const buyRequest: BuyRequest = {
					asset_contract: order.make.type.contract!.split("TEZOS:")[1],
					asset_token_id: new BigNumber(order.make.type.tokenId!),
					asset_seller: order.maker.split("TEZOS:")[1],
					sale_type: asset_type,
					sale_asset_contract: order.take.type.contract === undefined ? undefined : order.take.type.contract.split("TEZOS:")[1],
					sale_asset_token_id: take_token_id,
					sale_amount: new BigNumber(order.take.value),
					sale_qty: new BigNumber(cart_order.amount),
					sale_payouts: cart_order.payouts,
					sale_origin_fees: cart_order.origin_fees,
					use_all: false,
				}
				const rarible_v2_txs = await get_rarible_v2_buy_transaction(provider, buyRequest)
				transactions = transactions.concat(rarible_v2_txs)
				break;
			case "TEZOS_OBJKT_V1":
				const objkt_v1_txs = await get_objkt_fulfill_ask_v1_transaction(provider,
					order.data.internalOrderId, new BigNumber(order.makePrice))
				transactions = transactions.concat(objkt_v1_txs)
				break;
			case "TEZOS_OBJKT_V2":
				const objkt_v2_txs = await get_objkt_fulfill_ask_v2_transaction(provider,
					order.data.internalOrderId, new BigNumber(order.makePrice))
				transactions = transactions.concat(objkt_v2_txs)
				break;
			case "TEZOS_HEN":
				const hen_txs = await get_hen_collect_transaction(provider,
					order.data.internalOrderId, new BigNumber(order.makePrice))
				transactions = transactions.concat(hen_txs)
				break;
			case "TEZOS_TEIA_V1":
				const teia_txs = await get_teia_collect_transaction(provider,
					order.data.internalOrderId, new BigNumber(order.makePrice))
				transactions = transactions.concat(teia_txs)
				break;
			case "TEZOS_VERSUM_V1":
				const versum_txs = await get_versum_collect_transaction(provider,
					order.data.internalOrderId, new BigNumber(order.makePrice), cart_order.amount)
				transactions = transactions.concat(versum_txs)
				break;
			case "TEZOS_FXHASH_V1":
				const fxhash_v1_txs = await get_fxhash_v1_collect_transaction(provider,
					order.data.internalOrderId, new BigNumber(order.makePrice))
				transactions = transactions.concat(fxhash_v1_txs)
				break;
			case "TEZOS_FXHASH_V2":
				const fxhash_v2_txs = await get_fxhash_v2_listing_accept_transaction(provider,
					order.data.internalOrderId, new BigNumber(order.makePrice))
				transactions = transactions.concat(fxhash_v2_txs)
				break;
		}
	}
	transactions = transactions.concat(get_aggregator_event_transaction(provider))
	const op = await send_batch(provider, transactions);
	return op
}