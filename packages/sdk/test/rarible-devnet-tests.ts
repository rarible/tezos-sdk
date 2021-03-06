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

async function run_tests(){
    //Batch Mint
    await dev_batch_mint()

    //Batch Transfer
    await dev_batch_transfer()

    //Batch Sell
    await dev_batch_v2_sale()

    //Sales
    await dev_sale()
    await dev_sale_fa2()
    await dev_sale_fa12()

    //V2 Sales
    await dev_v2_sale()
    await dev_v2_sale_fa2()
    await dev_v2_sale_fa12()

    //Bundle sales
    await dev_bundle_sale()
    await dev_bundle_sale_fa2()
    await dev_bundle_sale_fa12()

    //Cancel sales
    await dev_v2_cancel()
    await dev_cancel_bundle_sale()

    //Cancel bids
    await dev_cancel_bid()
    await dev_cancel_floor_bid()
    await dev_cancel_bundle_bid()

    //Auction
    await dev_auction()
    await dev_auction_fa2()
    await dev_auction_fa12()

    //Bids
    await dev_bid()
    await dev_bid_fa2()
    await dev_bid_fa12()

    //Bundle Auction
    await dev_bundle_auction()
    await dev_bundle_auction_fa2()
    await dev_bundle_auction_fa12()

    //Bundle Bid
    await dev_bundle_bid()
    await dev_bundle_bid_fa2()
    await dev_bundle_bid_fa12()

    //Floor bids
    await dev_floor_bid()
    await dev_floor_bid_fa2()
    await dev_floor_bid_fa12()

    //Utils
    await dev_deploy_nft()
    await dev_check_signature()
    await dev_get_balance()
    await dev_get_decimals()
    await dev_get_ft_type()
    await dev_pack_unpack()
    await dev_get_order_type()
    await dev_get_royalties()
    //await dev_get_auction()
}
run_tests()