import {
    absolute_amount,
    AssetTypeV2, BundleItem, getAsset, mkPackedBundle,
    Part, parts_to_micheline,
    Provider,
    send_batch,
    TransactionArg
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
    sale_payouts: Array<Part>;
    sale_origin_fees: Array<Part>;
    use_all?: boolean;
}

export async function buyV2(
    provider: Provider,
    sale: BuyRequest,
    use_all = false
) {
    let args: TransactionArg[] = [];
    const seller = await provider.tezos.address();
    const processed_amount = await absolute_amount(provider.config, sale.sale_amount, sale.sale_type, sale.sale_asset_contract, sale.sale_asset_token_id)

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
    if (approve_a) args = args.concat(approve_a);
    args = args.concat(buy_arg_v2(provider, sale));
    if (args.length != 0) {
        const op = await send_batch(provider, args);
        await op.confirmation();
        console.log(op)
        return op
    }
}

export async function buy_bundle(
    provider: Provider,
    sale: BuyBundleRequest,
    use_all = false
) {
    let args: TransactionArg[] = [];
    const seller = await provider.tezos.address();
    const processed_amount = await absolute_amount(provider.config, sale.sale_amount, sale.sale_type, sale.sale_asset_contract, sale.sale_asset_token_id)

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
                                                                [{bytes: getAsset(sale.sale_type, sale.sale_asset_contract, sale.sale_asset_token_id)},
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
        amount = new BigNumber(sale.sale_amount)
    }

    const parameter: MichelsonData = {
        prim: "Pair",
        args: [
            {
                bytes: mkPackedBundle(sale.bundle)
            },
            {
                prim: "Pair",
                args: [
                    {
                        string: `${sale.asset_seller}`
                    },
                    {
                        prim: "Pair",
                        args: [
                            {
                                int: `${sale.sale_type}`
                            },
                            {
                                prim: "Pair",
                                args: [
                                    {
                                        bytes: getAsset(sale.sale_type, sale.sale_asset_contract, sale.sale_asset_token_id)
                                    },
                                    {
                                        prim: "Pair",
                                        args: [
                                            parts_to_micheline(sale.sale_origin_fees),
                                            parts_to_micheline(sale.sale_payouts)
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
    return {destination: provider.config.sales, entrypoint: "buy_bundle", parameter, amount: amount};
}