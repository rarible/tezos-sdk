import {
    approve_v2,
    AssetTypeV2, await_order, get_royalties, OrderStatus, Platform, ProtocolActivity,
    Provider, send_batch,
    TransactionArg
} from "@rarible/tezos-common";
import BigNumber from "bignumber.js";
import {MichelsonData} from "@taquito/michel-codec";
import {get_address} from "@rarible/tezos-common";

export declare type FXHashV1OfferForm = {
    token_id: BigNumber;
    price_per_item: BigNumber;
}

export function fxhash_v1_offer_arg(
    provider: Provider,
    swap: FXHashV1OfferForm,
    creator: string,
    royalties: BigNumber
): TransactionArg {
    const parameter: MichelsonData = {
        prim: "Pair",
        args: [
            {
                prim: "Pair",
                args: [
                    {
                        string: `${creator}`
                    },
                    {
                        int: `${swap.token_id}`
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
                        int: `${royalties}`
                    }
                ]
            }
        ]
    }
    return {destination: provider.config.fxhash_sales_v1, entrypoint: "offer", parameter};
}

export async function fxhash_v1_offer(
    provider: Provider,
    order: FXHashV1OfferForm,
): Promise<string> {
    let args: TransactionArg[] = [];
    const seller = await get_address(provider);

    const approve_a = await approve_v2(
        provider,
        seller,
        AssetTypeV2.FA2,
        provider.config.fxhash_sales_v1,
        provider.config.fxhash_nfts_v1,
        order.token_id
    );
    if (approve_a) args = args.concat(approve_a);
    const royalties = await get_royalties(provider, provider.config.fxhash_nfts_v1, order.token_id)
    args = args.concat(fxhash_v1_offer_arg(provider, order, royalties[0].account, new BigNumber(1000).div(10)));
    if (args.length === 0) {
        throw new Error("Empty array of sell args")
    }
    try{
        const op = await send_batch(provider, args);
        await op.confirmation();
        console.log(op.hash)
        const order_id = await await_order(provider.config, `${provider.config.fxhash_nfts_v1}:${order.token_id}`, op.hash, ProtocolActivity.LIST, seller, 20, 2000)
        if (order_id == undefined || order_id.length == 0) {
            throw new Error("Order was not found")
        }
        return order_id
    } catch (e) {
        console.log(JSON.stringify(e))
        throw new Error("Could not submit order: " + e)
    }

}
