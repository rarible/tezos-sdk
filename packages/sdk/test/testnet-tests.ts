import {auction} from "./testnet/auction";
import {auction_fa2} from "./testnet/auction_fa2";
import {auction_fa12} from "./testnet/auction_fa12";
import {bid} from "./testnet/bid";
import {bid_fa2} from "./testnet/bid_fa2";
import {bid_fa12} from "./testnet/bid_fa12";
import {bundle_auction} from "./testnet/bundle_auction";
import {bundle_auction_fa2} from "./testnet/bundle_auction_fa2";
import {bundle_auction_fa12} from "./testnet/bundle_auction_fa12";
import {bundle_bid} from "./testnet/bundle_bid";
import {bundle_bid_fa2} from "./testnet/bundle_bid_fa2";
import {bundle_bid_fa12} from "./testnet/bundle_bid_fa12";
import {bundle_sale} from "./testnet/bundle_sale";
import {bundle_sale_fa2} from "./testnet/bundle_sale_fa2";
import {bundle_sale_fa12} from "./testnet/bundle_sale_fa12";
import {floor_bid} from "./testnet/floor_bid";
import {floor_bid_fa2} from "./testnet/floor_bid_fa2";
import {floor_bid_fa12} from "./testnet/floor_bid_fa12";
import {sale} from "./testnet/sale";
import {sale_fa12} from "./testnet/sale_fa12";
import {sale_fa2} from "./testnet/sale_fa2";
import {v2_sale} from "./testnet/v2_sale";
import {v2_sale_fa2} from "./testnet/v2_sale_fa2";
import {v2_sale_fa12} from "./testnet/v2_sale_fa12";
import {deploy_nft} from "./testnet/deploy_nft";
import {get_decimals} from "./testnet/get_decimals";
import {get_ft_type} from "./testnet/get_ft_type";
import {pack_unpack} from "./testnet/pack_unpack";
import {get_auction} from "./testnet/get_auction";
import {cancel_bundle_sale} from "./testnet/cancel_bundle_sale";
import {v2_cancel} from "./testnet/v2_cancel";


async function run_tests(){
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

    //Sales
    await sale()
    await sale_fa2()
    await sale_fa12()

    //V2 Sales
    await v2_sale()
    await v2_sale_fa2()
    await v2_sale_fa12()

    //Cancel
    await v2_cancel()
    await cancel_bundle_sale()

    //Utils
    await deploy_nft()
    await get_decimals()
    await get_ft_type()
    await pack_unpack()
    //await get_auction()

}
run_tests()