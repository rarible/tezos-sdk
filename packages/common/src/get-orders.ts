import {Config, OrderType, retry} from "./base"
import {fetchWrapper} from "./fetch-wrapper";
import fetch from "node-fetch";


export interface ProtocolOrderPayload {
	continuation: string,
	orders: any[]
}

export interface ProtocolActivityPayload {
	continuation: string,
	cursor: string,
	activities: any[]
}

export enum ProtocolActivity {
	LIST = "LIST",
	BID = "BID"
}

export async function get_active_order_type(
	config: Config,
	maker: string,
	item_id: string,
): Promise<OrderType | undefined> {
	return retry(30, 2000, async () => {
		let order_result = await get_orders(config, maker, true, item_id)
		let continuation = ""
		while(continuation != undefined) {
			if (order_result.orders.length > 0) {
				for (let i = 0; i < order_result.orders.length; i++) {
					if (order_result.orders[i].data["@type"] == "TEZOS_RARIBLE_V2") {
						return OrderType.V1
					} else if (order_result.orders[i].data["@type"] == "TEZOS_RARIBLE_V3") {
						return OrderType.V2
					} else {
						throw new Error("Unrecognized order type: v1/v2 orders has not been found")
					}
				}
				continuation = order_result.continuation
			} else {
				throw new Error("Unrecognized order type: v1/v2 orders has not been found")
			}
		}
	})
}

export async function await_order(
	config: Config,
	item_id: string,
	op_hash: string,
	type: ProtocolActivity,
	maker: string,
	max_tries: number,
	sleep: number,
): Promise<string | undefined> {
	return retry(max_tries, sleep, async () => {
		let cursor = ""
		while (cursor != undefined){
			const activities = await get_item_activities(config, item_id, type)
			console.log(JSON.stringify(activities))
			for(let activity of activities.activities){
				if(
					activity["@type"] == type
				) {
					if(
						activity["maker"] == maker &&
						activity["hash"] == op_hash
					){
						return activity["id"]
					}
				}
				cursor = activity["cursor"]
			}
		}

	})
}


export async function get_orders(
	config: Config,
	maker: string,
	is_active: boolean,
	item_id: string,
	size: number = 100,
	continuation?: string
): Promise<ProtocolOrderPayload> {
	let continuation_filter = continuation ? `&continuation=${continuation}`: ""
	let active_filter = is_active ? "&status=ACTIVE" : ""
	console.log(config.union_api + `/orders/sell/byItem?itemId=TEZOS:${item_id}&maker=TEZOS:${maker}&size=${size}${active_filter}${continuation_filter}`)
	const r = await fetchWrapper(config.union_api + `/orders/sell/byItem?itemId=TEZOS:${item_id}&maker=TEZOS:${maker}&size=${size}${active_filter}${continuation_filter}`)
	return await r.json()
}

export async function get_orders_by_ids(
	config: Config,
	ids: string[],
): Promise<ProtocolOrderPayload> {
	const r = await fetch(config.union_api + `/orders/byIds}`, {
		method: 'post',
		body: JSON.stringify(ids),
		headers: {'Content-Type': 'application/json'}
	});
	return await r.json()
}


export async function get_item_activities(
	config: Config,
	item_id: string,
	type: ProtocolActivity,
	size: number = 100,
	cursor?: string
): Promise<ProtocolActivityPayload> {
	let cursor_filter = cursor ? `&cursor=${cursor}`: ""
	console.log(config.union_api + `/activities/byItem?itemId=TEZOS:${item_id}&type=${type}&size=${size}${cursor_filter}`)
	const r = await fetchWrapper(config.union_api + `/activities/byItem?itemId=TEZOS:${item_id}&type=LIST&size=${size}${cursor_filter}`)
	return await r.json()
}
