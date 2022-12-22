import {
    approve_v2,
    AssetTypeV2, await_order, get_royalties, OrderStatus, Platform, ProtocolActivity,
    Provider, send_batch,
    TransactionArg
} from "@rarible/tezos-common";
import BigNumber from "bignumber.js";
import {MichelsonData} from "@taquito/michel-codec";
import {get_address} from "@rarible/tezos-common";

export declare type TEIASwapForm = {
    editions: BigNumber;
    token_id: BigNumber;
    price_per_item: BigNumber;
}

export function teia_swap_arg(
    provider: Provider,
    swap: TEIASwapForm,
    creator: string,
    royalties: BigNumber
): TransactionArg {
    const parameter: MichelsonData = {
        prim: "Pair",
        args: [
            {
                string: `${provider.config.hen_objkts}`
            },
            {
                prim: "Pair",
                args: [
                    {
                        int: `${swap.token_id}`
                    },
                    {
                        prim: "Pair",
                        args: [
                            {
                                int: `${swap.editions}`
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
                                                int: `${royalties}`
                                            },
                                            {
                                                string: `${creator}`
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
    return {destination: provider.config.teia_marketplace, entrypoint: "swap", parameter};
}

export async function teia_swap(
    provider: Provider,
    order: TEIASwapForm,
): Promise<string> {
    let args: TransactionArg[] = [];
    const seller = await get_address(provider);

    const approve_a = await approve_v2(
        provider,
        seller,
        AssetTypeV2.FA2,
        provider.config.teia_marketplace,
        provider.config.hen_objkts,
        order.token_id
    );
    if (approve_a) args = args.concat(approve_a);
    const royalties = await get_royalties(provider, provider.config.hen_objkts, order.token_id)
    args = args.concat(teia_swap_arg(provider, order, royalties[0].account, new BigNumber(royalties[0].value).div(10)));
    if (args.length === 0) {
        throw new Error("Empty array of sell args")
    }
    try{
        const op = await send_batch(provider, args);
        await op.confirmation();
        console.log(op.hash)
        const order_id = await await_order(provider.config, `${provider.config.hen_objkts}:${order.token_id}`, op.hash, ProtocolActivity.LIST, seller, 20, 2000)
        if (order_id == undefined || order_id.length == 0) {
            throw new Error("Order was not found")
        }
        return order_id
    } catch (e) {
        console.log(JSON.stringify(e))
        throw new Error("Could not submit order: " + e)
    }

}
