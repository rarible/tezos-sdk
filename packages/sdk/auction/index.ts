import {
  absolute_amount,
  asset_type_contract,
  AssetData,
  AssetTypeV2,
  get_address,
  getAsset,
  MTAssetType,
  NFTAssetType,
  OperationResult,
  Provider,
  send_batch,
  StorageAuctions,
  TransactionArg, unpackFA12Asset,
  unpackFA2Asset
} from "@rarible/tezos-common"
import {MichelsonData} from "@taquito/michel-codec"
import BigNumber from "bignumber.js"
import {optional_date_arg, Part, parts_to_micheline} from "../order/utils"
import {approve_arg, approve_v2} from "../order/approve"

export interface Auction {
  sell_asset_contract: string,
  sell_asset_token_id: BigNumber,
  sell_asset_amount: BigNumber,
  buy_asset_type: AssetTypeV2;
  buy_asset_contract?: string;
  buy_asset_token_id?: BigNumber;
  start?: number;
  duration: BigNumber;
  minimal_price: BigNumber;
  max_seller_fees: BigNumber;
  buyout_price: BigNumber;
  minimal_step: BigNumber;
  origin_fees: Array<Part>;
  payouts: Array<Part>;
}

export interface AuctionBid {
  asset_contract: string,
  asset_token_id: BigNumber,
  asset_seller: string,
  origin_fees: Array<Part>;
  payouts: Array<Part>;
  amount: BigNumber;
  bidder?: string;
}

export interface AuctionBidInfo {
  bid_origin_fees : Array<Part>;
  bid_payouts : Array<Part>;
  bid_amount : BigNumber;
  bid_bidder: string;
  bid_data_type?  : string;
  bid_data?       : string;
}

export interface AuctionInfo {
  auction_sell_asset_amount: BigNumber,
  auction_buy_asset_type: AssetTypeV2,
  auction_buy_asset: string,
  auction_last_bid: AuctionBidInfo,
  auction_start_time: BigNumber,
  auction_end_time: BigNumber,
  auction_minimal_price: BigNumber,
  auction_buy_out_price: BigNumber,
  auction_minimal_step: BigNumber,
  auction_max_seller_fees: BigNumber,
  auction_origin_fees: Array<Part>,
  auction_payouts: Array<Part>,
  auction_data_type?: string,
  auction_data?: string,
}


export async function start_auction(provider: Provider, auction: Auction) : Promise<OperationResult> {
  const seller = await get_address(provider)
  const arg_approve = await approve_v2(provider, seller, AssetTypeV2.FA2, provider.config.transfer_manager, auction.sell_asset_contract, auction.sell_asset_token_id)
  const arg = auction_arg(provider, auction)
  const args = (arg_approve) ? [ arg_approve, arg ] : [ arg ]
  const op = await send_batch(provider, args);
  await op.confirmation();
  return op
}

export async function get_auction(provider: Provider, auction_asset_contract: string, auction_asset_token_id: BigNumber, auction_seller: string) : Promise<AuctionInfo | undefined> {
  const st : StorageAuctions = await provider.tezos.storage(provider.config.auction_storage)
  const auction: AuctionInfo | undefined = await st.auctions.get({
    0: auction_asset_contract,
    1: auction_asset_token_id.toFixed(),
    2: auction_seller
  })
  return auction;
}

export async function put_bid(provider: Provider, bid: AuctionBid, auction_asset_contract: string, auction_asset_token_id: BigNumber, auction_seller: string) : Promise<OperationResult> {
  const bidder = await get_address(provider)
  let arg_approve : TransactionArg | undefined
  const auction = await get_auction(provider, auction_asset_contract, auction_asset_token_id, auction_seller)
  if(auction == undefined){
    throw new Error("Missing auction")
  }
  if (auction.auction_buy_asset_type == AssetTypeV2.FA2 || auction.auction_buy_asset_type == AssetTypeV2.FA12) {
    arg_approve = await approve_v2(provider, bidder, auction.auction_buy_asset_type, provider.config.transfer_manager, bid.asset_contract, bid.asset_token_id, bid.amount)
  }
  let asset: AssetData = {}
  if(auction.auction_buy_asset_type == AssetTypeV2.FA2){
    asset = unpackFA2Asset(auction.auction_buy_asset)
  } else if (auction.auction_buy_asset_type == AssetTypeV2.FA12){
    asset = unpackFA12Asset(auction.auction_buy_asset)
  }
  const processed_amount = await absolute_amount(provider, bid.amount, auction.auction_buy_asset_type, asset.contract, asset.token_id)
  const arg = bid_arg(provider, bid, auction.auction_buy_asset_type, processed_amount)
  const args = (arg_approve) ? [ arg_approve, arg ] : [ arg ]
  const op = await send_batch(provider, args);
  await op.confirmation();
  return op
}

export async function cancel_auction(provider: Provider, auction_asset_contract: string, auction_asset_token_id: BigNumber) : Promise<OperationResult> {
  const parameter : MichelsonData = [
    {string: auction_asset_contract},
    {int: auction_asset_token_id.toString() } ]
  const arg = { destination: provider.config.auction, entrypoint: "cancel_auction", parameter }
  const op = await send_batch(provider, [ arg ]);
  await op.confirmation();
  return op
}

export async function finish_auction(provider: Provider, auction_asset_contract: string, auction_asset_token_id: BigNumber, auction_seller: string) : Promise<OperationResult> {
  const parameter : MichelsonData = [
    {string: auction_asset_contract},
    {int: auction_asset_token_id.toString() },
    {string: auction_seller}]
  const arg = { destination: provider.config.auction, entrypoint: "finish_auction", parameter }
  const op = await send_batch(provider, [ arg ]);
  await op.confirmation();
  return op
}

export function auction_arg(
    provider: Provider,
    auction: Auction
): TransactionArg {
  const parameter: MichelsonData = {
    prim: "Pair",
    args: [{
      string: auction.sell_asset_contract
    },
      {
        prim: "Pair",
        args: [{
          int: `${auction.sell_asset_token_id}`
        },
          {
            prim: "Pair",
            args: [{
              int: `${auction.sell_asset_amount}`
            },
              {
                prim: "Pair",
                args: [{
                  int: `${auction.buy_asset_type}`
                },
                  {
                    prim: "Pair",
                    args: [{
                      bytes: getAsset(auction.buy_asset_type, auction.buy_asset_contract, auction.buy_asset_token_id)
                    },
                      {
                        prim: "Pair",
                        args: [
                            optional_date_arg(auction.start),
                          {
                            prim: "Pair",
                            args: [{
                              int: `${auction.duration}`
                            },
                              {
                                prim: "Pair",
                                args: [{
                                  int: `${auction.minimal_price}`
                                },
                                  {
                                    prim: "Pair",
                                    args: [{
                                      int: `${auction.buyout_price}`
                                    },
                                      {
                                        prim: "Pair",
                                        args: [{
                                          int: `${auction.minimal_step}`
                                        },
                                          {
                                            prim: "Pair",
                                            args: [{
                                              int: `${auction.max_seller_fees}`
                                            },
                                              {
                                                prim: "Pair",
                                                args: [
                                                  parts_to_micheline(auction.origin_fees),
                                                  {
                                                    prim: "Pair",
                                                    args: [
                                                      parts_to_micheline(auction.payouts),
                                                      {
                                                        prim: "Pair",
                                                        args: [{
                                                          prim: "None"
                                                        },
                                                          {
                                                            prim: "None"
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  return { destination: provider.config.auction, entrypoint: "start_auction", parameter };
}

export function bid_arg(
    provider: Provider,
    bid: AuctionBid,
    bid_type: AssetTypeV2,
    processed_amount: BigNumber
): TransactionArg {
  let amount: BigNumber = new BigNumber(0)

  if(bid_type == AssetTypeV2.XTZ){
    amount = processed_amount
  }

  const parameter: MichelsonData = {
    prim: "Pair",
    args: [
      {
        string: `${bid.asset_contract}`
      },
      {
        prim: "Pair",
        args: [
          {
            int: `${bid.asset_token_id}`
          },
          {
            prim: "Pair",
            args: [
              {
                string: `${bid.asset_seller}`
              },
              {
                prim: "Pair",
                args: [
                  parts_to_micheline(bid.origin_fees),
                  {
                    prim: "Pair",
                    args: [
                      parts_to_micheline(bid.payouts),
                      {
                        prim: "Pair",
                        args: [
                          {
                            int: `${amount}`
                          },
                          {
                            prim: "Pair",
                            args: [
                              {
                                string: `${bid.bidder}`
                              },
                              {
                                prim: "Pair",
                                args: [
                                  {
                                    prim: "None"
                                  },
                                  {
                                    prim: "None"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  return { destination: provider.config.auction, entrypoint: "put_bid", parameter, amount: bid.amount };
}