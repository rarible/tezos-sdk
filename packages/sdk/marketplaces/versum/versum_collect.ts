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
	make_price: BigNumber,
	qty: BigNumber
): Promise<TransactionArg[]> {
	let args: TransactionArg[] = [];
	args = args.concat(versum_collect_arg(provider, sale, new BigNumber(make_price), qty));
	if (args.length === 0) {
		throw new Error("Empty array of transaction arguments")
	}
	return args
}

export async function versum_collect(
	provider: Provider,
	sale: string,
	qty: BigNumber
): Promise<OperationResult> {
	const ask = await get_orders_by_ids(provider.config, [sale])
  if (!ask) {
    throw new Error(`Order has not been found (${sale})`)
  }
	let args: TransactionArg[] = await get_versum_collect_transaction(provider, ask.orders[0].data.internalOrderId, new BigNumber(ask.orders[0].makePrice), qty)
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

