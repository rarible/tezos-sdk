import { Provider, DeployResult } from "@rarible/tezos-common"
import BigNumber from "bignumber.js"

export const transfer_manager_code : any =
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
                    {  "prim": "address",
                       "annots": [
                         "%default_fee_receiver"
                       ]
                    },
                    {  "prim": "pair",
                       "args": [
                         {  "prim": "nat",
                            "annots": [
                              "%protocol_fee"
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
                                   {  "prim": "set",
                                      "args": [
                                        {  "prim": "address"  }
                                      ]
                                      ,
                                      "annots": [
                                        "%exchange"
                                      ]
                                   },
                                   {  "prim": "pair",
                                      "args": [
                                        {  "prim": "map",
                                           "args": [
                                             {  "prim": "address"  },
                                             {  "prim": "address"  }
                                           ]
                                           ,
                                           "annots": [
                                             "%fee_receivers"
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
                                                  "%transfer_proxy"
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
                      {  "prim": "bytes",
                         "annots": [
                           "%set_metadata_uri"
                         ]
                      },
                      {  "prim": "address",
                         "annots": [
                           "%declare_ownership"
                         ]
                      }
                    ]
                 },
                 {  "prim": "or",
                    "args": [
                      {  "prim": "unit",
                         "annots": [
                           "%claim_ownership"
                         ]
                      },
                      {  "prim": "address",
                         "annots": [
                           "%add_exchange"
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
                      {  "prim": "address",
                         "annots": [
                           "%rm_exchange"
                         ]
                      },
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "address",
                              "annots": [
                                "%token"
                              ]
                           },
                           {  "prim": "address",
                              "annots": [
                                "%wallet"
                              ]
                           }
                         ]
                         ,
                         "annots": [
                           "%set_fee_receiver"
                         ]
                      }
                    ]
                 },
                 {  "prim": "or",
                    "args": [
                      {  "prim": "or",
                         "args": [
                           {  "prim": "address",
                              "annots": [
                                "%set_default_fee_receiver"
                              ]
                           },
                           {  "prim": "nat",
                              "annots": [
                                "%set_protocol_fee"
                              ]
                           }
                         ]
                      },
                      {  "prim": "or",
                         "args": [
                           {  "prim": "address",
                              "annots": [
                                "%set_transfer_proxy"
                              ]
                           },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "option",
                                        "args": [
                                          {  "prim": "key"  }
                                        ]
                                        ,
                                        "annots": [
                                          "%maker"
                                        ]
                                     },
                                     {  "prim": "pair",
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
                                                         "%asset_class"
                                                       ]
                                                    },
                                                    {  "prim": "bytes",
                                                       "annots": [
                                                         "%asset_data"
                                                       ]
                                                    }
                                                  ]
                                                  ,
                                                  "annots": [
                                                    "%asset_type"
                                                  ]
                                               },
                                               {  "prim": "nat",
                                                  "annots": [
                                                    "%asset_value"
                                                  ]
                                               }
                                             ]
                                             ,
                                             "annots": [
                                               "%make_asset"
                                             ]
                                          },
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "option",
                                                  "args": [
                                                    {  "prim": "key"  }
                                                  ]
                                                  ,
                                                  "annots": [
                                                    "%taker"
                                                  ]
                                               },
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "or",
                                                                 "args": [
                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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
                                                                   "%asset_class"
                                                                 ]
                                                              },
                                                              {  "prim": "bytes",
                                                                 "annots": [
                                                                   "%asset_data"
                                                                 ]
                                                              }
                                                            ]
                                                            ,
                                                            "annots": [
                                                              "%asset_type"
                                                            ]
                                                         },
                                                         {  "prim": "nat",
                                                            "annots": [
                                                              "%asset_value"
                                                            ]
                                                         }
                                                       ]
                                                       ,
                                                       "annots": [
                                                         "%take_asset"
                                                       ]
                                                    },
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "nat",
                                                            "annots": [
                                                              "%salt"
                                                            ]
                                                         },
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "option",
                                                                 "args": [
                                                                   {  "prim": "timestamp"  }
                                                                 ]
                                                                 ,
                                                                 "annots": [
                                                                   "%start"
                                                                 ]
                                                              },
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "timestamp"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [
                                                                     "%end"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%data_type"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [
                                                                     "%data"
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
                                     "%order_left"
                                   ]
                                },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "option",
                                             "args": [
                                               {  "prim": "key"  }
                                             ]
                                             ,
                                             "annots": [
                                               "%maker"
                                             ]
                                          },
                                          {  "prim": "pair",
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
                                                              "%asset_class"
                                                            ]
                                                         },
                                                         {  "prim": "bytes",
                                                            "annots": [
                                                              "%asset_data"
                                                            ]
                                                         }
                                                       ]
                                                       ,
                                                       "annots": [
                                                         "%asset_type"
                                                       ]
                                                    },
                                                    {  "prim": "nat",
                                                       "annots": [
                                                         "%asset_value"
                                                       ]
                                                    }
                                                  ]
                                                  ,
                                                  "annots": [
                                                    "%make_asset"
                                                  ]
                                               },
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "option",
                                                       "args": [
                                                         {  "prim": "key"  }
                                                       ]
                                                       ,
                                                       "annots": [
                                                         "%taker"
                                                       ]
                                                    },
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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

                                                                   "%asset_class"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%asset_data"
                                                                   ]
                                                                   }
                                                                 ]
                                                                 ,
                                                                 "annots": [
                                                                   "%asset_type"
                                                                 ]
                                                              },
                                                              {  "prim": "nat",
                                                                 "annots": [
                                                                   "%asset_value"
                                                                 ]
                                                              }
                                                            ]
                                                            ,
                                                            "annots": [
                                                              "%take_asset"
                                                            ]
                                                         },
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "nat",
                                                                 "annots": [
                                                                   "%salt"
                                                                 ]
                                                              },
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "timestamp"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [
                                                                     "%start"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "timestamp"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [
                                                                     "%end"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%data_type"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [
                                                                     "%data"
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
                                          "%order_right"
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
                                                    "%asset_class"
                                                  ]
                                               },
                                               {  "prim": "bytes",
                                                  "annots": [
                                                    "%asset_data"
                                                  ]
                                               }
                                             ]
                                             ,
                                             "annots": [
                                               "%make_match"
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
                                                         "%asset_class"
                                                       ]
                                                    },
                                                    {  "prim": "bytes",
                                                       "annots": [
                                                         "%asset_data"
                                                       ]
                                                    }
                                                  ]
                                                  ,
                                                  "annots": [
                                                    "%take_match"
                                                  ]
                                               },
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "list",
                                                            "args": [
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {
                                                                   "prim": "address",
                                                                   "annots": [

                                                                   "%partAccount"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%partValue"
                                                                   ]
                                                                   }
                                                                 ]
                                                              }
                                                            ]
                                                            ,
                                                            "annots": [
                                                              "%v2_payouts"
                                                            ]
                                                         },
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "list",
                                                                 "args": [
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "address",
                                                                   "annots": [

                                                                   "%partAccount"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%partValue"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                 ]
                                                                 ,
                                                                 "annots": [
                                                                   "%v2_origin_fees"
                                                                 ]
                                                              },
                                                              {  "prim": "bool",
                                                                 "annots": [
                                                                   "%v2_is_make_fill"
                                                                 ]
                                                              }
                                                            ]
                                                         }
                                                       ]
                                                       ,
                                                       "annots": [
                                                         "%left_order_data"
                                                       ]
                                                    },
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "list",
                                                                 "args": [
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "address",
                                                                   "annots": [

                                                                   "%partAccount"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%partValue"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                 ]
                                                                 ,
                                                                 "annots": [
                                                                   "%v2_payouts"
                                                                 ]
                                                              },
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

                                                                   "%partAccount"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%partValue"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%v2_origin_fees"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bool",
                                                                   "annots": [

                                                                   "%v2_is_make_fill"
                                                                   ]
                                                                   }
                                                                 ]
                                                              }
                                                            ]
                                                            ,
                                                            "annots": [
                                                              "%right_order_data"
                                                            ]
                                                         },
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%make_value"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%take_value"
                                                                   ]
                                                                   }
                                                                 ]
                                                                 ,
                                                                 "annots": [
                                                                   "%ifill"
                                                                 ]
                                                              },
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {
                                                                   "prim": "int",
                                                                   "annots": [

                                                                   "%side_of_fee"
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

                                                                   "%partAccount"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%partValue"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%iroyalties"
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
                                "%do_transfers"
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
       [  {  "prim": "LAMBDA",
             "args": [
               {  "prim": "pair",
                  "args": [
                    {  "prim": "address"  },
                    {  "prim": "pair",
                       "args": [
                         {  "prim": "map",
                            "args": [
                              {  "prim": "address"  },
                              {  "prim": "address"  }
                            ]
                         },
                         {  "prim": "option",
                            "args": [
                              {  "prim": "address"  }
                            ]
                         }
                       ]
                    }
                  ]
               },
               {  "prim": "address"  },
               [  {  "prim": "UNPAIR",
                     "args": [
                       {  "int": "3"  }
                     ]
               },
               {  "prim": "PUSH",
                  "args": [
                    {  "prim": "unit"  },
                    {  "prim": "Unit"  }
                  ]
               },
               {  "prim": "DUP",
                  "args": [
                    {  "int": "4"  }
                  ]
               },
               {  "prim": "IF_NONE",
                  "args": [
                    [  {  "prim": "DUP",
                          "args": [
                            {  "int": "2"  }
                          ]
                    }  ],
                    [  {  "prim": "DUP",
                          "args": [
                            {  "int": "4"  }
                          ]
                    },
                    {  "prim": "DUP",
                       "args": [
                         {  "int": "2"  }
                       ]
                    },
                    {  "prim": "GET"  },
                    {  "prim": "IF_NONE",
                       "args": [
                         [  {  "prim": "DUP",
                               "args": [
                                 {  "int": "3"  }
                               ]
                         }  ],
                         [    ]
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
               {  "prim": "SWAP"  },
               {  "prim": "DROP",
                  "args": [
                    {  "int": "1"  }
                  ]
               },
               {  "prim": "DUG",
                  "args": [
                    {  "int": "3"  }
                  ]
               },
               {  "prim": "DROP",
                  "args": [
                    {  "int": "3"  }
                  ]
               }  ]
             ]
       },
       {  "prim": "LAMBDA",
          "args": [
            {  "prim": "pair",
               "args": [
                 {  "prim": "nat"  },
                 {  "prim": "nat"  }
               ]
            },
            {  "prim": "nat"  },
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "2"  }
                  ]
            },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "unit"  },
                 {  "prim": "Unit"  }
               ]
            },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "nat"  },
                 {  "int": "1"  }
               ]
            },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "nat"  },
                 {  "int": "10000"  }
               ]
            },
            {  "prim": "INT"  },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "nat"  },
                 {  "int": "1"  }
               ]
            },
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
            {  "prim": "MUL"  },
            {  "prim": "INT"  },
            {  "prim": "PAIR"  },
            {  "prim": "PAIR"  },
            {  "prim": "UNPAIR"  },
            {  "prim": "DIP",
               "args": [
                 {  "int": "1"  },
                 [  {  "prim": "UNPAIR"  }  ]
               ]
            },
            {  "prim": "UNPAIR"  },
            {  "prim": "DIG",
               "args": [
                 {  "int": "3"  }
               ]
            },
            {  "prim": "DUP"  },
            {  "prim": "DIG",
               "args": [
                 {  "int": "3"  }
               ]
            },
            {  "prim": "DUP"  },
            {  "prim": "DUG",
               "args": [
                 {  "int": "4"  }
               ]
            },
            {  "prim": "MUL"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "nat"  },
                 {  "int": "0"  }
               ]
            },
            {  "prim": "COMPARE"  },
            {  "prim": "EQ"  },
            {  "prim": "IF",
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
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "int"  },
                 {  "int": "0"  }
               ]
            },
            {  "prim": "DIG",
               "args": [
                 {  "int": "4"  }
               ]
            },
            {  "prim": "DUP"  },
            {  "prim": "DUG",
               "args": [
                 {  "int": "5"  }
               ]
            },
            {  "prim": "COMPARE"  },
            {  "prim": "GE"  },
            {  "prim": "IF",
               "args": [
                 [  {  "prim": "INT"  }  ],
                 [  {  "prim": "NEG"  }  ]
               ]
            },
            {  "prim": "MUL"  },
            {  "prim": "DIP",
               "args": [
                 {  "int": "1"  },
                 [  {  "prim": "MUL"  },
                 {  "prim": "ABS"  }  ]
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "UNPAIR"  },
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
                 [  {  "prim": "CAR"  }  ]
               ]
            },
            {  "prim": "ABS"  },
            {  "prim": "SWAP"  },
            {  "prim": "DROP",
               "args": [
                 {  "int": "1"  }
               ]
            },
            {  "prim": "DUG",
               "args": [
                 {  "int": "2"  }
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "2"  }
               ]
            }  ]
          ]
       },
       {  "prim": "LAMBDA",
          "args": [
            {  "prim": "pair",
               "args": [
                 {  "prim": "string"  },
                 {  "prim": "pair",
                    "args": [
                      {  "prim": "string"  },
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "string"  },
                           {  "prim": "pair",
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
                                               "%asset_class"
                                             ]
                                          },
                                          {  "prim": "bytes",
                                             "annots": [
                                               "%asset_data"
                                             ]
                                          }
                                        ]
                                        ,
                                        "annots": [
                                          "%asset_type"
                                        ]
                                     },
                                     {  "prim": "nat",
                                        "annots": [
                                          "%asset_value"
                                        ]
                                     }
                                   ]
                                },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "address"  },
                                     {  "prim": "address"  }
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
            {  "prim": "or",
               "args": [
                 {  "prim": "pair",
                    "args": [
                      {  "prim": "mutez"  },
                      {  "prim": "address"  }
                    ]
                    ,
                    "annots": [
                      "%XTZ_ARG"
                    ]
                 },
                 {  "prim": "or",
                    "args": [
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "address"  },
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
                           "%FA_1_2_ARG"
                         ]
                      },
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "address"  },
                           {  "prim": "list",
                              "args": [
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "address"  },
                                     {  "prim": "list",
                                        "args": [
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "address"  },
                                               {  "prim": "pair",
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
                           "%FA_2_ARG"
                         ]
                      }
                    ]
                 }
               ]
            },
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "6"  }
                  ]
            },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "unit"  },
                 {  "prim": "Unit"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "5"  }
               ]
            },
            {  "prim": "CAR"  },
            {  "prim": "CAR"  },
            {  "prim": "IF_LEFT",
               "args": [
                 [  {  "prim": "PUSH",
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
                      {  "int": "8"  }
                    ]
                 },
                 {  "prim": "CDR"  },
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
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "9"  }
                    ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "2"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "LEFT",
                    "args": [
                      {  "prim": "or",
                         "args": [
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "address"  },
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
                           },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "address"  },
                                {  "prim": "list",
                                   "args": [
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "address"  },
                                          {  "prim": "list",
                                             "args": [
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "address"  },
                                                    {  "prim": "pair",
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
                           }
                         ]
                      }
                    ]
                 },
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
                      {  "int": "2"  }
                    ]
                 }  ],
                 [  {  "prim": "DUP"  },
                 {  "prim": "IF_LEFT",
                    "args": [
                      [  {  "prim": "DUP",
                            "args": [
                              {  "int": "7"  }
                            ]
                      },
                      {  "prim": "CAR"  },
                      {  "prim": "CDR"  },
                      {  "prim": "UNPACK",
                         "args": [
                           {  "prim": "address"  }
                         ]
                      },
                      {  "prim": "IF_NONE",
                         "args": [
                           [  {  "prim": "PUSH",
                                 "args": [
                                   {  "prim": "string"  },
                                   {  "string": "CANNOT_UNPACK_FA_1_2_ADDR"  }
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
                      {  "prim": "CDR"  },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "11"  }
                         ]
                      },
                      {  "prim": "PAIR"  },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "10"  }
                         ]
                      },
                      {  "prim": "PAIR"  },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "2"  }
                         ]
                      },
                      {  "prim": "PAIR"  },
                      {  "prim": "LEFT",
                         "args": [
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "address"  },
                                {  "prim": "list",
                                   "args": [
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "address"  },
                                          {  "prim": "list",
                                             "args": [
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "address"  },
                                                    {  "prim": "pair",
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
                           }
                         ]
                      },
                      {  "prim": "RIGHT",
                         "args": [
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "mutez"  },
                                {  "prim": "address"  }
                              ]
                           }
                         ]
                      },
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
                           {  "int": "2"  }
                         ]
                      }  ],
                      [  {  "prim": "DUP"  },
                      {  "prim": "IF_LEFT",
                         "args": [
                           [  {  "prim": "DUP",
                                 "args": [
                                   {  "int": "8"  }
                                 ]
                           },
                           {  "prim": "CAR"  },
                           {  "prim": "CDR"  },
                           {  "prim": "UNPACK",
                              "args": [
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "address"  },
                                     {  "prim": "nat"  }
                                   ]
                                }
                              ]
                           },
                           {  "prim": "IF_NONE",
                              "args": [
                                [  {  "prim": "PUSH",
                                      "args": [
                                        {  "prim": "string"  },
                                        {  "string": "CANNOT_UNPACK_FA_2_ADDR"  }
                                      ]
                                },
                                {  "prim": "FAILWITH"  }  ],
                                [    ]
                              ]
                           },
                           {  "prim": "NIL",
                              "args": [
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "address"  },
                                     {  "prim": "list",
                                        "args": [
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "address"  },
                                               {  "prim": "pair",
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
                           },
                           {  "prim": "NIL",
                              "args": [
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "address"  },
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "nat"  },
                                          {  "prim": "nat"  }
                                        ]
                                     }
                                   ]
                                }
                              ]
                           },
                           {  "prim": "DUP",
                              "args": [
                                {  "int": "11"  }
                              ]
                           },
                           {  "prim": "CDR"  },
                           {  "prim": "DUP",
                              "args": [
                                {  "int": "4"  }
                              ]
                           },
                           {  "prim": "CDR"  },
                           {  "prim": "PAIR"  },
                           {  "prim": "DUP",
                              "args": [
                                {  "int": "14"  }
                              ]
                           },
                           {  "prim": "PAIR"  },
                           {  "prim": "CONS"  },
                           {  "prim": "DUP",
                              "args": [
                                {  "int": "12"  }
                              ]
                           },
                           {  "prim": "PAIR"  },
                           {  "prim": "CONS"  },
                           {  "prim": "DUP"  },
                           {  "prim": "DUP",
                              "args": [
                                {  "int": "3"  }
                              ]
                           },
                           {  "prim": "CAR"  },
                           {  "prim": "PAIR"  },
                           {  "prim": "RIGHT",
                              "args": [
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "address"  },
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
                                }
                              ]
                           },
                           {  "prim": "RIGHT",
                              "args": [
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "mutez"  },
                                     {  "prim": "address"  }
                                   ]
                                }
                              ]
                           },
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
                           },
                           {  "prim": "DROP",
                              "args": [
                                {  "int": "3"  }
                              ]
                           }  ],
                           [  {  "prim": "DUP"  },
                           {  "prim": "IF_LEFT",
                              "args": [
                                [  {  "prim": "PUSH",
                                      "args": [
                                        {  "prim": "string"  },
                                        {  "string": "ASSET_TYPE_UNSUPPORTED"  }
                                      ]
                                },
                                {  "prim": "FAILWITH"  }  ],
                                [  {  "prim": "PUSH",
                                      "args": [
                                        {  "prim": "string"  },
                                        {  "string": "ASSET_TYPE_UNSUPPORTED"  }
                                      ]
                                },
                                {  "prim": "FAILWITH"  }  ]
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
            {  "prim": "DUG",
               "args": [
                 {  "int": "6"  }
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "6"  }
               ]
            }  ]
          ]
       },
       {  "prim": "LAMBDA",
          "args": [
            {  "prim": "pair",
               "args": [
                 {  "prim": "string"  },
                 {  "prim": "pair",
                    "args": [
                      {  "prim": "string"  },
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "string"  },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "string"  },
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
                                               "%asset_class"
                                             ]
                                          },
                                          {  "prim": "bytes",
                                             "annots": [
                                               "%asset_data"
                                             ]
                                          }
                                        ]
                                     },
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "nat"  },
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "address"  },
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "list",
                                                       "args": [
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "address",
                                                                 "annots": [
                                                                   "%partAccount"
                                                                 ]
                                                              },
                                                              {  "prim": "nat",
                                                                 "annots": [
                                                                   "%partValue"
                                                                 ]
                                                              }
                                                            ]
                                                         }
                                                       ]
                                                    },
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "lambda",
                                                            "args": [
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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

                                                                   "%asset_class"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%asset_data"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%asset_type"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%asset_value"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {  "prim": "address"  }
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
                                                              {  "prim": "or",
                                                                 "args": [
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "mutez"  },
                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%XTZ_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%FA_1_2_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
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

                                                                   "%FA_2_ARG"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                 ]
                                                              }
                                                            ]
                                                         },
                                                         {  "prim": "lambda",
                                                            "args": [
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                 ]
                                                              },
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
            },
            {  "prim": "list",
               "args": [
                 {  "prim": "or",
                    "args": [
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "mutez"  },
                           {  "prim": "address"  }
                         ]
                         ,
                         "annots": [
                           "%XTZ_ARG"
                         ]
                      },
                      {  "prim": "or",
                         "args": [
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "address"  },
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
                                "%FA_1_2_ARG"
                              ]
                           },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "address"  },
                                {  "prim": "list",
                                   "args": [
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "address"  },
                                          {  "prim": "list",
                                             "args": [
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "address"  },
                                                    {  "prim": "pair",
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
                                "%FA_2_ARG"
                              ]
                           }
                         ]
                      }
                    ]
                 }
               ]
            },
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "10"  }
                  ]
            },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "unit"  },
                 {  "prim": "Unit"  }
               ]
            },
            {  "prim": "NIL",
               "args": [
                 {  "prim": "or",
                    "args": [
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "mutez"  },
                           {  "prim": "address"  }
                         ]
                         ,
                         "annots": [
                           "%XTZ_ARG"
                         ]
                      },
                      {  "prim": "or",
                         "args": [
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "address"  },
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
                                "%FA_1_2_ARG"
                              ]
                           },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "address"  },
                                {  "prim": "list",
                                   "args": [
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "address"  },
                                          {  "prim": "list",
                                             "args": [
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "address"  },
                                                    {  "prim": "pair",
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
                                "%FA_2_ARG"
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
                           "%partAccount"
                         ]
                      },
                      {  "prim": "nat",
                         "annots": [
                           "%partValue"
                         ]
                      }
                    ]
                 }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "11"  }
               ]
            },
            {  "prim": "ITER",
               "args": [
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "2"  }
                       ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "2"  }
                    ]
                 },
                 {  "prim": "CONS"  },
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
                 {  "prim": "DROP",
                    "args": [
                      {  "int": "1"  }
                    ]
                 }  ]
               ]
            },
            {  "prim": "IF_CONS",
               "args": [
                 [  {  "prim": "PUSH",
                       "args": [
                         {  "prim": "nat"  },
                         {  "int": "0"  }
                       ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "11"  }
                    ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "4"  }
                    ]
                 },
                 {  "prim": "ITER",
                    "args": [
                      [  {  "prim": "DUP",
                            "args": [
                              {  "int": "17"  }
                            ]
                      },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "2"  }
                         ]
                      },
                      {  "prim": "CDR"  },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "15"  }
                         ]
                      },
                      {  "prim": "PAIR"  },
                      {  "prim": "EXEC"  },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "2"  }
                         ]
                      },
                      {  "prim": "CDR"  },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "5"  }
                         ]
                      },
                      {  "prim": "ADD"  },
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
                      {  "prim": "PUSH",
                         "args": [
                           {  "prim": "nat"  },
                           {  "int": "0"  }
                         ]
                      },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "2"  }
                         ]
                      },
                      {  "prim": "COMPARE"  },
                      {  "prim": "GT"  },
                      {  "prim": "IF",
                         "args": [
                           [  {  "prim": "DUP"  },
                           {  "prim": "DUP",
                              "args": [
                                {  "int": "4"  }
                              ]
                           },
                           {  "prim": "PAIR"  },
                           {  "prim": "UNPAIR"  },
                           {  "prim": "SUB"  },
                           {  "prim": "DUP"  },
                           {  "prim": "PUSH",
                              "args": [
                                {  "prim": "int"  },
                                {  "int": "0"  }
                              ]
                           },
                           {  "prim": "COMPARE"  },
                           {  "prim": "GT"  },
                           {  "prim": "IF",
                              "args": [
                                [  {  "prim": "PUSH",
                                      "args": [
                                        {  "prim": "string"  },
                                        {  "string": "NegResult"  }
                                      ]
                                },
                                {  "prim": "FAILWITH"  }  ],
                                [    ]
                              ]
                           },
                           {  "prim": "ABS"  },
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
                           {  "prim": "DIG",
                              "args": [
                                {  "int": "6"  }
                              ]
                           },
                           {  "prim": "DUP",
                              "args": [
                                {  "int": "17"  }
                              ]
                           },
                           {  "prim": "DUP",
                              "args": [
                                {  "int": "4"  }
                              ]
                           },
                           {  "prim": "CAR"  },
                           {  "prim": "DUP",
                              "args": [
                                {  "int": "17"  }
                              ]
                           },
                           {  "prim": "PAIR"  },
                           {  "prim": "DUP",
                              "args": [
                                {  "int": "4"  }
                              ]
                           },
                           {  "prim": "DUP",
                              "args": [
                                {  "int": "16"  }
                              ]
                           },
                           {  "prim": "PAIR"  },
                           {  "prim": "PAIR"  },
                           {  "prim": "PUSH",
                              "args": [
                                {  "prim": "string"  },
                                {  "string": "CANNOT_UNPACK_FA_1_2_ADDR"  }
                              ]
                           },
                           {  "prim": "PAIR"  },
                           {  "prim": "PUSH",
                              "args": [
                                {  "prim": "string"  },
                                {  "string": "CANNOT_UNPACK_FA_2_ADDR"  }
                              ]
                           },
                           {  "prim": "PAIR"  },
                           {  "prim": "PUSH",
                              "args": [
                                {  "prim": "string"  },
                                {  "string": "ASSET_TYPE_UNSUPPORTED"  }
                              ]
                           },
                           {  "prim": "PAIR"  },
                           {  "prim": "EXEC"  },
                           {  "prim": "CONS"  },
                           {  "prim": "DUG",
                              "args": [
                                {  "int": "6"  }
                              ]
                           }  ],
                           [    ]
                         ]
                      },
                      {  "prim": "DROP",
                         "args": [
                           {  "int": "2"  }
                         ]
                      }  ]
                    ]
                 },
                 {  "prim": "NIL",
                    "args": [
                      {  "prim": "or",
                         "args": [
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "mutez"  },
                                {  "prim": "address"  }
                              ]
                              ,
                              "annots": [
                                "%XTZ_ARG"
                              ]
                           },
                           {  "prim": "or",
                              "args": [
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "address"  },
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
                                     "%FA_1_2_ARG"
                                   ]
                                },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "address"  },
                                     {  "prim": "list",
                                        "args": [
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "address"  },
                                               {  "prim": "list",
                                                  "args": [
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "address"  },
                                                         {  "prim": "pair",
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
                                     "%FA_2_ARG"
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
                      {  "int": "6"  }
                    ]
                 },
                 {  "prim": "ITER",
                    "args": [
                      [  {  "prim": "DUP",
                            "args": [
                              {  "int": "2"  }
                            ]
                      },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "2"  }
                         ]
                      },
                      {  "prim": "CONS"  },
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
                      [  {  "prim": "DIG",
                            "args": [
                              {  "int": "4"  }
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
                      {  "int": "4"  }
                    ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "3"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "3"  }
                    ]
                 },
                 {  "prim": "ADD"  },
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
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "nat"  },
                      {  "int": "10000"  }
                    ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "3"  }
                    ]
                 },
                 {  "prim": "COMPARE"  },
                 {  "prim": "EQ"  },
                 {  "prim": "NOT"  },
                 {  "prim": "IF",
                    "args": [
                      [  {  "prim": "PUSH",
                            "args": [
                              {  "prim": "string"  },
                              {  "string": "SUM_PAYOUTS_NOT_100_PERCENT"  }
                            ]
                      },
                      {  "prim": "FAILWITH"  }  ],
                      [    ]
                    ]
                 },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "nat"  },
                      {  "int": "0"  }
                    ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "2"  }
                    ]
                 },
                 {  "prim": "COMPARE"  },
                 {  "prim": "GT"  },
                 {  "prim": "IF",
                    "args": [
                      [  {  "prim": "DIG",
                            "args": [
                              {  "int": "4"  }
                            ]
                      },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "15"  }
                         ]
                      },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "5"  }
                         ]
                      },
                      {  "prim": "CAR"  },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "15"  }
                         ]
                      },
                      {  "prim": "PAIR"  },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "4"  }
                         ]
                      },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "14"  }
                         ]
                      },
                      {  "prim": "PAIR"  },
                      {  "prim": "PAIR"  },
                      {  "prim": "PUSH",
                         "args": [
                           {  "prim": "string"  },
                           {  "string": "CANNOT_UNPACK_FA_1_2_ADDR"  }
                         ]
                      },
                      {  "prim": "PAIR"  },
                      {  "prim": "PUSH",
                         "args": [
                           {  "prim": "string"  },
                           {  "string": "CANNOT_UNPACK_FA_2_ADDR"  }
                         ]
                      },
                      {  "prim": "PAIR"  },
                      {  "prim": "PUSH",
                         "args": [
                           {  "prim": "string"  },
                           {  "string": "ASSET_TYPE_UNSUPPORTED"  }
                         ]
                      },
                      {  "prim": "PAIR"  },
                      {  "prim": "EXEC"  },
                      {  "prim": "CONS"  },
                      {  "prim": "DUG",
                         "args": [
                           {  "int": "4"  }
                         ]
                      }  ],
                      [    ]
                    ]
                 },
                 {  "prim": "DROP",
                    "args": [
                      {  "int": "4"  }
                    ]
                 }  ],
                 [    ]
               ]
            },
            {  "prim": "DUP"  },
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
            {  "prim": "DROP",
               "args": [
                 {  "int": "1"  }
               ]
            },
            {  "prim": "DUG",
               "args": [
                 {  "int": "10"  }
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "10"  }
               ]
            }  ]
          ]
       },
       {  "prim": "LAMBDA",
          "args": [
            {  "prim": "pair",
               "args": [
                 {  "prim": "nat"  },
                 {  "prim": "pair",
                    "args": [
                      {  "prim": "nat"  },
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "list",
                              "args": [
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "address",
                                        "annots": [
                                          "%partAccount"
                                        ]
                                     },
                                     {  "prim": "nat",
                                        "annots": [
                                          "%partValue"
                                        ]
                                     }
                                   ]
                                }
                              ]
                           },
                           {  "prim": "lambda",
                              "args": [
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "nat"  },
                                     {  "prim": "nat"  }
                                   ]
                                },
                                {  "prim": "nat"  }
                              ]
                           }
                         ]
                      }
                    ]
                 }
               ]
            },
            {  "prim": "nat"  },
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "4"  }
                  ]
            },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "unit"  },
                 {  "prim": "Unit"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "5"  }
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
            {  "prim": "EXEC"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "3"  }
               ]
            },
            {  "prim": "ADD"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "5"  }
               ]
            },
            {  "prim": "ITER",
               "args": [
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "7"  }
                       ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "2"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "6"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "EXEC"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "3"  }
                    ]
                 },
                 {  "prim": "ADD"  },
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
                 {  "prim": "DROP",
                    "args": [
                      {  "int": "1"  }
                    ]
                 }  ]
               ]
            },
            {  "prim": "DUP"  },
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
            {  "prim": "DROP",
               "args": [
                 {  "int": "1"  }
               ]
            },
            {  "prim": "DUG",
               "args": [
                 {  "int": "4"  }
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "4"  }
               ]
            }  ]
          ]
       },
       {  "prim": "LAMBDA",
          "args": [
            {  "prim": "pair",
               "args": [
                 {  "prim": "nat"  },
                 {  "prim": "nat"  }
               ]
            },
            {  "prim": "pair",
               "args": [
                 {  "prim": "nat"  },
                 {  "prim": "nat"  }
               ]
            },
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "2"  }
                  ]
            },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "unit"  },
                 {  "prim": "Unit"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "3"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "3"  }
               ]
            },
            {  "prim": "COMPARE"  },
            {  "prim": "GT"  },
            {  "prim": "IF",
               "args": [
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "3"  }
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
                 {  "prim": "UNPAIR"  },
                 {  "prim": "SUB"  },
                 {  "prim": "DUP"  },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "int"  },
                      {  "int": "0"  }
                    ]
                 },
                 {  "prim": "COMPARE"  },
                 {  "prim": "GT"  },
                 {  "prim": "IF",
                    "args": [
                      [  {  "prim": "PUSH",
                            "args": [
                              {  "prim": "string"  },
                              {  "string": "NegResult"  }
                            ]
                      },
                      {  "prim": "FAILWITH"  }  ],
                      [    ]
                    ]
                 },
                 {  "prim": "ABS"  },
                 {  "prim": "PAIR"  }  ],
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "2"  }
                       ]
                 },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "nat"  },
                      {  "int": "0"  }
                    ]
                 },
                 {  "prim": "PAIR"  }  ]
               ]
            },
            {  "prim": "SWAP"  },
            {  "prim": "DROP",
               "args": [
                 {  "int": "1"  }
               ]
            },
            {  "prim": "DUG",
               "args": [
                 {  "int": "2"  }
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "2"  }
               ]
            }  ]
          ]
       },
       {  "prim": "LAMBDA",
          "args": [
            {  "prim": "pair",
               "args": [
                 {  "prim": "nat"  },
                 {  "prim": "pair",
                    "args": [
                      {  "prim": "nat"  },
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "nat"  },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "lambda",
                                   "args": [
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "nat"  },
                                          {  "prim": "nat"  }
                                        ]
                                     },
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "nat"  },
                                          {  "prim": "nat"  }
                                        ]
                                     }
                                   ]
                                },
                                {  "prim": "lambda",
                                   "args": [
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "nat"  },
                                          {  "prim": "nat"  }
                                        ]
                                     },
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
            },
            {  "prim": "pair",
               "args": [
                 {  "prim": "nat"  },
                 {  "prim": "nat"  }
               ]
            },
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "5"  }
                  ]
            },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "unit"  },
                 {  "prim": "Unit"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "5"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "7"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "6"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "6"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "EXEC"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "4"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "EXEC"  },
            {  "prim": "SWAP"  },
            {  "prim": "DROP",
               "args": [
                 {  "int": "1"  }
               ]
            },
            {  "prim": "DUG",
               "args": [
                 {  "int": "5"  }
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "5"  }
               ]
            }  ]
          ]
       },
       {  "prim": "LAMBDA",
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
                      "%asset_class"
                    ]
                 },
                 {  "prim": "bytes",
                    "annots": [
                      "%asset_data"
                    ]
                 }
               ]
            },
            {  "prim": "option",
               "args": [
                 {  "prim": "address"  }
               ]
            },
            [  {  "prim": "PUSH",
                  "args": [
                    {  "prim": "unit"  },
                    {  "prim": "Unit"  }
                  ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "2"  }
               ]
            },
            {  "prim": "CAR"  },
            {  "prim": "IF_LEFT",
               "args": [
                 [  {  "prim": "NONE",
                       "args": [
                         {  "prim": "address"  }
                       ]
                 },
                 {  "prim": "SWAP"  },
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
                      {  "prim": "UNPACK",
                         "args": [
                           {  "prim": "address"  }
                         ]
                      },
                      {  "prim": "SWAP"  },
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
                                   {  "int": "5"  }
                                 ]
                           },
                           {  "prim": "CDR"  },
                           {  "prim": "UNPACK",
                              "args": [
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "address"  },
                                     {  "prim": "nat"  }
                                   ]
                                }
                              ]
                           },
                           {  "prim": "IF_NONE",
                              "args": [
                                [  {  "prim": "NONE",
                                      "args": [
                                        {  "prim": "address"  }
                                      ]
                                }  ],
                                [  {  "prim": "DUP"  },
                                {  "prim": "CAR"  },
                                {  "prim": "SOME"  },
                                {  "prim": "SWAP"  },
                                {  "prim": "DROP",
                                   "args": [
                                     {  "int": "1"  }
                                   ]
                                }  ]
                              ]
                           },
                           {  "prim": "SWAP"  },
                           {  "prim": "DROP",
                              "args": [
                                {  "int": "1"  }
                              ]
                           }  ],
                           [  {  "prim": "DUP"  },
                           {  "prim": "IF_LEFT",
                              "args": [
                                [  {  "prim": "NONE",
                                      "args": [
                                        {  "prim": "address"  }
                                      ]
                                },
                                {  "prim": "SWAP"  },
                                {  "prim": "DROP",
                                   "args": [
                                     {  "int": "1"  }
                                   ]
                                }  ],
                                [  {  "prim": "NONE",
                                      "args": [
                                        {  "prim": "address"  }
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
                           {  "prim": "SWAP"  },
                           {  "prim": "DROP",
                              "args": [
                                {  "int": "1"  }
                              ]
                           }  ]
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
                 {  "prim": "SWAP"  },
                 {  "prim": "DROP",
                    "args": [
                      {  "int": "1"  }
                    ]
                 }  ]
               ]
            },
            {  "prim": "SWAP"  },
            {  "prim": "DROP",
               "args": [
                 {  "int": "1"  }
               ]
            },
            {  "prim": "DUG",
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
       {  "prim": "LAMBDA",
          "args": [
            {  "prim": "pair",
               "args": [
                 {  "prim": "string"  },
                 {  "prim": "pair",
                    "args": [
                      {  "prim": "string"  },
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "string"  },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "address"  },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "map",
                                        "args": [
                                          {  "prim": "address"  },
                                          {  "prim": "address"  }
                                        ]
                                     },
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "nat"  },
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "nat"  },
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "nat"  },
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "address"  },
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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

                                                                   "%asset_class"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%asset_data"
                                                                   ]
                                                                   }
                                                                 ]
                                                              },
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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

                                                                   "%asset_class"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%asset_data"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%asset_type"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%asset_value"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {  "prim": "address"  }
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
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "mutez"  },
                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%XTZ_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%FA_1_2_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
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

                                                                   "%FA_2_ARG"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "map",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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

                                                                   "%asset_class"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%asset_data"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

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
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
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
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
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
                 }
               ]
            },
            {  "prim": "pair",
               "args": [
                 {  "prim": "nat"  },
                 {  "prim": "list",
                    "args": [
                      {  "prim": "or",
                         "args": [
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "mutez"  },
                                {  "prim": "address"  }
                              ]
                              ,
                              "annots": [
                                "%XTZ_ARG"
                              ]
                           },
                           {  "prim": "or",
                              "args": [
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "address"  },
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
                                     "%FA_1_2_ARG"
                                   ]
                                },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "address"  },
                                     {  "prim": "list",
                                        "args": [
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "address"  },
                                               {  "prim": "list",
                                                  "args": [
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "address"  },
                                                         {  "prim": "pair",
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
                                     "%FA_2_ARG"
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
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "16"  }
                  ]
            },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "unit"  },
                 {  "prim": "Unit"  }
               ]
            },
            {  "prim": "NIL",
               "args": [
                 {  "prim": "or",
                    "args": [
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "mutez"  },
                           {  "prim": "address"  }
                         ]
                         ,
                         "annots": [
                           "%XTZ_ARG"
                         ]
                      },
                      {  "prim": "or",
                         "args": [
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "address"  },
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
                                "%FA_1_2_ARG"
                              ]
                           },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "address"  },
                                {  "prim": "list",
                                   "args": [
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "address"  },
                                          {  "prim": "list",
                                             "args": [
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "address"  },
                                                    {  "prim": "pair",
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
                                "%FA_2_ARG"
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
                 {  "int": "16"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "19"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "19"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "nat"  },
                 {  "int": "2"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "11"  }
               ]
            },
            {  "prim": "MUL"  },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "12"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "11"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "EXEC"  },
            {  "prim": "DUP"  },
            {  "prim": "CDR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "nat"  },
                 {  "int": "0"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "2"  }
               ]
            },
            {  "prim": "COMPARE"  },
            {  "prim": "GT"  },
            {  "prim": "IF",
               "args": [
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "17"  }
                       ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "15"  }
                    ]
                 },
                 {  "prim": "EXEC"  },
                 {  "prim": "DIG",
                    "args": [
                      {  "int": "3"  }
                    ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "16"  }
                    ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "18"  }
                    ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "4"  }
                    ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "13"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "12"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "EXEC"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "16"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "5"  }
                    ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "18"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "PAIR"  },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "string"  },
                      {  "string": "CANNOT_UNPACK_FA_1_2_ADDR"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "string"  },
                      {  "string": "CANNOT_UNPACK_FA_2_ADDR"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "string"  },
                      {  "string": "ASSET_TYPE_UNSUPPORTED"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "EXEC"  },
                 {  "prim": "CONS"  },
                 {  "prim": "DUG",
                    "args": [
                      {  "int": "3"  }
                    ]
                 },
                 {  "prim": "DROP",
                    "args": [
                      {  "int": "1"  }
                    ]
                 }  ],
                 [    ]
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "3"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "3"  }
               ]
            },
            {  "prim": "CAR"  },
            {  "prim": "PAIR"  },
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
                 {  "int": "3"  }
               ]
            },
            {  "prim": "DUG",
               "args": [
                 {  "int": "16"  }
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "16"  }
               ]
            }  ]
          ]
       },
       {  "prim": "LAMBDA",
          "args": [
            {  "prim": "pair",
               "args": [
                 {  "prim": "string"  },
                 {  "prim": "pair",
                    "args": [
                      {  "prim": "string"  },
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "string"  },
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
                                          "%asset_class"
                                        ]
                                     },
                                     {  "prim": "bytes",
                                        "annots": [
                                          "%asset_data"
                                        ]
                                     }
                                   ]
                                },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "nat"  },
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "nat"  },
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "list",
                                                  "args": [
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "address",
                                                            "annots": [
                                                              "%partAccount"
                                                            ]
                                                         },
                                                         {  "prim": "nat",
                                                            "annots": [
                                                              "%partValue"
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
                                                         {  "prim": "lambda",
                                                            "args": [
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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

                                                                   "%asset_class"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%asset_data"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%asset_type"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%asset_value"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {  "prim": "address"  }
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
                                                              {  "prim": "or",
                                                                 "args": [
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "mutez"  },
                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%XTZ_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%FA_1_2_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
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

                                                                   "%FA_2_ARG"
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
                                                              {  "prim": "lambda",
                                                                 "args": [
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
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
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
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                 ]
                                                              },
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
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
            },
            {  "prim": "pair",
               "args": [
                 {  "prim": "nat"  },
                 {  "prim": "pair",
                    "args": [
                      {  "prim": "nat"  },
                      {  "prim": "list",
                         "args": [
                           {  "prim": "or",
                              "args": [
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "mutez"  },
                                     {  "prim": "address"  }
                                   ]
                                   ,
                                   "annots": [
                                     "%XTZ_ARG"
                                   ]
                                },
                                {  "prim": "or",
                                   "args": [
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "address"  },
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
                                          "%FA_1_2_ARG"
                                        ]
                                     },
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "address"  },
                                          {  "prim": "list",
                                             "args": [
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "address"  },
                                                    {  "prim": "list",
                                                       "args": [
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "address"  },
                                                              {  "prim": "pair",
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
                                          "%FA_2_ARG"
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
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "12"  }
                  ]
            },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "unit"  },
                 {  "prim": "Unit"  }
               ]
            },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "nat"  },
                 {  "int": "0"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "7"  }
               ]
            },
            {  "prim": "NIL",
               "args": [
                 {  "prim": "or",
                    "args": [
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "mutez"  },
                           {  "prim": "address"  }
                         ]
                         ,
                         "annots": [
                           "%XTZ_ARG"
                         ]
                      },
                      {  "prim": "or",
                         "args": [
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "address"  },
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
                                "%FA_1_2_ARG"
                              ]
                           },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "address"  },
                                {  "prim": "list",
                                   "args": [
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "address"  },
                                          {  "prim": "list",
                                             "args": [
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "address"  },
                                                    {  "prim": "pair",
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
                                "%FA_2_ARG"
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
                 {  "int": "11"  }
               ]
            },
            {  "prim": "ITER",
               "args": [
                 [  {  "prim": "DUP"  },
                 {  "prim": "CDR"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "5"  }
                    ]
                 },
                 {  "prim": "ADD"  },
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
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "15"  }
                    ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "18"  }
                    ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "18"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "3"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "PAIR"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "13"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "5"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "EXEC"  },
                 {  "prim": "DUP"  },
                 {  "prim": "CAR"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "2"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "2"  }
                    ]
                 },
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
                 },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "nat"  },
                      {  "int": "0"  }
                    ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "2"  }
                    ]
                 },
                 {  "prim": "COMPARE"  },
                 {  "prim": "GT"  },
                 {  "prim": "IF",
                    "args": [
                      [  {  "prim": "DIG",
                            "args": [
                              {  "int": "4"  }
                            ]
                      },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "17"  }
                         ]
                      },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "6"  }
                         ]
                      },
                      {  "prim": "CAR"  },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "18"  }
                         ]
                      },
                      {  "prim": "PAIR"  },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "4"  }
                         ]
                      },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "15"  }
                         ]
                      },
                      {  "prim": "PAIR"  },
                      {  "prim": "PAIR"  },
                      {  "prim": "PUSH",
                         "args": [
                           {  "prim": "string"  },
                           {  "string": "CANNOT_UNPACK_FA_1_2_ADDR"  }
                         ]
                      },
                      {  "prim": "PAIR"  },
                      {  "prim": "PUSH",
                         "args": [
                           {  "prim": "string"  },
                           {  "string": "CANNOT_UNPACK_FA_2_ADDR"  }
                         ]
                      },
                      {  "prim": "PAIR"  },
                      {  "prim": "PUSH",
                         "args": [
                           {  "prim": "string"  },
                           {  "string": "ASSET_TYPE_UNSUPPORTED"  }
                         ]
                      },
                      {  "prim": "PAIR"  },
                      {  "prim": "EXEC"  },
                      {  "prim": "CONS"  },
                      {  "prim": "DUG",
                         "args": [
                           {  "int": "4"  }
                         ]
                      }  ],
                      [    ]
                    ]
                 },
                 {  "prim": "DROP",
                    "args": [
                      {  "int": "4"  }
                    ]
                 }  ]
               ]
            },
            {  "prim": "NIL",
               "args": [
                 {  "prim": "or",
                    "args": [
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "mutez"  },
                           {  "prim": "address"  }
                         ]
                         ,
                         "annots": [
                           "%XTZ_ARG"
                         ]
                      },
                      {  "prim": "or",
                         "args": [
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "address"  },
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
                                "%FA_1_2_ARG"
                              ]
                           },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "address"  },
                                {  "prim": "list",
                                   "args": [
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "address"  },
                                          {  "prim": "list",
                                             "args": [
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "address"  },
                                                    {  "prim": "pair",
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
                                "%FA_2_ARG"
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
                 {  "int": "2"  }
               ]
            },
            {  "prim": "ITER",
               "args": [
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "2"  }
                       ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "2"  }
                    ]
                 },
                 {  "prim": "CONS"  },
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
                 {  "prim": "DROP",
                    "args": [
                      {  "int": "1"  }
                    ]
                 }  ]
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "4"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "3"  }
               ]
            },
            {  "prim": "PAIR"  },
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
                 {  "int": "3"  }
               ]
            },
            {  "prim": "DUG",
               "args": [
                 {  "int": "12"  }
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "12"  }
               ]
            }  ]
          ]
       },
       {  "prim": "LAMBDA",
          "args": [
            {  "prim": "pair",
               "args": [
                 {  "prim": "string"  },
                 {  "prim": "pair",
                    "args": [
                      {  "prim": "string"  },
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "string"  },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "string"  },
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
                                               "%asset_class"
                                             ]
                                          },
                                          {  "prim": "bytes",
                                             "annots": [
                                               "%asset_data"
                                             ]
                                          }
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
                                                    "%asset_class"
                                                  ]
                                               },
                                               {  "prim": "bytes",
                                                  "annots": [
                                                    "%asset_data"
                                                  ]
                                               }
                                             ]
                                          },
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "nat"  },
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "nat"  },
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "address"  },
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "list",
                                                                 "args": [
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "address",
                                                                   "annots": [

                                                                   "%partAccount"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%partValue"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                 ]
                                                              },
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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

                                                                   "%asset_class"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%asset_data"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
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

                                                                   {
                                                                   "prim": "address",
                                                                   "annots": [

                                                                   "%partAccount"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%partValue"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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

                                                                   "%asset_class"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%asset_data"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%asset_type"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%asset_value"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {  "prim": "address"  }
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
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "mutez"  },
                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%XTZ_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%FA_1_2_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
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

                                                                   "%FA_2_ARG"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

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
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
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
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
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
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {
                                                                   "prim": "list",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "mutez"  },
                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%XTZ_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%FA_1_2_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
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

                                                                   "%FA_2_ARG"
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
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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

                                                                   "%asset_class"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%asset_data"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%asset_type"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%asset_value"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {  "prim": "address"  }
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
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "mutez"  },
                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%XTZ_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%FA_1_2_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
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

                                                                   "%FA_2_ARG"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

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
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
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
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
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
            {  "prim": "pair",
               "args": [
                 {  "prim": "nat"  },
                 {  "prim": "list",
                    "args": [
                      {  "prim": "or",
                         "args": [
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "mutez"  },
                                {  "prim": "address"  }
                              ]
                              ,
                              "annots": [
                                "%XTZ_ARG"
                              ]
                           },
                           {  "prim": "or",
                              "args": [
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "address"  },
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
                                     "%FA_1_2_ARG"
                                   ]
                                },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "address"  },
                                     {  "prim": "list",
                                        "args": [
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "address"  },
                                               {  "prim": "list",
                                                  "args": [
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "address"  },
                                                         {  "prim": "pair",
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
                                     "%FA_2_ARG"
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
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "15"  }
                  ]
            },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "unit"  },
                 {  "prim": "Unit"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "12"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "17"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "17"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "16"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "15"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "12"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "13"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "11"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "10"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "8"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "CANNOT_UNPACK_FA_1_2_ADDR"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "CANNOT_UNPACK_FA_2_ADDR"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "ASSET_TYPE_UNSUPPORTED"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "EXEC"  },
            {  "prim": "DUP"  },
            {  "prim": "CAR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "2"  }
               ]
            },
            {  "prim": "CDR"  },
            {  "prim": "CAR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "3"  }
               ]
            },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "nat"  },
                 {  "int": "5000"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "3"  }
               ]
            },
            {  "prim": "COMPARE"  },
            {  "prim": "LE"  },
            {  "prim": "NOT"  },
            {  "prim": "IF",
               "args": [
                 [  {  "prim": "PUSH",
                       "args": [
                         {  "prim": "string"  },
                         {  "string": "ROYALTIES_TOO_HIGH"  }
                       ]
                 },
                 {  "prim": "FAILWITH"  }  ],
                 [    ]
               ]
            },
            {  "prim": "DUP"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "4"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DIP",
               "args": [
                 {  "int": "1"  },
                 [  {  "prim": "DIG",
                       "args": [
                         {  "int": "4"  }
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
                 {  "int": "4"  }
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "4"  }
               ]
            },
            {  "prim": "DUG",
               "args": [
                 {  "int": "15"  }
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "15"  }
               ]
            }  ]
          ]
       },
       {  "prim": "LAMBDA",
          "args": [
            {  "prim": "pair",
               "args": [
                 {  "prim": "string"  },
                 {  "prim": "pair",
                    "args": [
                      {  "prim": "string"  },
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "string"  },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "string"  },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "string"  },
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "address"  },
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "map",
                                                  "args": [
                                                    {  "prim": "address"  },
                                                    {  "prim": "address"  }
                                                  ]
                                               },
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "nat"  },
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "nat"  },
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "address"  },
                                                              {  "prim": "pair",
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

                                                                   {
                                                                   "prim": "address",
                                                                   "annots": [

                                                                   "%partAccount"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%partValue"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%v2_payouts"
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

                                                                   "%partAccount"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%partValue"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%v2_origin_fees"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bool",
                                                                   "annots": [

                                                                   "%v2_is_make_fill"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
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

                                                                   {
                                                                   "prim": "address",
                                                                   "annots": [

                                                                   "%partAccount"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%partValue"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%v2_payouts"
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

                                                                   "%partAccount"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%partValue"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%v2_origin_fees"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bool",
                                                                   "annots": [

                                                                   "%v2_is_make_fill"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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

                                                                   "%asset_class"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%asset_data"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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

                                                                   "%asset_class"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%asset_data"
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

                                                                   {
                                                                   "prim": "address",
                                                                   "annots": [

                                                                   "%partAccount"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%partValue"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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

                                                                   "%asset_class"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%asset_data"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
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

                                                                   "%partAccount"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%partValue"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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

                                                                   "%asset_class"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%asset_data"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%asset_type"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%asset_value"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {  "prim": "address"  }
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
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "mutez"  },
                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%XTZ_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%FA_1_2_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
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

                                                                   "%FA_2_ARG"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
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
                                                                   },
                                                                   {
                                                                   "prim": "list",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "mutez"  },
                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%XTZ_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%FA_1_2_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
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

                                                                   "%FA_2_ARG"
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
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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

                                                                   "%asset_class"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%asset_data"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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

                                                                   "%asset_class"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%asset_data"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
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

                                                                   {  "prim": "address"  },
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

                                                                   "%partAccount"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%partValue"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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

                                                                   "%asset_class"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%asset_data"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
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

                                                                   {
                                                                   "prim": "address",
                                                                   "annots": [

                                                                   "%partAccount"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%partValue"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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

                                                                   "%asset_class"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%asset_data"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%asset_type"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%asset_value"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {  "prim": "address"  }
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
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "mutez"  },
                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%XTZ_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%FA_1_2_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
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

                                                                   "%FA_2_ARG"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

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
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
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
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
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
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {
                                                                   "prim": "list",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "mutez"  },
                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%XTZ_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%FA_1_2_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
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

                                                                   "%FA_2_ARG"
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
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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

                                                                   "%asset_class"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%asset_data"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%asset_type"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%asset_value"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {  "prim": "address"  }
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
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "mutez"  },
                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%XTZ_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%FA_1_2_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
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

                                                                   "%FA_2_ARG"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

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
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
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
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
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
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {
                                                                   "prim": "list",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "mutez"  },
                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%XTZ_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%FA_1_2_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
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

                                                                   "%FA_2_ARG"
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
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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

                                                                   "%asset_class"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%asset_data"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
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

                                                                   {
                                                                   "prim": "address",
                                                                   "annots": [

                                                                   "%partAccount"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%partValue"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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

                                                                   "%asset_class"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%asset_data"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%asset_type"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%asset_value"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {  "prim": "address"  }
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
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "mutez"  },
                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%XTZ_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%FA_1_2_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
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

                                                                   "%FA_2_ARG"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

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
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
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
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
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
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {
                                                                   "prim": "list",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "mutez"  },
                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%XTZ_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%FA_1_2_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
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

                                                                   "%FA_2_ARG"
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
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "map",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   },
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

                                                                   {  "prim": "address"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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

                                                                   "%asset_class"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%asset_data"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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

                                                                   "%asset_class"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%asset_data"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%asset_type"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%asset_value"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {  "prim": "address"  }
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
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "mutez"  },
                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%XTZ_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%FA_1_2_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
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

                                                                   "%FA_2_ARG"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "map",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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

                                                                   "%asset_class"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%asset_data"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

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
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
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
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
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
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {
                                                                   "prim": "list",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "mutez"  },
                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%XTZ_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%FA_1_2_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
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

                                                                   "%FA_2_ARG"
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
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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

                                                                   "%asset_class"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%asset_data"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%asset_type"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%asset_value"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {  "prim": "address"  }
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
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "mutez"  },
                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [

                                                                   "%XTZ_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%FA_1_2_ARG"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
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

                                                                   "%FA_2_ARG"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "map",
                                                                   "args": [

                                                                   {  "prim": "address"  },
                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "or",
                                                                   "args": [

                                                                   {
                                                                   "prim": "unit",
                                                                   "annots": [
                                                                     "%XTZ"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "or",
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

                                                                   "%asset_class"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "bytes",
                                                                   "annots": [

                                                                   "%asset_data"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "address"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

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
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
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
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

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

                                                                   {
                                                                   "prim": "address",
                                                                   "annots": [

                                                                   "%partAccount"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [

                                                                   "%partValue"
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "lambda",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {  "prim": "nat"  }
                                                                   ]
                                                                   },
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
            {  "prim": "pair",
               "args": [
                 {  "prim": "nat"  },
                 {  "prim": "list",
                    "args": [
                      {  "prim": "or",
                         "args": [
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "mutez"  },
                                {  "prim": "address"  }
                              ]
                              ,
                              "annots": [
                                "%XTZ_ARG"
                              ]
                           },
                           {  "prim": "or",
                              "args": [
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "address"  },
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
                                     "%FA_1_2_ARG"
                                   ]
                                },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "address"  },
                                     {  "prim": "list",
                                        "args": [
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "address"  },
                                               {  "prim": "list",
                                                  "args": [
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "address"  },
                                                         {  "prim": "pair",
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
                                     "%FA_2_ARG"
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
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "26"  }
                  ]
            },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "unit"  },
                 {  "prim": "Unit"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "26"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "28"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "14"  }
               ]
            },
            {  "prim": "CDR"  },
            {  "prim": "CAR"  },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "11"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "12"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "EXEC"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "21"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "29"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "28"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "27"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "26"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "25"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "24"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "17"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "14"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "13"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "3"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "12"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "11"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "10"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "CANNOT_UNPACK_FA_1_2_ADDR"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "CANNOT_UNPACK_FA_2_ADDR"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "ASSET_TYPE_UNSUPPORTED"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "EXEC"  },
            {  "prim": "DUP"  },
            {  "prim": "CDR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "21"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "31"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "30"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "29"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "26"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "24"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "21"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "16"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "15"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "4"  }
               ]
            },
            {  "prim": "CAR"  },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "20"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "19"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "CANNOT_UNPACK_FA_1_2_ADDR"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "CANNOT_UNPACK_FA_2_ADDR"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "ASSET_TYPE_UNSUPPORTED"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "ROYALTIES_TOO_HIGH"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "EXEC"  },
            {  "prim": "DUP"  },
            {  "prim": "CDR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "24"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "33"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "32"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "31"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "28"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "18"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "19"  }
               ]
            },
            {  "prim": "CDR"  },
            {  "prim": "CAR"  },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "17"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "4"  }
               ]
            },
            {  "prim": "CAR"  },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "21"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "CANNOT_UNPACK_FA_1_2_ADDR"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "CANNOT_UNPACK_FA_2_ADDR"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "ASSET_TYPE_UNSUPPORTED"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "EXEC"  },
            {  "prim": "DUP"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "26"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "35"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "34"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "33"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "30"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "20"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "22"  }
               ]
            },
            {  "prim": "CDR"  },
            {  "prim": "CAR"  },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "19"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "4"  }
               ]
            },
            {  "prim": "CAR"  },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "23"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "CANNOT_UNPACK_FA_1_2_ADDR"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "CANNOT_UNPACK_FA_2_ADDR"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "ASSET_TYPE_UNSUPPORTED"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "EXEC"  },
            {  "prim": "DUP"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "26"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "37"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "32"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "24"  }
               ]
            },
            {  "prim": "CAR"  },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "22"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "4"  }
               ]
            },
            {  "prim": "CAR"  },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "25"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "CANNOT_UNPACK_FA_1_2_ADDR"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "CANNOT_UNPACK_FA_2_ADDR"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "ASSET_TYPE_UNSUPPORTED"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "SUM_PAYOUTS_NOT_100_PERCENT"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "EXEC"  },
            {  "prim": "DUP"  },
            {  "prim": "NIL",
               "args": [
                 {  "prim": "or",
                    "args": [
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "mutez"  },
                           {  "prim": "address"  }
                         ]
                         ,
                         "annots": [
                           "%XTZ_ARG"
                         ]
                      },
                      {  "prim": "or",
                         "args": [
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "address"  },
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
                                "%FA_1_2_ARG"
                              ]
                           },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "address"  },
                                {  "prim": "list",
                                   "args": [
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "address"  },
                                          {  "prim": "list",
                                             "args": [
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "address"  },
                                                    {  "prim": "pair",
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
                                "%FA_2_ARG"
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
                 {  "int": "4"  }
               ]
            },
            {  "prim": "ITER",
               "args": [
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "2"  }
                       ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "2"  }
                    ]
                 },
                 {  "prim": "CONS"  },
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
                 {  "prim": "DROP",
                    "args": [
                      {  "int": "1"  }
                    ]
                 }  ]
               ]
            },
            {  "prim": "ITER",
               "args": [
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "2"  }
                       ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "2"  }
                    ]
                 },
                 {  "prim": "CONS"  },
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
                 {  "prim": "DROP",
                    "args": [
                      {  "int": "1"  }
                    ]
                 }  ]
               ]
            },
            {  "prim": "NIL",
               "args": [
                 {  "prim": "or",
                    "args": [
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "mutez"  },
                           {  "prim": "address"  }
                         ]
                         ,
                         "annots": [
                           "%XTZ_ARG"
                         ]
                      },
                      {  "prim": "or",
                         "args": [
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "address"  },
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
                                "%FA_1_2_ARG"
                              ]
                           },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "address"  },
                                {  "prim": "list",
                                   "args": [
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "address"  },
                                          {  "prim": "list",
                                             "args": [
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "address"  },
                                                    {  "prim": "pair",
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
                                "%FA_2_ARG"
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
                 {  "int": "6"  }
               ]
            },
            {  "prim": "ITER",
               "args": [
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "2"  }
                       ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "2"  }
                    ]
                 },
                 {  "prim": "CONS"  },
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
                 {  "prim": "DROP",
                    "args": [
                      {  "int": "1"  }
                    ]
                 }  ]
               ]
            },
            {  "prim": "ITER",
               "args": [
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "2"  }
                       ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "2"  }
                    ]
                 },
                 {  "prim": "CONS"  },
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
                 {  "prim": "DROP",
                    "args": [
                      {  "int": "1"  }
                    ]
                 }  ]
               ]
            },
            {  "prim": "NIL",
               "args": [
                 {  "prim": "or",
                    "args": [
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "mutez"  },
                           {  "prim": "address"  }
                         ]
                         ,
                         "annots": [
                           "%XTZ_ARG"
                         ]
                      },
                      {  "prim": "or",
                         "args": [
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "address"  },
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
                                "%FA_1_2_ARG"
                              ]
                           },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "address"  },
                                {  "prim": "list",
                                   "args": [
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "address"  },
                                          {  "prim": "list",
                                             "args": [
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "address"  },
                                                    {  "prim": "pair",
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
                                "%FA_2_ARG"
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
                 {  "int": "8"  }
               ]
            },
            {  "prim": "ITER",
               "args": [
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "2"  }
                       ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "2"  }
                    ]
                 },
                 {  "prim": "CONS"  },
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
                 {  "prim": "DROP",
                    "args": [
                      {  "int": "1"  }
                    ]
                 }  ]
               ]
            },
            {  "prim": "ITER",
               "args": [
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "2"  }
                       ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "2"  }
                    ]
                 },
                 {  "prim": "CONS"  },
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
                 {  "prim": "DROP",
                    "args": [
                      {  "int": "1"  }
                    ]
                 }  ]
               ]
            },
            {  "prim": "NIL",
               "args": [
                 {  "prim": "or",
                    "args": [
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "mutez"  },
                           {  "prim": "address"  }
                         ]
                         ,
                         "annots": [
                           "%XTZ_ARG"
                         ]
                      },
                      {  "prim": "or",
                         "args": [
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "address"  },
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
                                "%FA_1_2_ARG"
                              ]
                           },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "address"  },
                                {  "prim": "list",
                                   "args": [
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "address"  },
                                          {  "prim": "list",
                                             "args": [
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "address"  },
                                                    {  "prim": "pair",
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
                                "%FA_2_ARG"
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
                 {  "int": "10"  }
               ]
            },
            {  "prim": "ITER",
               "args": [
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "2"  }
                       ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "2"  }
                    ]
                 },
                 {  "prim": "CONS"  },
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
                 {  "prim": "DROP",
                    "args": [
                      {  "int": "1"  }
                    ]
                 }  ]
               ]
            },
            {  "prim": "ITER",
               "args": [
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "2"  }
                       ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "2"  }
                    ]
                 },
                 {  "prim": "CONS"  },
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
                 {  "prim": "DROP",
                    "args": [
                      {  "int": "1"  }
                    ]
                 }  ]
               ]
            },
            {  "prim": "DUP"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "12"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DIP",
               "args": [
                 {  "int": "1"  },
                 [  {  "prim": "DIG",
                       "args": [
                         {  "int": "11"  }
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
                 {  "int": "11"  }
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "11"  }
               ]
            },
            {  "prim": "DUG",
               "args": [
                 {  "int": "26"  }
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "26"  }
               ]
            }  ]
          ]
       },
       {  "prim": "NIL",
          "args": [
            {  "prim": "operation"  }
          ]
       },
       {  "prim": "DIG",
          "args": [
            {  "int": "13"  }
          ]
       },
       {  "prim": "UNPAIR"  },
       {  "prim": "DIP",
          "args": [
            {  "int": "1"  },
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "8"  }
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
                            {  "prim": "DIG",
                               "args": [
                                 {  "int": "8"  }
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "2"  }
                               ]
                            },
                            {  "prim": "SOME"  },
                            {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": ""  }
                               ]
                            },
                            {  "prim": "UPDATE"  },
                            {  "prim": "DUG",
                               "args": [
                                 {  "int": "8"  }
                               ]
                            },
                            {  "prim": "DROP",
                               "args": [
                                 {  "int": "1"  }
                               ]
                            },
                            {  "prim": "PAIR",
                               "args": [
                                 {  "int": "8"  }
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
                                         {  "int": "4"  }
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
                                 {  "int": "4"  }
                               ]
                            },
                            {  "prim": "DROP",
                               "args": [
                                 {  "int": "1"  }
                               ]
                            },
                            {  "prim": "PAIR",
                               "args": [
                                 {  "int": "8"  }
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
                            [  {  "prim": "DROP",
                                  "args": [
                                    {  "int": "1"  }
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
                            {  "prim": "PAIR",
                               "args": [
                                 {  "int": "8"  }
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
                            {  "prim": "MEM"  },
                            {  "prim": "IF",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "exchange"  }
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
                                 {  "prim": "PUSH",
                                    "args": [
                                      {  "prim": "bool"  },
                                      {  "prim": "True"  }
                                    ]
                                 },
                                 {  "prim": "DUP",
                                    "args": [
                                      {  "int": "3"  }
                                    ]
                                 },
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
                            },
                            {  "prim": "DROP",
                               "args": [
                                 {  "int": "1"  }
                               ]
                            },
                            {  "prim": "PAIR",
                               "args": [
                                 {  "int": "8"  }
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
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "6"  }
                               ]
                            },
                            {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "bool"  },
                                 {  "prim": "False"  }
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "3"  }
                               ]
                            },
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
                            },
                            {  "prim": "DROP",
                               "args": [
                                 {  "int": "1"  }
                               ]
                            },
                            {  "prim": "PAIR",
                               "args": [
                                 {  "int": "8"  }
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
                                 {  "int": "3"  }
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
                            {  "prim": "DIG",
                               "args": [
                                 {  "int": "7"  }
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
                                 {  "int": "4"  }
                               ]
                            },
                            {  "prim": "UPDATE"  },
                            {  "prim": "DUG",
                               "args": [
                                 {  "int": "7"  }
                               ]
                            },
                            {  "prim": "DROP",
                               "args": [
                                 {  "int": "2"  }
                               ]
                            },
                            {  "prim": "PAIR",
                               "args": [
                                 {  "int": "8"  }
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
                                         {  "int": "8"  }
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
                                         {  "int": "8"  }
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
                                                 {  "int": "7"  }
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
                                         {  "int": "7"  }
                                       ]
                                    },
                                    {  "prim": "DROP",
                                       "args": [
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR",
                                       "args": [
                                         {  "int": "8"  }
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
                                    {  "prim": "UNPAIR"  },
                                    {  "prim": "SWAP"  },
                                    {  "prim": "UNPAIR"  },
                                    {  "prim": "SWAP"  },
                                    {  "prim": "UNPAIR"  },
                                    {  "prim": "SWAP"  },
                                    {  "prim": "UNPAIR"  },
                                    {  "prim": "SWAP"  },
                                    {  "prim": "UNPAIR"  },
                                    {  "prim": "SWAP"  },
                                    {  "prim": "UNPAIR"  },
                                    {  "prim": "SWAP"  },
                                    {  "prim": "UNPAIR"  },
                                    {  "prim": "SWAP"  },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "14"  }
                                       ]
                                    },
                                    {  "prim": "SENDER"  },
                                    {  "prim": "MEM"  },
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
                                         {  "int": "3"  }
                                       ]
                                    },
                                    {  "prim": "CAR"  },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "4"  }
                                       ]
                                    },
                                    {  "prim": "CDR"  },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "11"  }
                                       ]
                                    },
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
                                    {  "prim": "HASH_KEY"  },
                                    {  "prim": "IMPLICIT_ACCOUNT"  },
                                    {  "prim": "ADDRESS"  },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "11"  }
                                       ]
                                    },
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
                                    {  "prim": "HASH_KEY"  },
                                    {  "prim": "IMPLICIT_ACCOUNT"  },
                                    {  "prim": "ADDRESS"  },
                                    {  "prim": "NIL",
                                       "args": [
                                         {  "prim": "or",
                                            "args": [
                                              {  "prim": "pair",
                                                 "args": [
                                                   {  "prim": "mutez"  },
                                                   {  "prim": "address"  }
                                                 ]
                                                 ,
                                                 "annots": [
                                                   "%XTZ_ARG"
                                                 ]
                                              },
                                              {  "prim": "or",
                                                 "args": [
                                                   {  "prim": "pair",
                                                      "args": [
                                                        {  "prim": "address"  },
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
                                                        "%FA_1_2_ARG"
                                                      ]
                                                   },
                                                   {  "prim": "pair",
                                                      "args": [
                                                        {  "prim": "address"  },
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
                                                        "%FA_2_ARG"
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
                                         {  "prim": "or",
                                            "args": [
                                              {  "prim": "pair",
                                                 "args": [
                                                   {  "prim": "mutez"  },
                                                   {  "prim": "address"  }
                                                 ]
                                                 ,
                                                 "annots": [
                                                   "%XTZ_ARG"
                                                 ]
                                              },
                                              {  "prim": "or",
                                                 "args": [
                                                   {  "prim": "pair",
                                                      "args": [
                                                        {  "prim": "address"  },
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
                                                        "%FA_1_2_ARG"
                                                      ]
                                                   },
                                                   {  "prim": "pair",
                                                      "args": [
                                                        {  "prim": "address"  },
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
                                                        "%FA_2_ARG"
                                                      ]
                                                   }
                                                 ]
                                              }
                                            ]
                                         }
                                       ]
                                    },
                                    {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "int"  },
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "9"  }
                                       ]
                                    },
                                    {  "prim": "COMPARE"  },
                                    {  "prim": "EQ"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "DUP",
                                               "args": [
                                                 {  "int": "25"  }
                                               ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "36"  }
                                            ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "34"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "33"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "32"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "31"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "38"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "36"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "30"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "29"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "28"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "35"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "9"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "14"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "15"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "12"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "13"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "6"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "11"  }
                                            ]
                                         },
                                         {  "prim": "CAR"  },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "20"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "23"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "19"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "CANNOT_UNPACK_FA_1_2_ADDR"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "CANNOT_UNPACK_FA_2_ADDR"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "ASSET_TYPE_UNSUPPORTED"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "ROYALTIES_TOO_HIGH"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "SUM_PAYOUTS_NOT_100_PERCENT"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "EXEC"  },
                                         {  "prim": "DUP"  },
                                         {  "prim": "CAR"  },
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
                                         {  "prim": "DUP"  },
                                         {  "prim": "CDR"  },
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
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "34"  }
                                            ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "37"  }
                                            ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "37"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "14"  }
                                            ]
                                         },
                                         {  "prim": "CAR"  },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "6"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "12"  }
                                            ]
                                         },
                                         {  "prim": "CDR"  },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "15"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "CANNOT_UNPACK_FA_1_2_ADDR"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "CANNOT_UNPACK_FA_2_ADDR"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "ASSET_TYPE_UNSUPPORTED"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "SUM_PAYOUTS_NOT_100_PERCENT"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "EXEC"  },
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
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "1"  }
                                            ]
                                         }  ],
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "int"  },
                                                 {  "int": "2"  }
                                               ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "9"  }
                                            ]
                                         },
                                         {  "prim": "COMPARE"  },
                                         {  "prim": "EQ"  },
                                         {  "prim": "IF",
                                            "args": [
                                              [  {  "prim": "DUP",
                                                    "args": [
                                                      {  "int": "25"  }
                                                    ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "36"  }
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "34"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "33"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "32"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "31"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "38"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "36"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "30"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "29"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "28"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "35"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "9"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "15"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "14"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "13"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "12"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "5"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "11"  }
                                                 ]
                                              },
                                              {  "prim": "CDR"  },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "20"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "23"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "19"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "CANNOT_UNPACK_FA_1_2_ADDR"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "CANNOT_UNPACK_FA_2_ADDR"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "ASSET_TYPE_UNSUPPORTED"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "ROYALTIES_TOO_HIGH"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "SUM_PAYOUTS_NOT_100_PERCENT"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "EXEC"  },
                                              {  "prim": "DUP"  },
                                              {  "prim": "CAR"  },
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
                                              },
                                              {  "prim": "DUP"  },
                                              {  "prim": "CDR"  },
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
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "34"  }
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "37"  }
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "37"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "13"  }
                                                 ]
                                              },
                                              {  "prim": "CAR"  },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "7"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "12"  }
                                                 ]
                                              },
                                              {  "prim": "CAR"  },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "16"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "CANNOT_UNPACK_FA_1_2_ADDR"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "CANNOT_UNPACK_FA_2_ADDR"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "ASSET_TYPE_UNSUPPORTED"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "SUM_PAYOUTS_NOT_100_PERCENT"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "EXEC"  },
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
                                              {  "prim": "DROP",
                                                 "args": [
                                                   {  "int": "1"  }
                                                 ]
                                              }  ],
                                              [  {  "prim": "DUP",
                                                    "args": [
                                                      {  "int": "33"  }
                                                    ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "36"  }
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "36"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "12"  }
                                                 ]
                                              },
                                              {  "prim": "CAR"  },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "6"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "11"  }
                                                 ]
                                              },
                                              {  "prim": "CAR"  },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "15"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "CANNOT_UNPACK_FA_1_2_ADDR"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "CANNOT_UNPACK_FA_2_ADDR"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "ASSET_TYPE_UNSUPPORTED"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "SUM_PAYOUTS_NOT_100_PERCENT"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "EXEC"  },
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
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "33"  }
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "36"  }
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "36"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "13"  }
                                                 ]
                                              },
                                              {  "prim": "CAR"  },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "5"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "11"  }
                                                 ]
                                              },
                                              {  "prim": "CDR"  },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "14"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "CANNOT_UNPACK_FA_1_2_ADDR"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "CANNOT_UNPACK_FA_2_ADDR"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "ASSET_TYPE_UNSUPPORTED"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "string"  },
                                                   {  "string": "SUM_PAYOUTS_NOT_100_PERCENT"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "EXEC"  },
                                              {  "prim": "SWAP"  },
                                              {  "prim": "DROP",
                                                 "args": [
                                                   {  "int": "1"  }
                                                 ]
                                              }  ]
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "NIL",
                                       "args": [
                                         {  "prim": "or",
                                            "args": [
                                              {  "prim": "pair",
                                                 "args": [
                                                   {  "prim": "mutez"  },
                                                   {  "prim": "address"  }
                                                 ]
                                                 ,
                                                 "annots": [
                                                   "%XTZ_ARG"
                                                 ]
                                              },
                                              {  "prim": "or",
                                                 "args": [
                                                   {  "prim": "pair",
                                                      "args": [
                                                        {  "prim": "address"  },
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
                                                        "%FA_1_2_ARG"
                                                      ]
                                                   },
                                                   {  "prim": "pair",
                                                      "args": [
                                                        {  "prim": "address"  },
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
                                                        "%FA_2_ARG"
                                                      ]
                                                   }
                                                 ]
                                              }
                                            ]
                                         }
                                       ]
                                    },
                                    {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "unit"  },
                                         {  "prim": "Unit"  }
                                       ]
                                    },
                                    {  "prim": "LEFT",
                                       "args": [
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
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "15"  }
                                       ]
                                    },
                                    {  "prim": "CAR"  },
                                    {  "prim": "COMPARE"  },
                                    {  "prim": "EQ"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "unit"  },
                                                 {  "prim": "Unit"  }
                                               ]
                                         },
                                         {  "prim": "LEFT",
                                            "args": [
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
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "14"  }
                                            ]
                                         },
                                         {  "prim": "CAR"  },
                                         {  "prim": "COMPARE"  },
                                         {  "prim": "NEQ"  },
                                         {  "prim": "NOT"  },
                                         {  "prim": "IF",
                                            "args": [
                                              [  {  "prim": "PUSH",
                                                    "args": [
                                                      {  "prim": "string"  },
                                                      {  "string": "TAKE_ASSET_IS_NOT_XTZ"  }
                                                    ]
                                              },
                                              {  "prim": "FAILWITH"  }  ],
                                              [    ]
                                            ]
                                         },
                                         {  "prim": "AMOUNT"  },
                                         {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "mutez"  },
                                              {  "int": "1"  }
                                            ]
                                         },
                                         {  "prim": "SWAP"  },
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
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "8"  }
                                            ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "2"  }
                                            ]
                                         },
                                         {  "prim": "COMPARE"  },
                                         {  "prim": "GE"  },
                                         {  "prim": "NOT"  },
                                         {  "prim": "IF",
                                            "args": [
                                              [  {  "prim": "PUSH",
                                                    "args": [
                                                      {  "prim": "string"  },
                                                      {  "string": "NOT_ENOUGH_XTZ"  }
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
                                              {  "int": "2"  }
                                            ]
                                         },
                                         {  "prim": "COMPARE"  },
                                         {  "prim": "GT"  },
                                         {  "prim": "IF",
                                            "args": [
                                              [  {  "prim": "DUP"  },
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
                                                   {  "int": "11"  }
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "4"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "UNPAIR"  },
                                              {  "prim": "SUB"  },
                                              {  "prim": "DUP"  },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "int"  },
                                                   {  "int": "0"  }
                                                 ]
                                              },
                                              {  "prim": "COMPARE"  },
                                              {  "prim": "GT"  },
                                              {  "prim": "IF",
                                                 "args": [
                                                   [  {  "prim": "PUSH",
                                                         "args": [
                                                           {  "prim": "string"  },
                                                           {  "string": "NegResult"  }
                                                         ]
                                                   },
                                                   {  "prim": "FAILWITH"  }  ],
                                                   [    ]
                                                 ]
                                              },
                                              {  "prim": "ABS"  },
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
                                              {  "prim": "NIL",
                                                 "args": [
                                                   {  "prim": "or",
                                                      "args": [
                                                        {  "prim": "pair",
                                                           "args": [
                                                             {  "prim": "mutez"  },
                                                             {  "prim": "address"  }
                                                           ]
                                                           ,
                                                           "annots": [
                                                             "%XTZ_ARG"
                                                           ]
                                                        },
                                                        {  "prim": "or",
                                                           "args": [
                                                             {  "prim": "pair",
                                                                "args": [
                                                                  {  "prim": "address"  },
                                                                  {
                                                                  "prim": "pair",
                                                                  "args": [
                                                                    {  "prim": "address"  },
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
                                                                ,
                                                                "annots": [
                                                                  "%FA_1_2_ARG"
                                                                ]
                                                             },
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
                                                                  "%FA_2_ARG"
                                                                ]
                                                             }
                                                           ]
                                                        }
                                                      ]
                                                   }
                                                 ]
                                              },
                                              {  "prim": "SOURCE"  },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "3"  }
                                                 ]
                                              },
                                              {  "prim": "PAIR"  },
                                              {  "prim": "LEFT",
                                                 "args": [
                                                   {  "prim": "or",
                                                      "args": [
                                                        {  "prim": "pair",
                                                           "args": [
                                                             {  "prim": "address"  },
                                                             {  "prim": "pair",
                                                                "args": [
                                                                  {  "prim": "address"  },
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
                                                        },
                                                        {  "prim": "pair",
                                                           "args": [
                                                             {  "prim": "address"  },
                                                             {  "prim": "list",
                                                                "args": [
                                                                  {
                                                                  "prim": "pair",
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
                                                        }
                                                      ]
                                                   }
                                                 ]
                                              },
                                              {  "prim": "CONS"  },
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
                                                   {  "int": "2"  }
                                                 ]
                                              }  ],
                                              [    ]
                                            ]
                                         },
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "1"  }
                                            ]
                                         }  ],
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "unit"  },
                                                 {  "prim": "Unit"  }
                                               ]
                                         },
                                         {  "prim": "LEFT",
                                            "args": [
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
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "14"  }
                                            ]
                                         },
                                         {  "prim": "CAR"  },
                                         {  "prim": "COMPARE"  },
                                         {  "prim": "EQ"  },
                                         {  "prim": "IF",
                                            "args": [
                                              [  {  "prim": "AMOUNT"  },
                                              {  "prim": "PUSH",
                                                 "args": [
                                                   {  "prim": "mutez"  },
                                                   {  "int": "1"  }
                                                 ]
                                              },
                                              {  "prim": "SWAP"  },
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
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "7"  }
                                                 ]
                                              },
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "2"  }
                                                 ]
                                              },
                                              {  "prim": "COMPARE"  },
                                              {  "prim": "GE"  },
                                              {  "prim": "NOT"  },
                                              {  "prim": "IF",
                                                 "args": [
                                                   [  {  "prim": "PUSH",
                                                         "args": [
                                                           {  "prim": "string"  },
                                                           {  "string": "NOT_ENOUGH_XTZ"  }
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
                                              {  "prim": "DUP",
                                                 "args": [
                                                   {  "int": "2"  }
                                                 ]
                                              },
                                              {  "prim": "COMPARE"  },
                                              {  "prim": "GT"  },
                                              {  "prim": "IF",
                                                 "args": [
                                                   [  {  "prim": "DUP"  },
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
                                                        {  "int": "10"  }
                                                      ]
                                                   },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "4"  }
                                                      ]
                                                   },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "UNPAIR"  },
                                                   {  "prim": "SUB"  },
                                                   {  "prim": "DUP"  },
                                                   {  "prim": "PUSH",
                                                      "args": [
                                                        {  "prim": "int"  },
                                                        {  "int": "0"  }
                                                      ]
                                                   },
                                                   {  "prim": "COMPARE"  },
                                                   {  "prim": "GT"  },
                                                   {  "prim": "IF",
                                                      "args": [
                                                        [  {  "prim": "PUSH",
                                                              "args": [
                                                                {  "prim": "string"  },
                                                                {  "string": "NegResult"  }
                                                              ]
                                                        },
                                                        {  "prim": "FAILWITH"  }  ],
                                                        [    ]
                                                      ]
                                                   },
                                                   {  "prim": "ABS"  },
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
                                                   {  "prim": "NIL",
                                                      "args": [
                                                        {  "prim": "or",
                                                           "args": [
                                                             {  "prim": "pair",
                                                                "args": [
                                                                  {  "prim": "mutez"  },
                                                                  {  "prim": "address"  }
                                                                ]
                                                                ,
                                                                "annots": [
                                                                  "%XTZ_ARG"
                                                                ]
                                                             },
                                                             {  "prim": "or",
                                                                "args": [
                                                                  {
                                                                  "prim": "pair",
                                                                  "args": [
                                                                    {  "prim": "address"  },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {  "prim": "address"  },
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
                                                                  ,
                                                                  "annots": [
                                                                    "%FA_1_2_ARG"
                                                                  ]
                                                                  },
                                                                  {
                                                                  "prim": "pair",
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
                                                                    "%FA_2_ARG"
                                                                  ]
                                                                  }
                                                                ]
                                                             }
                                                           ]
                                                        }
                                                      ]
                                                   },
                                                   {  "prim": "SOURCE"  },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "3"  }
                                                      ]
                                                   },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "LEFT",
                                                      "args": [
                                                        {  "prim": "or",
                                                           "args": [
                                                             {  "prim": "pair",
                                                                "args": [
                                                                  {  "prim": "address"  },
                                                                  {
                                                                  "prim": "pair",
                                                                  "args": [
                                                                    {  "prim": "address"  },
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
                                                             },
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
                                                             }
                                                           ]
                                                        }
                                                      ]
                                                   },
                                                   {  "prim": "CONS"  },
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
                                                        {  "int": "2"  }
                                                      ]
                                                   }  ],
                                                   [    ]
                                                 ]
                                              },
                                              {  "prim": "DROP",
                                                 "args": [
                                                   {  "int": "1"  }
                                                 ]
                                              }  ],
                                              [    ]
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "DUP"  },
                                    {  "prim": "NIL",
                                       "args": [
                                         {  "prim": "or",
                                            "args": [
                                              {  "prim": "pair",
                                                 "args": [
                                                   {  "prim": "mutez"  },
                                                   {  "prim": "address"  }
                                                 ]
                                                 ,
                                                 "annots": [
                                                   "%XTZ_ARG"
                                                 ]
                                              },
                                              {  "prim": "or",
                                                 "args": [
                                                   {  "prim": "pair",
                                                      "args": [
                                                        {  "prim": "address"  },
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
                                                        "%FA_1_2_ARG"
                                                      ]
                                                   },
                                                   {  "prim": "pair",
                                                      "args": [
                                                        {  "prim": "address"  },
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
                                                        "%FA_2_ARG"
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
                                         {  "int": "4"  }
                                       ]
                                    },
                                    {  "prim": "ITER",
                                       "args": [
                                         [  {  "prim": "DUP",
                                               "args": [
                                                 {  "int": "2"  }
                                               ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "2"  }
                                            ]
                                         },
                                         {  "prim": "CONS"  },
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
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "1"  }
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "ITER",
                                       "args": [
                                         [  {  "prim": "DUP",
                                               "args": [
                                                 {  "int": "2"  }
                                               ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "2"  }
                                            ]
                                         },
                                         {  "prim": "CONS"  },
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
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "1"  }
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "NIL",
                                       "args": [
                                         {  "prim": "or",
                                            "args": [
                                              {  "prim": "pair",
                                                 "args": [
                                                   {  "prim": "mutez"  },
                                                   {  "prim": "address"  }
                                                 ]
                                                 ,
                                                 "annots": [
                                                   "%XTZ_ARG"
                                                 ]
                                              },
                                              {  "prim": "or",
                                                 "args": [
                                                   {  "prim": "pair",
                                                      "args": [
                                                        {  "prim": "address"  },
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
                                                        "%FA_1_2_ARG"
                                                      ]
                                                   },
                                                   {  "prim": "pair",
                                                      "args": [
                                                        {  "prim": "address"  },
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
                                                        "%FA_2_ARG"
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
                                         {  "int": "5"  }
                                       ]
                                    },
                                    {  "prim": "ITER",
                                       "args": [
                                         [  {  "prim": "DUP",
                                               "args": [
                                                 {  "int": "2"  }
                                               ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "2"  }
                                            ]
                                         },
                                         {  "prim": "CONS"  },
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
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "1"  }
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "ITER",
                                       "args": [
                                         [  {  "prim": "DUP",
                                               "args": [
                                                 {  "int": "2"  }
                                               ]
                                         },
                                         {  "prim": "DUP",
                                            "args": [
                                              {  "int": "2"  }
                                            ]
                                         },
                                         {  "prim": "CONS"  },
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
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "1"  }
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "LAMBDA",
                                       "args": [
                                         {  "prim": "pair",
                                            "args": [
                                              {  "prim": "list",
                                                 "args": [
                                                   {  "prim": "or",
                                                      "args": [
                                                        {  "prim": "pair",
                                                           "args": [
                                                             {  "prim": "mutez"  },
                                                             {  "prim": "address"  }
                                                           ]
                                                           ,
                                                           "annots": [
                                                             "%XTZ_ARG"
                                                           ]
                                                        },
                                                        {  "prim": "or",
                                                           "args": [
                                                             {  "prim": "pair",
                                                                "args": [
                                                                  {  "prim": "address"  },
                                                                  {
                                                                  "prim": "pair",
                                                                  "args": [
                                                                    {  "prim": "address"  },
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
                                                                ,
                                                                "annots": [
                                                                  "%FA_1_2_ARG"
                                                                ]
                                                             },
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
                                                                  "%FA_2_ARG"
                                                                ]
                                                             }
                                                           ]
                                                        }
                                                      ]
                                                   }
                                                 ]
                                              },
                                              {  "prim": "unit"  }
                                            ]
                                         },
                                         {  "prim": "list",
                                            "args": [
                                              {  "prim": "operation"  }
                                            ]
                                         },
                                         [  {  "prim": "DUP"  },
                                         {  "prim": "CAR"  },
                                         {  "prim": "NIL",
                                            "args": [
                                              {  "prim": "operation"  }
                                            ]
                                         },
                                         {  "prim": "PAIR"  },
                                         {  "prim": "LEFT",
                                            "args": [
                                              {  "prim": "list",
                                                 "args": [
                                                   {  "prim": "operation"  }
                                                 ]
                                              }
                                            ]
                                         },
                                         {  "prim": "LOOP_LEFT",
                                            "args": [
                                              [  {  "prim": "DUP"  },
                                              {  "prim": "CDR"  },
                                              {  "prim": "IF_CONS",
                                                 "args": [
                                                   [  {  "prim": "DUP",
                                                         "args": [
                                                           {  "int": "2"  }
                                                         ]
                                                   },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "4"  }
                                                      ]
                                                   },
                                                   {  "prim": "CAR"  },
                                                   {  "prim": "DUP",
                                                      "args": [
                                                        {  "int": "3"  }
                                                      ]
                                                   },
                                                   {  "prim": "IF_LEFT",
                                                      "args": [
                                                        [  {  "prim": "DUP"  },
                                                        {  "prim": "CAR"  },
                                                        {  "prim": "DUP",
                                                           "args": [
                                                             {  "int": "2"  }
                                                           ]
                                                        },
                                                        {  "prim": "CDR"  },
                                                        {  "prim": "DUP"  },
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
                                                                   {  "string": "NotImplicitContract"  }
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
                                                        {  "prim": "PUSH",
                                                           "args": [
                                                             {  "prim": "unit"  },
                                                             {  "prim": "Unit"  }
                                                           ]
                                                        },
                                                        {  "prim": "TRANSFER_TOKENS"  },
                                                        {  "prim": "DIP",
                                                           "args": [
                                                             {  "int": "1"  },
                                                             [  {  "prim": "DROP",
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

                                                                   {  "int": "1"  }
                                                                   ]
                                                             }  ]
                                                           ]
                                                        },
                                                        {  "prim": "SWAP"  },
                                                        {  "prim": "DROP",
                                                           "args": [
                                                             {  "int": "1"  }
                                                           ]
                                                        }  ],
                                                        [  {  "prim": "DUP"  },
                                                        {  "prim": "IF_LEFT",
                                                           "args": [
                                                             [  {  "prim": "DUP"  },
                                                             {  "prim": "CAR"  },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "2"  }
                                                                ]
                                                             },
                                                             {  "prim": "CDR"  },
                                                             {  "prim": "CAR"  },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "3"  }
                                                                ]
                                                             },
                                                             {  "prim": "CDR"  },
                                                             {  "prim": "CDR"  },
                                                             {  "prim": "CAR"  },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "4"  }
                                                                ]
                                                             },
                                                             {  "prim": "CDR"  },
                                                             {  "prim": "CDR"  },
                                                             {  "prim": "CDR"  },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "4"  }
                                                                ]
                                                             },
                                                             {  "prim": "CONTRACT",
                                                                "args": [
                                                                  {
                                                                  "prim": "pair",
                                                                  "args": [
                                                                    {  "prim": "address"  },
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
                                                                ,
                                                                "annots": [
                                                                  "%transfer"
                                                                ]
                                                             },
                                                             {  "prim": "IF_NONE",
                                                                "args": [
                                                                  [  {
                                                                  "prim": "PUSH",
                                                                  "args": [
                                                                    {  "prim": "string"  },
                                                                    {  "string": "entry transfer FA_2 not found"  }
                                                                  ]
                                                                  },
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
                                                                  {  "int": "3"  }
                                                                ]
                                                             },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "5"  }
                                                                ]
                                                             },
                                                             {  "prim": "PAIR"  },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "6"  }
                                                                ]
                                                             },
                                                             {  "prim": "PAIR"  },
                                                             {  "prim": "TRANSFER_TOKENS"  },
                                                             {  "prim": "DIP",
                                                                "args": [
                                                                  {  "int": "1"  },
                                                                  [  {
                                                                  "prim": "DROP",
                                                                  "args": [
                                                                    {  "int": "1"  }
                                                                  ]
                                                                  }  ]
                                                                ]
                                                             },
                                                             {  "prim": "DIP",
                                                                "args": [
                                                                  {  "int": "1"  },
                                                                  [  {
                                                                  "prim": "DROP",
                                                                  "args": [
                                                                    {  "int": "1"  }
                                                                  ]
                                                                  }  ]
                                                                ]
                                                             },
                                                             {  "prim": "DIP",
                                                                "args": [
                                                                  {  "int": "1"  },
                                                                  [  {
                                                                  "prim": "DROP",
                                                                  "args": [
                                                                    {  "int": "1"  }
                                                                  ]
                                                                  }  ]
                                                                ]
                                                             },
                                                             {  "prim": "DIP",
                                                                "args": [
                                                                  {  "int": "1"  },
                                                                  [  {
                                                                  "prim": "DROP",
                                                                  "args": [
                                                                    {  "int": "1"  }
                                                                  ]
                                                                  }  ]
                                                                ]
                                                             },
                                                             {  "prim": "SWAP"  },
                                                             {  "prim": "DROP",
                                                                "args": [
                                                                  {  "int": "1"  }
                                                                ]
                                                             }  ],
                                                             [  {  "prim": "DUP"  },
                                                             {  "prim": "CAR"  },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "2"  }
                                                                ]
                                                             },
                                                             {  "prim": "CDR"  },
                                                             {  "prim": "DUP",
                                                                "args": [
                                                                  {  "int": "2"  }
                                                                ]
                                                             },
                                                             {  "prim": "CONTRACT",
                                                                "args": [
                                                                  {
                                                                  "prim": "list",
                                                                  "args": [
                                                                    {
                                                                    "prim": "pair",
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
                                                                  [  {
                                                                  "prim": "PUSH",
                                                                  "args": [
                                                                    {  "prim": "string"  },
                                                                    {  "string": "entry transfer FA_2 not found"  }
                                                                  ]
                                                                  },
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
                                                                  {  "int": "3"  }
                                                                ]
                                                             },
                                                             {  "prim": "TRANSFER_TOKENS"  },
                                                             {  "prim": "DIP",
                                                                "args": [
                                                                  {  "int": "1"  },
                                                                  [  {
                                                                  "prim": "DROP",
                                                                  "args": [
                                                                    {  "int": "1"  }
                                                                  ]
                                                                  }  ]
                                                                ]
                                                             },
                                                             {  "prim": "DIP",
                                                                "args": [
                                                                  {  "int": "1"  },
                                                                  [  {
                                                                  "prim": "DROP",
                                                                  "args": [
                                                                    {  "int": "1"  }
                                                                  ]
                                                                  }  ]
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
                                                        {  "prim": "SWAP"  },
                                                        {  "prim": "DROP",
                                                           "args": [
                                                             {  "int": "1"  }
                                                           ]
                                                        }  ]
                                                      ]
                                                   },
                                                   {  "prim": "CONS"  },
                                                   {  "prim": "PAIR"  },
                                                   {  "prim": "LEFT",
                                                      "args": [
                                                        {  "prim": "list",
                                                           "args": [
                                                             {  "prim": "operation"  }
                                                           ]
                                                        }
                                                      ]
                                                   },
                                                   {  "prim": "DUG",
                                                      "args": [
                                                        {  "int": "2"  }
                                                      ]
                                                   },
                                                   {  "prim": "DROP",
                                                      "args": [
                                                        {  "int": "2"  }
                                                      ]
                                                   }  ],
                                                   [  {  "prim": "DUP"  },
                                                   {  "prim": "CAR"  },
                                                   {  "prim": "RIGHT",
                                                      "args": [
                                                        {  "prim": "pair",
                                                           "args": [
                                                             {  "prim": "list",
                                                                "args": [
                                                                  {  "prim": "operation"  }
                                                                ]
                                                             },
                                                             {  "prim": "list",
                                                                "args": [
                                                                  {
                                                                  "prim": "or",
                                                                  "args": [
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {  "prim": "mutez"  },
                                                                    {  "prim": "address"  }
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "or",
                                                                    "args": [

                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {  "prim": "address"  },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {  "prim": "address"  },
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
                                                                    },
                                                                    {
                                                                    "prim": "pair",
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
                                                   }  ]
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
                                         {  "prim": "SWAP"  },
                                         {  "prim": "DROP",
                                            "args": [
                                              {  "int": "1"  }
                                            ]
                                         }  ]
                                       ]
                                    },
                                    {  "prim": "DUP"  },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "3"  }
                                       ]
                                    },
                                    {  "prim": "APPLY"  },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "28"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "27"  }
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
                                    {  "prim": "CONTRACT",
                                       "args": [
                                         {  "prim": "lambda",
                                            "args": [
                                              {  "prim": "unit"  },
                                              {  "prim": "list",
                                                 "args": [
                                                   {  "prim": "operation"  }
                                                 ]
                                              }
                                            ]
                                         }
                                       ]
                                       ,
                                       "annots": [
                                         "%do_transfers"
                                       ]
                                    },
                                    {  "prim": "IF_NONE",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "do_transfers"  }
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
                                    {  "prim": "AMOUNT"  },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "4"  }
                                       ]
                                    },
                                    {  "prim": "TRANSFER_TOKENS"  },
                                    {  "prim": "CONS"  },
                                    {  "prim": "DIP",
                                       "args": [
                                         {  "int": "1"  },
                                         [  {  "prim": "DIG",
                                               "args": [
                                                 {  "int": "27"  }
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
                                         {  "int": "27"  }
                                       ]
                                    },
                                    {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "nat"  },
                                         {  "int": "0"  }
                                       ]
                                    },
                                    {  "prim": "DUP",
                                       "args": [
                                         {  "int": "29"  }
                                       ]
                                    },
                                    {  "prim": "SIZE"  },
                                    {  "prim": "COMPARE"  },
                                    {  "prim": "GT"  },
                                    {  "prim": "NOT"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "NO_OPERATION_TO_SEND"  }
                                               ]
                                         },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "DROP",
                                       "args": [
                                         {  "int": "19"  }
                                       ]
                                    },
                                    {  "prim": "PAIR",
                                       "args": [
                                         {  "int": "8"  }
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
       },
       {  "prim": "DIP",
          "args": [
            {  "int": "1"  },
            [  {  "prim": "DROP",
                  "args": [
                    {  "int": "12"  }
                  ]
            }  ]
          ]
       }  ]
     ]
  }  ]

export function transfer_manager_storage(owner: string, default_fee_receiver: string, protocol_fee: BigNumber) : any {
  return {  "prim": "Pair",
            "args": [
              {  "string": owner  },
              {  "prim": "Pair",
                 "args": [
                   {  "string": default_fee_receiver  },
                   {  "prim": "Pair",
                      "args": [
                        {"int": protocol_fee.toString()},
                        {  "prim": "Pair",
                           "args": [
                             {  "prim": "None"  },
                             {  "prim": "Pair",
                                "args": [
                                  [    ],
                                  {  "prim": "Pair",
                                     "args": [
                                       [    ],
                                       {  "prim": "Pair",
                                          "args": [
                                            {  "prim": "None"  },
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
                 ]
              }
            ]
         }
}

export async function deploy_transfer_manager(
  provider: Provider,
  owner: string,
  default_fee_receiver: string,
  protocol_fee: BigNumber) : Promise<DeployResult> {
  const init = transfer_manager_storage(owner, default_fee_receiver, protocol_fee)
  return provider.tezos.originate({init, code: transfer_manager_code})
}
