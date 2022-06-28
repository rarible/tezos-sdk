import {dev_sale} from "./devnet/rarible/dev_sale";
import {dev_sale_fa2} from "./devnet/rarible/dev_sale_fa2";
import {dev_sale_fa12} from "./devnet/rarible/dev_sale_fa12";
import {dev_v2_sale} from "./devnet/rarible/dev_v2_sale";
import {dev_v2_sale_fa2} from "./devnet/rarible/dev_v2_sale_fa2";
import {dev_v2_sale_fa12} from "./devnet/rarible/dev_v2_sale_fa12";
import {dev_bundle_sale} from "./devnet/rarible/dev_bundle_sale";
import {dev_bundle_sale_fa2} from "./devnet/rarible/dev_bundle_sale_fa2";
import {dev_bundle_sale_fa12} from "./devnet/rarible/dev_bundle_sale_fa12";
import {dev_v2_cancel} from "./devnet/rarible/dev_v2_cancel";
import {dev_cancel_bundle_sale} from "./devnet/rarible/dev_cancel_bundle_sale";
import {dev_cancel_bid} from "./devnet/rarible/dev_cancel_bid";
import {dev_cancel_floor_bid} from "./devnet/rarible/dev_cancel_floor_bid";
import {dev_cancel_bundle_bid} from "./devnet/rarible/dev_cancel_bundle_bid";
import {dev_auction} from "./devnet/rarible/dev_auction";
import {dev_auction_fa2} from "./devnet/rarible/dev_auction_fa2";
import {dev_auction_fa12} from "./devnet/rarible/dev_auction_fa12";
import {dev_bid} from "./devnet/rarible/dev_bid";
import {dev_bid_fa2} from "./devnet/rarible/dev_bid_fa2";
import {dev_bid_fa12} from "./devnet/rarible/dev_bid_fa12";
import {dev_bundle_auction} from "./devnet/rarible/dev_bundle_auction";
import {dev_bundle_auction_fa2} from "./devnet/rarible/dev_bundle_auction_fa2";
import {dev_bundle_auction_fa12} from "./devnet/rarible/dev_bundle_auction_fa12";
import {dev_bundle_bid_fa12} from "./devnet/rarible/dev_bundle_bid_fa12";
import {dev_bundle_bid} from "./devnet/rarible/dev_bundle_bid";
import {dev_bundle_bid_fa2} from "./devnet/rarible/dev_bundle_bid_fa2";
import {dev_deploy_nft} from "./devnet/rarible/dev_deploy_nft";
import {dev_check_signature} from "./devnet/rarible/dev_check_signature";
import {dev_floor_bid} from "./devnet/rarible/dev_floor_bid";
import {dev_floor_bid_fa2} from "./devnet/rarible/dev_floor_bid_fa2";
import {dev_floor_bid_fa12} from "./devnet/rarible/dev_floor_bid_fa12";
import {dev_get_auction} from "./devnet/rarible/dev_get_auction";
import {dev_get_balance} from "./devnet/rarible/dev_get_balance";
import {dev_get_decimals} from "./devnet/rarible/dev_get_decimals";
import {dev_get_ft_type} from "./devnet/rarible/dev_get_ft_type";
import {dev_pack_unpack} from "./devnet/rarible/dev_pack_unpack";
import {dev_get_order_type} from "./devnet/rarible/dev_check_sale_type";
import {dev_batch_mint} from "./devnet/rarible/dev_batch_mint";
import {dev_batch_transfer} from "./devnet/rarible/dev_batch_transfer";
import {dev_batch_v2_sale} from "./devnet/rarible/dev_batch_v2_sale";
import {dev_get_royalties} from "./devnet/rarible/dev_get_royalties";
import {dev_objkt_ask} from "./devnet/objkt/dev_ask";
import {dev_get_objkt_order_v2} from "./devnet/objkt/dev_get_objkt_order";

async function run_tests(){
    //Batch Mint
    await dev_objkt_ask()
    //await dev_get_objkt_order_v2()
}
run_tests()