import {dev_objkt_ask} from "./devnet/objkt/dev_ask";

async function run_tests(){
    await dev_objkt_ask()
    //await dev_get_objkt_order_v2()
}
run_tests()