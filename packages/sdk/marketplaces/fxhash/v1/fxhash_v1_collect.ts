import {
	get_orders, get_orders_by_ids,
	OperationResult, OrderStatus,
	Provider,
	send_batch,
	TransactionArg
} from "@rarible/tezos-common";
import BigNumber from "bignumber.js";
import {MichelsonData} from "@taquito/michel-codec";

export async function get_fxhash_v1_collect_transaction(
	provider: Provider,
	sale: string,
): Promise<TransactionArg[]> {
	let args: TransactionArg[] = [];
	const ask = await get_orders_by_ids(provider.config, [sale])
	if (ask != undefined && ask.orders.length == 1) {
		args = args.concat(fxhash_v1_collect_arg(provider, ask.orders[0].internal_order_id, new BigNumber(ask.orders[0].make_price)));
		if (args.length === 0) {
			throw new Error("Empty array of transaction arguments")
		}
	} else {
		throw new Error("FXHASH V1 order does not exist")
	}
	return args
}

export async function fxhash_v1_collect(
	provider: Provider,
	sale: string
): Promise<OperationResult | undefined> {
	let args: TransactionArg[] = await get_fxhash_v1_collect_transaction(provider, sale)
	if (args.length === 0) {
		throw new Error("Empty array of transaction arguments")
	}
	const op = await send_batch(provider, args);
	await op.confirmation();
	return op
}

export function fxhash_v1_collect_arg(
	provider: Provider,
	sale: string,
	amount: BigNumber
): TransactionArg {
	const parameter: MichelsonData =
		{
			int: `${sale}`
		}
	return {destination: provider.config.fxhash_sales_v1, entrypoint: "collect", parameter, amount: amount};
}

