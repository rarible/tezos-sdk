import {
	absolute_amount,
	approve_v2,
	AssetTypeV2,
	await_order,
	BundleItem, Config, get_ft_type,
	getAsset,
	mkPackedBundle,
	optional_date_arg, OrderStatus,
	Part,
	parts_to_micheline,
	Platform, process_token_id, ProtocolActivity,
	Provider,
	send_batch,
	TransactionArg
} from "@rarible/tezos-common";
import BigNumber from "bignumber.js";
import {MichelsonData} from "@taquito/michel-codec";
import {get_address} from "@rarible/tezos-common";

export declare type OrderFormV2 = {
	s_asset_contract: string;
	s_asset_token_id: BigNumber;
	s_sale_type: AssetTypeV2;
	s_sale_asset_contract?: string;
	s_sale_asset_token_id?: BigNumber;
	s_sale: RaribleSaleDataV2;
}

export declare type BundleOrderForm = {
	bundle: Array<BundleItem>;
	s_sale_type: AssetTypeV2;
	s_sale_asset_contract?: string;
	s_sale_asset_token_id?: BigNumber;
	s_sale: BundleSaleData;
}

export declare type BundleSaleData = {
	sale_origin_fees: Array<Part>;
	sale_payouts: Array<Part>;
	sale_amount: BigNumber;
	sale_qty: BigNumber;
	sale_start?: number;
	sale_end?: number;
	sale_max_fees_base_boint: number;
	sale_data_type?: string;
	sale_data?: string;
}

export declare type RaribleSaleDataV2 = {
	sale_origin_fees: Array<Part>;
	sale_payouts: Array<Part>;
	sale_amount: BigNumber;
	sale_asset_qty: BigNumber;
	sale_start?: number;
	sale_end?: number;
	sale_max_fees_base_boint: number;
	sale_data_type?: string;
	sale_data?: string;
}

async function process_order(config: Config, order: OrderFormV2): Promise<OrderFormV2>{
	if(order.s_sale_asset_contract != undefined){
		const ft_type_res = await get_ft_type(config, order.s_sale_asset_contract)
		if(ft_type_res != undefined){
			order.s_sale_type = ft_type_res
			order.s_sale_asset_token_id = process_token_id(order.s_sale_type, order.s_sale_asset_token_id)
		}
	}
	return order
}

export async function sellV2(
	provider: Provider,
	order: OrderFormV2,
): Promise<string> {
	let args: TransactionArg[] = [];
	const seller = await get_address(provider)

	order = await process_order(provider.config, order)

	const processed_amount = await absolute_amount(provider.config,
		order.s_sale.sale_amount,
		order.s_sale_type,
		order.s_sale_asset_contract,
		order.s_sale_asset_token_id)

	const approve_a = await approve_v2(
		provider,
		seller,
		AssetTypeV2.FA2,
		provider.config.transfer_manager,
		order.s_asset_contract,
		order.s_asset_token_id
	);
	if (approve_a) args = args.concat(approve_a);
	args = args.concat(sell_arg_v2(provider, order, processed_amount));
	if (args.length === 0) {
		throw new Error("Empty array of sell args")
	}
	const op = await send_batch(provider, args);
	await op.confirmation();
	const order_id = await await_order(provider.config, `${order.s_asset_contract}:${order.s_asset_token_id}`, op.hash, ProtocolActivity.LIST, seller, 20, 2000)
	if (order_id == undefined) {
		throw new Error("Order was not found")
	}
	return order_id
}

export async function sellBundle(
	provider: Provider,
	order: BundleOrderForm,
) {
	let args: TransactionArg[] = [];
	const seller = await get_address(provider);
	const processed_amount = await absolute_amount(provider.config,
		order.s_sale.sale_amount,
		order.s_sale_type,
		order.s_sale_asset_contract,
		order.s_sale_asset_token_id)

	for (const bundleItem of order.bundle) {
		const approve_a = await approve_v2(
			provider,
			seller,
			AssetTypeV2.FA2,
			provider.config.transfer_manager,
			bundleItem.asset_contract,
			bundleItem.asset_token_id
		);
		if (approve_a) args = args.concat(approve_a);
	}
	args = args.concat(bundle_sell_arg_v2(provider, order, processed_amount));
	if (args.length != 0) {
		const op = await send_batch(provider, args);
		await op.confirmation();
		return op
	}
}

export async function sell_v2_batch(
	provider: Provider,
	order_form: Array<OrderFormV2>,
) {
	let args: TransactionArg[] = [];
	const seller = await get_address(provider);
	for (const order of order_form) {
		const processed_amount = await absolute_amount(
      provider.config,
			order.s_sale.sale_amount,
			order.s_sale_type,
			order.s_sale_asset_contract,
			order.s_sale_asset_token_id)
		const approve_a = await approve_v2(
			provider,
			seller,
			AssetTypeV2.FA2,
			provider.config.transfer_manager,
			order.s_asset_contract,
			order.s_asset_token_id
		);
		if (approve_a) args = args.concat(approve_a);
		args = args.concat(sell_arg_v2(provider, order, processed_amount));
	}
	if (args.length != 0) {
		const op = await send_batch(provider, args);
		await op.confirmation();
		return op
	}
}


function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export function sell_arg_v2(
	provider: Provider,
	order: OrderFormV2,
	processed_amount: BigNumber
): TransactionArg {
	const parameter: MichelsonData = {
		prim: "Pair",
		args: [
			{
				string: order.s_asset_contract,
			},
			{
				prim: "Pair",
				args: [
					{
						int: `${order.s_asset_token_id}`,
					},
					{
						prim: "Pair",
						args: [
							{
								int: `${order.s_sale_type}`,
							},
							{
								prim: "Pair",
								args: [
									{
										bytes: getAsset(order.s_sale_type,
											order.s_sale_asset_contract,
											order.s_sale_asset_token_id)
									},
									{
										prim: "Pair",
										args: [
											parts_to_micheline(order.s_sale.sale_origin_fees),
											{
												prim: "Pair",
												args: [
													parts_to_micheline(order.s_sale.sale_payouts),
													{
														prim: "Pair",
														args: [
															{
																int: `${processed_amount}`,
															},
															{
																prim: "Pair",
																args: [
																	{
																		int: `${order.s_sale.sale_asset_qty}`,
																	},
																	{
																		prim: "Pair",
																		args: [
																			optional_date_arg(
																				order.s_sale.sale_start
																			),
																			{
																				prim: "Pair",
																				args: [
																					optional_date_arg(
																						order.s_sale.sale_end
																					),
																					{
																						prim: "Pair",
																						args: [
																							{
																								int: `${order.s_sale.sale_max_fees_base_boint}`,
																							},
																							{
																								prim: "Pair",
																								args: [
																									{
																										prim: "None",
																									},
																									{
																										prim: "None",
																									},
																								],
																							},
																						],
																					},
																				],
																			},
																		],
																	},
																],
															},
														],
													},
												],
											},
										],
									},
								],
							},
						],
					},
				],
			},
		],
	};
	return {destination: provider.config.sales, entrypoint: "sell", parameter};
}

export function bundle_sell_arg_v2(
	provider: Provider,
	order: BundleOrderForm,
	processed_amount: BigNumber
): TransactionArg {
	const parameter: MichelsonData = {
		prim: "Pair",
		args: [
			{
				bytes: mkPackedBundle(order.bundle)
			},
			{
				prim: "Pair",
				args: [
					{
						int: `${order.s_sale_type}`
					},
					{
						prim: "Pair",
						args: [
							{
								bytes: `${getAsset(order.s_sale_type,
									order.s_sale_asset_contract,
									order.s_sale_asset_token_id)}`
							},
							{
								prim: "Pair",
								args: [
									parts_to_micheline(order.s_sale.sale_origin_fees),
									{
										prim: "Pair",
										args: [
											parts_to_micheline(order.s_sale.sale_payouts),
											{
												prim: "Pair",
												args: [
													{
														int: `${processed_amount}`
													},
													{
														prim: "Pair",
														args: [
															optional_date_arg(order.s_sale.sale_start),
															{
																prim: "Pair",
																args: [
																	optional_date_arg(order.s_sale.sale_end),
																	{
																		prim: "Pair",
																		args: [
																			{
																				int: `${order.s_sale.sale_qty}`
																			},
																			{
																				prim: "Pair",
																				args: [
																					{
																						int: `${order.s_sale.sale_max_fees_base_boint}`
																					},
																					{
																						prim: "Pair",
																						args: [
																							{
																								prim: "None"
																							},
																							{
																								prim: "None"
																							}
																						]
																					}
																				]
																			}
																		]
																	}
																]
															}
														]
													}
												]
											}
										]
									}
								]
							}
						]
					}
				]
			}
		]
	};
	return {destination: provider.config.sales, entrypoint: "sell_bundle", parameter};
}
