import {
	get_orders, get_orders_by_ids,
	OperationResult, OrderStatus,
	Provider,
	send_batch,
	TransactionArg
} from "@rarible/tezos-common";
import {MichelsonData} from "@taquito/michel-codec";

export async function versum_cancel_bid(
	provider: Provider,
	sale: string,
): Promise<OperationResult> {
	let args: TransactionArg[] = [];
	const ask = await get_orders_by_ids(provider.config, [sale])
  if (!ask) {
    throw new Error(`Order has not been found (${sale})`)
  }
  args = args.concat(versum_cancel_bid_arg(provider, ask[0].data.internalOrderId));
  if (args.length === 0) {
    throw new Error("Empty array of transaction arguments")
  }
  const op = await send_batch(provider, args);
  await op.confirmation();
  return op
}

export function versum_cancel_bid_arg(
	provider: Provider,
	sale: string,
): TransactionArg {
	const parameter: MichelsonData =
		{
			int: `${sale}`
		}
	return {destination: provider.config.versum_marketplace, entrypoint: "cancel_offer", parameter};
}

