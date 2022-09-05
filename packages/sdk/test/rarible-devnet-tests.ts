import {batch_mint} from "./devnet/rarible/batch_mint";
import {batch_transfer} from "./devnet/rarible/batch_transfer";
import {batch_v2_sale} from "./devnet/rarible/batch_v2_sale";
import {auction} from "./devnet/rarible/auction";
import {auction_fa2} from "./devnet/rarible/auction_fa2";
import {auction_fa12} from "./devnet/rarible/auction_fa12";
import {bid} from "./devnet/rarible/bid";
import {bid_fa2} from "./devnet/rarible/bid_fa2";
import {bid_fa12} from "./devnet/rarible/bid_fa12";
import {bundle_auction} from "./devnet/rarible/bundle_auction";
import {bundle_auction_fa2} from "./devnet/rarible/bundle_auction_fa2";
import {bundle_auction_fa12} from "./devnet/rarible/bundle_auction_fa12";
import {bundle_bid} from "./devnet/rarible/bundle_bid";
import {bundle_bid_fa2} from "./devnet/rarible/bundle_bid_fa2";
import {bundle_bid_fa12} from "./devnet/rarible/bundle_bid_fa12";
import {bundle_sale} from "./devnet/rarible/bundle_sale";
import {bundle_sale_fa2} from "./devnet/rarible/bundle_sale_fa2";
import {bundle_sale_fa12} from "./devnet/rarible/bundle_sale_fa12";
import {floor_bid} from "./devnet/rarible/floor_bid";
import {floor_bid_fa2} from "./devnet/rarible/floor_bid_fa2";
import {floor_bid_fa12} from "./devnet/rarible/floor_bid_fa12";
import {v2_sale} from "./devnet/rarible/v2_sale";
import {v2_sale_fa2} from "./devnet/rarible/v2_sale_fa2";
import {v2_sale_fa12} from "./devnet/rarible/v2_sale_fa12";
import {v2_cancel} from "./devnet/rarible/v2_cancel";
import {cancel_bundle_sale} from "./devnet/rarible/cancel_bundle_sale";
import {cancel_bid} from "./devnet/rarible/cancel_bid";
import {cancel_floor_bid} from "./devnet/rarible/cancel_floor_bid";
import {cancel_bundle_bid} from "./devnet/rarible/cancel_bundle_bid";
import {deploy_nft} from "./devnet/rarible/deploy_nft";
import {get_decimals} from "./devnet/rarible/get_decimals";
import {get_ft_type} from "./devnet/rarible/get_ft_type";
import {pack_unpack} from "./devnet/rarible/pack_unpack";
import {get_order_type} from "./devnet/rarible/check_sale_type";


async function run_tests(){
    //Batch Mint
    await batch_mint()

    //Batch Transfer
    await batch_transfer()

    //Batch sell
    await batch_v2_sale()

    //Auctions
    await auction()
    await auction_fa2()
    await auction_fa12()

    //Bids
    await bid()
    await bid_fa2()
    await bid_fa12()

    //Bundle Auctions
    await bundle_auction()
    await bundle_auction_fa2()
    await bundle_auction_fa12()

    //Bundle Bids
    await bundle_bid()
    await bundle_bid_fa2()
    await bundle_bid_fa12()

    //Bundle Sales
    await bundle_sale()
    await bundle_sale_fa2()
    await bundle_sale_fa12()

    //Floor Bids
    await floor_bid()
    await floor_bid_fa2()
    await floor_bid_fa12()

    //V2 Sales
    await v2_sale()
    await v2_sale_fa2()
    await v2_sale_fa12()

    //Cancel Sales
    await v2_cancel()
    await cancel_bundle_sale()

    //Cancel Bids
    await cancel_bid()
    await cancel_floor_bid()
    await cancel_bundle_bid()

    //Utils
    await deploy_nft()
    await get_decimals()
    await get_ft_type()
    await pack_unpack()
    await get_order_type()
    //await get_auction()
}
run_tests()