import {
    AssetTypeV2, BundleItem, getAsset, mkPackedBundle,
    Provider,
    send_batch,
    TransactionArg
} from "@rarible/tezos-common";
import BigNumber from "bignumber.js";
import {MichelsonData} from "@taquito/michel-codec";

export declare type CancelV2OrderRequest = {
    asset_contract: string;
    asset_token_id: BigNumber;
    sale_type: AssetTypeV2;
    sale_asset_contract?: string;
    sale_asset_token_id?: BigNumber;
}

export declare type CancelBundleSaleRequest = {
    bundle: Array<BundleItem>;
    sale_type: AssetTypeV2;
    sale_asset_contract?: string;
    sale_asset_token_id?: BigNumber;
}

export async function cancelV2(
    provider: Provider,
    order: CancelV2OrderRequest,
) {
    let args: TransactionArg[] = [];
    args = args.concat(cancel_v2_order_arg(provider, order));
    if (args.length != 0) {
        const op = await send_batch(provider, args);
        await op.confirmation();
        console.log(op)
        return op
    }
}

export async function cancel_bundle_sale(
    provider: Provider,
    order: CancelBundleSaleRequest,
) {
    let args: TransactionArg[] = [];
    args = args.concat(cancel_bundle_order_arg(provider, order));
    if (args.length != 0) {
        const op = await send_batch(provider, args);
        await op.confirmation();
        console.log(op)
        return op
    }
}

export function cancel_bundle_order_arg(
    provider: Provider,
    order: CancelBundleSaleRequest
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
                        int: `${order.sale_type}`
                    },
                    {
                        bytes: getAsset(order.sale_type, order.sale_asset_contract, order.sale_asset_token_id)
                    }
                ]
            }
        ]
    }
    return {destination: provider.config.sales, entrypoint: "cancel_bundle_sale", parameter};
}

export function cancel_v2_order_arg(
    provider: Provider,
    order: CancelV2OrderRequest
): TransactionArg {
    const parameter: MichelsonData = {
        prim: "Pair",
        args: [
            {
                string: `${order.asset_contract}`
            },
            {
                prim: "Pair",
                args: [
                    {
                        int: `${order.asset_token_id}`
                    },
                    {
                        prim: "Pair",
                        args: [
                            {
                                int: `${order.sale_type}`
                            },
                            {
                                bytes: getAsset(order.sale_type, order.sale_asset_contract, order.sale_asset_token_id)
                            }
                        ]
                    }
                ]
            }
        ]
    }
    return {destination: provider.config.sales, entrypoint: "cancel_sale", parameter};
}