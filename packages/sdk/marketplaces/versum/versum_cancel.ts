import {
	get_orders, get_orders_by_ids,
	OperationResult, OrderStatus,
	Provider,
	send_batch,
	TransactionArg
} from "@rarible/tezos-common";
import {MichelsonData} from "@taquito/michel-codec";

export async function versum_cancel_swap(
	provider: Provider,
	sale: string,
): Promise<OperationResult | undefined> {
	let args: TransactionArg[] = [];
	const ask = await get_orders_by_ids(provider.config, [sale])

	if (ask != undefined && ask.orders.length == 1) {
		args = args.concat(versum_cancel_arg(provider, ask.orders[0].internal_order_id));
		if (args.length === 0) {
			throw new Error("Empty array of transaction arguments")
		}
		try {
			const op = await send_batch(provider, args);
			await op.confirmation();
			return op
		} catch (e) {
			console.log(JSON.stringify(e))
			console.log((e as Error).message)
		}
	} else {
		return undefined
	}
}

export function versum_cancel_arg(
	provider: Provider,
	sale: string,
): TransactionArg {
	const parameter: MichelsonData =
		{
			int: `${sale}`
		}
	return {destination: provider.config.versum_marketplace, entrypoint: "cancel_swap", parameter};
}

