import {dev_sale} from "./devnet/dev_sale";
import {dev_sale_fa2} from "./devnet/dev_sale_fa2";
import {dev_sale_fa12} from "./devnet/dev_sale_fa12";
import {dev_v2_sale} from "./devnet/dev_v2_sale";
import {dev_v2_sale_fa2} from "./devnet/dev_v2_sale_fa2";
import {dev_v2_sale_fa12} from "./devnet/dev_v2_sale_fa12";
import {dev_bundle_sale} from "./devnet/dev_bundle_sale";
import {dev_bundle_sale_fa2} from "./devnet/dev_bundle_sale_fa2";
import {dev_bundle_sale_fa12} from "./devnet/dev_bundle_sale_fa12";
import {dev_v2_cancel} from "./devnet/dev_v2_cancel";
import {dev_cancel_bundle_sale} from "./devnet/dev_cancel_bundle_sale";
import {dev_cancel_bid} from "./devnet/dev_cancel_bid";
import {dev_cancel_floor_bid} from "./devnet/dev_cancel_floor_bid";
import {dev_cancel_bundle_bid} from "./devnet/dev_cancel_bundle_bid";

async function run_tests(){
    //Sales
    await dev_sale()
    await dev_sale_fa2()
    await dev_sale_fa12()

    //V2 Sales
    await dev_v2_sale()
    await dev_v2_sale_fa2()
    await dev_v2_sale_fa12()

    //Bundle sales
    await dev_bundle_sale()
    await dev_bundle_sale_fa2()
    await dev_bundle_sale_fa12()

    //Cancel sales
    await dev_v2_cancel()
    await dev_cancel_bundle_sale()

    //Cancel bids
    await dev_cancel_bid()
    await dev_cancel_floor_bid()
    await dev_cancel_bundle_bid()
}
run_tests()