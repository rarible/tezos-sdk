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

async function run_tests(){
    await dev_sale()
    await dev_sale_fa2()
    await dev_sale_fa12()
    await dev_v2_sale()
    await dev_v2_sale_fa2()
    await dev_v2_sale_fa12()
    await dev_bundle_sale()
    await dev_bundle_sale_fa2()
    await dev_bundle_sale_fa12()
    await dev_v2_cancel()
    await dev_cancel_bundle_sale()
}
run_tests()