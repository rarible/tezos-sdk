import {
	approve_v2, AssetTypeV2,
	get_orders, get_orders_by_ids,
	OperationResult, OrderStatus,
	Provider,
	send_batch,
	TransactionArg
} from "@rarible/tezos-common";
import {MichelsonData} from "@taquito/michel-codec";
import BigNumber from "bignumber.js";


export async function get_versum_accept_bid_transaction(
	provider: Provider,
	sale: string,
): Promise<TransactionArg[]> {
	let args: TransactionArg[] = [];
	const ask = await get_orders_by_ids(provider.config, [sale])
	if (ask != undefined && ask.orders.length == 1) {
		const seller = await provider.tezos.address();

		const approve_a = await approve_v2(
			provider,
			seller,
			AssetTypeV2.FA2,
			provider.config.versum_marketplace,
			ask.orders[0].take_contract,
			new BigNumber(ask.orders[0].take_token_id!)
		);
		if (approve_a) args = args.concat(approve_a);
		args = args.concat(versum_accept_bid_arg(provider, ask.orders[0].internal_order_id));

		return args
	} else {
		return []
	}
}

export async function versum_accept_bid(
	provider: Provider,
	sale: string,
): Promise<OperationResult | undefined> {
	let args: TransactionArg[] = await get_versum_accept_bid_transaction(provider, sale);
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
}

export function versum_accept_bid_arg(
	provider: Provider,
	sale: string,
): TransactionArg {
	const parameter: MichelsonData =
		{
			int: `${sale}`
		}
	return {destination: provider.config.versum_marketplace, entrypoint: "accept_offer", parameter};
}

