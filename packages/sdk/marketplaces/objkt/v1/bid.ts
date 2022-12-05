import {
	absolute_amount,
	approve_v2,
	AssetTypeV2, await_order, get_royalties,
	OrderStatus,
	Part, Platform, ProtocolActivity,
	Provider,
	send_batch,
	TransactionArg
} from "@rarible/tezos-common";
import BigNumber from "bignumber.js";
import {MichelsonData} from "@taquito/michel-codec";
import {get_address} from "@rarible/tezos-common";


export declare type ObjktBidV1Form = {
	token_contract: string;
	token_id: BigNumber;
	artist: string;
	amount: BigNumber;
	shares: Array<Part>;
}

export function objkt_bid_v1_arg(
	provider: Provider,
	bid: ObjktBidV1Form,
	royalties: BigNumber,
): TransactionArg {
	const parameter: MichelsonData = {
		prim: "Pair",
		args: [
			{
				prim: "Pair",
				args: [
					{
						string: `${bid.artist}`
					},
					{
						string: `${bid.token_contract}`
					}
				]
			},
			{
				prim: "Pair",
				args: [
					{
						int: `${bid.token_id}`
					},
					{
						int: `${royalties.toFixed()}`
					}
				]
			}
		]
	};
	return {destination: provider.config.objkt_sales_v1, entrypoint: "bid", parameter, amount: bid.amount};
}

export async function objkt_bid_v1(
	provider: Provider,
	bid: ObjktBidV1Form,
): Promise<string> {
	let args: TransactionArg[] = [];
	const bidder = await get_address(provider)

	bid.shares = await get_royalties(provider, bid.token_contract, bid.token_id)
	for(let share of bid.shares){
		share.value = new BigNumber(share.value).div(10)
	}
	bid.artist = bid.shares[0].account
	args = args.concat(objkt_bid_v1_arg(provider, bid, bid.shares[0].value));
	if (args.length === 0) {
		throw new Error("Empty array of sell args")
	}
	try{
		const op = await send_batch(provider, args);
		await op.confirmation();
		console.log(op.hash)
		const order_id = await await_order(provider.config, `${bid.token_contract}:${bid.token_id}`, op.hash, ProtocolActivity.BID, bidder, 20, 2000)
		if (order_id == undefined || order_id.length == 0) {
			throw new Error("Order was not found")
		}
		return order_id
	} catch (e) {
		console.log(JSON.stringify(e))
		throw new Error("Could not submit order: " + e)
	}

}
