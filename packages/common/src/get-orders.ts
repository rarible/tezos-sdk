import {Config, OrderType, Platform, retry} from "./base"
import BigNumber from "bignumber.js"
import {
  createClient,
  legacy_orders,
  legacy_ordersRequest,
  marketplace_activity,
  marketplace_activityRequest,
  marketplace_order,
  marketplace_orderRequest
} from "@rarible/tezos-sdk/marketplace-client";
import {fetchWrapper, NetworkErrorCode} from "./fetch-wrapper";
import {GraphqlOperation} from "@genql/runtime/dist/client/generateGraphqlOperation";
import {ExecutionResult} from "@genql/runtime/src/types";

export interface OrderDataRequest {
	order_id?: string[],
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

export async function get_active_order_type(
	config: Config,
	order: OrderDataRequest
): Promise<OrderType | undefined> {
	return retry(30, 2000, async () => {
		const order_result = await get_orders(config, {platform: true},
			{
				make_contract: order.make_contract,
				make_token_id: order.make_token_id,
				maker: order.maker,
				status: "ACTIVE",
				take_contract: order.take_contract,
				take_token_id: order.take_token_id
			}
		)

		if (order_result.length > 0) {
			for (let i = 0; i < order_result.length; i++) {
				if (order_result[i].platform == "RARIBLE_V1") {
					return OrderType.V1
				} else if (order_result[i].platform == "RARIBLE_V2") {
					return OrderType.V2
				} else {
					throw new Error("Unrecognized order type: v1/v2 orders has not been found")
				}
			}
		} else {
			throw new Error("Unrecognized order type: v1/v2 orders has not been found")
		}

	})
}

export async function await_order(
	config: Config,
	order: OrderDataRequest,
	max_tries: number,
	sleep: number,
): Promise<string | undefined> {
	return retry(max_tries, sleep, async () => {
		const activities = await get_order_activities(config, {order_id: true}, order)
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
		url: config.dipdup,
    fetcher: createFetcher(config.dipdup),
	})
	const orders = await client.chain.query.marketplace_order({
		where: process_query(request_params, false)
	}).get(request)
	return orders
}


export async function get_legacy_orders(
	config: Config,
	request: legacy_ordersRequest,
	request_params: OrderDataRequest
): Promise<Array<legacy_orders>> {
	const client = createClient({
		url: config.dipdup,
    fetcher: createFetcher(config.dipdup),
  })
	const orders = await client.chain.query.legacy_orders({
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
		url: config.dipdup,
    fetcher: createFetcher(config.dipdup),
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
			where.order_id = {_in: request_params.order_id}
		}
		if (request_params.op_hash) {
			where.operation_hash = {_eq: request_params.op_hash}
		}
	} else {
		if (request_params.order_id) {
			where.id = {_in: request_params.order_id}
		}
		if (request_params.status) {
			where.status = {_eq: request_params.status}
		}
	}

	return where
}

function createFetcher(url: string): (body: GraphqlOperation | GraphqlOperation[]) => Promise<ExecutionResult> {
  return async (body: GraphqlOperation | GraphqlOperation[]): Promise<ExecutionResult> => {
    const res = await fetchWrapper(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body),
      defaultErrorCode: NetworkErrorCode.TEZOS_EXTERNAL_ERR
    })
    return res.json()
  }
}
