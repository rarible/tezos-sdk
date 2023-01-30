import {
	get_orders, get_orders_by_ids,
	OperationResult, OrderStatus,
	Provider,
	send_batch,
	TransactionArg
} from "@rarible/tezos-common";
import BigNumber from "bignumber.js";
import {MichelsonData} from "@taquito/michel-codec";
import {objkt_fulfill_ask_v2_arg} from "../v2/fulfill_ask";

export async function get_objkt_fulfill_ask_v1_transaction(
	provider: Provider,
	sale: string,
	make_price: BigNumber
): Promise<TransactionArg[]> {
	let args: TransactionArg[] = [];
	args = args.concat(objkt_fulfill_ask_v1_arg(provider,
		sale,
		make_price));
	if (args.length === 0) {
		throw new Error("Empty array of transaction arguments")
	}

	return args
}

export async function objkt_fulfill_ask_v1(
	provider: Provider,
	sale: string
): Promise<OperationResult> {
	const ask = await get_orders_by_ids(provider.config, [sale])
  if (!ask || !ask.orders.length) {
    throw new Error(`Order has not been found (${sale})`)
  }
	let args: TransactionArg[] = await get_objkt_fulfill_ask_v1_transaction(provider, ask.orders[0].data.internalOrderId, new BigNumber(ask.orders[0].makePrice))
	if (args.length === 0) {
		throw new Error("Empty array of transaction arguments")
	}
	const op = await send_batch(provider, args);
	await op.confirmation();
	return op
}


export function objkt_fulfill_ask_v1_arg(
	provider: Provider,
	sale: string,
	amount: BigNumber
): TransactionArg {
	const parameter: MichelsonData =
		{
			int: `${sale}`
		}
	return {destination: provider.config.objkt_sales_v1, entrypoint: "fulfill_ask", parameter, amount: amount};
}

