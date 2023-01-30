import {
	get_orders, get_orders_by_ids,
	OperationResult, OrderStatus,
	Provider,
	send_batch,
	TransactionArg
} from "@rarible/tezos-common";
import BigNumber from "bignumber.js";
import {MichelsonData} from "@taquito/michel-codec";

export async function get_fxhash_v2_listing_accept_transaction(
	provider: Provider,
	sale: string,
	make_price: BigNumber
): Promise<TransactionArg[]> {
	let args: TransactionArg[] = [];
	args = args.concat(fxhash_v2_listing_accept_arg(provider, sale, make_price));
	if (args.length === 0) {
		throw new Error("Empty array of transaction arguments")
	}
	return args
}

export async function fxhash_v2_listing_accept(
	provider: Provider,
	sale: string
): Promise<OperationResult> {
	const ask = await get_orders_by_ids(provider.config, [sale])
  if (!ask || !ask.orders.length) {
    throw new Error(`Order has not been found (${sale})`)
  }
	let args: TransactionArg[] = await get_fxhash_v2_listing_accept_transaction(provider, ask.orders[0].data.internalOrderId, ask.orders[0].makePrice)
	if (args.length === 0) {
		throw new Error("Empty array of transaction arguments")
	}
	const op = await send_batch(provider, args);
	await op.confirmation();
	return op
}

export function fxhash_v2_listing_accept_arg(
	provider: Provider,
	sale: string,
	price: BigNumber
): TransactionArg {
	const parameter: MichelsonData =
		{
			int: `${sale}`
		}
	return {destination: provider.config.fxhash_sales_v2, entrypoint: "listing_accept", parameter, amount: price};
}

