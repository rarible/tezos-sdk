import {
	get_orders, get_orders_by_ids,
	OperationResult, OrderStatus,
	Provider,
	send_batch,
	TransactionArg
} from "@rarible/tezos-common";
import BigNumber from "bignumber.js";
import {MichelsonData} from "@taquito/michel-codec";

export async function get_versum_collect_transaction(
	provider: Provider,
	sale: string,
	qty: BigNumber
): Promise<TransactionArg[]> {
	let args: TransactionArg[] = [];
	const ask = await get_orders_by_ids(provider.config, [sale])
	if (ask != undefined && ask.orders.length == 1) {
		args = args.concat(versum_collect_arg(provider, ask.orders[0].internal_order_id, new BigNumber(ask.orders[0].make_price), qty));
		if (args.length === 0) {
			throw new Error("Empty array of transaction arguments")
		}
	} else {
		throw new Error("VERSUM order does not exist")
	}
	return args
}

export async function versum_collect(
	provider: Provider,
	sale: string,
	qty: BigNumber
): Promise<OperationResult | undefined> {
	let args: TransactionArg[] = await get_versum_collect_transaction(provider, sale, qty)
	if (args.length === 0) {
		throw new Error("Empty array of transaction arguments")
	}
	const op = await send_batch(provider, args);
	await op.confirmation();
	return op
}

export function versum_collect_arg(
	provider: Provider,
	sale: string,
	amount: BigNumber,
	qty: BigNumber
): TransactionArg {
	const parameter: MichelsonData ={
		prim: "Pair",
		args: [
			{
				int: `${qty}`
			},
			{
				int: `${sale}`
			}
		]
	}
	return {destination: provider.config.versum_marketplace, entrypoint: "collect_swap", parameter, amount: amount};
}

