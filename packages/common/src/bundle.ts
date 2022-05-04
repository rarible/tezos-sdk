import {MichelsonData, packDataBytes} from "@taquito/michel-codec";
import BigNumber from "bignumber.js";

export declare type BundleItem = {
    asset_contract: string
    asset_token_id: BigNumber,
    asset_quantity: BigNumber
}

function mkBundleItem(bundle_item: BundleItem): MichelsonData {
    return {
        prim: "Pair",
        args: [
            {
                string: `${bundle_item.asset_contract}`,
            },
            {
                prim: "Pair",
                args: [
                    {
                        int: `${bundle_item.asset_token_id}`,
                    },
                    {
                        int: `${bundle_item.asset_quantity}`,
                    },
                ],
            }
        ],
    };
};

function mkMichelsonBundle(bundle: Array<BundleItem>): MichelsonData[] {
    let michelson_bundle: MichelsonData[] = []
    for (let item of bundle) {
        michelson_bundle.push(mkBundleItem(item))
    }
    return michelson_bundle
}

export function mkPackedBundle(bundle: Array<BundleItem>): string {
    return packDataBytes(mkMichelsonBundle(bundle), {
        "prim": "list",
        "args": [{
            "prim": "pair",
            "args": [{
                "prim": "address",
                "annots": ["%bundle_item_contract"]
            }, {
                "prim": "pair",
                "args": [{
                    "prim": "nat",
                    "annots": ["%bundle_item_id"]
                }, {
                    "prim": "nat",
                    "annots": ["%bundle_item_qty"]
                }]
            }]
        }]
    }).bytes;
};