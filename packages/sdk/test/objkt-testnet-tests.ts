import {objkt_ask_v2} from "./testnet/objkt/v2/ask";
import {objkt_ask_v1} from "./testnet/objkt/v1/ask";
import {retract_ask_v1_objkt} from "./testnet/objkt/v1/retract_ask";
import {retract_ask_v2_objkt} from "./testnet/objkt/v2/rectract_ask";

async function run_tests(){
    await objkt_ask_v1()
    await objkt_ask_v2()
    await retract_ask_v1_objkt()
    await retract_ask_v2_objkt()
    //await get_objkt_order_v2()
}
run_tests()