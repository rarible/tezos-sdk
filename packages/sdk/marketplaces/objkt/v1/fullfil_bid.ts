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

export async function get_objkt_fulfill_bid_v1_transaction(
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
			provider.config.objkt_sales_v1,
			ask[0].take_contract,
			new BigNumber(ask[0].take_token_id!)
		);
		if (approve_a) args = args.concat(approve_a);
		args = args.concat(objkt_fulfill_bid_v1_arg(provider,
			ask[0].internal_order_id));
		if (args.length === 0) {
			throw new Error("Empty array of transaction arguments")
		}
	} else {
		throw new Error("OBJKT V2 order does not exist")
	}
	return args
}

export async function objkt_fulfill_bid_v1(
	provider: Provider,
	sale: string
): Promise<OperationResult | undefined> {
	let args: TransactionArg[] = await get_objkt_fulfill_bid_v1_transaction(provider, sale)
	if (args.length === 0) {
		throw new Error("Empty array of transaction arguments")
	}
	const op = await send_batch(provider, args);
	await op.confirmation();
	return op
}


export function objkt_fulfill_bid_v1_arg(
	provider: Provider,
	sale: string
): TransactionArg {
	const parameter: MichelsonData =
		{
			int: `${sale}`
		}
	return {destination: provider.config.objkt_sales_v1, entrypoint: "fulfill_bid", parameter};
}

