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


export declare type ObjktAskV2Form = {
    token_contract: string;
    token_id: BigNumber;
    amount: BigNumber;
    editions: BigNumber;
    shares: Array<Part>;
    expiry_time?: number;
}

export function objkt_ask_v2_arg(
    provider: Provider,
    ask: ObjktAskV2Form,
    processed_amount: BigNumber
): TransactionArg {
    const parameter: MichelsonData = {
        prim: "Pair",
        args: [{
            prim: "Pair",
            args: [{
                string: ask.token_contract
            },
                {
                    int: ask.token_id.toString()
                }
            ]
        },
            {
                prim: "Pair",
                args: [{
                    prim: "Right",
                    args: [{
                        prim: "Right",
                        args: [{
                            prim: "Unit"
                        }]
                    }]
                },
                    {
                        prim: "Pair",
                        args: [{
                            int: processed_amount.toString()
                        },
                            {
                                prim: "Pair",
                                args: [{
                                    int: ask.editions.toString()
                                },
                                    {
                                        prim: "Pair",
                                        args: [
                                            objkt_parts_to_micheline(ask.shares),
                                            {
                                                prim: "Pair",
                                                args: [
                                                    optional_date_arg(ask.expiry_time),
                                                    {
                                                        prim: "None"
                                                    }]
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
    return {destination: provider.config.objkt_sales_v2, entrypoint: "ask", parameter};
}

export async function ask_v2(
    provider: Provider,
    order: ObjktAskV2Form,
): Promise<string> {
    let args: TransactionArg[] = [];
    const seller = await get_address(provider);
    const processed_amount = await absolute_amount(provider.config, order.amount, AssetTypeV2.XTZ, undefined, undefined)

    const approve_a = await approve_v2(
        provider,
        seller,
        AssetTypeV2.FA2,
        provider.config.objkt_sales_v2,
        order.token_contract,
        order.token_id
    );
    if (approve_a) args = args.concat(approve_a);
    order.shares = await get_royalties(provider, order.token_contract, order.token_id)
    for(let share of order.shares){
        share.value = new BigNumber(share.value).div(10)
    }
    args = args.concat(objkt_ask_v2_arg(provider, order, processed_amount));
    if (args.length === 0) {
        throw new Error("Empty array of sell args")
    }
    try{
        const op = await send_batch(provider, args);
        await op.confirmation();
        console.log(op.hash)
        const order_id = await await_order(provider.config, `${order.token_contract}:${order.token_id}`, op.hash, ProtocolActivity.LIST, seller, 20, 2000)
        if (order_id == undefined || order_id.length == 0) {
            throw new Error("Order was not found")
        }
        return order_id
    } catch (e) {
        console.log(JSON.stringify(e))
        throw new Error("Could not submit order: " + e)
    }

}
