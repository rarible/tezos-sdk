import {
    absolute_amount,
    AssetTypeV2,
    getAsset, optional_date_arg,
    Part, parts_to_micheline,
    Provider,
    send_batch,
    TransactionArg,
    approve_v2, BundleItem, mkPackedBundle
} from "@rarible/tezos-common";
import BigNumber from "bignumber.js";
import {MichelsonData} from "@taquito/michel-codec";
import fetch from "node-fetch";
import {retry} from "../test/common/utils";

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

export async function sellV2(
    provider: Provider,
    order: OrderFormV2,
) {
    let args: TransactionArg[] = [];
    const seller = await provider.tezos.address();
    const processed_amount = await absolute_amount(provider.config, order.s_sale.sale_amount, order.s_sale_type, order.s_sale_asset_contract, order.s_sale_asset_token_id)

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
    if (args.length != 0) {
        const op = await send_batch(provider, args);
        await op.confirmation();
        const order_id = await await_v2_order(provider, order.s_asset_contract, order.s_asset_token_id, seller, op.hash, 3, 5000)
        return order_id
    }
}

export async function sellBundle(
    provider: Provider,
    order: BundleOrderForm,
) {
    let args: TransactionArg[] = [];
    const seller = await provider.tezos.address();
    const processed_amount = await absolute_amount(provider.config, order.s_sale.sale_amount, order.s_sale_type, order.s_sale_asset_contract, order.s_sale_asset_token_id)

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

export async function await_v2_order(
    provider: Provider,
    asset_contract: string,
    asset_token_id: BigNumber,
    seller: string,
    op_hash: string,
    max_tries: number,
    sleep: number
): Promise<string | undefined> {
    let min_tries = 1

    const payload = {
        "query": `query MyQuery { marketplace_activity(where: {make_contract: {_eq: "${asset_contract}"}, make_token_id: {_eq: "${asset_token_id.toString()}"}, maker: {_eq: "${seller}"}, operation_hash: {_eq: "${op_hash}"}}) { id } }`,
        "variables": null,
        "operationName": "MyQuery"
    }
    return retry(max_tries || min_tries, sleep, async () => {
        const res = await fetch(provider.config.dipdup, {
            method: 'post',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}
        })
        const json = await res.json()
        const result = json.data.marketplace_activity
        if (result.length >= 1) {
            return result[0].id
        } else {
            throw new Error("OrderID cannot be requested")
        }
    })
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
                                        bytes: getAsset(order.s_sale_type, order.s_sale_asset_contract, order.s_sale_asset_token_id)
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
                                bytes: `${getAsset(order.s_sale_type, order.s_sale_asset_contract, order.s_sale_asset_token_id)}`
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
