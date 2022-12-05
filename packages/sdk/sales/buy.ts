import {
	absolute_amount,
	are_royalties_on_chain,
	AssetTypeV2,
	BundleItem, Config, get_ft_type,
	get_royalties,
	getAsset,
	mkPackedBundle,
	OperationResult,
	Part,
	parts_to_micheline, process_token_id,
	Provider,
	send_batch,
	StorageSalesV2,
	TransactionArg,
  get_address,
  get_storage
} from "@rarible/tezos-common";
import BigNumber from "bignumber.js";
import {MichelsonData} from "@taquito/michel-codec";
import {approve_v2} from "@rarible/tezos-common/build/approve";

export declare type BuyRequest = {
	asset_contract: string;
	asset_token_id: BigNumber;
	asset_seller: string;
	sale_type: AssetTypeV2;
	sale_asset_contract?: string;
	sale_asset_token_id?: BigNumber;
	sale_amount: BigNumber;
	sale_qty: BigNumber;
	sale_payouts: Array<Part>;
	sale_origin_fees: Array<Part>;
	use_all?: boolean;
}

export declare type BuyBundleRequest = {
	bundle: Array<BundleItem>
	asset_seller: string;
	sale_type: AssetTypeV2;
	sale_asset_contract?: string;
	sale_asset_token_id?: BigNumber;
	sale_amount: BigNumber;
	sale_qty: BigNumber;
	sale_payouts: Array<Part>;
	sale_origin_fees: Array<Part>;
	use_all?: boolean;
}

export async function process_buy_request(config: Config, order: BuyRequest): Promise<BuyRequest>{
	if(order.sale_asset_contract != undefined){
		const ft_type_res = await get_ft_type(config, order.sale_asset_contract)
		if(ft_type_res != undefined){
			order.sale_type = ft_type_res
			order.sale_asset_token_id = process_token_id(order.sale_type, order.sale_asset_token_id)
		}
	}
	return order
}

export async function get_rarible_v2_buy_transaction(
	provider: Provider,
	sale: BuyRequest,
	use_all = false
): Promise<TransactionArg[]> {
	let args: TransactionArg[] = [];
	const seller = await get_address(provider)

	sale = await process_buy_request(provider.config, sale)

	const processed_amount = await absolute_amount(provider.config,
		sale.sale_amount,
		sale.sale_type,
		sale.sale_asset_contract,
		sale.sale_asset_token_id)

	const approve_a = await approve_v2(
		provider,
		seller,
		sale.sale_type,
		provider.config.transfer_manager,
		sale.sale_asset_contract,
		sale.sale_asset_token_id,
		processed_amount.times(sale.sale_qty),
		use_all
	);
	if (approve_a) {
		args = args.concat(approve_a);
	}

	const is_on_chain = await are_royalties_on_chain(provider, sale.asset_contract, new BigNumber(sale.asset_token_id))

	if (!is_on_chain) {
		const royalties = await get_royalties(provider, sale.asset_contract, new BigNumber(sale.asset_token_id))
		sale.sale_origin_fees = sale.sale_origin_fees.concat(royalties)
	}

	args = args.concat(buy_arg_v2(provider, sale));
	return args
}

export async function buyV2(
	provider: Provider,
	sale: BuyRequest,
	use_all = false
): Promise<OperationResult> {
	const args = await get_rarible_v2_buy_transaction(provider, sale, use_all)
	if (args.length === 0) {
		throw new Error("Empty array of transaction arguments")
	}
	const op = await send_batch(provider, args);
	await op.confirmation();
	return op
}

export async function buy_bundle(
	provider: Provider,
	sale: BuyBundleRequest,
	use_all = false
) {
	let args: TransactionArg[] = [];
	const seller = await get_address(provider);
	const processed_amount = await absolute_amount(provider.config,
		sale.sale_amount,
		sale.sale_type,
		sale.sale_asset_contract,
		sale.sale_asset_token_id)

	const approve_a = await approve_v2(
		provider,
		seller,
		sale.sale_type,
		provider.config.transfer_manager,
		sale.sale_asset_contract,
		sale.sale_asset_token_id,
		processed_amount,
		use_all
	);
	if (approve_a) args = args.concat(approve_a);
	args = args.concat(buy_bundle_arg(provider, sale));
	if (args.length != 0) {
		const op = await send_batch(provider, args);
		await op.confirmation();
		console.log(op)
		return op
	}
}

export async function buy_v2_batch(
	provider: Provider,
	sale_form: Array<BuyRequest>,
	use_all = false
) {
	let args: TransactionArg[] = [];
	const seller = await get_address(provider);

	for (const sale of sale_form) {
		const processed_amount = await absolute_amount(provider.config,
			sale.sale_amount,
			sale.sale_type,
			sale.sale_asset_contract,
			sale.sale_asset_token_id)
		const approve_a = await approve_v2(
			provider,
			seller,
			sale.sale_type,
			provider.config.transfer_manager,
			sale.sale_asset_contract,
			sale.sale_asset_token_id,
			processed_amount,
			use_all
		);
		if (approve_a) args = args.concat(approve_a);
		args = args.concat(buy_arg_v2(provider, sale));
	}

	if (args.length != 0) {
		const op = await send_batch(provider, args);
		await op.confirmation();
		console.log(op)
		return op
	}
}

export function buy_arg_v2(
	provider: Provider,
	sale: BuyRequest
): TransactionArg {
	let amount: BigNumber = new BigNumber(0)

	if (sale.sale_type == AssetTypeV2.XTZ) {
		amount = new BigNumber(sale.sale_amount).times(sale.sale_qty)
	}

	const parameter: MichelsonData =
		{
			prim: "Pair",
			args:
				[{string: `${sale.asset_contract}`},
					{
						prim: "Pair",
						args:
							[{int: `${sale.asset_token_id}`},
								{
									prim: "Pair",
									args:
										[{string: `${sale.asset_seller}`},
											{
												prim: "Pair",
												args:
													[{int: `${sale.sale_type}`},
														{
															prim: "Pair",
															args:
																[{
																	bytes: getAsset(sale.sale_type,
																		sale.sale_asset_contract,
																		sale.sale_asset_token_id)
																},
																	{
																		prim: "Pair",
																		args:
																			[{int: `${sale.sale_qty}`},
																				{
																					prim: "Pair", args: [
																						parts_to_micheline(sale.sale_origin_fees),
																						parts_to_micheline(sale.sale_payouts)
																					]
																				}
																			]
																	}]
														}]
											}]
								}]
					}]
		}

	return {destination: provider.config.sales, entrypoint: "buy", parameter, amount: amount};
}

export function buy_bundle_arg(
	provider: Provider,
	sale: BuyBundleRequest
): TransactionArg {
	let amount: BigNumber = new BigNumber(0)

	if (sale.sale_type == AssetTypeV2.XTZ) {
		amount = new BigNumber(sale.sale_amount).times(sale.sale_qty)
	}

	const parameter: MichelsonData =
		{
			prim: "Pair",
			args:
				[{bytes: mkPackedBundle(sale.bundle)},
					{
						prim: "Pair",
						args:
							[{string: `${sale.asset_seller}`},
								{
									prim: "Pair",
									args:
										[{int: `${sale.sale_type}`},
											{
												prim: "Pair",
												args:
													[{
														bytes: getAsset(sale.sale_type,
															sale.sale_asset_contract,
															sale.sale_asset_token_id)
													},
														{
															prim: "Pair",
															args:
																[{int: `${sale.sale_qty}`},
																	{prim: "Pair", args: [[], []]}]
														}]
											}]
								}]
					}]
		}

	return {destination: provider.config.sales, entrypoint: "buy_bundle", parameter, amount: amount};
}

export async function isExistsSaleOrder(provider: Provider, buyRequest: BuyRequest): Promise<boolean> {
	const st: StorageSalesV2 = await get_storage(provider, provider.config.sales_storage)
	let key_exists = false
	const ft_token_id = (buyRequest.sale_asset_token_id != undefined) ? new BigNumber(buyRequest.sale_asset_token_id) : new BigNumber(
		0)
	try {
		let order: any = await st.sales.get(
			{
				0: buyRequest.asset_contract,
				1: buyRequest.asset_token_id,
				2: buyRequest.asset_seller,
				3: buyRequest.sale_type,
				4: getAsset(buyRequest.sale_type, buyRequest.sale_asset_contract, ft_token_id),
			}
		)
		key_exists = order !== undefined
	} catch (error) {
		console.log(error)
	}
	return key_exists
}
