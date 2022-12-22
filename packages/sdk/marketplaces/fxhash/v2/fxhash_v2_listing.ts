import {
    approve_v2,
    AssetTypeV2, await_order, get_royalties, OrderStatus, Platform, ProtocolActivity,
    Provider, send_batch,
    TransactionArg
} from "@rarible/tezos-common";
import BigNumber from "bignumber.js";
import {MichelsonData} from "@taquito/michel-codec";
import {get_address} from "@rarible/tezos-common";

export declare type FXHashV2ListingForm = {
    token_id: BigNumber;
    price_per_item: BigNumber;
    version: number
}

export function fxhash_v2_offer_arg(
    provider: Provider,
    listing: FXHashV2ListingForm,
): TransactionArg {
    const parameter: MichelsonData = {
        prim: "Pair",
        args: [
            {
                prim: "Pair",
                args: [
                    {
                        int: `${listing.token_id}`
                    },
                    {
                        int: `${listing.version}`
                    }
                ]
            },
            {
                int: `${listing.price_per_item}`
            }
        ]
    }
    return {destination: provider.config.fxhash_sales_v2, entrypoint: "listing", parameter};
}

export async function fxhash_v2_listing(
    provider: Provider,
    order: FXHashV2ListingForm,
): Promise<string> {
    let args: TransactionArg[] = [];
    const seller = await get_address(provider);
    const nft_contract = order.version == 1? provider.config.fxhash_nfts_v2: provider.config.fxhash_nfts_v1
    const approve_a = await approve_v2(
        provider,
        seller,
        AssetTypeV2.FA2,
        provider.config.fxhash_sales_v2,
        nft_contract,
        order.token_id
    );
    if (approve_a) args = args.concat(approve_a);
    args = args.concat(fxhash_v2_offer_arg(provider, order));
    if (args.length === 0) {
        throw new Error("Empty array of sell args")
    }
    try{
        const op = await send_batch(provider, args);
        await op.confirmation();
        console.log(op.hash)
        const order_id = await await_order(provider.config, `${nft_contract}:${order.token_id}`, op.hash, ProtocolActivity.LIST, seller, 20, 2000)
        if (order_id == undefined || order_id.length == 0) {
            throw new Error("Order was not found")
        }
        return order_id
    } catch (e) {
        console.log(JSON.stringify(e))
        throw new Error("Could not submit order: " + e)
    }

}
