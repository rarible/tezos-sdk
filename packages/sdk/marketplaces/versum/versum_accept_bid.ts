import {
	approve_v2, AssetTypeV2,
	get_orders,
	OperationResult, OrderStatus,
	Provider,
	send_batch,
	TransactionArg
} from "@rarible/tezos-common";
import {MichelsonData} from "@taquito/michel-codec";
import BigNumber from "bignumber.js";
import {get_address} from "@rarible/tezos-common";


export async function get_versum_accept_bid_transaction(
	provider: Provider,
	sale: string,
): Promise<TransactionArg[]> {
	let args: TransactionArg[] = [];
	const ask = await get_orders(provider.config,
		{internal_order_id: true, take_contract: true, take_token_id: true},
		{order_id: [sale], status: OrderStatus.ACTIVE})
	if (ask != undefined && ask.length == 1) {
		const seller = await get_address(provider);

		const approve_a = await approve_v2(
			provider,
			seller,
			AssetTypeV2.FA2,
			provider.config.versum_marketplace,
			ask[0].take_contract,
			new BigNumber(ask[0].take_token_id!)
		);
		if (approve_a) args = args.concat(approve_a);
		args = args.concat(versum_accept_bid_arg(provider, ask[0].internal_order_id));

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

