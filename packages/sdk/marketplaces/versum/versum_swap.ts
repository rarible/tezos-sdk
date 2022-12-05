import {
    approve_v2,
    AssetTypeV2, await_order, OrderStatus, Platform, ProtocolActivity,
    Provider, send_batch,
    TransactionArg
} from "@rarible/tezos-common";
import BigNumber from "bignumber.js";
import {MichelsonData} from "@taquito/michel-codec";
import {get_address} from "@rarible/tezos-common";

export declare type VersumSwapForm = {
    editions: BigNumber;
    token_id: BigNumber;
    price_per_item: BigNumber;
}

export function versum_swap_arg(
    provider: Provider,
    swap: VersumSwapForm,
): TransactionArg {
    const parameter: MichelsonData = {
        prim: "Pair",
        args: [
            {
                prim: "Pair",
                args: [
                    {
                        prim: "Pair",
                        args: [
                            {
                                prim: "False"
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
                                prim: "None"
                            },
                            {
                                int: `${swap.price_per_item}`
                            }
                        ]
                    }
                ]
            },
            {
                prim: "Pair",
                args: [
                    {
                        prim: "Pair",
                        args: [
                            {
                                prim: "None"
                            },
                            {
                                prim: "False"
                            }
                        ]
                    },
                    {
                        prim: "Pair",
                        args: [
                            {
                                int: `${swap.price_per_item}`
                            },
                            {
                                prim: "Pair",
                                args: [
                                    {
                                        prim: "Pair",
                                        args: [
                                            {
                                                "string": `${provider.config.versum_nfts}`
                                            },
                                            {
                                                int: `${swap.token_id}`
                                            }
                                        ]
                                    },
                                    {
                                        int: `${swap.editions}`
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
    return {destination: provider.config.versum_marketplace, entrypoint: "create_swap", parameter};
}

export async function versum_swap(
    provider: Provider,
    order: VersumSwapForm,
): Promise<string> {
    let args: TransactionArg[] = [];
    const seller = await get_address(provider);

    const approve_a = await approve_v2(
        provider,
        seller,
        AssetTypeV2.FA2,
        provider.config.versum_marketplace,
        provider.config.versum_nfts,
        order.token_id
    );
    if (approve_a) args = args.concat(approve_a);
    args = args.concat(versum_swap_arg(provider, order));
    if (args.length === 0) {
        throw new Error("Empty array of sell args")
    }
    try{
        const op = await send_batch(provider, args);
        await op.confirmation();
        console.log(op.hash)
        const order_id = await await_order(provider.config, `${provider.config.versum_nfts}:${order.token_id}`, op.hash, ProtocolActivity.LIST, seller, 20, 2000)
        if (order_id == undefined || order_id.length == 0) {
            throw new Error("Order was not found")
        }
        return order_id
    } catch (e) {
        console.log(JSON.stringify(e))
        throw new Error("Could not submit order: " + e)
    }

}
