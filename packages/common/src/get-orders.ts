import {Config, OrderType, Platform, retry} from "./base"
import BigNumber from "bignumber.js"
import fetch from "node-fetch"
import {
	createClient, marketplace_activity,
	marketplace_activityRequest, marketplace_order,
	marketplace_orderRequest
} from "@rarible/tezos-sdk/marketplace-client";

export interface OrderDataRequest {
	order_id?: string,
	maker?: string,
	make_contract?: string,
	make_token_id?: BigNumber,
	take_contract?: string,
	take_token_id?: BigNumber
	platform?: Platform,
	status?: string,
	activity_id?: string,
	op_hash?: string,
}

export interface ObjktV2TokenData {
	address: string,
	token_id: string
}

export interface ObjktV2Shares {
	amount: string,
	recipient: string
}

export interface ObjktV2OrderData {
	token: ObjktV2TokenData;
	amount: string;
	shares: Array<ObjktV2Shares>;
	target?: string;
	creator: string;
	currency: any;
	editions: string;
	expiry_time?: Date
}

export async function is_v1_order(config: Config, order: OrderDataRequest): Promise<boolean> {
	const order_v1_result = await fetch(config.api + `/orders/sell/byItem?contract=${order.make_contract}&tokenId=${order.make_token_id}&maker=${order.maker}&status=ACTIVE`)
	if (order_v1_result.ok) {
		let json = await order_v1_result.json()
		if (json.orders != undefined && json.orders.length > 0) {
			if (json.orders.length >= 1) {
				for (let i = 0; i < json.orders.length; i++) {
					const fetched_order = json.orders[i]
					const is_xtz = (
						fetched_order.take.assetType.assetClass == "XTZ" &&
						order.take_contract == undefined
						&& order.take_token_id == undefined
					)
					const is_fa2 = (
						fetched_order.take.assetType.assetClass == "FT" &&
						order.take_contract != undefined &&
						order.take_token_id != undefined &&
						fetched_order.take.assetType.tokenId != undefined &&
						order.take_contract == fetched_order.take.assetType.contract &&
						order.take_token_id.toString() == fetched_order.take.assetType.tokenId.toString()
					)
					const is_fa12 = (
						fetched_order.take.assetType.assetClass == "FT" &&
						order.take_contract != undefined &&
						order.take_token_id == undefined &&
						fetched_order.take.assetType.tokenId == undefined &&
						order.take_contract == fetched_order.take.assetType.contract
					)
					if (is_xtz || is_fa2 || is_fa12) {
						return true
					}
				}
			}

		}
	}
	return false
}

export async function get_active_order_type(
	config: Config,
	platform: Platform,
	order: OrderDataRequest
): Promise<OrderType | undefined> {
	return retry(30, 2000, async () => {
		const isV1Order = await is_v1_order(config, order)
		if (isV1Order) {
			return OrderType.V1
		}
		const order_v2_result = await get_orders(config, {id: true},
			{
				make_contract: order.make_contract,
				make_token_id: order.make_token_id,
				maker: order.maker,
				platform: platform,
				status: "ACTIVE",
				take_contract: order.take_contract,
				take_token_id: order.take_token_id
			}
		)
		if (order_v2_result.length > 0) {
			return OrderType.V2
		}
		throw new Error("Unrecognized order type: v1/v2 orders has not been found")
	})
}

export async function await_order(
	config: Config,
	make_contract: string,
	maker: string,
	platform: Platform,
	max_tries: number,
	sleep: number,
	op_hash?: string,
	make_token_id?: BigNumber,
	status?: string,
	take_contract?: string,
	take_token_id?: BigNumber,
): Promise<string | undefined> {
	return retry(max_tries, sleep, async () => {
		const activities = await get_order_activities(config, {order_id: true},
			{
				make_contract: make_contract,
				make_token_id: make_token_id,
				maker: maker,
				platform: platform,
				status: "ACTIVE",
				take_contract: take_contract,
				take_token_id: take_token_id,
				op_hash: op_hash
			})
		console.log(activities)
		if (activities.length == 1) {
			return activities[0].order_id
		} else {
			throw new Error("Could not find order")
		}
	})
}


export async function get_orders(
	config: Config,
	request: marketplace_orderRequest,
	request_params: OrderDataRequest
): Promise<Array<marketplace_order>> {
	const client = createClient({
		url: config.dipdup
	})
	const orders = await client.chain.query.marketplace_order({
		where: process_query(request_params, false)
	}).get(request)
	return orders
}

export async function get_order_activities(
	config: Config,
	request: marketplace_activityRequest,
	request_params: OrderDataRequest
): Promise<Array<marketplace_activity>> {
	const client = createClient({
		url: config.dipdup
	})
	const activities = await client.chain.query.marketplace_activity({
		where: process_query(request_params, true)
	}).get(request)
	return activities
}

function process_query(request_params: OrderDataRequest, is_activity: boolean): { [key: string]: any } {
	const where: { [key: string]: any } = {};

	if (request_params.platform) {
		where.platform = {_eq: request_params.platform}
	}

	if (request_params.maker) {
		where.maker = {_eq: request_params.maker}
	}

	if (request_params.make_contract) {
		where.make_contract = {_eq: request_params.make_contract}
	}

	if (request_params.make_token_id) {
		where.make_token_id = {_eq: request_params.make_token_id.toString()}
	}

	if (request_params.take_contract) {
		where.take_contract = {_eq: request_params.take_contract}
	}

	if (request_params.take_token_id) {
		where.take_token_id = {_eq: request_params.take_token_id.toString()}
	}

	if (is_activity) {
		if (request_params.activity_id) {
			where.id = {_eq: request_params.activity_id}
		}
		if (request_params.order_id) {
			where.order_id = {_eq: request_params.order_id}
		}
		if (request_params.op_hash) {
			where.operation_hash = {_eq: request_params.op_hash}
		}
	} else {
		if (request_params.order_id) {
			where.id = {_eq: request_params.order_id}
		}
		if (request_params.status) {
			where.status = {_eq: request_params.status}
		}
	}

	return where
}