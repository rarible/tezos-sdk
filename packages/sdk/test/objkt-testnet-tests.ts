import {objkt_ask_v2} from "./testnet/objkt/v2/ask";
import {objkt_ask_v1} from "./testnet/objkt/v1/ask";

async function run_tests(){
    await objkt_ask_v1()
    //await objkt_ask_v2()
    //await get_objkt_order_v2()
}
run_tests()