import { Provider, XTZAssetType, FTAssetType, TransactionArg, AssetTypeV2, send_batch } from "@rarible/tezos-common"
import { ExtendedAssetType, check_asset_type } from "@rarible/tezos-common"
import { Part, OrderForm, salt, fill_offchain_royalties, OrderFormV2, parts_to_micheline, optional_date_arg, getAsset } from "./utils"
import { upsert_order } from "./upsert-order"
import BigNumber from "bignumber.js"
import { approve_v2 } from "./approve"
import { MichelsonData } from "@taquito/michel-codec"

export interface SellRequest {
  maker: string,
  maker_edpk: string,
  make_asset_type: ExtendedAssetType
  amount: BigNumber
  take_asset_type: XTZAssetType | FTAssetType
  price: BigNumber
  payouts: Array<Part>
  origin_fees: Array<Part>
}

export async function sell(
  provider: Provider,
  request: SellRequest
) {
  let order: OrderForm = {
    maker: request.maker,
    maker_edpk: request.maker_edpk,
    make: {
      asset_type: await check_asset_type(provider, request.make_asset_type),
      value: request.amount,
    },
    take: {
      asset_type: request.take_asset_type,
      value: new BigNumber(request.price).multipliedBy(request.amount),
    },
    type: "RARIBLE_V2",
    data: {
      data_type: "V1",
      payouts: request.payouts,
      origin_fees: request.origin_fees,
    },
    salt: salt()
  }
  order = await fill_offchain_royalties(provider, order)
  return upsert_order(provider, order, false)
}

export async function sellV2(
  provider: Provider,
  order: OrderFormV2,
  use_all = false
) {
  let args: TransactionArg[] = [];
  const seller = await provider.tezos.address();
  const approve_a = await approve_v2(
    provider,
    seller,
    AssetTypeV2.FA2,
    provider.config.transfer_manager,
    order.s_asset_contract,
    order.s_asset_token_id,
    order.s_sale.sale_amount,
    use_all
  );
  if (approve_a) args = args.concat(approve_a);
  args = args.concat(sell_arg_v2(provider, order));
  if (args.length != 0) {
    const op = await send_batch(provider, args);
    await op.confirmation();
    return op
  }
}

export function sell_arg_v2(
  provider: Provider,
  order: OrderFormV2
): TransactionArg {
  const parameter: MichelsonData = {
    prim: "Pair",
    args: [
      {
        string: order.s_asset_contract,
      },
      {
        prim: "Pair",
        args: [
          {
            int: `${order.s_asset_token_id}`,
          },
          {
            prim: "Pair",
            args: [
              {
                int: `${order.s_sale_type}`,
              },
              {
                prim: "Pair",
                args: [
                  {
                    bytes: getAsset(order.s_sale_type, order.s_sale_asset_contract, order.s_sale_asset_token_id)
                  },
                  {
                    prim: "Pair",
                    args: [
                      parts_to_micheline(order.s_sale.sale_origin_fees),
                      {
                        prim: "Pair",
                        args: [
                          parts_to_micheline(order.s_sale.sale_payouts),
                          {
                            prim: "Pair",
                            args: [
                              {
                                int: `${order.s_sale.sale_amount}`,
                              },
                              {
                                prim: "Pair",
                                args: [
                                  {
                                    int: `${order.s_sale.sale_asset_qty}`,
                                  },
                                  {
                                    prim: "Pair",
                                    args: [
                                      optional_date_arg(
                                        order.s_sale.sale_start
                                      ),
                                      {
                                        prim: "Pair",
                                        args: [
                                          optional_date_arg(
                                            order.s_sale.sale_end
                                          ),
                                          {
                                            prim: "Pair",
                                            args: [
                                              {
                                                int: `${order.s_sale.sale_max_fees_base_boint}`,
                                              },
                                              {
                                                prim: "Pair",
                                                args: [
                                                  {
                                                    prim: "None",
                                                  },
                                                  {
                                                    prim: "None",
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  return { destination: provider.config.sales, entrypoint: "sell", parameter };
}