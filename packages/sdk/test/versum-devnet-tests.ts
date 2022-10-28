import {versum_swap} from "./devnet/versum/swap";
import {versum_bid} from "./devnet/versum/bid";

async function run_tests(){
	//await versum_swap()
	await versum_bid()
}
run_tests()