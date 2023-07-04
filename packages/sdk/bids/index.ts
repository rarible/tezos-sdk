import {
  absolute_amount,
  approve_v2,
  AssetTypeV2,
  await_order,
  BundleItem,
  get_address,
  getAsset,
  mkPackedBundle,
  OperationResult,
  optional_date_arg,
  OrderStatus,
  Part,
  parts_to_micheline,
  Platform, ProtocolActivity,
  Provider,
  send_batch,
  TransactionArg
} from "@rarible/tezos-common"
import {MichelsonData} from "@taquito/michel-codec"
import BigNumber from "bignumber.js"

export interface Bid {
  asset_contract: string,
  asset_token_id: BigNumber,
  bid_type: AssetTypeV2;
  bid_asset_contract?: string;
  bid_asset_token_id?: BigNumber
  bid: BidInfo
}

export interface FloorBid {
  asset_contract: string,
  bid_type: AssetTypeV2;
  bid_asset_contract?: string;
  bid_asset_token_id?: BigNumber;
  bid: BidInfo
}

export interface BundleBid {
  bundle: Array<BundleItem>,
  bid_type: AssetTypeV2;
  bid_asset_contract?: string;
  bid_asset_token_id?: BigNumber;
  bid: BundleBidInfo
}

export interface BundleBidInfo {
  bid_origin_fees : Array<Part>;
  bid_payouts : Array<Part>;
  bid_amount : BigNumber;
  bid_expiry_date?: number;
  bid_data_type?  : string;
  bid_data?       : string;
}

export interface BidInfo {
  bid_origin_fees : Array<Part>;
  bid_payouts : Array<Part>;
  bid_amount : BigNumber;
  bid_asset_qty: BigNumber;
  bid_expiry_date?: number;
  bid_data_type?  : string;
  bid_data?       : string;
}

export interface AcceptBid {
  asset_contract: string,
  asset_token_id: BigNumber,
  bidder: string
  bid_type: AssetTypeV2;
  bid_asset_contract?: string;
  bid_asset_token_id?: BigNumber;
  bid_origin_fees : Array<Part>;
  bid_payouts : Array<Part>;
}

export interface AcceptBundleBid {
  bundle: Array<BundleItem>,
  bidder: string
  bid_type: AssetTypeV2;
  bid_asset_contract?: string;
  bid_asset_token_id?: BigNumber;
  bid_origin_fees : Array<Part>;
  bid_payouts : Array<Part>;
}

export interface CancelBid {
  asset_contract: string,
  asset_token_id: BigNumber,
  bid_type: AssetTypeV2;
  bid_asset_contract?: string;
  bid_asset_token_id?: BigNumber;
}

export interface CancelFloorBid {
  asset_contract: string,
  bid_type: AssetTypeV2;
  bid_asset_contract?: string;
  bid_asset_token_id?: BigNumber;
}

export interface CancelBundleBid {
  bundle: Array<BundleItem>,
  bid_type: AssetTypeV2;
  bid_asset_contract?: string;
  bid_asset_token_id?: BigNumber;
}

export async function put_bid(provider: Provider, bid: Bid) : Promise<string | undefined> {
  const bidder = await get_address(provider)
  let arg_approve : TransactionArg | undefined
  const processed_amount = await absolute_amount(provider.config, bid.bid.bid_amount, bid.bid_type, bid.bid_asset_contract, bid.bid_asset_token_id)
  if (bid.bid_type == AssetTypeV2.FA2 || bid.bid_type == AssetTypeV2.FA12) {
    arg_approve = await approve_v2(provider, bidder, bid.bid_type, provider.config.transfer_manager, bid.bid_asset_contract, bid.bid_asset_token_id, processed_amount)
  }
  const arg = bid_arg(provider, bid, processed_amount)
  const args = (arg_approve) ? [ arg_approve, arg ] : [ arg ]
  const op = await send_batch(provider, args);
  await op.confirmation();
  const bid_id = await await_order(provider.config, `${bid.asset_contract}:${bid.asset_token_id}`, op.hash, ProtocolActivity.BID, bidder, 20, 2000)
  return bid_id
}

export async function put_floor_bid(provider: Provider, bid: FloorBid) : Promise<OperationResult> {
  const bidder = await get_address(provider)
  let arg_approve : TransactionArg | undefined
  const processed_amount = await absolute_amount(provider.config, bid.bid.bid_amount, bid.bid_type, bid.bid_asset_contract, bid.bid_asset_token_id)
  if (bid.bid_type == AssetTypeV2.FA2 || bid.bid_type == AssetTypeV2.FA12) {
    arg_approve = await approve_v2(provider, bidder, bid.bid_type, provider.config.transfer_manager, bid.bid_asset_contract, bid.bid_asset_token_id, processed_amount)
  }
  const arg = floor_bid_arg(provider, bid, processed_amount)
  const args = (arg_approve) ? [ arg_approve, arg ] : [ arg ]
  const op = await send_batch(provider, args);
  await op.confirmation();
  return op
}

export async function put_bundle_bid(provider: Provider, bid: BundleBid) : Promise<OperationResult> {
  const bidder = await get_address(provider)
  let arg_approve : TransactionArg | undefined
  const processed_amount = await absolute_amount(provider.config, bid.bid.bid_amount, bid.bid_type, bid.bid_asset_contract, bid.bid_asset_token_id)
  if (bid.bid_type == AssetTypeV2.FA2 || bid.bid_type == AssetTypeV2.FA12) {
    arg_approve = await approve_v2(provider, bidder, bid.bid_type, provider.config.transfer_manager, bid.bid_asset_contract, bid.bid_asset_token_id, processed_amount)
  }
  const arg = bundle_bid_arg(provider, bid, processed_amount)
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

export async function accept_bundle_bid(provider: Provider, bid_data: AcceptBundleBid) : Promise<OperationResult> {
  let args: TransactionArg[] = [];
  const owner = await get_address(provider)
  const arg = accept_bundle_bid_arg(provider, bid_data)
  for(const bundleItem of bid_data.bundle){
    const approve_a = await approve_v2(
        provider,
        owner,
        AssetTypeV2.FA2,
        provider.config.transfer_manager,
        bundleItem.asset_contract,
        bundleItem.asset_token_id
    );
    if (approve_a) args = args.concat(approve_a);
  }
  args = args.concat(arg)
  const op = await send_batch(provider, args);
  await op.confirmation();
  return op
}

export async function cancel_bid(provider: Provider, bid_data: CancelBid) : Promise<OperationResult> {
  const arg = cancel_bid_arg(provider, bid_data)
  const op = await send_batch(provider, [arg]);
  await op.confirmation();
  return op
}

export async function cancel_floor_bid(provider: Provider, bid_data: CancelFloorBid) : Promise<OperationResult> {
  const arg = cancel_floor_bid_arg(provider, bid_data)
  const op = await send_batch(provider, [arg]);
  await op.confirmation();
  return op
}

export async function cancel_bundle_bid(provider: Provider, bid_data: CancelBundleBid) : Promise<OperationResult> {
  const arg = cancel_bundle_bid_arg(provider, bid_data)
  const op = await send_batch(provider, [arg]);
  await op.confirmation();
  return op
}

export function bid_arg(
    provider: Provider,
    bid: Bid,
    processed_amount: BigNumber
): TransactionArg {
  let tx_amount = new BigNumber(0)
  if(bid.bid_type == AssetTypeV2.XTZ){
    tx_amount = bid.bid.bid_amount
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
                    bytes: `${getAsset(bid.bid_type, bid.bid_asset_contract, bid.bid_asset_token_id)}`
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
                                int: `${processed_amount}`
                              },
                              {
                                prim: "Pair",
                                args: [
                                  {
                                    int: `${bid.bid.bid_asset_qty}`
                                  },
                                  optional_date_arg(bid.bid.bid_expiry_date),
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
  return { destination: provider.config.bid, entrypoint: "put_bid", parameter, amount: tx_amount };
}

export function floor_bid_arg(
    provider: Provider,
    bid: FloorBid,
    processed_amount: BigNumber
): TransactionArg {
  let tx_amount = new BigNumber(0)
  if(bid.bid_type == AssetTypeV2.XTZ){
    tx_amount = bid.bid.bid_amount
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
                bytes: `${getAsset(bid.bid_type, bid.bid_asset_contract, bid.bid_asset_token_id)}`
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
                            int: `${processed_amount}`
                          },
                          {
                            prim: "Pair",
                            args: [
                              {
                                int: `${bid.bid.bid_asset_qty}`
                              },
                              optional_date_arg(bid.bid.bid_expiry_date),
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
  return { destination: provider.config.bid, entrypoint: "put_floor_bid", parameter, amount: tx_amount };
}

export function bundle_bid_arg(
    provider: Provider,
    bid: BundleBid,
    processed_amount: BigNumber
): TransactionArg {
  let tx_amount = new BigNumber(0)
  if(bid.bid_type == AssetTypeV2.XTZ){
    tx_amount = bid.bid.bid_amount
  }

  const parameter: MichelsonData = {
    prim: "Pair",
    args: [
      {
        bytes: mkPackedBundle(bid.bundle)
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
                bytes: getAsset(bid.bid_type, bid.bid_asset_contract, bid.bid_asset_token_id)
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
                            int: `${processed_amount}`
                          },
                          optional_date_arg(bid.bid.bid_expiry_date),
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
  return { destination: provider.config.bid, entrypoint: "put_bundle_bid", parameter, amount: tx_amount };
}

export function accept_bid_arg(
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
                        bytes: `${getAsset(bid_data.bid_type, bid_data.bid_asset_contract, bid_data.bid_asset_token_id)}`
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

export function accept_bundle_bid_arg(
    provider: Provider,
    bid_data: AcceptBundleBid
): TransactionArg {
  const parameter: MichelsonData = {
    prim: "Pair",
    args: [
      {
        bytes: mkPackedBundle(bid_data.bundle)
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
                    bytes: getAsset(bid_data.bid_type, bid_data.bid_asset_contract, bid_data.bid_asset_token_id)
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
  return { destination: provider.config.bid, entrypoint: "accept_bundle_bid", parameter };
}

export function cancel_bid_arg(
    provider: Provider,
    bid_data: CancelBid
): TransactionArg {
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
                int: `${bid_data.bid_type}`
              },
              {
                bytes: getAsset(bid_data.bid_type, bid_data.bid_asset_contract, bid_data.bid_asset_token_id)
              }
            ]
          }
        ]
      }
    ]
  }
  return { destination: provider.config.bid, entrypoint: "cancel_bid", parameter };
}

export function cancel_floor_bid_arg(
    provider: Provider,
    bid_data: CancelFloorBid
): TransactionArg {
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
            int: `${bid_data.bid_type}`
          },
          {
            bytes: getAsset(bid_data.bid_type, bid_data.bid_asset_contract, bid_data.bid_asset_token_id)
          }
        ]
      }
    ]
  }
  return { destination: provider.config.bid, entrypoint: "cancel_floor_bid", parameter };
}

export function cancel_bundle_bid_arg(
    provider: Provider,
    bid_data: CancelBundleBid
): TransactionArg {
  const parameter: MichelsonData = {
    prim: "Pair",
    args: [
      {
        bytes: mkPackedBundle(bid_data.bundle)
      },
      {
        prim: "Pair",
        args: [
          {
            int: `${bid_data.bid_type}`
          },
          {
            bytes: getAsset(bid_data.bid_type, bid_data.bid_asset_contract, bid_data.bid_asset_token_id)
          }
        ]
      }
    ]
  }
  return { destination: provider.config.bid, entrypoint: "cancel_bundle_bid", parameter };
}
