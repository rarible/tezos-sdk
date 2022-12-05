import {
    absolute_amount,
    approve_v2,
    AssetTypeV2, await_order, get_royalties,
    objkt_parts_to_micheline,
    optional_date_arg, OrderStatus,
    Part, Platform, ProtocolActivity,
    Provider,
    send_batch,
    TransactionArg
} from "@rarible/tezos-common";
import BigNumber from "bignumber.js";
import {MichelsonData} from "@taquito/michel-codec";
import {get_address} from "@rarible/tezos-common";


export declare type ObjktBidV2Form = {
    token_contract: string;
    token_id: BigNumber;
    amount: BigNumber;
    editions: BigNumber;
    shares: Array<Part>;
    expiry_time?: number;
}

export function objkt_bid_v2_arg(
    provider: Provider,
    bid: ObjktBidV2Form,
    processed_amount: BigNumber,
    royalties: Part
): TransactionArg {
    const parameter: MichelsonData = {
        prim: "Pair",
        args: [
            {
                prim: "Pair",
                args: [
                    {
                        string: `${bid.token_contract}`
                    },
                    {
                        prim: "Some",
                        args: [
                            {
                                int: `${bid.token_id}`
                            }
                        ]
                    }
                ]
            },
            {
                prim: "Pair",
                args: [
                    {
                        prim: "Right",
                        args: [
                            {
                                prim: "Right",
                                args: [
                                    {
                                        prim: "Unit"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        prim: "Pair",
                        args: [
                            {
                                int: `${processed_amount}`
                            },
                            {
                                prim: "Pair",
                                args: [
                                    [
                                        {
                                            prim: "Pair",
                                            args: [
                                                {
                                                    int: `${royalties.value}`
                                                },
                                                {
                                                    string: `${royalties.account}`
                                                }
                                            ]
                                        }
                                    ],
                                    {
                                        prim: "Pair",
                                        args: [
                                            {
                                                prim: "None"
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
    };
    return {destination: provider.config.objkt_sales_v2, entrypoint: "offer", parameter, amount: bid.amount};
}

export async function objkt_bid_v2(
    provider: Provider,
    order: ObjktBidV2Form,
): Promise<string> {
    let args: TransactionArg[] = [];
    const bidder = await get_address(provider);
    const processed_amount = await absolute_amount(provider.config, order.amount, AssetTypeV2.XTZ, undefined, undefined)

    order.shares = await get_royalties(provider, order.token_contract, order.token_id)
    for(let share of order.shares){
        share.value = new BigNumber(share.value).div(10)
    }
    args = args.concat(objkt_bid_v2_arg(provider, order, processed_amount, order.shares[0]));
    if (args.length === 0) {
        throw new Error("Empty array of sell args")
    }
    try{
        const op = await send_batch(provider, args);
        await op.confirmation();
        console.log(op.hash)
        const order_id = await await_order(provider.config, `${order.token_contract}:${order.token_id}`, op.hash, ProtocolActivity.BID, bidder, 20, 2000)
        if (order_id == undefined || order_id.length == 0) {
            throw new Error("Order was not found")
        }
        return order_id
    } catch (e) {
        console.log(JSON.stringify(e))
        throw new Error("Could not submit order: " + e)
    }

}
