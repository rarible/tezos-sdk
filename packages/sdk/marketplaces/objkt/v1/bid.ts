import {
	absolute_amount,
	approve_v2,
	AssetTypeV2, await_order, get_royalties,
	OrderStatus,
	Part, Platform,
	Provider,
	send_batch,
	TransactionArg
} from "@rarible/tezos-common";
import BigNumber from "bignumber.js";
import {MichelsonData} from "@taquito/michel-codec";


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
	processed_amount: BigNumber
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
	return {destination: provider.config.objkt_sales_v1, entrypoint: "bid", parameter, amount: processed_amount};
}

export async function objkt_bid_v1(
	provider: Provider,
	bid: ObjktBidV1Form,
): Promise<string> {
	let args: TransactionArg[] = [];
	const seller = await provider.tezos.address();
	const processed_amount = await absolute_amount(provider.config, bid.amount, AssetTypeV2.XTZ, undefined, undefined)

	const approve_a = await approve_v2(
		provider,
		seller,
		AssetTypeV2.FA2,
		provider.config.objkt_sales_v1,
		bid.token_contract,
		bid.token_id
	);
	if (approve_a) args = args.concat(approve_a);
	bid.shares = await get_royalties(provider, bid.token_contract, bid.token_id)
	for(let share of bid.shares){
		share.value = new BigNumber(share.value).div(10)
	}
	args = args.concat(objkt_bid_v1_arg(provider, bid, bid.shares[0].value, processed_amount));
	if (args.length === 0) {
		throw new Error("Empty array of sell args")
	}
	try{
		const op = await send_batch(provider, args);
		await op.confirmation();
		console.log(op.hash)
		const order_id = await await_order(provider.config,
			{
				take_contract: bid.token_contract,
				maker: seller,
				platform: Platform.OBJKT_V1,
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