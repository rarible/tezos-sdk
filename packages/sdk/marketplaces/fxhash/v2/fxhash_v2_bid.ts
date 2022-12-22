import {
    absolute_amount,
    approve_v2,
    AssetTypeV2, await_order, get_royalties, OrderStatus, Platform, ProtocolActivity,
    Provider, send_batch,
    TransactionArg
} from "@rarible/tezos-common";
import BigNumber from "bignumber.js";
import {MichelsonData} from "@taquito/michel-codec";
import {get_address} from "@rarible/tezos-common";

export declare type FXHashV2BidForm = {
    token_id: BigNumber;
    price_per_item: BigNumber;
    version: number
}

export function fxhash_v2_bid_arg(
    provider: Provider,
    listing: FXHashV2BidForm,
    processed_amount: BigNumber
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
                int: `${processed_amount.toFixed()}`
            }
        ]
    }
    return {destination: provider.config.fxhash_sales_v2, entrypoint: "offer", parameter, amount: listing.price_per_item};
}

export async function fxhash_v2_bid(
    provider: Provider,
    order: FXHashV2BidForm,
): Promise<string> {
    let args: TransactionArg[] = [];
    const seller = await get_address(provider);
    const processed_amount = await absolute_amount(provider.config, order.price_per_item, AssetTypeV2.XTZ, undefined, undefined)

    const nft_contract = order.version == 1? provider.config.fxhash_nfts_v2: provider.config.fxhash_nfts_v1
    args = args.concat(fxhash_v2_bid_arg(provider, order, processed_amount));
    if (args.length === 0) {
        throw new Error("Empty array of sell args")
    }
    try{
        const op = await send_batch(provider, args);
        await op.confirmation();
        console.log(op.hash)
        const order_id = await await_order(provider.config, `${nft_contract}:${order.token_id}`, op.hash, ProtocolActivity.BID, seller, 20, 2000)
        if (order_id == undefined || order_id.length == 0) {
            throw new Error("Order was not found")
        }
        return order_id
    } catch (e) {
        console.log(JSON.stringify(e))
        throw new Error("Could not submit order: " + e)
    }

}
