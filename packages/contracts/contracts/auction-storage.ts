import { Provider, DeployResult } from "@rarible/tezos-common"
import {get_originate} from "@rarible/tezos-common";

export const auction_storage_code =
  [  {  "prim": "storage",
        "args": [
          {  "prim": "pair",
             "args": [
               {  "prim": "address",
                  "annots": [
                    "%owner"
                  ]
               },
               {  "prim": "pair",
                  "args": [
                    {  "prim": "option",
                       "args": [
                         {  "prim": "address"  }
                       ]
                       ,
                       "annots": [
                         "%owner_candidate"
                       ]
                    },
                    {  "prim": "pair",
                       "args": [
                         {  "prim": "option",
                            "args": [
                              {  "prim": "address"  }
                            ]
                            ,
                            "annots": [
                              "%auction_contract"
                            ]
                         },
                         {  "prim": "pair",
                            "args": [
                              {  "prim": "nat",
                                 "annots": [
                                   "%max_transferrable_fa12_amount"
                                 ]
                              },
                              {  "prim": "pair",
                                 "args": [
                                   {  "prim": "big_map",
                                      "args": [
                                        {  "prim": "pair",
                                           "args": [
                                             {  "prim": "address"  },
                                             {  "prim": "nat"  }
                                           ]
                                        },
                                        {  "prim": "pair",
                                           "args": [
                                             {  "prim": "pair",
                                                "args": [
                                                  {  "prim": "or",
                                                     "args": [
                                                       {  "prim": "unit",
                                                          "annots": [
                                                            "%XTZ"
                                                          ]
                                                       },
                                                       {  "prim": "or",
                                                          "args": [
                                                            {  "prim": "unit",
                                                               "annots": [
                                                                 "%FA_1_2"
                                                               ]
                                                            },
                                                            {  "prim": "or",
                                                               "args": [
                                                                 {  "prim": "int",
                                                                    "annots": [
                                                                      "%FA_2"
                                                                    ]
                                                                 },
                                                                 {  "prim": "or",
                                                                    "args": [

                                                                    {
                                                                    "prim": "int",
                                                                    "annots": [

                                                                    "%FA_2_LAZY"
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "bytes",
                                                                    "annots": [

                                                                    "%OTHER"
                                                                    ]
                                                                    }
                                                                    ]
                                                                 }
                                                               ]
                                                            }
                                                          ]
                                                       }
                                                     ]
                                                     ,
                                                     "annots": [
                                                       "%asset_type"
                                                     ]
                                                  },
                                                  {  "prim": "pair",
                                                     "args": [
                                                       {  "prim": "option",
                                                          "args": [
                                                            {  "prim": "address"  }
                                                          ]
                                                          ,
                                                          "annots": [
                                                            "%asset_contract"
                                                          ]
                                                       },
                                                       {  "prim": "option",
                                                          "args": [
                                                            {  "prim": "nat"  }
                                                          ]
                                                          ,
                                                          "annots": [
                                                            "%asset_id"
                                                          ]
                                                       }
                                                     ]
                                                  }
                                                ]
                                                ,
                                                "annots": [
                                                  "%auction_sell_asset"
                                                ]
                                             },
                                             {  "prim": "pair",
                                                "args": [
                                                  {  "prim": "nat",
                                                     "annots": [
                                                       "%auction_sell_asset_amount"
                                                     ]
                                                  },
                                                  {  "prim": "pair",
                                                     "args": [
                                                       {  "prim": "pair",
                                                          "args": [
                                                            {  "prim": "or",
                                                               "args": [
                                                                 {  "prim": "unit",
                                                                    "annots": [
                                                                      "%XTZ"
                                                                    ]
                                                                 },
                                                                 {  "prim": "or",
                                                                    "args": [

                                                                    {
                                                                    "prim": "unit",
                                                                    "annots": [

                                                                    "%FA_1_2"
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "or",
                                                                    "args": [

                                                                    {
                                                                    "prim": "int",
                                                                    "annots": [
                                                                      "%FA_2"
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "or",
                                                                    "args": [

                                                                    {
                                                                    "prim": "int",
                                                                    "annots": [

                                                                    "%FA_2_LAZY"
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "bytes",
                                                                    "annots": [

                                                                    "%OTHER"
                                                                    ]
                                                                    }
                                                                    ]
                                                                    }
                                                                    ]
                                                                    }
                                                                    ]
                                                                 }
                                                               ]
                                                               ,
                                                               "annots": [
                                                                 "%asset_type"
                                                               ]
                                                            },
                                                            {  "prim": "pair",
                                                               "args": [
                                                                 {  "prim": "option",
                                                                    "args": [

                                                                    {  "prim": "address"  }
                                                                    ]
                                                                    ,
                                                                    "annots": [

                                                                    "%asset_contract"
                                                                    ]
                                                                 },
                                                                 {  "prim": "option",
                                                                    "args": [

                                                                    {  "prim": "nat"  }
                                                                    ]
                                                                    ,
                                                                    "annots": [

                                                                    "%asset_id"
                                                                    ]
                                                                 }
                                                               ]
                                                            }
                                                          ]
                                                          ,
                                                          "annots": [
                                                            "%auction_buy_asset"
                                                          ]
                                                       },
                                                       {  "prim": "pair",
                                                          "args": [
                                                            {  "prim": "option",
                                                               "args": [
                                                                 {  "prim": "pair",
                                                                    "args": [

                                                                    {
                                                                    "prim": "list",
                                                                    "args": [

                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {
                                                                    "prim": "address",
                                                                    "annots": [

                                                                    "%part_account"
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "nat",
                                                                    "annots": [

                                                                    "%part_value"
                                                                    ]
                                                                    }
                                                                    ]
                                                                    }
                                                                    ]
                                                                    ,
                                                                    "annots": [

                                                                    "%bid_payouts"
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {
                                                                    "prim": "list",
                                                                    "args": [

                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {
                                                                    "prim": "address",
                                                                    "annots": [

                                                                    "%part_account"
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "nat",
                                                                    "annots": [

                                                                    "%part_value"
                                                                    ]
                                                                    }
                                                                    ]
                                                                    }
                                                                    ]
                                                                    ,
                                                                    "annots": [

                                                                    "%bid_origin_fees"
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {
                                                                    "prim": "nat",
                                                                    "annots": [

                                                                    "%bid_amount"
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "address",
                                                                    "annots": [

                                                                    "%bid_bidder"
                                                                    ]
                                                                    }
                                                                    ]
                                                                    }
                                                                    ]
                                                                    }
                                                                    ]
                                                                 }
                                                               ]
                                                               ,
                                                               "annots": [
                                                                 "%auction_last_bid"
                                                               ]
                                                            },
                                                            {  "prim": "pair",
                                                               "args": [
                                                                 {  "prim": "address",
                                                                    "annots": [

                                                                    "%auction_seller"
                                                                    ]
                                                                 },
                                                                 {  "prim": "pair",
                                                                    "args": [

                                                                    {
                                                                    "prim": "timestamp",
                                                                    "annots": [

                                                                    "%auction_start_time"
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {
                                                                    "prim": "timestamp",
                                                                    "annots": [

                                                                    "%auction_end_time"
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {
                                                                    "prim": "nat",
                                                                    "annots": [

                                                                    "%auction_minimal_price"
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {
                                                                    "prim": "nat",
                                                                    "annots": [

                                                                    "%auction_buy_out_price"
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {
                                                                    "prim": "nat",
                                                                    "annots": [

                                                                    "%auction_minimal_step"
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {
                                                                    "prim": "nat",
                                                                    "annots": [

                                                                    "%auction_protocol_fee"
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {
                                                                    "prim": "list",
                                                                    "args": [

                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {
                                                                    "prim": "address",
                                                                    "annots": [

                                                                    "%part_account"
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "nat",
                                                                    "annots": [

                                                                    "%part_value"
                                                                    ]
                                                                    }
                                                                    ]
                                                                    }
                                                                    ]
                                                                    ,
                                                                    "annots": [

                                                                    "%auction_payouts"
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "list",
                                                                    "args": [

                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {
                                                                    "prim": "address",
                                                                    "annots": [

                                                                    "%part_account"
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "nat",
                                                                    "annots": [

                                                                    "%part_value"
                                                                    ]
                                                                    }
                                                                    ]
                                                                    }
                                                                    ]
                                                                    ,
                                                                    "annots": [

                                                                    "%auction_origin_fees"
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
                                      ,
                                      "annots": [
                                        "%auctions"
                                      ]
                                   },
                                   {  "prim": "big_map",
                                      "args": [
                                        {  "prim": "string"  },
                                        {  "prim": "bytes"  }
                                      ]
                                      ,
                                      "annots": [
                                        "%metadata"
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
  },
  {  "prim": "parameter",
     "args": [
       {  "prim": "or",
          "args": [
            {  "prim": "or",
               "args": [
                 {  "prim": "or",
                    "args": [
                      {  "prim": "address",
                         "annots": [
                           "%declare_ownership"
                         ]
                      },
                      {  "prim": "unit",
                         "annots": [
                           "%claim_ownership"
                         ]
                      }
                    ]
                 },
                 {  "prim": "or",
                    "args": [
                      {  "prim": "address",
                         "annots": [
                           "%set_auction_contract"
                         ]
                      },
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "or",
                                   "args": [
                                     {  "prim": "unit",
                                        "annots": [
                                          "%XTZ"
                                        ]
                                     },
                                     {  "prim": "or",
                                        "args": [
                                          {  "prim": "unit",
                                             "annots": [
                                               "%FA_1_2"
                                             ]
                                          },
                                          {  "prim": "or",
                                             "args": [
                                               {  "prim": "int",
                                                  "annots": [
                                                    "%FA_2"
                                                  ]
                                               },
                                               {  "prim": "or",
                                                  "args": [
                                                    {  "prim": "int",
                                                       "annots": [
                                                         "%FA_2_LAZY"
                                                       ]
                                                    },
                                                    {  "prim": "bytes",
                                                       "annots": [
                                                         "%OTHER"
                                                       ]
                                                    }
                                                  ]
                                               }
                                             ]
                                          }
                                        ]
                                     }
                                   ]
                                   ,
                                   "annots": [
                                     "%asset_type"
                                   ]
                                },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "option",
                                        "args": [
                                          {  "prim": "address"  }
                                        ]
                                        ,
                                        "annots": [
                                          "%asset_contract"
                                        ]
                                     },
                                     {  "prim": "option",
                                        "args": [
                                          {  "prim": "nat"  }
                                        ]
                                        ,
                                        "annots": [
                                          "%asset_id"
                                        ]
                                     }
                                   ]
                                }
                              ]
                              ,
                              "annots": [
                                "%auction_sell_asset"
                              ]
                           },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "nat",
                                   "annots": [
                                     "%auction_sell_asset_amount"
                                   ]
                                },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "or",
                                             "args": [
                                               {  "prim": "unit",
                                                  "annots": [
                                                    "%XTZ"
                                                  ]
                                               },
                                               {  "prim": "or",
                                                  "args": [
                                                    {  "prim": "unit",
                                                       "annots": [
                                                         "%FA_1_2"
                                                       ]
                                                    },
                                                    {  "prim": "or",
                                                       "args": [
                                                         {  "prim": "int",
                                                            "annots": [
                                                              "%FA_2"
                                                            ]
                                                         },
                                                         {  "prim": "or",
                                                            "args": [
                                                              {  "prim": "int",
                                                                 "annots": [
                                                                   "%FA_2_LAZY"
                                                                 ]
                                                              },
                                                              {  "prim": "bytes",
                                                                 "annots": [
                                                                   "%OTHER"
                                                                 ]
                                                              }
                                                            ]
                                                         }
                                                       ]
                                                    }
                                                  ]
                                               }
                                             ]
                                             ,
                                             "annots": [
                                               "%asset_type"
                                             ]
                                          },
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "option",
                                                  "args": [
                                                    {  "prim": "address"  }
                                                  ]
                                                  ,
                                                  "annots": [
                                                    "%asset_contract"
                                                  ]
                                               },
                                               {  "prim": "option",
                                                  "args": [
                                                    {  "prim": "nat"  }
                                                  ]
                                                  ,
                                                  "annots": [
                                                    "%asset_id"
                                                  ]
                                               }
                                             ]
                                          }
                                        ]
                                        ,
                                        "annots": [
                                          "%auction_buy_asset"
                                        ]
                                     },
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "option",
                                             "args": [
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "list",
                                                       "args": [
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "address",
                                                                 "annots": [
                                                                   "%part_account"
                                                                 ]
                                                              },
                                                              {  "prim": "nat",
                                                                 "annots": [
                                                                   "%part_value"
                                                                 ]
                                                              }
                                                            ]
                                                         }
                                                       ]
                                                       ,
                                                       "annots": [
                                                         "%bid_payouts"
                                                       ]
                                                    },
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "list",
                                                            "args": [
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {
                                                                   "prim": "address",
                                                                   "annots": [

                                                                   "%part_account"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%part_value"
                                                                   ]
                                                                   }
                                                                 ]
                                                              }
                                                            ]
                                                            ,
                                                            "annots": [
                                                              "%bid_origin_fees"
                                                            ]
                                                         },
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "nat",
                                                                 "annots": [
                                                                   "%bid_amount"
                                                                 ]
                                                              },
                                                              {  "prim": "address",
                                                                 "annots": [
                                                                   "%bid_bidder"
                                                                 ]
                                                              }
                                                            ]
                                                         }
                                                       ]
                                                    }
                                                  ]
                                               }
                                             ]
                                             ,
                                             "annots": [
                                               "%auction_last_bid"
                                             ]
                                          },
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "address",
                                                  "annots": [
                                                    "%auction_seller"
                                                  ]
                                               },
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "timestamp",
                                                       "annots": [
                                                         "%auction_start_time"
                                                       ]
                                                    },
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "timestamp",
                                                            "annots": [
                                                              "%auction_end_time"
                                                            ]
                                                         },
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "nat",
                                                                 "annots": [
                                                                   "%auction_minimal_price"
                                                                 ]
                                                              },
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%auction_buy_out_price"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%auction_minimal_step"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%auction_protocol_fee"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "list",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "address",
                                                                   "annots": [

                                                                   "%part_account"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%part_value"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%auction_payouts"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "list",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "address",
                                                                   "annots": [

                                                                   "%part_account"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%part_value"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%auction_origin_fees"
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
                         ,
                         "annots": [
                           "%set_auction"
                         ]
                      }
                    ]
                 }
               ]
            },
            {  "prim": "or",
               "args": [
                 {  "prim": "or",
                    "args": [
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "address",
                              "annots": [
                                "%ubfa_asset_contract"
                              ]
                           },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "nat",
                                   "annots": [
                                     "%ubfa_asset_id"
                                   ]
                                },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "list",
                                        "args": [
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "address",
                                                  "annots": [
                                                    "%part_account"
                                                  ]
                                               },
                                               {  "prim": "nat",
                                                  "annots": [
                                                    "%part_value"
                                                  ]
                                               }
                                             ]
                                          }
                                        ]
                                        ,
                                        "annots": [
                                          "%bid_payouts"
                                        ]
                                     },
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "list",
                                             "args": [
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "address",
                                                       "annots": [
                                                         "%part_account"
                                                       ]
                                                    },
                                                    {  "prim": "nat",
                                                       "annots": [
                                                         "%part_value"
                                                       ]
                                                    }
                                                  ]
                                               }
                                             ]
                                             ,
                                             "annots": [
                                               "%bid_origin_fees"
                                             ]
                                          },
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "nat",
                                                  "annots": [
                                                    "%bid_amount"
                                                  ]
                                               },
                                               {  "prim": "address",
                                                  "annots": [
                                                    "%bid_bidder"
                                                  ]
                                               }
                                             ]
                                          }
                                        ]
                                     }
                                   ]
                                   ,
                                   "annots": [
                                     "%ubfa_bid"
                                   ]
                                }
                              ]
                           }
                         ]
                         ,
                         "annots": [
                           "%update_bid_for_auction"
                         ]
                      },
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "or",
                                   "args": [
                                     {  "prim": "unit",
                                        "annots": [
                                          "%XTZ"
                                        ]
                                     },
                                     {  "prim": "or",
                                        "args": [
                                          {  "prim": "unit",
                                             "annots": [
                                               "%FA_1_2"
                                             ]
                                          },
                                          {  "prim": "or",
                                             "args": [
                                               {  "prim": "int",
                                                  "annots": [
                                                    "%FA_2"
                                                  ]
                                               },
                                               {  "prim": "or",
                                                  "args": [
                                                    {  "prim": "int",
                                                       "annots": [
                                                         "%FA_2_LAZY"
                                                       ]
                                                    },
                                                    {  "prim": "bytes",
                                                       "annots": [
                                                         "%OTHER"
                                                       ]
                                                    }
                                                  ]
                                               }
                                             ]
                                          }
                                        ]
                                     }
                                   ]
                                   ,
                                   "annots": [
                                     "%asset_type"
                                   ]
                                },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "option",
                                        "args": [
                                          {  "prim": "address"  }
                                        ]
                                        ,
                                        "annots": [
                                          "%asset_contract"
                                        ]
                                     },
                                     {  "prim": "option",
                                        "args": [
                                          {  "prim": "nat"  }
                                        ]
                                        ,
                                        "annots": [
                                          "%asset_id"
                                        ]
                                     }
                                   ]
                                }
                              ]
                              ,
                              "annots": [
                                "%auction_sell_asset"
                              ]
                           },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "nat",
                                   "annots": [
                                     "%auction_sell_asset_amount"
                                   ]
                                },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "or",
                                             "args": [
                                               {  "prim": "unit",
                                                  "annots": [
                                                    "%XTZ"
                                                  ]
                                               },
                                               {  "prim": "or",
                                                  "args": [
                                                    {  "prim": "unit",
                                                       "annots": [
                                                         "%FA_1_2"
                                                       ]
                                                    },
                                                    {  "prim": "or",
                                                       "args": [
                                                         {  "prim": "int",
                                                            "annots": [
                                                              "%FA_2"
                                                            ]
                                                         },
                                                         {  "prim": "or",
                                                            "args": [
                                                              {  "prim": "int",
                                                                 "annots": [
                                                                   "%FA_2_LAZY"
                                                                 ]
                                                              },
                                                              {  "prim": "bytes",
                                                                 "annots": [
                                                                   "%OTHER"
                                                                 ]
                                                              }
                                                            ]
                                                         }
                                                       ]
                                                    }
                                                  ]
                                               }
                                             ]
                                             ,
                                             "annots": [
                                               "%asset_type"
                                             ]
                                          },
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "option",
                                                  "args": [
                                                    {  "prim": "address"  }
                                                  ]
                                                  ,
                                                  "annots": [
                                                    "%asset_contract"
                                                  ]
                                               },
                                               {  "prim": "option",
                                                  "args": [
                                                    {  "prim": "nat"  }
                                                  ]
                                                  ,
                                                  "annots": [
                                                    "%asset_id"
                                                  ]
                                               }
                                             ]
                                          }
                                        ]
                                        ,
                                        "annots": [
                                          "%auction_buy_asset"
                                        ]
                                     },
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "option",
                                             "args": [
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "list",
                                                       "args": [
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "address",
                                                                 "annots": [
                                                                   "%part_account"
                                                                 ]
                                                              },
                                                              {  "prim": "nat",
                                                                 "annots": [
                                                                   "%part_value"
                                                                 ]
                                                              }
                                                            ]
                                                         }
                                                       ]
                                                       ,
                                                       "annots": [
                                                         "%bid_payouts"
                                                       ]
                                                    },
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "list",
                                                            "args": [
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {
                                                                   "prim": "address",
                                                                   "annots": [

                                                                   "%part_account"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%part_value"
                                                                   ]
                                                                   }
                                                                 ]
                                                              }
                                                            ]
                                                            ,
                                                            "annots": [
                                                              "%bid_origin_fees"
                                                            ]
                                                         },
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "nat",
                                                                 "annots": [
                                                                   "%bid_amount"
                                                                 ]
                                                              },
                                                              {  "prim": "address",
                                                                 "annots": [
                                                                   "%bid_bidder"
                                                                 ]
                                                              }
                                                            ]
                                                         }
                                                       ]
                                                    }
                                                  ]
                                               }
                                             ]
                                             ,
                                             "annots": [
                                               "%auction_last_bid"
                                             ]
                                          },
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "address",
                                                  "annots": [
                                                    "%auction_seller"
                                                  ]
                                               },
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "timestamp",
                                                       "annots": [
                                                         "%auction_start_time"
                                                       ]
                                                    },
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "timestamp",
                                                            "annots": [
                                                              "%auction_end_time"
                                                            ]
                                                         },
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "nat",
                                                                 "annots": [
                                                                   "%auction_minimal_price"
                                                                 ]
                                                              },
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%auction_buy_out_price"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%auction_minimal_step"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%auction_protocol_fee"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "list",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "address",
                                                                   "annots": [

                                                                   "%part_account"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%part_value"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%auction_payouts"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "list",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "address",
                                                                   "annots": [

                                                                   "%part_account"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%part_value"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%auction_origin_fees"
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
                         ,
                         "annots": [
                           "%update_auction"
                         ]
                      }
                    ]
                 },
                 {  "prim": "or",
                    "args": [
                      {  "prim": "or",
                         "args": [
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "address",
                                   "annots": [
                                     "%ead_asset_contract"
                                   ]
                                },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "nat",
                                        "annots": [
                                          "%ead_asset_id"
                                        ]
                                     },
                                     {  "prim": "int",
                                        "annots": [
                                          "%ead_duration"
                                        ]
                                     }
                                   ]
                                }
                              ]
                              ,
                              "annots": [
                                "%extend_auction_duration"
                              ]
                           },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "address",
                                   "annots": [
                                     "%ra_asset"
                                   ]
                                },
                                {  "prim": "nat",
                                   "annots": [
                                     "%ra_asset_id"
                                   ]
                                }
                              ]
                              ,
                              "annots": [
                                "%remove_auction"
                              ]
                           }
                         ]
                      },
                      {  "prim": "or",
                         "args": [
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "or",
                                   "args": [
                                     {  "prim": "unit",
                                        "annots": [
                                          "%XTZ"
                                        ]
                                     },
                                     {  "prim": "or",
                                        "args": [
                                          {  "prim": "unit",
                                             "annots": [
                                               "%FA_1_2"
                                             ]
                                          },
                                          {  "prim": "or",
                                             "args": [
                                               {  "prim": "int",
                                                  "annots": [
                                                    "%FA_2"
                                                  ]
                                               },
                                               {  "prim": "or",
                                                  "args": [
                                                    {  "prim": "int",
                                                       "annots": [
                                                         "%FA_2_LAZY"
                                                       ]
                                                    },
                                                    {  "prim": "bytes",
                                                       "annots": [
                                                         "%OTHER"
                                                       ]
                                                    }
                                                  ]
                                               }
                                             ]
                                          }
                                        ]
                                     }
                                   ]
                                   ,
                                   "annots": [
                                     "%ptp_asset_class"
                                   ]
                                },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "option",
                                        "args": [
                                          {  "prim": "address"  }
                                        ]
                                        ,
                                        "annots": [
                                          "%ptp_asset_contract"
                                        ]
                                     },
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "option",
                                             "args": [
                                               {  "prim": "nat"  }
                                             ]
                                             ,
                                             "annots": [
                                               "%ptp_asset_id"
                                             ]
                                          },
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "nat",
                                                  "annots": [
                                                    "%ptp_amount"
                                                  ]
                                               },
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "address",
                                                       "annots": [
                                                         "%ptp_origin"
                                                       ]
                                                    },
                                                    {  "prim": "address",
                                                       "annots": [
                                                         "%ptp_destination"
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
                              ,
                              "annots": [
                                "%process_transfer"
                              ]
                           },
                           {  "prim": "unit",
                              "annots": [
                                "%default"
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
  },
  {  "prim": "code",
     "args": [
       [  {  "prim": "NIL",
             "args": [
               {  "prim": "operation"  }
             ]
       },
       {  "prim": "DIG",
          "args": [
            {  "int": "1"  }
          ]
       },
       {  "prim": "UNPAIR"  },
       {  "prim": "DIP",
          "args": [
            {  "int": "1"  },
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "6"  }
                  ]
            }  ]
          ]
       },
       {  "prim": "IF_LEFT",
          "args": [
            [  {  "prim": "IF_LEFT",
                  "args": [
                    [  {  "prim": "IF_LEFT",
                          "args": [
                            [  {  "prim": "DUP",
                                  "args": [
                                    {  "int": "2"  }
                                  ]
                            },
                            {  "prim": "SENDER"  },
                            {  "prim": "COMPARE"  },
                            {  "prim": "EQ"  },
                            {  "prim": "NOT"  },
                            {  "prim": "IF",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "InvalidCaller"  }
                                       ]
                                 },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "DUP"  },
                            {  "prim": "SOME"  },
                            {  "prim": "DIP",
                               "args": [
                                 {  "int": "1"  },
                                 [  {  "prim": "DIG",
                                       "args": [
                                         {  "int": "2"  }
                                       ]
                                 },
                                 {  "prim": "DROP",
                                    "args": [
                                      {  "int": "1"  }
                                    ]
                                 }  ]
                               ]
                            },
                            {  "prim": "DUG",
                               "args": [
                                 {  "int": "2"  }
                               ]
                            },
                            {  "prim": "DROP",
                               "args": [
                                 {  "int": "1"  }
                               ]
                            },
                            {  "prim": "PAIR",
                               "args": [
                                 {  "int": "6"  }
                               ]
                            },
                            {  "prim": "DIG",
                               "args": [
                                 {  "int": "1"  }
                               ]
                            },
                            {  "prim": "PAIR"  }  ],
                            [  {  "prim": "DROP",
                                  "args": [
                                    {  "int": "1"  }
                                  ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "2"  }
                               ]
                            },
                            {  "prim": "IF_NONE",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "NotFound"  }
                                       ]
                                 },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "SENDER"  },
                            {  "prim": "COMPARE"  },
                            {  "prim": "EQ"  },
                            {  "prim": "NOT"  },
                            {  "prim": "IF",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "InvalidCaller"  }
                                       ]
                                 },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "2"  }
                               ]
                            },
                            {  "prim": "IF_NONE",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "NotFound"  }
                                       ]
                                 },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "SWAP"  },
                            {  "prim": "DROP",
                               "args": [
                                 {  "int": "1"  }
                               ]
                            },
                            {  "prim": "NONE",
                               "args": [
                                 {  "prim": "address"  }
                               ]
                            },
                            {  "prim": "DIP",
                               "args": [
                                 {  "int": "1"  },
                                 [  {  "prim": "DIG",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                 },
                                 {  "prim": "DROP",
                                    "args": [
                                      {  "int": "1"  }
                                    ]
                                 }  ]
                               ]
                            },
                            {  "prim": "DUG",
                               "args": [
                                 {  "int": "1"  }
                               ]
                            },
                            {  "prim": "PAIR",
                               "args": [
                                 {  "int": "6"  }
                               ]
                            },
                            {  "prim": "DIG",
                               "args": [
                                 {  "int": "1"  }
                               ]
                            },
                            {  "prim": "PAIR"  }  ]
                          ]
                    }  ],
                    [  {  "prim": "IF_LEFT",
                          "args": [
                            [  {  "prim": "DUP",
                                  "args": [
                                    {  "int": "2"  }
                                  ]
                            },
                            {  "prim": "SENDER"  },
                            {  "prim": "COMPARE"  },
                            {  "prim": "EQ"  },
                            {  "prim": "NOT"  },
                            {  "prim": "IF",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "InvalidCaller"  }
                                       ]
                                 },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "DUP"  },
                            {  "prim": "SOME"  },
                            {  "prim": "DIP",
                               "args": [
                                 {  "int": "1"  },
                                 [  {  "prim": "DIG",
                                       "args": [
                                         {  "int": "3"  }
                                       ]
                                 },
                                 {  "prim": "DROP",
                                    "args": [
                                      {  "int": "1"  }
                                    ]
                                 }  ]
                               ]
                            },
                            {  "prim": "DUG",
                               "args": [
                                 {  "int": "3"  }
                               ]
                            },
                            {  "prim": "DROP",
                               "args": [
                                 {  "int": "1"  }
                               ]
                            },
                            {  "prim": "PAIR",
                               "args": [
                                 {  "int": "6"  }
                               ]
                            },
                            {  "prim": "DIG",
                               "args": [
                                 {  "int": "1"  }
                               ]
                            },
                            {  "prim": "PAIR"  }  ],
                            [  {  "prim": "DUP",
                                  "args": [
                                    {  "int": "4"  }
                                  ]
                            },
                            {  "prim": "IF_NONE",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "MISSING_AUCTION_CONTRACT"  }
                                       ]
                                 },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "SENDER"  },
                            {  "prim": "COMPARE"  },
                            {  "prim": "EQ"  },
                            {  "prim": "NOT"  },
                            {  "prim": "IF",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "InvalidCaller"  }
                                       ]
                                 },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "4"  }
                               ]
                            },
                            {  "prim": "IF_NONE",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "bool"  },
                                         {  "prim": "False"  }
                                       ]
                                 }  ],
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "bool"  },
                                         {  "prim": "True"  }
                                       ]
                                 },
                                 {  "prim": "SWAP"  },
                                 {  "prim": "DROP",
                                    "args": [
                                      {  "int": "1"  }
                                    ]
                                 }  ]
                               ]
                            },
                            {  "prim": "NOT"  },
                            {  "prim": "IF",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "r0"  }
                                       ]
                                 },
                                 {  "prim": "PUSH",
                                    "args": [
                                      {  "prim": "string"  },
                                      {  "string": "InvalidCondition"  }
                                    ]
                                 },
                                 {  "prim": "PAIR"  },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "DUP"  },
                            {  "prim": "CAR"  },
                            {  "prim": "CDR"  },
                            {  "prim": "CAR"  },
                            {  "prim": "IF_NONE",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "bool"  },
                                         {  "prim": "False"  }
                                       ]
                                 }  ],
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "bool"  },
                                         {  "prim": "True"  }
                                       ]
                                 },
                                 {  "prim": "SWAP"  },
                                 {  "prim": "DROP",
                                    "args": [
                                      {  "int": "1"  }
                                    ]
                                 }  ]
                               ]
                            },
                            {  "prim": "NOT"  },
                            {  "prim": "IF",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "r1"  }
                                       ]
                                 },
                                 {  "prim": "PUSH",
                                    "args": [
                                      {  "prim": "string"  },
                                      {  "string": "InvalidCondition"  }
                                    ]
                                 },
                                 {  "prim": "PAIR"  },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "DUP"  },
                            {  "prim": "CAR"  },
                            {  "prim": "CDR"  },
                            {  "prim": "CDR"  },
                            {  "prim": "IF_NONE",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "bool"  },
                                         {  "prim": "False"  }
                                       ]
                                 }  ],
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "bool"  },
                                         {  "prim": "True"  }
                                       ]
                                 },
                                 {  "prim": "SWAP"  },
                                 {  "prim": "DROP",
                                    "args": [
                                      {  "int": "1"  }
                                    ]
                                 }  ]
                               ]
                            },
                            {  "prim": "NOT"  },
                            {  "prim": "IF",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "r2"  }
                                       ]
                                 },
                                 {  "prim": "PUSH",
                                    "args": [
                                      {  "prim": "string"  },
                                      {  "string": "InvalidCondition"  }
                                    ]
                                 },
                                 {  "prim": "PAIR"  },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "4"  }
                               ]
                            },
                            {  "prim": "IF_NONE",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "NotFound"  }
                                       ]
                                 },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "2"  }
                               ]
                            },
                            {  "prim": "CAR"  },
                            {  "prim": "CDR"  },
                            {  "prim": "CDR"  },
                            {  "prim": "IF_NONE",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "NotFound"  }
                                       ]
                                 },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "3"  }
                               ]
                            },
                            {  "prim": "CAR"  },
                            {  "prim": "CDR"  },
                            {  "prim": "CAR"  },
                            {  "prim": "IF_NONE",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "NotFound"  }
                                       ]
                                 },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "4"  }
                               ]
                            },
                            {  "prim": "CDR"  },
                            {  "prim": "CDR"  },
                            {  "prim": "CAR"  },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "10"  }
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "4"  }
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "4"  }
                               ]
                            },
                            {  "prim": "PAIR"  },
                            {  "prim": "MEM"  },
                            {  "prim": "IF",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "auctions"  }
                                       ]
                                 },
                                 {  "prim": "PUSH",
                                    "args": [
                                      {  "prim": "string"  },
                                      {  "string": "KeyExists"  }
                                    ]
                                 },
                                 {  "prim": "PAIR"  },
                                 {  "prim": "FAILWITH"  }  ],
                                 [  {  "prim": "DUP",
                                       "args": [
                                         {  "int": "10"  }
                                       ]
                                 },
                                 {  "prim": "DUP",
                                    "args": [
                                      {  "int": "6"  }
                                    ]
                                 },
                                 {  "prim": "SOME"  },
                                 {  "prim": "DUP",
                                    "args": [
                                      {  "int": "5"  }
                                    ]
                                 },
                                 {  "prim": "DUP",
                                    "args": [
                                      {  "int": "5"  }
                                    ]
                                 },
                                 {  "prim": "PAIR"  },
                                 {  "prim": "UPDATE"  },
                                 {  "prim": "DIP",
                                    "args": [
                                      {  "int": "1"  },
                                      [  {  "prim": "DIG",
                                            "args": [
                                              {  "int": "9"  }
                                            ]
                                      },
                                      {  "prim": "DROP",
                                         "args": [
                                           {  "int": "1"  }
                                         ]
                                      }  ]
                                    ]
                                 },
                                 {  "prim": "DUG",
                                    "args": [
                                      {  "int": "9"  }
                                    ]
                                 }  ]
                               ]
                            },
                            {  "prim": "DROP",
                               "args": [
                                 {  "int": "5"  }
                               ]
                            },
                            {  "prim": "PAIR",
                               "args": [
                                 {  "int": "6"  }
                               ]
                            },
                            {  "prim": "DIG",
                               "args": [
                                 {  "int": "1"  }
                               ]
                            },
                            {  "prim": "PAIR"  }  ]
                          ]
                    }  ]
                  ]
            }  ],
            [  {  "prim": "IF_LEFT",
                  "args": [
                    [  {  "prim": "IF_LEFT",
                          "args": [
                            [  {  "prim": "UNPAIR"  },
                            {  "prim": "SWAP"  },
                            {  "prim": "UNPAIR"  },
                            {  "prim": "SWAP"  },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "6"  }
                               ]
                            },
                            {  "prim": "IF_NONE",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "MISSING_AUCTION_CONTRACT"  }
                                       ]
                                 },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "SENDER"  },
                            {  "prim": "COMPARE"  },
                            {  "prim": "EQ"  },
                            {  "prim": "NOT"  },
                            {  "prim": "IF",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "InvalidCaller"  }
                                       ]
                                 },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "8"  }
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "3"  }
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "5"  }
                               ]
                            },
                            {  "prim": "PAIR"  },
                            {  "prim": "MEM"  },
                            {  "prim": "NOT"  },
                            {  "prim": "IF",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "MISSING_AUCTION"  }
                                       ]
                                 },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "DROP",
                               "args": [
                                 {  "int": "3"  }
                               ]
                            },
                            {  "prim": "PAIR",
                               "args": [
                                 {  "int": "6"  }
                               ]
                            },
                            {  "prim": "DIG",
                               "args": [
                                 {  "int": "1"  }
                               ]
                            },
                            {  "prim": "PAIR"  }  ],
                            [  {  "prim": "DUP",
                                  "args": [
                                    {  "int": "4"  }
                                  ]
                            },
                            {  "prim": "IF_NONE",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "MISSING_AUCTION_CONTRACT"  }
                                       ]
                                 },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "SENDER"  },
                            {  "prim": "COMPARE"  },
                            {  "prim": "EQ"  },
                            {  "prim": "NOT"  },
                            {  "prim": "IF",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "InvalidCaller"  }
                                       ]
                                 },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "4"  }
                               ]
                            },
                            {  "prim": "IF_NONE",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "bool"  },
                                         {  "prim": "False"  }
                                       ]
                                 }  ],
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "bool"  },
                                         {  "prim": "True"  }
                                       ]
                                 },
                                 {  "prim": "SWAP"  },
                                 {  "prim": "DROP",
                                    "args": [
                                      {  "int": "1"  }
                                    ]
                                 }  ]
                               ]
                            },
                            {  "prim": "NOT"  },
                            {  "prim": "IF",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "ua_0"  }
                                       ]
                                 },
                                 {  "prim": "PUSH",
                                    "args": [
                                      {  "prim": "string"  },
                                      {  "string": "InvalidCondition"  }
                                    ]
                                 },
                                 {  "prim": "PAIR"  },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "DUP"  },
                            {  "prim": "CAR"  },
                            {  "prim": "CDR"  },
                            {  "prim": "CAR"  },
                            {  "prim": "IF_NONE",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "bool"  },
                                         {  "prim": "False"  }
                                       ]
                                 }  ],
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "bool"  },
                                         {  "prim": "True"  }
                                       ]
                                 },
                                 {  "prim": "SWAP"  },
                                 {  "prim": "DROP",
                                    "args": [
                                      {  "int": "1"  }
                                    ]
                                 }  ]
                               ]
                            },
                            {  "prim": "NOT"  },
                            {  "prim": "IF",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "ua_1"  }
                                       ]
                                 },
                                 {  "prim": "PUSH",
                                    "args": [
                                      {  "prim": "string"  },
                                      {  "string": "InvalidCondition"  }
                                    ]
                                 },
                                 {  "prim": "PAIR"  },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "DUP"  },
                            {  "prim": "CAR"  },
                            {  "prim": "CDR"  },
                            {  "prim": "CDR"  },
                            {  "prim": "IF_NONE",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "bool"  },
                                         {  "prim": "False"  }
                                       ]
                                 }  ],
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "bool"  },
                                         {  "prim": "True"  }
                                       ]
                                 },
                                 {  "prim": "SWAP"  },
                                 {  "prim": "DROP",
                                    "args": [
                                      {  "int": "1"  }
                                    ]
                                 }  ]
                               ]
                            },
                            {  "prim": "NOT"  },
                            {  "prim": "IF",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "ua_2"  }
                                       ]
                                 },
                                 {  "prim": "PUSH",
                                    "args": [
                                      {  "prim": "string"  },
                                      {  "string": "InvalidCondition"  }
                                    ]
                                 },
                                 {  "prim": "PAIR"  },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "6"  }
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "2"  }
                               ]
                            },
                            {  "prim": "CAR"  },
                            {  "prim": "CDR"  },
                            {  "prim": "CDR"  },
                            {  "prim": "IF_NONE",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "NotFound"  }
                                       ]
                                 },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "3"  }
                               ]
                            },
                            {  "prim": "CAR"  },
                            {  "prim": "CDR"  },
                            {  "prim": "CAR"  },
                            {  "prim": "IF_NONE",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "NotFound"  }
                                       ]
                                 },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "PAIR"  },
                            {  "prim": "MEM"  },
                            {  "prim": "IF",
                               "args": [
                                 [  {  "prim": "DUP",
                                       "args": [
                                         {  "int": "6"  }
                                       ]
                                 },
                                 {  "prim": "DUP",
                                    "args": [
                                      {  "int": "2"  }
                                    ]
                                 },
                                 {  "prim": "SOME"  },
                                 {  "prim": "DUP",
                                    "args": [
                                      {  "int": "3"  }
                                    ]
                                 },
                                 {  "prim": "CAR"  },
                                 {  "prim": "CDR"  },
                                 {  "prim": "CDR"  },
                                 {  "prim": "IF_NONE",
                                    "args": [
                                      [  {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "NotFound"  }
                                            ]
                                      },
                                      {  "prim": "FAILWITH"  }  ],
                                      [    ]
                                    ]
                                 },
                                 {  "prim": "DUP",
                                    "args": [
                                      {  "int": "4"  }
                                    ]
                                 },
                                 {  "prim": "CAR"  },
                                 {  "prim": "CDR"  },
                                 {  "prim": "CAR"  },
                                 {  "prim": "IF_NONE",
                                    "args": [
                                      [  {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "NotFound"  }
                                            ]
                                      },
                                      {  "prim": "FAILWITH"  }  ],
                                      [    ]
                                    ]
                                 },
                                 {  "prim": "PAIR"  },
                                 {  "prim": "UPDATE"  },
                                 {  "prim": "DIP",
                                    "args": [
                                      {  "int": "1"  },
                                      [  {  "prim": "DIG",
                                            "args": [
                                              {  "int": "5"  }
                                            ]
                                      },
                                      {  "prim": "DROP",
                                         "args": [
                                           {  "int": "1"  }
                                         ]
                                      }  ]
                                    ]
                                 },
                                 {  "prim": "DUG",
                                    "args": [
                                      {  "int": "5"  }
                                    ]
                                 }  ],
                                 [  {  "prim": "DUP",
                                       "args": [
                                         {  "int": "6"  }
                                       ]
                                 },
                                 {  "prim": "DUP",
                                    "args": [
                                      {  "int": "2"  }
                                    ]
                                 },
                                 {  "prim": "CAR"  },
                                 {  "prim": "CDR"  },
                                 {  "prim": "CDR"  },
                                 {  "prim": "IF_NONE",
                                    "args": [
                                      [  {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "NotFound"  }
                                            ]
                                      },
                                      {  "prim": "FAILWITH"  }  ],
                                      [    ]
                                    ]
                                 },
                                 {  "prim": "DUP",
                                    "args": [
                                      {  "int": "3"  }
                                    ]
                                 },
                                 {  "prim": "CAR"  },
                                 {  "prim": "CDR"  },
                                 {  "prim": "CAR"  },
                                 {  "prim": "IF_NONE",
                                    "args": [
                                      [  {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "NotFound"  }
                                            ]
                                      },
                                      {  "prim": "FAILWITH"  }  ],
                                      [    ]
                                    ]
                                 },
                                 {  "prim": "PAIR"  },
                                 {  "prim": "MEM"  },
                                 {  "prim": "IF",
                                    "args": [
                                      [  {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "auctions"  }
                                            ]
                                      },
                                      {  "prim": "PUSH",
                                         "args": [
                                           {  "prim": "string"  },
                                           {  "string": "KeyExists"  }
                                         ]
                                      },
                                      {  "prim": "PAIR"  },
                                      {  "prim": "FAILWITH"  }  ],
                                      [  {  "prim": "DUP",
                                            "args": [
                                              {  "int": "6"  }
                                            ]
                                      },
                                      {  "prim": "DUP",
                                         "args": [
                                           {  "int": "2"  }
                                         ]
                                      },
                                      {  "prim": "SOME"  },
                                      {  "prim": "DUP",
                                         "args": [
                                           {  "int": "3"  }
                                         ]
                                      },
                                      {  "prim": "CAR"  },
                                      {  "prim": "CDR"  },
                                      {  "prim": "CDR"  },
                                      {  "prim": "IF_NONE",
                                         "args": [
                                           [  {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "NotFound"  }
                                                 ]
                                           },
                                           {  "prim": "FAILWITH"  }  ],
                                           [    ]
                                         ]
                                      },
                                      {  "prim": "DUP",
                                         "args": [
                                           {  "int": "4"  }
                                         ]
                                      },
                                      {  "prim": "CAR"  },
                                      {  "prim": "CDR"  },
                                      {  "prim": "CAR"  },
                                      {  "prim": "IF_NONE",
                                         "args": [
                                           [  {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "NotFound"  }
                                                 ]
                                           },
                                           {  "prim": "FAILWITH"  }  ],
                                           [    ]
                                         ]
                                      },
                                      {  "prim": "PAIR"  },
                                      {  "prim": "UPDATE"  },
                                      {  "prim": "DIP",
                                         "args": [
                                           {  "int": "1"  },
                                           [  {  "prim": "DIG",
                                                 "args": [
                                                   {  "int": "5"  }
                                                 ]
                                           },
                                           {  "prim": "DROP",
                                              "args": [
                                                {  "int": "1"  }
                                              ]
                                           }  ]
                                         ]
                                      },
                                      {  "prim": "DUG",
                                         "args": [
                                           {  "int": "5"  }
                                         ]
                                      }  ]
                                    ]
                                 }  ]
                               ]
                            },
                            {  "prim": "DROP",
                               "args": [
                                 {  "int": "1"  }
                               ]
                            },
                            {  "prim": "PAIR",
                               "args": [
                                 {  "int": "6"  }
                               ]
                            },
                            {  "prim": "DIG",
                               "args": [
                                 {  "int": "1"  }
                               ]
                            },
                            {  "prim": "PAIR"  }  ]
                          ]
                    }  ],
                    [  {  "prim": "IF_LEFT",
                          "args": [
                            [  {  "prim": "IF_LEFT",
                                  "args": [
                                    [  {  "prim": "UNPAIR"  },
                                    {  "prim": "SWAP"  },
                                    {  "prim": "UNPAIR"  },
                                    {  "prim": "SWAP"  },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "6"  }
                                       ]
                                    },
                                    {  "prim": "IF_NONE",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "MISSING_AUCTION_CONTRACT"  }
                                               ]
                                         },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "SENDER"  },
                                    {  "prim": "COMPARE"  },
                                    {  "prim": "EQ"  },
                                    {  "prim": "NOT"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "InvalidCaller"  }
                                               ]
                                         },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "8"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "3"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "5"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  },
                                    {  "prim": "MEM"  },
                                    {  "prim": "NOT"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "MISSING_AUCTION"  }
                                               ]
                                         },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "8"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "3"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "5"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  },
                                    {  "prim": "GET"  },
                                    {  "prim": "IF_NONE",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "auctions"  }
                                               ]
                                         },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "AssetNotFound"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "2"  }
                                       ]
                                    },
                                    {  "prim": "NOW"  },
                                    {  "prim": "ADD"  },
                                    {  "prim": "DROP",
                                       "args": [
                                         {  "int": "5"  }
                                       ]
                                    },
                                    {  "prim": "PAIR",
                                       "args": [
                                         {  "int": "6"  }
                                       ]
                                    },
                                    {  "prim": "DIG",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  }  ],
                                    [  {  "prim": "UNPAIR"  },
                                    {  "prim": "SWAP"  },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "5"  }
                                       ]
                                    },
                                    {  "prim": "IF_NONE",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "MISSING_AUCTION_CONTRACT"  }
                                               ]
                                         },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "SENDER"  },
                                    {  "prim": "COMPARE"  },
                                    {  "prim": "EQ"  },
                                    {  "prim": "NOT"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "InvalidCaller"  }
                                               ]
                                         },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "7"  }
                                       ]
                                    },
                                    {  "prim": "NONE",
                                       "args": [
                                         {  "prim": "pair",
                                            "args": [
                                              {  "prim": "pair",
                                                 "args": [
                                                   {  "prim": "or",
                                                      "args": [
                                                        {  "prim": "unit"  },
                                                        {  "prim": "or",
                                                           "args": [
                                                             {  "prim": "unit"  },
                                                             {  "prim": "or",
                                                                "args": [
                                                                  {  "prim": "int"  },
                                                                  {
                                                                  "prim": "or",
                                                                  "args": [
                                                                    {  "prim": "int"  },
                                                                    {  "prim": "bytes"  }
                                                                  ]
                                                                  }
                                                                ]
                                                             }
                                                           ]
                                                        }
                                                      ]
                                                   },
                                                   {  "prim": "pair",
                                                      "args": [
                                                        {  "prim": "option",
                                                           "args": [
                                                             {  "prim": "address"  }
                                                           ]
                                                        },
                                                        {  "prim": "option",
                                                           "args": [
                                                             {  "prim": "nat"  }
                                                           ]
                                                        }
                                                      ]
                                                   }
                                                 ]
                                              },
                                              {  "prim": "pair",
                                                 "args": [
                                                   {  "prim": "nat"  },
                                                   {  "prim": "pair",
                                                      "args": [
                                                        {  "prim": "pair",
                                                           "args": [
                                                             {  "prim": "or",
                                                                "args": [
                                                                  {  "prim": "unit"  },
                                                                  {
                                                                  "prim": "or",
                                                                  "args": [
                                                                    {  "prim": "unit"  },
                                                                    {
                                                                    "prim": "or",
                                                                    "args": [

                                                                    {  "prim": "int"  },
                                                                    {
                                                                    "prim": "or",
                                                                    "args": [

                                                                    {  "prim": "int"  },
                                                                    {  "prim": "bytes"  }
                                                                    ]
                                                                    }
                                                                    ]
                                                                    }
                                                                  ]
                                                                  }
                                                                ]
                                                             },
                                                             {  "prim": "pair",
                                                                "args": [
                                                                  {
                                                                  "prim": "option",
                                                                  "args": [
                                                                    {  "prim": "address"  }
                                                                  ]
                                                                  },
                                                                  {
                                                                  "prim": "option",
                                                                  "args": [
                                                                    {  "prim": "nat"  }
                                                                  ]
                                                                  }
                                                                ]
                                                             }
                                                           ]
                                                        },
                                                        {  "prim": "pair",
                                                           "args": [
                                                             {  "prim": "option",
                                                                "args": [
                                                                  {
                                                                  "prim": "pair",
                                                                  "args": [
                                                                    {
                                                                    "prim": "list",
                                                                    "args": [

                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {  "prim": "address"  },
                                                                    {  "prim": "nat"  }
                                                                    ]
                                                                    }
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {
                                                                    "prim": "list",
                                                                    "args": [

                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {  "prim": "address"  },
                                                                    {  "prim": "nat"  }
                                                                    ]
                                                                    }
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {  "prim": "nat"  },
                                                                    {  "prim": "address"  }
                                                                    ]
                                                                    }
                                                                    ]
                                                                    }
                                                                  ]
                                                                  }
                                                                ]
                                                             },
                                                             {  "prim": "pair",
                                                                "args": [
                                                                  {  "prim": "address"  },
                                                                  {
                                                                  "prim": "pair",
                                                                  "args": [
                                                                    {  "prim": "timestamp"  },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {  "prim": "timestamp"  },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {  "prim": "nat"  },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {  "prim": "nat"  },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {  "prim": "nat"  },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {  "prim": "nat"  },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {
                                                                    "prim": "list",
                                                                    "args": [

                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {  "prim": "address"  },
                                                                    {  "prim": "nat"  }
                                                                    ]
                                                                    }
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "list",
                                                                    "args": [

                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {  "prim": "address"  },
                                                                    {  "prim": "nat"  }
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
                                         }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "3"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "5"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  },
                                    {  "prim": "UPDATE"  },
                                    {  "prim": "DIP",
                                       "args": [
                                         {  "int": "1"  },
                                         [  {  "prim": "DIG",
                                               "args": [
                                                 {  "int": "6"  }
                                               ]
                                         },
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "1"  }
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "DUG",
                                       "args": [
                                         {  "int": "6"  }
                                       ]
                                    },
                                    {  "prim": "DROP",
                                       "args": [
                                         {  "int": "2"  }
                                       ]
                                    },
                                    {  "prim": "PAIR",
                                       "args": [
                                         {  "int": "6"  }
                                       ]
                                    },
                                    {  "prim": "DIG",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  }  ]
                                  ]
                            }  ],
                            [  {  "prim": "IF_LEFT",
                                  "args": [
                                    [  {  "prim": "DUP",
                                          "args": [
                                            {  "int": "4"  }
                                          ]
                                    },
                                    {  "prim": "IF_NONE",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "MISSING_AUCTION_CONTRACT"  }
                                               ]
                                         },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "SENDER"  },
                                    {  "prim": "COMPARE"  },
                                    {  "prim": "EQ"  },
                                    {  "prim": "NOT"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "InvalidCaller"  }
                                               ]
                                         },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "DUP"  },
                                    {  "prim": "CAR"  },
                                    {  "prim": "IF_LEFT",
                                       "args": [
                                         [  {  "prim": "DUP",
                                               "args": [
                                                 {  "int": "9"  }
                                               ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "3"  }
                                            ]
                                         },
                                         {  "prim": "CDR"  },
                                         {  "prim": "CDR"  },
                                         {  "prim": "CDR"  },
                                         {  "prim": "CDR"  },
                                         {  "prim": "CDR"  },
                                         {  "prim": "CONTRACT",
                                            "args": [
                                              {  "prim": "unit"  }
                                            ]
                                         },
                                         {  "prim": "IF_NONE",
                                            "args": [
                                              [  {  "prim": "PUSH",
                                                    "args": [
                                                      {  "prim": "string"  },
                                                      {  "string": "EntryNotFound"  }
                                                    ]
                                              },
                                              {  "prim": "FAILWITH"  }  ],
                                              [    ]
                                            ]
                                         },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "mutez"  },
                                              {  "int": "1"  }
                                            ]
                                         },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "nat"  },
                                              {  "int": "1"  }
                                            ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "6"  }
                                            ]
                                         },
                                         {  "prim": "CDR"  },
                                         {  "prim": "CDR"  },
                                         {  "prim": "CDR"  },
                                         {  "prim": "CAR"  },
                                         {  "prim": "INT"  },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "UNPAIR"  },
                                         {  "prim": "UNPAIR"  },
                                         {  "prim": "ABS"  },
                                         {  "prim": "DIG",
                                            "args": [
                                              {  "int": "2"  }
                                            ]
                                         },
                                         {  "prim": "MUL"  },
                                         {  "prim": "EDIV"  },
                                         {  "prim": "IF_NONE",
                                            "args": [
                                              [  {  "prim": "PUSH",
                                                    "args": [
                                                      {  "prim": "string"  },
                                                      {  "string": "DivByZero"  }
                                                    ]
                                              },
                                              {  "prim": "FAILWITH"  }  ],
                                              [    ]
                                            ]
                                         },
                                         {  "prim": "CAR"  },
                                         {  "prim": "UNIT"  },
                                         {  "prim": "TRANSFER_TOKENS"  },
                                         {  "prim": "CONS"  },
                                         {  "prim": "DIP",
                                            "args": [
                                              {  "int": "1"  },
                                              [  {  "prim": "DIG",
                                                    "args": [
                                                      {  "int": "8"  }
                                                    ]
                                              },
                                              {  "prim": "DROP",
                                                 "args": [
                                                   {  "int": "1"  }
                                                 ]
                                              }  ]
                                            ]
                                         },
                                         {  "prim": "DUG",
                                            "args": [
                                              {  "int": "8"  }
                                            ]
                                         },
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "1"  }
                                            ]
                                         }  ],
                                         [  {  "prim": "DUP"  },
                                         {  "prim": "IF_LEFT",
                                            "args": [
                                              [  {  "prim": "DUP",
                                                    "args": [
                                                      {  "int": "3"  }
                                                    ]
                                              },
                                              {  "prim": "CDR"  },
                                              {  "prim": "CAR"  },
                                              {  "prim": "IF_NONE",
                                                 "args": [
                                                   [  {  "prim": "PUSH",
                                                         "args": [
                                                           {  "prim": "bool"  },
                                                           {  "prim": "False"  }
                                                         ]
                                                   }  ],
                                                   [  {  "prim": "PUSH",
                                                         "args": [
                                                           {  "prim": "bool"  },
                                                           {  "prim": "True"  }
                                                         ]
                                                   },
                                                   {  "prim": "SWAP"  },
                                                   {  "prim": "DROP",
                                                      "args": [
                                                        {  "int": "1"  }
                                                      ]
                                                   }  ]
                                                 ]
                                              },
                                              {  "prim": "NOT"  },
                                              {  "prim": "IF",
                                                 "args": [
                                                   [  {  "prim": "PUSH",
                                                         "args": [
                                                           {  "prim": "string"  },
                                                           {  "string": "MISSING_ASSET_CONTRACT"  }
                                                         ]
                                                   },
                                                   {  "prim": "FAILWITH"  }  ],
                                                   [    ]
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "10"  }
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "4"  }
                                                 ]
                                              },
                                              {  "prim": "CDR"  },
                                              {  "prim": "CAR"  },
                                              {  "prim": "IF_NONE",
                                                 "args": [
                                                   [  {  "prim": "PUSH",
                                                         "args": [
                                                           {  "prim": "string"  },
                                                           {  "string": "NotFound"  }
                                                         ]
                                                   },
                                                   {  "prim": "FAILWITH"  }  ],
                                                   [    ]
                                                 ]
                                              },
                                              {  "prim": "CONTRACT",
                                                 "args": [
                                                   {  "prim": "pair",
                                                      "args": [
                                                        {  "prim": "address"  },
                                                        {  "prim": "pair",
                                                           "args": [
                                                             {  "prim": "address"  },
                                                             {  "prim": "nat"  }
                                                           ]
                                                        }
                                                      ]
                                                   }
                                                 ]
                                                 ,
                                                 "annots": [
                                                   "%transfer"
                                                 ]
                                              },
                                              {  "prim": "IF_NONE",
                                                 "args": [
                                                   [  {  "prim": "PUSH",
                                                         "args": [
                                                           {  "prim": "string"  },
                                                           {  "string": "transfer"  }
                                                         ]
                                                   },
                                                   {  "prim": "PUSH",
                                                      "args": [
                                                        {  "prim": "string"  },
                                                        {  "string": "EntryNotFound"  }
                                                      ]
                                                   },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "FAILWITH"  }  ],
                                                   [    ]
                                                 ]
                                              },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "mutez"  },
                                                   {  "int": "0"  }
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "6"  }
                                                 ]
                                              },
                                              {  "prim": "CDR"  },
                                              {  "prim": "CDR"  },
                                              {  "prim": "CDR"  },
                                              {  "prim": "CAR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "7"  }
                                                 ]
                                              },
                                              {  "prim": "CDR"  },
                                              {  "prim": "CDR"  },
                                              {  "prim": "CDR"  },
                                              {  "prim": "CDR"  },
                                              {  "prim": "CDR"  },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "7"  }
                                                 ]
                                              },
                                              {  "prim": "CDR"  },
                                              {  "prim": "CDR"  },
                                              {  "prim": "CDR"  },
                                              {  "prim": "CDR"  },
                                              {  "prim": "CAR"  },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "TRANSFER_TOKENS"  },
                                              {  "prim": "CONS"  },
                                              {  "prim": "DIP",
                                                 "args": [
                                                   {  "int": "1"  },
                                                   [  {  "prim": "DIG",
                                                         "args": [
                                                           {  "int": "9"  }
                                                         ]
                                                   },
                                                   {  "prim": "DROP",
                                                      "args": [
                                                        {  "int": "1"  }
                                                      ]
                                                   }  ]
                                                 ]
                                              },
                                              {  "prim": "DUG",
                                                 "args": [
                                                   {  "int": "9"  }
                                                 ]
                                              },
                                              {  "prim": "DROP",
                                                 "args": [
                                                   {  "int": "1"  }
                                                 ]
                                              }  ],
                                              [  {  "prim": "DUP"  },
                                              {  "prim": "IF_LEFT",
                                                 "args": [
                                                   [  {  "prim": "DUP",
                                                         "args": [
                                                           {  "int": "4"  }
                                                         ]
                                                   },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "CAR"  },
                                                   {  "prim": "IF_NONE",
                                                      "args": [
                                                        [  {  "prim": "PUSH",
                                                              "args": [
                                                                {  "prim": "bool"  },
                                                                {  "prim": "False"  }
                                                              ]
                                                        }  ],
                                                        [  {  "prim": "PUSH",
                                                              "args": [
                                                                {  "prim": "bool"  },
                                                                {  "prim": "True"  }
                                                              ]
                                                        },
                                                        {  "prim": "SWAP"  },
                                                        {  "prim": "DROP",
                                                           "args": [
                                                             {  "int": "1"  }
                                                           ]
                                                        }  ]
                                                      ]
                                                   },
                                                   {  "prim": "NOT"  },
                                                   {  "prim": "IF",
                                                      "args": [
                                                        [  {  "prim": "PUSH",
                                                              "args": [
                                                                {  "prim": "string"  },
                                                                {  "string": "MISSING_ASSET_CONTRACT"  }
                                                              ]
                                                        },
                                                        {  "prim": "FAILWITH"  }  ],
                                                        [    ]
                                                      ]
                                                   },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "4"  }
                                                      ]
                                                   },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "CAR"  },
                                                   {  "prim": "IF_NONE",
                                                      "args": [
                                                        [  {  "prim": "PUSH",
                                                              "args": [
                                                                {  "prim": "bool"  },
                                                                {  "prim": "False"  }
                                                              ]
                                                        }  ],
                                                        [  {  "prim": "PUSH",
                                                              "args": [
                                                                {  "prim": "bool"  },
                                                                {  "prim": "True"  }
                                                              ]
                                                        },
                                                        {  "prim": "SWAP"  },
                                                        {  "prim": "DROP",
                                                           "args": [
                                                             {  "int": "1"  }
                                                           ]
                                                        }  ]
                                                      ]
                                                   },
                                                   {  "prim": "NOT"  },
                                                   {  "prim": "IF",
                                                      "args": [
                                                        [  {  "prim": "PUSH",
                                                              "args": [
                                                                {  "prim": "string"  },
                                                                {  "string": "MISSING_ASSET_CONTRACT"  }
                                                              ]
                                                        },
                                                        {  "prim": "FAILWITH"  }  ],
                                                        [    ]
                                                      ]
                                                   },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "11"  }
                                                      ]
                                                   },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "5"  }
                                                      ]
                                                   },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "CAR"  },
                                                   {  "prim": "IF_NONE",
                                                      "args": [
                                                        [  {  "prim": "PUSH",
                                                              "args": [
                                                                {  "prim": "string"  },
                                                                {  "string": "NotFound"  }
                                                              ]
                                                        },
                                                        {  "prim": "FAILWITH"  }  ],
                                                        [    ]
                                                      ]
                                                   },
                                                   {  "prim": "CONTRACT",
                                                      "args": [
                                                        {  "prim": "list",
                                                           "args": [
                                                             {  "prim": "pair",
                                                                "args": [
                                                                  {  "prim": "address"  },
                                                                  {
                                                                  "prim": "list",
                                                                  "args": [
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {  "prim": "address"  },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {  "prim": "nat"  },
                                                                    {  "prim": "nat"  }
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
                                                      ,
                                                      "annots": [
                                                        "%transfer"
                                                      ]
                                                   },
                                                   {  "prim": "IF_NONE",
                                                      "args": [
                                                        [  {  "prim": "PUSH",
                                                              "args": [
                                                                {  "prim": "string"  },
                                                                {  "string": "transfer"  }
                                                              ]
                                                        },
                                                        {  "prim": "PUSH",
                                                           "args": [
                                                             {  "prim": "string"  },
                                                             {  "string": "EntryNotFound"  }
                                                           ]
                                                        },
                                                        {  "prim": "PAIR"  },
                                                        {  "prim": "FAILWITH"  }  ],
                                                        [    ]
                                                      ]
                                                   },
                                                   {  "prim": "PUSH",
                                                      "args": [
                                                        {  "prim": "mutez"  },
                                                        {  "int": "0"  }
                                                      ]
                                                   },
                                                   {  "prim": "NIL",
                                                      "args": [
                                                        {  "prim": "pair",
                                                           "args": [
                                                             {  "prim": "address"  },
                                                             {  "prim": "list",
                                                                "args": [
                                                                  {
                                                                  "prim": "pair",
                                                                  "args": [
                                                                    {
                                                                    "prim": "address",
                                                                    "annots": [
                                                                      "%to"
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {
                                                                    "prim": "nat",
                                                                    "annots": [

                                                                    "%token_id"
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "nat",
                                                                    "annots": [

                                                                    "%amount"
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
                                                   },
                                                   {  "prim": "NIL",
                                                      "args": [
                                                        {  "prim": "pair",
                                                           "args": [
                                                             {  "prim": "address",
                                                                "annots": [
                                                                  "%to"
                                                                ]
                                                             },
                                                             {  "prim": "pair",
                                                                "args": [
                                                                  {
                                                                  "prim": "nat",
                                                                  "annots": [
                                                                    "%token_id"
                                                                  ]
                                                                  },
                                                                  {
                                                                  "prim": "nat",
                                                                  "annots": [
                                                                    "%amount"
                                                                  ]
                                                                  }
                                                                ]
                                                             }
                                                           ]
                                                        }
                                                      ]
                                                   },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "9"  }
                                                      ]
                                                   },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "CAR"  },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "10"  }
                                                      ]
                                                   },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "CAR"  },
                                                   {  "prim": "IF_NONE",
                                                      "args": [
                                                        [  {  "prim": "PUSH",
                                                              "args": [
                                                                {  "prim": "string"  },
                                                                {  "string": "NotFound"  }
                                                              ]
                                                        },
                                                        {  "prim": "FAILWITH"  }  ],
                                                        [    ]
                                                      ]
                                                   },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "10"  }
                                                      ]
                                                   },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "CONS"  },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "9"  }
                                                      ]
                                                   },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "CDR"  },
                                                   {  "prim": "CAR"  },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "CONS"  },
                                                   {  "prim": "TRANSFER_TOKENS"  },
                                                   {  "prim": "CONS"  },
                                                   {  "prim": "DIP",
                                                      "args": [
                                                        {  "int": "1"  },
                                                        [  {  "prim": "DIG",
                                                              "args": [
                                                                {  "int": "10"  }
                                                              ]
                                                        },
                                                        {  "prim": "DROP",
                                                           "args": [
                                                             {  "int": "1"  }
                                                           ]
                                                        }  ]
                                                      ]
                                                   },
                                                   {  "prim": "DUG",
                                                      "args": [
                                                        {  "int": "10"  }
                                                      ]
                                                   },
                                                   {  "prim": "DROP",
                                                      "args": [
                                                        {  "int": "1"  }
                                                      ]
                                                   }  ],
                                                   [  {  "prim": "DUP"  },
                                                   {  "prim": "IF_LEFT",
                                                      "args": [
                                                        [  {  "prim": "DROP",
                                                              "args": [
                                                                {  "int": "1"  }
                                                              ]
                                                        }  ],
                                                        [  {  "prim": "DROP",
                                                              "args": [
                                                                {  "int": "1"  }
                                                              ]
                                                        }  ]
                                                      ]
                                                   },
                                                   {  "prim": "DROP",
                                                      "args": [
                                                        {  "int": "1"  }
                                                      ]
                                                   }  ]
                                                 ]
                                              },
                                              {  "prim": "DROP",
                                                 "args": [
                                                   {  "int": "1"  }
                                                 ]
                                              }  ]
                                            ]
                                         },
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "1"  }
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "DROP",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR",
                                       "args": [
                                         {  "int": "6"  }
                                       ]
                                    },
                                    {  "prim": "DIG",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  }  ],
                                    [  {  "prim": "DROP",
                                          "args": [
                                            {  "int": "1"  }
                                          ]
                                    },
                                    {  "prim": "PAIR",
                                       "args": [
                                         {  "int": "6"  }
                                       ]
                                    },
                                    {  "prim": "DIG",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR"  }  ]
                                  ]
                            }  ]
                          ]
                    }  ]
                  ]
            }  ]
          ]
       }  ]
     ]
  },
  {  "prim": "view",
     "args": [
       {  "string": "auction_exists"  },
       {  "prim": "pair",
          "args": [
            {  "prim": "address"  },
            {  "prim": "nat"  }
          ]
       },
       {  "prim": "bool"  },
       [  {  "prim": "UNPAIR"  },
       {  "prim": "DIP",
          "args": [
            {  "int": "1"  },
            [  {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "UNPAIR"  },
            {  "prim": "SWAP"  },
            {  "prim": "DROP",
               "args": [
                 {  "int": "1"  }
               ]
            }  ]
          ]
       },
       {  "prim": "UNPAIR"  },
       {  "prim": "UNIT"  },
       {  "prim": "DUP",
          "args": [
            {  "int": "4"  }
          ]
       },
       {  "prim": "DUP",
          "args": [
            {  "int": "4"  }
          ]
       },
       {  "prim": "DUP",
          "args": [
            {  "int": "4"  }
          ]
       },
       {  "prim": "PAIR"  },
       {  "prim": "MEM"  },
       {  "prim": "SWAP"  },
       {  "prim": "DROP",
          "args": [
            {  "int": "1"  }
          ]
       },
       {  "prim": "DIP",
          "args": [
            {  "int": "1"  },
            [  {  "prim": "DROP",
                  "args": [
                    {  "int": "3"  }
                  ]
            }  ]
          ]
       }  ]
     ]
  },
  {  "prim": "view",
     "args": [
       {  "string": "get_auction"  },
       {  "prim": "pair",
          "args": [
            {  "prim": "address"  },
            {  "prim": "nat"  }
          ]
       },
       {  "prim": "option",
          "args": [
            {  "prim": "pair",
               "args": [
                 {  "prim": "pair",
                    "args": [
                      {  "prim": "or",
                         "args": [
                           {  "prim": "unit",
                              "annots": [
                                "%XTZ"
                              ]
                           },
                           {  "prim": "or",
                              "args": [
                                {  "prim": "unit",
                                   "annots": [
                                     "%FA_1_2"
                                   ]
                                },
                                {  "prim": "or",
                                   "args": [
                                     {  "prim": "int",
                                        "annots": [
                                          "%FA_2"
                                        ]
                                     },
                                     {  "prim": "or",
                                        "args": [
                                          {  "prim": "int",
                                             "annots": [
                                               "%FA_2_LAZY"
                                             ]
                                          },
                                          {  "prim": "bytes",
                                             "annots": [
                                               "%OTHER"
                                             ]
                                          }
                                        ]
                                     }
                                   ]
                                }
                              ]
                           }
                         ]
                         ,
                         "annots": [
                           "%asset_type"
                         ]
                      },
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "option",
                              "args": [
                                {  "prim": "address"  }
                              ]
                              ,
                              "annots": [
                                "%asset_contract"
                              ]
                           },
                           {  "prim": "option",
                              "args": [
                                {  "prim": "nat"  }
                              ]
                              ,
                              "annots": [
                                "%asset_id"
                              ]
                           }
                         ]
                      }
                    ]
                    ,
                    "annots": [
                      "%auction_sell_asset"
                    ]
                 },
                 {  "prim": "pair",
                    "args": [
                      {  "prim": "nat",
                         "annots": [
                           "%auction_sell_asset_amount"
                         ]
                      },
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "or",
                                   "args": [
                                     {  "prim": "unit",
                                        "annots": [
                                          "%XTZ"
                                        ]
                                     },
                                     {  "prim": "or",
                                        "args": [
                                          {  "prim": "unit",
                                             "annots": [
                                               "%FA_1_2"
                                             ]
                                          },
                                          {  "prim": "or",
                                             "args": [
                                               {  "prim": "int",
                                                  "annots": [
                                                    "%FA_2"
                                                  ]
                                               },
                                               {  "prim": "or",
                                                  "args": [
                                                    {  "prim": "int",
                                                       "annots": [
                                                         "%FA_2_LAZY"
                                                       ]
                                                    },
                                                    {  "prim": "bytes",
                                                       "annots": [
                                                         "%OTHER"
                                                       ]
                                                    }
                                                  ]
                                               }
                                             ]
                                          }
                                        ]
                                     }
                                   ]
                                   ,
                                   "annots": [
                                     "%asset_type"
                                   ]
                                },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "option",
                                        "args": [
                                          {  "prim": "address"  }
                                        ]
                                        ,
                                        "annots": [
                                          "%asset_contract"
                                        ]
                                     },
                                     {  "prim": "option",
                                        "args": [
                                          {  "prim": "nat"  }
                                        ]
                                        ,
                                        "annots": [
                                          "%asset_id"
                                        ]
                                     }
                                   ]
                                }
                              ]
                              ,
                              "annots": [
                                "%auction_buy_asset"
                              ]
                           },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "option",
                                   "args": [
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "list",
                                             "args": [
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "address",
                                                       "annots": [
                                                         "%part_account"
                                                       ]
                                                    },
                                                    {  "prim": "nat",
                                                       "annots": [
                                                         "%part_value"
                                                       ]
                                                    }
                                                  ]
                                               }
                                             ]
                                             ,
                                             "annots": [
                                               "%bid_payouts"
                                             ]
                                          },
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "list",
                                                  "args": [
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "address",
                                                            "annots": [
                                                              "%part_account"
                                                            ]
                                                         },
                                                         {  "prim": "nat",
                                                            "annots": [
                                                              "%part_value"
                                                            ]
                                                         }
                                                       ]
                                                    }
                                                  ]
                                                  ,
                                                  "annots": [
                                                    "%bid_origin_fees"
                                                  ]
                                               },
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "nat",
                                                       "annots": [
                                                         "%bid_amount"
                                                       ]
                                                    },
                                                    {  "prim": "address",
                                                       "annots": [
                                                         "%bid_bidder"
                                                       ]
                                                    }
                                                  ]
                                               }
                                             ]
                                          }
                                        ]
                                     }
                                   ]
                                   ,
                                   "annots": [
                                     "%auction_last_bid"
                                   ]
                                },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "address",
                                        "annots": [
                                          "%auction_seller"
                                        ]
                                     },
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "timestamp",
                                             "annots": [
                                               "%auction_start_time"
                                             ]
                                          },
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "timestamp",
                                                  "annots": [
                                                    "%auction_end_time"
                                                  ]
                                               },
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "nat",
                                                       "annots": [
                                                         "%auction_minimal_price"
                                                       ]
                                                    },
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "nat",
                                                            "annots": [
                                                              "%auction_buy_out_price"
                                                            ]
                                                         },
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "nat",
                                                                 "annots": [
                                                                   "%auction_minimal_step"
                                                                 ]
                                                              },
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%auction_protocol_fee"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "list",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "address",
                                                                   "annots": [

                                                                   "%part_account"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%part_value"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%auction_payouts"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "list",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "address",
                                                                   "annots": [

                                                                   "%part_account"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%part_value"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%auction_origin_fees"
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
       },
       [  {  "prim": "UNPAIR"  },
       {  "prim": "DIP",
          "args": [
            {  "int": "1"  },
            [  {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "UNPAIR"  },
            {  "prim": "SWAP"  },
            {  "prim": "DROP",
               "args": [
                 {  "int": "1"  }
               ]
            }  ]
          ]
       },
       {  "prim": "UNPAIR"  },
       {  "prim": "UNIT"  },
       {  "prim": "DUP",
          "args": [
            {  "int": "4"  }
          ]
       },
       {  "prim": "DUP",
          "args": [
            {  "int": "4"  }
          ]
       },
       {  "prim": "DUP",
          "args": [
            {  "int": "4"  }
          ]
       },
       {  "prim": "PAIR"  },
       {  "prim": "MEM"  },
       {  "prim": "IF",
          "args": [
            [  {  "prim": "DUP",
                  "args": [
                    {  "int": "4"  }
                  ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "4"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "4"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "GET"  },
            {  "prim": "IF_NONE",
               "args": [
                 [  {  "prim": "PUSH",
                       "args": [
                         {  "prim": "string"  },
                         {  "string": "auctions"  }
                       ]
                 },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "string"  },
                      {  "string": "AssetNotFound"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "FAILWITH"  }  ],
                 [    ]
               ]
            },
            {  "prim": "SOME"  },
            {  "prim": "SWAP"  },
            {  "prim": "DROP",
               "args": [
                 {  "int": "1"  }
               ]
            }  ],
            [  {  "prim": "NONE",
                  "args": [
                    {  "prim": "pair",
                       "args": [
                         {  "prim": "pair",
                            "args": [
                              {  "prim": "or",
                                 "args": [
                                   {  "prim": "unit"  },
                                   {  "prim": "or",
                                      "args": [
                                        {  "prim": "unit"  },
                                        {  "prim": "or",
                                           "args": [
                                             {  "prim": "int"  },
                                             {  "prim": "or",
                                                "args": [
                                                  {  "prim": "int"  },
                                                  {  "prim": "bytes"  }
                                                ]
                                             }
                                           ]
                                        }
                                      ]
                                   }
                                 ]
                              },
                              {  "prim": "pair",
                                 "args": [
                                   {  "prim": "option",
                                      "args": [
                                        {  "prim": "address"  }
                                      ]
                                   },
                                   {  "prim": "option",
                                      "args": [
                                        {  "prim": "nat"  }
                                      ]
                                   }
                                 ]
                              }
                            ]
                         },
                         {  "prim": "pair",
                            "args": [
                              {  "prim": "nat"  },
                              {  "prim": "pair",
                                 "args": [
                                   {  "prim": "pair",
                                      "args": [
                                        {  "prim": "or",
                                           "args": [
                                             {  "prim": "unit"  },
                                             {  "prim": "or",
                                                "args": [
                                                  {  "prim": "unit"  },
                                                  {  "prim": "or",
                                                     "args": [
                                                       {  "prim": "int"  },
                                                       {  "prim": "or",
                                                          "args": [
                                                            {  "prim": "int"  },
                                                            {  "prim": "bytes"  }
                                                          ]
                                                       }
                                                     ]
                                                  }
                                                ]
                                             }
                                           ]
                                        },
                                        {  "prim": "pair",
                                           "args": [
                                             {  "prim": "option",
                                                "args": [
                                                  {  "prim": "address"  }
                                                ]
                                             },
                                             {  "prim": "option",
                                                "args": [
                                                  {  "prim": "nat"  }
                                                ]
                                             }
                                           ]
                                        }
                                      ]
                                   },
                                   {  "prim": "pair",
                                      "args": [
                                        {  "prim": "option",
                                           "args": [
                                             {  "prim": "pair",
                                                "args": [
                                                  {  "prim": "list",
                                                     "args": [
                                                       {  "prim": "pair",
                                                          "args": [
                                                            {  "prim": "address"  },
                                                            {  "prim": "nat"  }
                                                          ]
                                                       }
                                                     ]
                                                  },
                                                  {  "prim": "pair",
                                                     "args": [
                                                       {  "prim": "list",
                                                          "args": [
                                                            {  "prim": "pair",
                                                               "args": [
                                                                 {  "prim": "address"  },
                                                                 {  "prim": "nat"  }
                                                               ]
                                                            }
                                                          ]
                                                       },
                                                       {  "prim": "pair",
                                                          "args": [
                                                            {  "prim": "nat"  },
                                                            {  "prim": "address"  }
                                                          ]
                                                       }
                                                     ]
                                                  }
                                                ]
                                             }
                                           ]
                                        },
                                        {  "prim": "pair",
                                           "args": [
                                             {  "prim": "address"  },
                                             {  "prim": "pair",
                                                "args": [
                                                  {  "prim": "timestamp"  },
                                                  {  "prim": "pair",
                                                     "args": [
                                                       {  "prim": "timestamp"  },
                                                       {  "prim": "pair",
                                                          "args": [
                                                            {  "prim": "nat"  },
                                                            {  "prim": "pair",
                                                               "args": [
                                                                 {  "prim": "nat"  },
                                                                 {  "prim": "pair",
                                                                    "args": [

                                                                    {  "prim": "nat"  },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {  "prim": "nat"  },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {
                                                                    "prim": "list",
                                                                    "args": [

                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {  "prim": "address"  },
                                                                    {  "prim": "nat"  }
                                                                    ]
                                                                    }
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "list",
                                                                    "args": [

                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {  "prim": "address"  },
                                                                    {  "prim": "nat"  }
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
                    }
                  ]
            },
            {  "prim": "SWAP"  },
            {  "prim": "DROP",
               "args": [
                 {  "int": "1"  }
               ]
            }  ]
          ]
       },
       {  "prim": "DIP",
          "args": [
            {  "int": "1"  },
            [  {  "prim": "DROP",
                  "args": [
                    {  "int": "3"  }
                  ]
            }  ]
          ]
       }  ]
     ]
  }  ]

export function auction_storage_storage(owner: string) : any {
  return {  "prim": "Pair",
            "args": [
              {  "string": owner  },
              {  "prim": "Pair",
                 "args": [
                   {  "prim": "None"  },
                   {  "prim": "Pair",
                      "args": [
                        {  "prim": "None"  },
                        {  "prim": "Pair",
                           "args": [
                             {  "int": "10000000000000000000"  },
                             {  "prim": "Pair",
                                "args": [
                                  [    ],
                                  [  {  "prim": "Elt",
                                        "args": [
                                          {  "string": ""  },
                                          {  "bytes": ""  }
                                        ]
                                  }  ]
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
}


export async function deploy_auction_storage(
  provider : Provider,
  owner: string,
) : Promise<DeployResult> {
  const init = auction_storage_storage(owner)
  return get_originate(provider, {init, code: auction_storage_code})
}
