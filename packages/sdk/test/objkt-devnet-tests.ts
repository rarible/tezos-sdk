import {objkt_ask_v1} from "./devnet/objkt/v1/ask";
import {objkt_bid_v1} from "./devnet/objkt/v1/bid";

async function run_tests(){
    //await objkt_ask_v1()
    await objkt_bid_v1()
    //await dev_get_objkt_order_v2()
}
run_tests()