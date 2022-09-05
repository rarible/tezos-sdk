import {MichelsonData} from "@taquito/michel-codec"
import {
	Provider,
	send_batch,
	get_public_key,
	OperationResult,
	Asset,
	get_address,
	FTAssetType,
	get_decimals,
	Part,
	approve_arg, TransactionArg
} from "@rarible/tezos-common"
import {OrderForm, fill_offchain_royalties} from "./utils"
import {invert_order} from "./invert-order"
import {get_make_fee} from "./get-make-fee"
import {add_fee} from "./add-fee"
import {order_to_struct, some_struct, none_struct} from "./sign-order"
import BigNumber from "bignumber.js"

export interface FillOrderRequest {
	amount: BigNumber;
	payouts?: Array<Part>;
	origin_fees?: Array<Part>;
	use_all?: boolean;
	edpk?: string
}

async function get_make_asset(
	provider: Provider,
	order: OrderForm,
	amount: BigNumber,
	edpk: string
): Promise<Asset> {
	const inverted = invert_order(order, amount, edpk)
	const make_fee = get_make_fee(provider.config.fees, inverted)
	return add_fee(provider, inverted.make, make_fee)
}

async function get_real_value(provider: Provider, order: OrderForm): Promise<BigNumber> {
	const fee = get_make_fee(provider.config.fees, order)
	const make = await add_fee(provider, order.make, fee)
	return make.value
}

export async function match_order_to_struct(
	p: Provider,
	left: OrderForm,
	right: OrderForm
): Promise<MichelsonData> {
	return {
		prim: "Pair", args: [
			await order_to_struct(p, left),
			{
				prim: "Pair", args: [
					(left.signature) ? some_struct({string: left.signature}) : none_struct(),
					{
						prim: "Pair", args: [
							await order_to_struct(p, right),
							(right.signature) ? some_struct({string: right.signature}) : none_struct()]
					}]
			}]
	}
}



export async function get_rarible_legacy_buy_transaction(
	provider: Provider,
	left: OrderForm,
	request: FillOrderRequest
): Promise<TransactionArg[]> {
	const pk = (request.edpk) ? request.edpk : await get_public_key(provider)
	if (!pk) throw new Error("cannot get public key")
	const make = await get_make_asset(provider, left, request.amount, pk)
	let right: OrderForm = {
		...invert_order(left, request.amount, pk),
		data: {
			...left.data,
			payouts: request.payouts || [],
			origin_fees: request.origin_fees || [],
		},
	}
	right = await fill_offchain_royalties(provider, right)

	let amount_to_approve = undefined
	let amount = undefined
	if ((left.make.asset_type.asset_class === "XTZ" || left.make.asset_type.asset_class === "FT") && left.salt == '0') {
		amount = await get_real_value(provider, left)
		if (left.make.asset_type.asset_class === "FT") {
			const asset = left.make.asset_type as FTAssetType
			const decimals = await get_decimals(provider.config, asset.contract, asset.token_id)
			amount_to_approve = amount.times(new BigNumber("10").pow(decimals))
		}
	} else if ((right.make.asset_type.asset_class === "XTZ" || right.make.asset_type.asset_class === "FT") && right.salt == '0') {
		amount = await get_real_value(provider, right)
		if (right.make.asset_type.asset_class === "FT") {
			const asset = right.make.asset_type as FTAssetType
			const decimals = await get_decimals(provider.config, asset.contract, asset.token_id)
			amount_to_approve = amount.times(new BigNumber("10").pow(decimals))
		}
	}

	const arg_approve =
		(make.asset_type.asset_class != "XTZ")
			? await approve_arg(provider, await get_address(provider), make, amount_to_approve!, request.use_all)
			: undefined
	let args = (arg_approve) ? [arg_approve] : []

	const parameter = await match_order_to_struct(provider, left, right)
	args = args.concat({
		destination: provider.config.exchange, entrypoint: "match_orders", parameter, amount
	})
	return args
}

export async function fill_order(
	provider: Provider,
	left: OrderForm,
	request: FillOrderRequest,
): Promise<OperationResult> {
	const args = await get_rarible_legacy_buy_transaction(provider, left, request)
	return send_batch(provider, args)
}
