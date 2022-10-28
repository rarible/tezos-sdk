import {
	await_order, OrderStatus, Platform,
	Provider, send_batch,
	TransactionArg
} from "@rarible/tezos-common";
import BigNumber from "bignumber.js";
import {MichelsonData} from "@taquito/michel-codec";

export declare type VersumBidForm = {
	contract: string;
	editions: BigNumber;
	token_id: BigNumber;
	price_per_item: BigNumber;
}

export function versum_bid_arg(
	provider: Provider,
	bid: VersumBidForm,
): TransactionArg {
	const parameter: MichelsonData = {
		prim: "Pair",
		args: [
			{
				prim: "Pair",
				args: [
					{
						prim: "None"
					},
					{
						int: "0"
					}
				]
			},
			{
				prim: "Pair",
				args: [
					{
						prim: "False"
					},
					{
						prim: "Pair",
						args: [
							{
								prim: "Pair",
								args: [
									{
										string: `${bid.contract}`
									},
									{
										int: `${bid.token_id}`
									}
								]
							},
							{
								int: `${bid.editions}`
							}
						]
					}
				]
			}
		]
	}
	return {destination: provider.config.versum_marketplace, entrypoint: "make_offer", parameter, amount: bid.price_per_item};
}

export async function versum_bid(
	provider: Provider,
	bid: VersumBidForm,
): Promise<string> {
	let args: TransactionArg[] = [];
	const bidder = await provider.tezos.address();

	args = args.concat(versum_bid_arg(provider, bid));
	if (args.length === 0) {
		throw new Error("Empty array of sell args")
	}
	try{
		const op = await send_batch(provider, args);
		await op.confirmation();
		console.log(op.hash)
		const order_id = await await_order(provider.config,
			{
				take_contract: bid.contract,
				maker: bidder,
				platform: Platform.VERSUM_V1,
				op_hash: op.hash,
				take_token_id: bid.token_id,
				status: OrderStatus.ACTIVE
			},
			40,
			2000)
		if (order_id == undefined || order_id.length == 0) {
			throw new Error("Order was not found")
		}
		return order_id
	} catch (e) {
		console.log(JSON.stringify(e))
		throw new Error("Could not submit order: " + e)
	}

}