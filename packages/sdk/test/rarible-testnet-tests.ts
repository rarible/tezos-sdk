import {auction} from "./testnet/rarible/auction";
import {auction_fa2} from "./testnet/rarible/auction_fa2";
import {auction_fa12} from "./testnet/rarible/auction_fa12";
import {bid} from "./testnet/rarible/bid";
import {bid_fa2} from "./testnet/rarible/bid_fa2";
import {bid_fa12} from "./testnet/rarible/bid_fa12";
import {bundle_auction} from "./testnet/rarible/bundle_auction";
import {bundle_auction_fa2} from "./testnet/rarible/bundle_auction_fa2";
import {bundle_auction_fa12} from "./testnet/rarible/bundle_auction_fa12";
import {bundle_bid} from "./testnet/rarible/bundle_bid";
import {bundle_bid_fa2} from "./testnet/rarible/bundle_bid_fa2";
import {bundle_bid_fa12} from "./testnet/rarible/bundle_bid_fa12";
import {bundle_sale} from "./testnet/rarible/bundle_sale";
import {bundle_sale_fa2} from "./testnet/rarible/bundle_sale_fa2";
import {bundle_sale_fa12} from "./testnet/rarible/bundle_sale_fa12";
import {floor_bid} from "./testnet/rarible/floor_bid";
import {floor_bid_fa2} from "./testnet/rarible/floor_bid_fa2";
import {floor_bid_fa12} from "./testnet/rarible/floor_bid_fa12";
import {sale} from "./testnet/rarible/sale";
import {sale_fa12} from "./testnet/rarible/sale_fa12";
import {sale_fa2} from "./testnet/rarible/sale_fa2";
import {v2_sale} from "./testnet/rarible/v2_sale";
import {v2_sale_fa2} from "./testnet/rarible/v2_sale_fa2";
import {v2_sale_fa12} from "./testnet/rarible/v2_sale_fa12";
import {deploy_nft} from "./testnet/rarible/deploy_nft";
import {get_decimals} from "./testnet/rarible/get_decimals";
import {get_ft_type} from "./testnet/rarible/get_ft_type";
import {pack_unpack} from "./testnet/rarible/pack_unpack";
import {get_auction} from "./testnet/rarible/get_auction";
import {cancel_bundle_sale} from "./testnet/rarible/cancel_bundle_sale";
import {v2_cancel} from "./testnet/rarible/v2_cancel";
import {cancel_bid} from "./testnet/rarible/cancel_bid";
import {cancel_floor_bid} from "./testnet/rarible/cancel_floor_bid";
import {cancel_bundle_bid} from "./testnet/rarible/cancel_bundle_bid";
import {get_order_type} from "./testnet/rarible/check_sale_type";
import {batch_mint} from "./testnet/rarible/batch_mint";
import {batch_transfer} from "./testnet/rarible/batch_transfer";
import {batch_v2_sale} from "./testnet/rarible/batch_v2_sale";


async function run_tests(){

    //Sales
    await v2_sale()


}
run_tests()