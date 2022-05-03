import {
  absolute_amount,
  AssetData,
  AssetTypeV2,
  get_address,
  OperationResult,
  Provider,
  send_batch,
  TransactionArg,
  unpackFA12Asset,
  unpackFA2Asset
} from "@rarible/tezos-common"
import {MichelsonData} from "@taquito/michel-codec"
import BigNumber from "bignumber.js"
import {Part, parts_to_micheline} from "../order/utils"
import {approve_v2} from "../order";

export interface Bid {
  asset_contract: string,
  asset_token_id: BigNumber,
  bid_type: AssetTypeV2;
  bid_asset: string;
  bid: BidInfo
}

export interface FloorBid {
  asset_contract: string,
  bid_type: AssetTypeV2;
  bid_asset: string;
  bid: BidInfo
}

export interface BidInfo {
  bid_origin_fees : Array<Part>;
  bid_payouts : Array<Part>;
  bid_amount : BigNumber;
  bid_asset_qty: BigNumber;
  bid_data_type?  : string;
  bid_data?       : string;
}

export interface AcceptBid {
  asset_contract: string,
  asset_token_id: BigNumber,
  bidder: string
  bid_type: AssetTypeV2;
  bid_asset: string;
  bid_origin_fees : Array<Part>;
  bid_payouts : Array<Part>;
}

export async function put_bid(provider: Provider, bid: Bid) : Promise<OperationResult> {
  const bidder = await get_address(provider)
  let arg_approve : TransactionArg | undefined
  let asset: AssetData = {}
  if(bid.bid_type== AssetTypeV2.FA2){
    asset = unpackFA2Asset(bid.bid_asset)
  } else if (bid.bid_type == AssetTypeV2.FA12){
    asset = unpackFA12Asset(bid.bid_asset)
  }
  if (bid.bid_type == AssetTypeV2.FA2 || bid.bid_type == AssetTypeV2.FA12) {
    arg_approve = await approve_v2(provider, bidder, bid.bid_type, provider.config.transfer_manager, asset.contract, asset.token_id, bid.bid.bid_amount)
  }
  const processed_amount = await absolute_amount(provider, bid.bid.bid_amount, bid.bid_type, asset.contract, asset.token_id)
  const arg = bid_arg(provider, bid, bid.bid_type, processed_amount)
  const args = (arg_approve) ? [ arg_approve, arg ] : [ arg ]
  const op = await send_batch(provider, args);
  await op.confirmation();
  return op
}

export async function put_floor_bid(provider: Provider, bid: FloorBid) : Promise<OperationResult> {
  const bidder = await get_address(provider)
  let arg_approve : TransactionArg | undefined
  let asset: AssetData = {}
  if(bid.bid_type== AssetTypeV2.FA2){
    asset = unpackFA2Asset(bid.bid_asset)
  } else if (bid.bid_type == AssetTypeV2.FA12){
    asset = unpackFA12Asset(bid.bid_asset)
  }
  if (bid.bid_type == AssetTypeV2.FA2 || bid.bid_type == AssetTypeV2.FA12) {
    arg_approve = await approve_v2(provider, bidder, bid.bid_type, provider.config.transfer_manager, asset.contract, asset.token_id, bid.bid.bid_amount)
  }
  const processed_amount = await absolute_amount(provider, bid.bid.bid_amount, bid.bid_type, asset.contract, asset.token_id)
  const arg = floor_bid_arg(provider, bid, bid.bid_type, processed_amount)
  const args = (arg_approve) ? [ arg_approve, arg ] : [ arg ]
  const op = await send_batch(provider, args);
  await op.confirmation();
  return op
}

export async function accept_bid(provider: Provider, bid_data: AcceptBid, is_floor = false) : Promise<OperationResult> {
  const owner = await get_address(provider)
  const arg = accept_bid_arg(provider, bid_data, is_floor)
  const arg_approve = await approve_v2(provider, owner, AssetTypeV2.FA2, provider.config.transfer_manager, bid_data.asset_contract, bid_data.asset_token_id)
  const args = (arg_approve) ? [ arg_approve, arg ] : [ arg ]
  const op = await send_batch(provider, args);
  await op.confirmation();
  return op
}

function bid_arg(
    provider: Provider,
    bid: Bid,
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
                int: `${bid.bid_type}`
              },
              {
                prim: "Pair",
                args: [
                  {
                    "bytes": `${bid.bid_asset}`
                  },
                  {
                    prim: "Pair",
                    args: [
                      parts_to_micheline(bid.bid.bid_origin_fees),
                      {
                        prim: "Pair",
                        args: [
                          parts_to_micheline(bid.bid.bid_payouts),
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
                                    int: `${bid.bid.bid_asset_qty}`
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
      }
    ]
  };
  return { destination: provider.config.bid, entrypoint: "put_bid", parameter, amount: bid.bid.bid_amount };
}

function floor_bid_arg(
    provider: Provider,
    bid: FloorBid,
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
            int: `${bid.bid_type}`
          },
          {
            prim: "Pair",
            args: [
              {
                "bytes": `${bid.bid_asset}`
              },
              {
                prim: "Pair",
                args: [
                  parts_to_micheline(bid.bid.bid_origin_fees),
                  {
                    prim: "Pair",
                    args: [
                      parts_to_micheline(bid.bid.bid_payouts),
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
                                int: `${bid.bid.bid_asset_qty}`
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
  return { destination: provider.config.bid, entrypoint: "put_floor_bid", parameter, amount: bid.bid.bid_amount };
}

function accept_bid_arg(
    provider: Provider,
    bid_data: AcceptBid,
    is_floor = false
): TransactionArg {
  let entrypoint = "accept_bid"
  if(is_floor){
    entrypoint = "accept_floor_bid"
  }

  const parameter: MichelsonData = {
    prim: "Pair",
    args: [
      {
        string: `${bid_data.asset_contract}`
      },
      {
        prim: "Pair",
        args: [
          {
            int: `${bid_data.asset_token_id}`
          },
          {
            prim: "Pair",
            args: [
              {
                string: `${bid_data.bidder}`
              },
              {
                prim: "Pair",
                args: [
                  {
                    int: `${bid_data.bid_type}`
                  },
                  {
                    prim: "Pair",
                    args: [
                      {
                        "bytes": `${bid_data.bid_asset}`
                      },
                      {
                        prim: "Pair",
                        args: [
                          parts_to_micheline(bid_data.bid_origin_fees),
                          parts_to_micheline(bid_data.bid_payouts)
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
  return { destination: provider.config.bid, entrypoint: entrypoint, parameter };
}