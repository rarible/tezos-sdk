import {bid_purchase} from "./devnet/common/bid_purchase";
import {cart_purchase} from "./devnet/common/cart_purchase";

async function run_tests(){
    //await cart_purchase()
    await bid_purchase()
}
run_tests()