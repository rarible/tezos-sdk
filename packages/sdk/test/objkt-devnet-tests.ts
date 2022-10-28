import {objkt_ask_v1} from "./devnet/objkt/v1/ask";
import {objkt_bid_v1} from "./devnet/objkt/v1/bid";
import {objkt_bid_v2} from "./devnet/objkt/v2/bid";

async function run_tests(){
    //await objkt_ask_v1()
    //await objkt_bid_v1()
    await objkt_bid_v2()
    //await dev_get_objkt_order_v2()
}
run_tests()