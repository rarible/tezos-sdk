import {
	get_orders,
	OperationResult, OrderStatus,
	Provider,
	send_batch,
	TransactionArg
} from "@rarible/tezos-common";
import BigNumber from "bignumber.js";
import {MichelsonData} from "@taquito/michel-codec";

export async function objkt_fulfill_ask_v1(
	provider: Provider,
	sale: string,
): Promise<OperationResult | undefined> {
	let args: TransactionArg[] = [];
	const ask = await get_orders(provider.config,
		{internal_order_id: true, make_price: true},
		{order_id: [sale], status: OrderStatus.ACTIVE})
	if (ask != undefined && ask.length == 1) {
		args = args.concat(objkt_fulfill_ask_v1_arg(provider, ask[0].internal_order_id, new BigNumber(ask[0].make_price)));
		if (args.length === 0) {
			throw new Error("Empty array of transaction arguments")
		}
		try {
			const op = await send_batch(provider, args);
			await op.confirmation();
			return op
		} catch (e) {
			console.log((e as Error).message)
		}


	} else {
		return undefined
	}
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

