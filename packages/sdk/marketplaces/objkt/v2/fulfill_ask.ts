import {
	get_orders, get_orders_by_ids,
	OperationResult, OrderStatus,
	Provider,
	send_batch,
	TransactionArg
} from "@rarible/tezos-common";
import BigNumber from "bignumber.js";
import {MichelsonData} from "@taquito/michel-codec";

export async function get_objkt_fulfill_ask_v2_transaction(
	provider: Provider,
	sale: string,
	make_price: BigNumber
): Promise<TransactionArg[]> {
	let args: TransactionArg[] = [];
	args = args.concat(objkt_fulfill_ask_v2_arg(provider,
		sale,
		make_price));
	if (args.length === 0) {
		throw new Error("Empty array of transaction arguments")
	}
	return args
}

export async function objkt_fulfill_ask_v2(
	provider: Provider,
	sale: string
): Promise<OperationResult> {
	const ask = await get_orders_by_ids(provider.config, [sale])
  if (!ask || !ask.orders.length) {
    throw new Error(`Order has not been found (${sale})`)
  }
	let args: TransactionArg[] = await get_objkt_fulfill_ask_v2_transaction(provider, ask.orders[0].data.internalOrderId, ask.orders[0].makePrice)
	if (args.length === 0) {
		throw new Error("Empty array of transaction arguments")
	}
	const op = await send_batch(provider, args);
	await op.confirmation();
	return op
}


export function objkt_fulfill_ask_v2_arg(
	provider: Provider,
	sale: string,
	amount: BigNumber
): TransactionArg {
	const parameter: MichelsonData =
		{
			prim: "Pair",
			args: [{
				int: sale
			},
				{
					prim: "None"
				}
			]
		}

	return {destination: provider.config.objkt_sales_v2, entrypoint: "fulfill_ask", parameter, amount: amount};
}
