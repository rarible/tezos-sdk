import {fxhash_v1_offer} from "./testnet/fxhash/v1/offer";
import {fxhash_v2_listing} from "./testnet/fxhash/v2/listing";

async function run_tests(){
	await fxhash_v1_offer()
	await fxhash_v2_listing()

}
run_tests()