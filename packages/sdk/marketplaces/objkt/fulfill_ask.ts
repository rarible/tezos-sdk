import {
	get_orders,
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
): Promise<TransactionArg[]> {
	let args: TransactionArg[] = [];
	const ask = await get_orders(provider.config,
		{internal_order_id: true, take_value: true},
		{order_id: [sale], status: OrderStatus.ACTIVE})
	if (ask != undefined && ask.length == 1) {
		args = args.concat(objkt_fulfill_ask_v2_arg(provider,
			ask[0].internal_order_id,
			ask[0].take_value));
		if (args.length === 0) {
			throw new Error("Empty array of transaction arguments")
		}
	} else {
		throw new Error("OBJKT V2 order does not exist")
	}
	return args
}

export async function objkt_fulfill_ask_v2(
	provider: Provider,
	sale: string
): Promise<OperationResult | undefined> {
	let args: TransactionArg[] = await get_objkt_fulfill_ask_v2_transaction(provider, sale)
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

