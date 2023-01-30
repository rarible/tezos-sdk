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
import {get_address} from "@rarible/tezos-common";

export async function get_objkt_fulfill_bid_v1_transaction(
	provider: Provider,
	sale: string,
	take_contract: string,
	take_token_id: string,
): Promise<TransactionArg[]> {
	let args: TransactionArg[] = [];
	const seller = await get_address(provider);
	const approve_a = await approve_v2(
		provider,
		seller,
		AssetTypeV2.FA2,
		provider.config.objkt_sales_v1,
		take_contract,
		new BigNumber(take_token_id!)
	);
	if (approve_a) args = args.concat(approve_a);
	args = args.concat(objkt_fulfill_bid_v1_arg(provider,
		sale));
	if (args.length === 0) {
		throw new Error("Empty array of transaction arguments")
	}
	return args
}

export async function objkt_fulfill_bid_v1(
	provider: Provider,
	sale: string
): Promise<OperationResult> {
	const ask = await get_orders_by_ids(provider.config, [sale])
  if (!ask || !ask.orders.length) {
    throw new Error(`Order has not been found (${sale})`)
  }
	let args: TransactionArg[] = await get_objkt_fulfill_bid_v1_transaction(provider, ask.orders[0].take.contract, ask.orders[0].take.tokenId, ask.orders[0].data.internalOrderId)
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

