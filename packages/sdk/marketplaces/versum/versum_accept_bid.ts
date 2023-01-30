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


export async function get_versum_accept_bid_transaction(
	provider: Provider,
	sale: string,
	take_contract: string,
	take_token_id: string
): Promise<TransactionArg[]> {
	let args: TransactionArg[] = [];
	const seller = await get_address(provider);

	const approve_a = await approve_v2(
		provider,
		seller,
		AssetTypeV2.FA2,
		provider.config.versum_marketplace,
		take_contract,
		new BigNumber(take_token_id!)
	);
	if (approve_a) args = args.concat(approve_a);
	args = args.concat(versum_accept_bid_arg(provider, sale));

	return args
}

export async function versum_accept_bid(
	provider: Provider,
	sale: string,
): Promise<OperationResult> {
	const ask = await get_orders_by_ids(provider.config, [sale])
  if (!ask) {
    throw new Error(`Order has not been found (${sale})`)
  }
  let args: TransactionArg[] = await get_versum_accept_bid_transaction(provider, ask.orders[0].data.internalOrderId, ask.orders[0].take.contract, ask.orders[0].take.tokenId);
	if (args.length === 0) {
		throw new Error("Empty array of transaction arguments")
	}
  const op = await send_batch(provider, args);
  await op.confirmation();
  return op
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

