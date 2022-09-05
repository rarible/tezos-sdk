import {
	get_orders,
	OperationResult, OrderStatus,
	Provider,
	send_batch,
	TransactionArg
} from "@rarible/tezos-common";
import {MichelsonData} from "@taquito/michel-codec";

export async function fxhash_v2_cancel_listing(
	provider: Provider,
	sale: string,
): Promise<OperationResult | undefined> {
	let args: TransactionArg[] = [];
	const ask = await get_orders(provider.config,
		{internal_order_id: true},
		{order_id: [sale], status: OrderStatus.ACTIVE})
	if (ask != undefined && ask.length == 1) {
		args = args.concat(fxhash_v2_cancel_offer_arg(provider, ask[0].internal_order_id));
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

export function fxhash_v2_cancel_offer_arg(
	provider: Provider,
	sale: string,
): TransactionArg {
	const parameter: MichelsonData =
		{
			int: `${sale}`
		}
	return {destination: provider.config.fxhash_sales_v2, entrypoint: "cancel_offer", parameter};
}

