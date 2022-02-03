import { Provider, DeployResult } from "@rarible/tezos-common"

export const exchange_code : any =
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
                         "%transfer_manager"
                       ]
                    },
                    {  "prim": "pair",
                       "args": [
                         {  "prim": "address",
                            "annots": [
                              "%royalties"
                            ]
                         },
                         {  "prim": "pair",
                            "args": [
                              {  "prim": "address",
                                 "annots": [
                                   "%fill"
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
                                        {  "prim": "bool",
                                           "annots": [
                                             "%paused"
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
  },
  {  "prim": "parameter",
     "args": [
       {  "prim": "or",
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
                                "%set_transfer_manager"
                              ]
                           },
                           {  "prim": "address",
                              "annots": [
                                "%set_royalties"
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
                           {  "prim": "bytes",
                              "annots": [
                                "%set_metadata_uri"
                              ]
                           },
                           {  "prim": "unit",
                              "annots": [
                                "%pause"
                              ]
                           }
                         ]
                      },
                      {  "prim": "or",
                         "args": [
                           {  "prim": "unit",
                              "annots": [
                                "%unpause"
                              ]
                           },
                           {  "prim": "address",
                              "annots": [
                                "%set_fill"
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
                 {  "prim": "or",
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
                                                         {  "prim": "option",
                                                            "args": [
                                                              {  "prim": "timestamp"  }
                                                            ]
                                                            ,
                                                            "annots": [
                                                              "%end"
                                                            ]
                                                         },
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "bytes",
                                                                 "annots": [
                                                                   "%data_type"
                                                                 ]
                                                              },
                                                              {  "prim": "bytes",
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
                           "%cancel"
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
                                                              {  "prim": "option",
                                                                 "args": [
                                                                   {  "prim": "timestamp"  }
                                                                 ]
                                                                 ,
                                                                 "annots": [
                                                                   "%end"
                                                                 ]
                                                              },
                                                              {  "prim": "pair",
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
                                     "%order_right"
                                   ]
                                },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "option",
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
                                          }
                                        ]
                                        ,
                                        "annots": [
                                          "%imake_match"
                                        ]
                                     },
                                     {  "prim": "option",
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
                                          }
                                        ]
                                        ,
                                        "annots": [
                                          "%itake_match"
                                        ]
                                     }
                                   ]
                                }
                              ]
                           }
                         ]
                         ,
                         "annots": [
                           "%match_and_transfer"
                         ]
                      }
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
                                                         {  "prim": "option",
                                                            "args": [
                                                              {  "prim": "timestamp"  }
                                                            ]
                                                            ,
                                                            "annots": [
                                                              "%end"
                                                            ]
                                                         },
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "bytes",
                                                                 "annots": [
                                                                   "%data_type"
                                                                 ]
                                                              },
                                                              {  "prim": "bytes",
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
                           {  "prim": "option",
                              "args": [
                                {  "prim": "signature"  }
                              ]
                              ,
                              "annots": [
                                "%signature_left"
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
                                     "%order_right"
                                   ]
                                },
                                {  "prim": "option",
                                   "args": [
                                     {  "prim": "signature"  }
                                   ]
                                   ,
                                   "annots": [
                                     "%signature_right"
                                   ]
                                }
                              ]
                           }
                         ]
                      }
                    ]
                    ,
                    "annots": [
                      "%match_orders"
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
                    {  "prim": "string"  },
                    {  "prim": "bool"  }
                  ]
               },
               {  "prim": "bool"  },
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
               {  "prim": "NOT"  },
               {  "prim": "IF",
                  "args": [
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
                    }  ],
                    [  {  "prim": "PUSH",
                          "args": [
                            {  "prim": "string"  },
                            {  "string": "CONTRACT_PAUSED"  }
                          ]
                    },
                    {  "prim": "FAILWITH"  }  ]
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
                 {  "prim": "bytes"  },
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
                                                    {  "prim": "option",
                                                       "args": [
                                                         {  "prim": "timestamp"  }
                                                       ]
                                                       ,
                                                       "annots": [
                                                         "%end"
                                                       ]
                                                    },
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "bytes",
                                                            "annots": [
                                                              "%data_type"
                                                            ]
                                                         },
                                                         {  "prim": "bytes",
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
                 }
               ]
            },
            {  "prim": "bytes"  },
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
                 {  "prim": "string"  },
                 {  "string": "V2"  }
               ]
            },
            {  "prim": "PACK"  },
            {  "prim": "KECCAK"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "4"  }
               ]
            },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CAR"  },
            {  "prim": "COMPARE"  },
            {  "prim": "EQ"  },
            {  "prim": "IF",
               "args": [
                 [  {  "prim": "NIL",
                       "args": [
                         {  "prim": "bytes"  }
                       ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "4"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "PACK"  },
                 {  "prim": "CONS"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "4"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CAR"  },
                 {  "prim": "PACK"  },
                 {  "prim": "CONS"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "4"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CAR"  },
                 {  "prim": "CAR"  },
                 {  "prim": "PACK"  },
                 {  "prim": "KECCAK"  },
                 {  "prim": "CONS"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "4"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "CAR"  },
                 {  "prim": "CAR"  },
                 {  "prim": "PACK"  },
                 {  "prim": "KECCAK"  },
                 {  "prim": "CONS"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "4"  }
                    ]
                 },
                 {  "prim": "CAR"  },
                 {  "prim": "PACK"  },
                 {  "prim": "CONS"  },
                 {  "prim": "CONCAT"  },
                 {  "prim": "KECCAK"  },
                 {  "prim": "SWAP"  },
                 {  "prim": "DROP",
                    "args": [
                      {  "int": "1"  }
                    ]
                 }  ],
                 [  {  "prim": "NIL",
                       "args": [
                         {  "prim": "bytes"  }
                       ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "4"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CAR"  },
                 {  "prim": "PACK"  },
                 {  "prim": "CONS"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "4"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CAR"  },
                 {  "prim": "CAR"  },
                 {  "prim": "PACK"  },
                 {  "prim": "KECCAK"  },
                 {  "prim": "CONS"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "4"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "CAR"  },
                 {  "prim": "CAR"  },
                 {  "prim": "PACK"  },
                 {  "prim": "KECCAK"  },
                 {  "prim": "CONS"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "4"  }
                    ]
                 },
                 {  "prim": "CAR"  },
                 {  "prim": "PACK"  },
                 {  "prim": "CONS"  },
                 {  "prim": "CONCAT"  },
                 {  "prim": "KECCAK"  },
                 {  "prim": "SWAP"  },
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
                           {  "prim": "nat"  },
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
            },
            {  "prim": "nat"  },
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
                 {  "int": "6"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "5"  }
               ]
            },
            {  "prim": "MUL"  },
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
            {  "prim": "EDIV"  },
            {  "prim": "IF_NONE",
               "args": [
                 [  {  "prim": "PUSH",
                       "args": [
                         {  "prim": "string"  },
                         {  "string": "DIVISION_BY_ZERO"  }
                       ]
                 },
                 {  "prim": "FAILWITH"  }  ],
                 [  {  "prim": "PUSH",
                       "args": [
                         {  "prim": "nat"  },
                         {  "int": "0"  }
                       ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "3"  }
                    ]
                 },
                 {  "prim": "COMPARE"  },
                 {  "prim": "NEQ"  },
                 {  "prim": "IF",
                    "args": [
                      [  {  "prim": "DUP",
                            "args": [
                              {  "int": "2"  }
                            ]
                      },
                      {  "prim": "PUSH",
                         "args": [
                           {  "prim": "nat"  },
                           {  "int": "1000"  }
                         ]
                      },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "3"  }
                         ]
                      },
                      {  "prim": "CDR"  },
                      {  "prim": "MUL"  },
                      {  "prim": "COMPARE"  },
                      {  "prim": "GE"  },
                      {  "prim": "IF",
                         "args": [
                           [  {  "prim": "PUSH",
                                 "args": [
                                   {  "prim": "string"  },
                                   {  "string": "ROUNDING_ERROR"  }
                                 ]
                           },
                           {  "prim": "FAILWITH"  }  ],
                           [    ]
                         ]
                      }  ],
                      [    ]
                    ]
                 },
                 {  "prim": "DUP"  },
                 {  "prim": "CAR"  },
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
                 }  ]
               ]
            },
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
                                },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "nat"  },
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "bool"  },
                                          {  "prim": "lambda",
                                             "args": [
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "string"  },
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "string"  },
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "nat"  },
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
            },
            {  "prim": "pair",
               "args": [
                 {  "prim": "nat"  },
                 {  "prim": "nat"  }
               ]
            },
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "7"  }
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
                 {  "int": "7"  }
               ]
            },
            {  "prim": "NOT"  },
            {  "prim": "IF",
               "args": [
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "6"  }
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
                 {  "prim": "CDR"  },
                 {  "prim": "COMPARE"  },
                 {  "prim": "LT"  },
                 {  "prim": "IF",
                    "args": [
                      [  {  "prim": "DUP",
                            "args": [
                              {  "int": "6"  }
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
                      {  "prim": "CDR"  },
                      {  "prim": "PAIR"  },
                      {  "prim": "PUSH",
                         "args": [
                           {  "prim": "string"  },
                           {  "string": "CALCULATE_REMAINING_FAILED"  }
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
                      {  "int": "6"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CAR"  },
                 {  "prim": "CDR"  },
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
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "8"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CAR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "PAIR"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "8"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "CAR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "PAIR"  },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "string"  },
                      {  "string": "ROUNDING_ERROR"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "string"  },
                      {  "string": "DIVISION_BY_ZERO"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "EXEC"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "2"  }
                    ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "2"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
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
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "6"  }
                       ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "6"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "CAR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "COMPARE"  },
                 {  "prim": "LT"  },
                 {  "prim": "IF",
                    "args": [
                      [  {  "prim": "DUP",
                            "args": [
                              {  "int": "6"  }
                            ]
                      },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "6"  }
                         ]
                      },
                      {  "prim": "CDR"  },
                      {  "prim": "CAR"  },
                      {  "prim": "CDR"  },
                      {  "prim": "PAIR"  },
                      {  "prim": "PUSH",
                         "args": [
                           {  "prim": "string"  },
                           {  "string": "CALCULATE_REMAINING_FAILED"  }
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
                      {  "int": "6"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "CAR"  },
                 {  "prim": "CDR"  },
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
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "8"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "CAR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "PAIR"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "8"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CAR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "PAIR"  },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "string"  },
                      {  "string": "ROUNDING_ERROR"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "string"  },
                      {  "string": "DIVISION_BY_ZERO"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "EXEC"  },
                 {  "prim": "DUP"  },
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
                 {  "int": "7"  }
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
                                {  "prim": "nat"  },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "nat"  },
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "nat"  },
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "nat"  },
                                               {  "prim": "lambda",
                                                  "args": [
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "string"  },
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "string"  },
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {  "prim": "nat"  },
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
            },
            {  "prim": "pair",
               "args": [
                 {  "prim": "nat",
                    "annots": [
                      "%make_value"
                    ]
                 },
                 {  "prim": "nat",
                    "annots": [
                      "%take_value"
                    ]
                 }
               ]
            },
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "8"  }
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
                 {  "int": "9"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "9"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "9"  }
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
                 {  "string": "ROUNDING_ERROR"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "DIVISION_BY_ZERO"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "EXEC"  },
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
            {  "prim": "COMPARE"  },
            {  "prim": "LE"  },
            {  "prim": "NOT"  },
            {  "prim": "IF",
               "args": [
                 [  {  "prim": "PUSH",
                       "args": [
                         {  "prim": "string"  },
                         {  "string": "CANNOT_FILL_LEFT"  }
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
                 {  "int": "7"  }
               ]
            },
            {  "prim": "PAIR"  },
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
                 {  "int": "8"  }
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "8"  }
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
                                {  "prim": "nat"  },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "nat"  },
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "nat"  },
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "nat"  },
                                               {  "prim": "lambda",
                                                  "args": [
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "string"  },
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "string"  },
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {  "prim": "nat"  },
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
            },
            {  "prim": "pair",
               "args": [
                 {  "prim": "nat",
                    "annots": [
                      "%make_value"
                    ]
                 },
                 {  "prim": "nat",
                    "annots": [
                      "%take_value"
                    ]
                 }
               ]
            },
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "8"  }
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
                 {  "int": "9"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "7"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "7"  }
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
                 {  "string": "ROUNDING_ERROR"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "DIVISION_BY_ZERO"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "EXEC"  },
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
            {  "prim": "LE"  },
            {  "prim": "NOT"  },
            {  "prim": "IF",
               "args": [
                 [  {  "prim": "PUSH",
                       "args": [
                         {  "prim": "string"  },
                         {  "string": "CANNOT_FILL_RIGHT"  }
                       ]
                 },
                 {  "prim": "FAILWITH"  }  ],
                 [    ]
               ]
            },
            {  "prim": "DUP"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "10"  }
               ]
            },
            {  "prim": "PAIR"  },
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
                 {  "int": "8"  }
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "8"  }
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
                                                                 ,
                                                                 "annots": [
                                                                   "%take_asset"
                                                                 ]
                                                              },
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [
                                                                     "%salt"
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
                                                                   ,
                                                                   "annots": [

                                                                   "%take_asset"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [
                                                                     "%salt"
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
                                               },
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "nat"  },
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "nat"  },
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "bool"  },
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {  "prim": "bool"  },
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

                                                                   {  "prim": "nat"  },
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
                                                                   },
                                                                   {
                                                                   "prim": "pair",
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

                                                                   {  "prim": "nat"  },
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
                                                                   },
                                                                   {
                                                                   "prim": "pair",
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
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "key"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [
                                                                     "%maker"
                                                                   ]
                                                                   },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%make_asset"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "key"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [
                                                                     "%taker"
                                                                   ]
                                                                   },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%take_asset"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [
                                                                     "%salt"
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
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "bool"  },
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

                                                                   {  "prim": "nat"  },
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

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
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
                 {  "prim": "nat",
                    "annots": [
                      "%make_value"
                    ]
                 },
                 {  "prim": "nat",
                    "annots": [
                      "%take_value"
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
                 {  "int": "15"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "17"  }
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
                 {  "int": "11"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "9"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "CALCULATE_REMAINING_FAILED"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "ROUNDING_ERROR"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "DIVISION_BY_ZERO"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "EXEC"  },
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
                 {  "int": "15"  }
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
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "CALCULATE_REMAINING_FAILED"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "ROUNDING_ERROR"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "DIVISION_BY_ZERO"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "EXEC"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "2"  }
               ]
            },
            {  "prim": "CAR"  },
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
            {  "prim": "CAR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "4"  }
               ]
            },
            {  "prim": "CDR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "4"  }
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
                         {  "int": "20"  }
                       ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "23"  }
                    ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "16"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CAR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "PAIR"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "16"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "CAR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "PAIR"  },
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
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "string"  },
                      {  "string": "ROUNDING_ERROR"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "string"  },
                      {  "string": "DIVISION_BY_ZERO"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "string"  },
                      {  "string": "CANNOT_FILL_LEFT"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "EXEC"  }  ],
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "19"  }
                       ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "23"  }
                    ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "3"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "4"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "15"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CAR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "PAIR"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "15"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "CAR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "PAIR"  },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "string"  },
                      {  "string": "ROUNDING_ERROR"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "string"  },
                      {  "string": "DIVISION_BY_ZERO"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "string"  },
                      {  "string": "CANNOT_FILL_RIGHT"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "EXEC"  }  ]
               ]
            },
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
                 {  "int": "6"  }
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
                           {  "prim": "address"  },
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
                                },
                                {  "prim": "bytes"  }
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
                    {  "int": "5"  }
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
                 {  "int": "5"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "8"  }
               ]
            },
            {  "prim": "VIEW",
               "args": [
                 {  "string": "contains"  },
                 {  "prim": "bool"  }
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
                 [    ]
               ]
            },
            {  "prim": "DUP"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "nat"  },
                 {  "int": "0"  }
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
            {  "prim": "CDR"  },
            {  "prim": "CAR"  },
            {  "prim": "COMPARE"  },
            {  "prim": "NEQ"  },
            {  "prim": "AND"  },
            {  "prim": "IF",
               "args": [
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "6"  }
                       ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "9"  }
                    ]
                 },
                 {  "prim": "VIEW",
                    "args": [
                      {  "string": "get"  },
                      {  "prim": "option",
                         "args": [
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
                              {  "string": "INVALID_FILL"  }
                            ]
                      },
                      {  "prim": "FAILWITH"  }  ],
                      [  {  "prim": "DUP"  },
                      {  "prim": "IF_NONE",
                         "args": [
                           [  {  "prim": "PUSH",
                                 "args": [
                                   {  "prim": "string"  },
                                   {  "string": "ORDER_CANCELED"  }
                                 ]
                           },
                           {  "prim": "FAILWITH"  }  ],
                           [  {  "prim": "DUP"  },
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
                           }  ]
                         ]
                      },
                      {  "prim": "DROP",
                         "args": [
                           {  "int": "1"  }
                         ]
                      }  ]
                    ]
                 }  ],
                 [    ]
               ]
            },
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
                 },
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
                 }
               ]
            },
            {  "prim": "int"  },
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
                 {  "int": "3"  }
               ]
            },
            {  "prim": "COMPARE"  },
            {  "prim": "EQ"  },
            {  "prim": "IF",
               "args": [
                 [  {  "prim": "PUSH",
                       "args": [
                         {  "prim": "int"  },
                         {  "int": "1"  }
                       ]
                 },
                 {  "prim": "SWAP"  },
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
                      {  "int": "4"  }
                    ]
                 },
                 {  "prim": "COMPARE"  },
                 {  "prim": "EQ"  },
                 {  "prim": "IF",
                    "args": [
                      [  {  "prim": "PUSH",
                            "args": [
                              {  "prim": "int"  },
                              {  "int": "2"  }
                            ]
                      },
                      {  "prim": "SWAP"  },
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
                      },
                      {  "prim": "RIGHT",
                         "args": [
                           {  "prim": "unit"  }
                         ]
                      },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "3"  }
                         ]
                      },
                      {  "prim": "COMPARE"  },
                      {  "prim": "EQ"  },
                      {  "prim": "IF",
                         "args": [
                           [  {  "prim": "PUSH",
                                 "args": [
                                   {  "prim": "int"  },
                                   {  "int": "1"  }
                                 ]
                           },
                           {  "prim": "SWAP"  },
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
                           },
                           {  "prim": "RIGHT",
                              "args": [
                                {  "prim": "unit"  }
                              ]
                           },
                           {  "prim": "DUP",
                              "args": [
                                {  "int": "4"  }
                              ]
                           },
                           {  "prim": "COMPARE"  },
                           {  "prim": "EQ"  },
                           {  "prim": "IF",
                              "args": [
                                [  {  "prim": "PUSH",
                                      "args": [
                                        {  "prim": "int"  },
                                        {  "int": "2"  }
                                      ]
                                },
                                {  "prim": "SWAP"  },
                                {  "prim": "DROP",
                                   "args": [
                                     {  "int": "1"  }
                                   ]
                                }  ],
                                [  {  "prim": "PUSH",
                                      "args": [
                                        {  "prim": "int"  },
                                        {  "int": "0"  }
                                      ]
                                },
                                {  "prim": "LEFT",
                                   "args": [
                                     {  "prim": "or",
                                        "args": [
                                          {  "prim": "int"  },
                                          {  "prim": "bytes"  }
                                        ]
                                     }
                                   ]
                                },
                                {  "prim": "RIGHT",
                                   "args": [
                                     {  "prim": "unit"  }
                                   ]
                                },
                                {  "prim": "RIGHT",
                                   "args": [
                                     {  "prim": "unit"  }
                                   ]
                                },
                                {  "prim": "DUP",
                                   "args": [
                                     {  "int": "3"  }
                                   ]
                                },
                                {  "prim": "COMPARE"  },
                                {  "prim": "EQ"  },
                                {  "prim": "IF",
                                   "args": [
                                     [  {  "prim": "PUSH",
                                           "args": [
                                             {  "prim": "int"  },
                                             {  "int": "1"  }
                                           ]
                                     },
                                     {  "prim": "SWAP"  },
                                     {  "prim": "DROP",
                                        "args": [
                                          {  "int": "1"  }
                                        ]
                                     }  ],
                                     [  {  "prim": "PUSH",
                                           "args": [
                                             {  "prim": "int"  },
                                             {  "int": "0"  }
                                           ]
                                     },
                                     {  "prim": "LEFT",
                                        "args": [
                                          {  "prim": "or",
                                             "args": [
                                               {  "prim": "int"  },
                                               {  "prim": "bytes"  }
                                             ]
                                          }
                                        ]
                                     },
                                     {  "prim": "RIGHT",
                                        "args": [
                                          {  "prim": "unit"  }
                                        ]
                                     },
                                     {  "prim": "RIGHT",
                                        "args": [
                                          {  "prim": "unit"  }
                                        ]
                                     },
                                     {  "prim": "DUP",
                                        "args": [
                                          {  "int": "4"  }
                                        ]
                                     },
                                     {  "prim": "COMPARE"  },
                                     {  "prim": "EQ"  },
                                     {  "prim": "IF",
                                        "args": [
                                          [  {  "prim": "PUSH",
                                                "args": [
                                                  {  "prim": "int"  },
                                                  {  "int": "2"  }
                                                ]
                                          },
                                          {  "prim": "SWAP"  },
                                          {  "prim": "DROP",
                                             "args": [
                                               {  "int": "1"  }
                                             ]
                                          }  ],
                                          [  {  "prim": "PUSH",
                                                "args": [
                                                  {  "prim": "int"  },
                                                  {  "int": "0"  }
                                                ]
                                          },
                                          {  "prim": "SWAP"  },
                                          {  "prim": "DROP",
                                             "args": [
                                               {  "int": "1"  }
                                             ]
                                          }  ]
                                        ]
                                     }  ]
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
                                {  "prim": "address"  },
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
                                          {  "prim": "bytes"  },
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
                 }
               ]
            },
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
            },
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "7"  }
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
            },
            {  "prim": "DUP"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "8"  }
               ]
            },
            {  "prim": "CAR"  },
            {  "prim": "IF_LEFT",
               "args": [
                 [  {  "prim": "DROP",
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
                      [  {  "prim": "DUP"  },
                      {  "prim": "IF_LEFT",
                         "args": [
                           [  {  "prim": "DUP",
                                 "args": [
                                   {  "int": "11"  }
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
                                [  {  "prim": "DUP",
                                      "args": [
                                        {  "int": "11"  }
                                      ]
                                },
                                {  "prim": "CDR"  },
                                {  "prim": "PUSH",
                                   "args": [
                                     {  "prim": "string"  },
                                     {  "string": "CANNOT_UNPACK_FA_2"  }
                                   ]
                                },
                                {  "prim": "PAIR"  },
                                {  "prim": "FAILWITH"  }  ],
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
                                     {  "int": "13"  }
                                   ]
                                },
                                {  "prim": "DUP",
                                   "args": [
                                     {  "int": "2"  }
                                   ]
                                },
                                {  "prim": "DUP",
                                   "args": [
                                     {  "int": "4"  }
                                   ]
                                },
                                {  "prim": "PAIR"  },
                                {  "prim": "VIEW",
                                   "args": [
                                     {  "string": "get_royalties"  },
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
                                     }
                                   ]
                                },
                                {  "prim": "IF_NONE",
                                   "args": [
                                     [  {  "prim": "PUSH",
                                           "args": [
                                             {  "prim": "string"  },
                                             {  "string": "CANNOT_GET_ROYALTIES"  }
                                           ]
                                     },
                                     {  "prim": "FAILWITH"  }  ],
                                     [  {  "prim": "DUP"  },
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
                                     }  ]
                                   ]
                                },
                                {  "prim": "DROP",
                                   "args": [
                                     {  "int": "3"  }
                                   ]
                                }  ]
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
                                        {  "int": "12"  }
                                      ]
                                },
                                {  "prim": "CDR"  },
                                {  "prim": "UNPACK",
                                   "args": [
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "address"  },
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "nat"  },
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "string"  },
                                                    {  "prim": "pair",
                                                       "args": [
                                                         {  "prim": "nat"  },
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "list",
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
                                                              {  "prim": "pair",
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

                                                                   {  "prim": "bytes"  }
                                                                   ]
                                                                   }
                                                                 ]
                                                              }
                                                            ]
                                                         }
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
                                {  "prim": "IF_NONE",
                                   "args": [
                                     [  {  "prim": "DUP",
                                           "args": [
                                             {  "int": "12"  }
                                           ]
                                     },
                                     {  "prim": "CDR"  },
                                     {  "prim": "PUSH",
                                        "args": [
                                          {  "prim": "string"  },
                                          {  "string": "CANNOT_UNPACK_FA_2_LAZY"  }
                                        ]
                                     },
                                     {  "prim": "PAIR"  },
                                     {  "prim": "FAILWITH"  }  ],
                                     [  {  "prim": "DUP"  },
                                     {  "prim": "CDR"  },
                                     {  "prim": "CDR"  },
                                     {  "prim": "CDR"  },
                                     {  "prim": "CDR"  },
                                     {  "prim": "CDR"  },
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
                 {  "int": "2"  }
               ]
            },
            {  "prim": "DUG",
               "args": [
                 {  "int": "7"  }
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "7"  }
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
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "key"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [
                                                                     "%maker"
                                                                   ]
                                                                   },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%make_asset"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "key"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [
                                                                     "%taker"
                                                                   ]
                                                                   },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%take_asset"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [
                                                                     "%salt"
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
                                                              },
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "key"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [
                                                                     "%maker"
                                                                   ]
                                                                   },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%make_asset"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "key"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [
                                                                     "%taker"
                                                                   ]
                                                                   },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%take_asset"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [
                                                                     "%salt"
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
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "bytes"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "bytes"  },
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

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "key"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [
                                                                     "%maker"
                                                                   ]
                                                                   },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%make_asset"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "key"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [
                                                                     "%taker"
                                                                   ]
                                                                   },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%take_asset"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [
                                                                     "%salt"
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
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "key"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [
                                                                     "%maker"
                                                                   ]
                                                                   },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%make_asset"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "key"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [
                                                                     "%taker"
                                                                   ]
                                                                   },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%take_asset"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [
                                                                     "%salt"
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

                                                                   {  "prim": "bool"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "bool"  },
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

                                                                   {  "prim": "nat"  },
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
                                                                   },
                                                                   {
                                                                   "prim": "pair",
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

                                                                   {  "prim": "nat"  },
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
                                                                   },
                                                                   {
                                                                   "prim": "pair",
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
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "key"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [
                                                                     "%maker"
                                                                   ]
                                                                   },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%make_asset"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "key"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [
                                                                     "%taker"
                                                                   ]
                                                                   },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%take_asset"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [
                                                                     "%salt"
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
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "bool"  },
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

                                                                   {  "prim": "nat"  },
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

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
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

                                                                   {  "prim": "nat"  },
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
                                                                   },
                                                                   {
                                                                   "prim": "pair",
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

                                                                   {  "prim": "nat"  },
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
                                                                   },
                                                                   {
                                                                   "prim": "pair",
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
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "key"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [
                                                                     "%maker"
                                                                   ]
                                                                   },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%make_asset"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "key"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [
                                                                     "%taker"
                                                                   ]
                                                                   },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%take_asset"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [
                                                                     "%salt"
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
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "bool"  },
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

                                                                   {  "prim": "nat"  },
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

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {  "prim": "nat"  },
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
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "key"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [
                                                                     "%maker"
                                                                   ]
                                                                   },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%make_asset"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "key"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [
                                                                     "%taker"
                                                                   ]
                                                                   },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%take_asset"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [
                                                                     "%salt"
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
                                                                   },
                                                                   {  "prim": "bytes"  }
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
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                 ]
                                                              }
                                                            ]
                                                         }
                                                       ]
                                                    }
                                                  ]
                                               }
                                             ]
                                          }
                                        ]
                                     }
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
                 {  "prim": "pair",
                    "args": [
                      {  "prim": "nat",
                         "annots": [
                           "%make_value"
                         ]
                      },
                      {  "prim": "nat",
                         "annots": [
                           "%take_value"
                         ]
                      }
                    ]
                 },
                 {  "prim": "pair",
                    "args": [
                      {  "prim": "option",
                         "args": [
                           {  "prim": "nat"  }
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
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "21"  }
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
                 {  "int": "22"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "14"  }
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
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "ORDER_CANCELED"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "INVALID_FILL"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "EXEC"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "23"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "16"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "15"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "13"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "ORDER_CANCELED"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "INVALID_FILL"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "EXEC"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "19"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "24"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "24"  }
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
                 {  "int": "22"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "20"  }
               ]
            },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "19"  }
               ]
            },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "3"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "4"  }
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
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "CALCULATE_REMAINING_FAILED"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "ROUNDING_ERROR"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "DIVISION_BY_ZERO"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "CANNOT_FILL_LEFT"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "CANNOT_FILL_RIGHT"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "EXEC"  },
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
            {  "prim": "CAR"  },
            {  "prim": "COMPARE"  },
            {  "prim": "GT"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "nat"  },
                 {  "int": "0"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "3"  }
               ]
            },
            {  "prim": "CDR"  },
            {  "prim": "COMPARE"  },
            {  "prim": "GT"  },
            {  "prim": "AND"  },
            {  "prim": "NOT"  },
            {  "prim": "IF",
               "args": [
                 [  {  "prim": "PUSH",
                       "args": [
                         {  "prim": "string"  },
                         {  "string": "NOTHING_TO_FILL"  }
                       ]
                 },
                 {  "prim": "FAILWITH"  }  ],
                 [    ]
               ]
            },
            {  "prim": "NONE",
               "args": [
                 {  "prim": "nat"  }
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
                 {  "int": "16"  }
               ]
            },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CAR"  },
            {  "prim": "COMPARE"  },
            {  "prim": "NEQ"  },
            {  "prim": "IF",
               "args": [
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "19"  }
                       ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "IF",
                    "args": [
                      [  {  "prim": "DUP",
                            "args": [
                              {  "int": "2"  }
                            ]
                      },
                      {  "prim": "CAR"  },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "5"  }
                         ]
                      },
                      {  "prim": "ADD"  },
                      {  "prim": "SOME"  },
                      {  "prim": "SWAP"  },
                      {  "prim": "DROP",
                         "args": [
                           {  "int": "1"  }
                         ]
                      }  ],
                      [  {  "prim": "DUP",
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
                      {  "prim": "SOME"  },
                      {  "prim": "SWAP"  },
                      {  "prim": "DROP",
                         "args": [
                           {  "int": "1"  }
                         ]
                      }  ]
                    ]
                 }  ],
                 [    ]
               ]
            },
            {  "prim": "NONE",
               "args": [
                 {  "prim": "nat"  }
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
                 {  "int": "18"  }
               ]
            },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CAR"  },
            {  "prim": "COMPARE"  },
            {  "prim": "NEQ"  },
            {  "prim": "IF",
               "args": [
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "21"  }
                       ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "IF",
                    "args": [
                      [  {  "prim": "DUP",
                            "args": [
                              {  "int": "3"  }
                            ]
                      },
                      {  "prim": "CDR"  },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "5"  }
                         ]
                      },
                      {  "prim": "ADD"  },
                      {  "prim": "SOME"  },
                      {  "prim": "SWAP"  },
                      {  "prim": "DROP",
                         "args": [
                           {  "int": "1"  }
                         ]
                      }  ],
                      [  {  "prim": "DUP",
                            "args": [
                              {  "int": "3"  }
                            ]
                      },
                      {  "prim": "CAR"  },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "5"  }
                         ]
                      },
                      {  "prim": "ADD"  },
                      {  "prim": "SOME"  },
                      {  "prim": "SWAP"  },
                      {  "prim": "DROP",
                         "args": [
                           {  "int": "1"  }
                         ]
                      }  ]
                    ]
                 }  ],
                 [    ]
               ]
            },
            {  "prim": "DUP"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "3"  }
               ]
            },
            {  "prim": "PAIR"  },
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
                 {  "int": "5"  }
               ]
            },
            {  "prim": "DUG",
               "args": [
                 {  "int": "21"  }
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "21"  }
               ]
            }  ]
          ]
       },
       {  "prim": "LAMBDA",
          "args": [
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
                           "%v2_payouts"
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
                 }
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
                      "%v2_payouts"
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
            {  "prim": "UNPAIR"  },
            {  "prim": "DROP",
               "args": [
                 {  "int": "1"  }
               ]
            },
            {  "prim": "NIL",
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
            },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "nat"  },
                 {  "int": "10000"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "5"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "CONS"  },
            {  "prim": "PAIR"  },
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
                      {  "prim": "bytes"  },
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "string"  },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "bytes"  },
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
                                     },
                                     {  "prim": "lambda",
                                        "args": [
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
                                                         "%v2_payouts"
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
                                               }
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
                                                    "%v2_payouts"
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
                                          }
                                        ]
                                     }
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
                      "%v2_payouts"
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
                 {  "int": "6"  }
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
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "V1"  }
               ]
            },
            {  "prim": "PACK"  },
            {  "prim": "KECCAK"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "8"  }
               ]
            },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CAR"  },
            {  "prim": "COMPARE"  },
            {  "prim": "EQ"  },
            {  "prim": "IF",
               "args": [
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "7"  }
                       ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "UNPACK",
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
                           {  "prim": "list",
                              "args": [
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
                 {  "prim": "IF_NONE",
                    "args": [
                      [  {  "prim": "PUSH",
                            "args": [
                              {  "prim": "string"  },
                              {  "string": "CANNOT_UNPACK_DATA_V2"  }
                            ]
                      },
                      {  "prim": "FAILWITH"  }  ],
                      [  {  "prim": "PUSH",
                            "args": [
                              {  "prim": "bool"  },
                              {  "prim": "False"  }
                            ]
                      },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "2"  }
                         ]
                      },
                      {  "prim": "CDR"  },
                      {  "prim": "PAIR"  },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "2"  }
                         ]
                      },
                      {  "prim": "CAR"  },
                      {  "prim": "PAIR"  },
                      {  "prim": "PUSH",
                         "args": [
                           {  "prim": "nat"  },
                           {  "int": "0"  }
                         ]
                      },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "3"  }
                         ]
                      },
                      {  "prim": "CAR"  },
                      {  "prim": "SIZE"  },
                      {  "prim": "COMPARE"  },
                      {  "prim": "EQ"  },
                      {  "prim": "IF",
                         "args": [
                           [  {  "prim": "DUP",
                                 "args": [
                                   {  "int": "10"  }
                                 ]
                           },
                           {  "prim": "DUP",
                              "args": [
                                {  "int": "2"  }
                              ]
                           },
                           {  "prim": "DUP",
                              "args": [
                                {  "int": "5"  }
                              ]
                           },
                           {  "prim": "PAIR"  },
                           {  "prim": "EXEC"  },
                           {  "prim": "SWAP"  },
                           {  "prim": "DROP",
                              "args": [
                                {  "int": "1"  }
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
                      }  ]
                    ]
                 }  ],
                 [  {  "prim": "PUSH",
                       "args": [
                         {  "prim": "string"  },
                         {  "string": "V2"  }
                       ]
                 },
                 {  "prim": "PACK"  },
                 {  "prim": "KECCAK"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "8"  }
                    ]
                 },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CDR"  },
                 {  "prim": "CAR"  },
                 {  "prim": "COMPARE"  },
                 {  "prim": "EQ"  },
                 {  "prim": "IF",
                    "args": [
                      [  {  "prim": "DUP",
                            "args": [
                              {  "int": "7"  }
                            ]
                      },
                      {  "prim": "CDR"  },
                      {  "prim": "CDR"  },
                      {  "prim": "CDR"  },
                      {  "prim": "CDR"  },
                      {  "prim": "CDR"  },
                      {  "prim": "CDR"  },
                      {  "prim": "CDR"  },
                      {  "prim": "CDR"  },
                      {  "prim": "UNPACK",
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
                                     {  "prim": "bool"  }
                                   ]
                                }
                              ]
                           }
                         ]
                      },
                      {  "prim": "IF_NONE",
                         "args": [
                           [  {  "prim": "PUSH",
                                 "args": [
                                   {  "prim": "string"  },
                                   {  "string": "CANNOT_UNPACK_DATA_V2"  }
                                 ]
                           },
                           {  "prim": "FAILWITH"  }  ],
                           [  {  "prim": "DUP"  },
                           {  "prim": "PUSH",
                              "args": [
                                {  "prim": "nat"  },
                                {  "int": "0"  }
                              ]
                           },
                           {  "prim": "DUP",
                              "args": [
                                {  "int": "3"  }
                              ]
                           },
                           {  "prim": "CAR"  },
                           {  "prim": "SIZE"  },
                           {  "prim": "COMPARE"  },
                           {  "prim": "EQ"  },
                           {  "prim": "IF",
                              "args": [
                                [  {  "prim": "DUP",
                                      "args": [
                                        {  "int": "10"  }
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
                                {  "prim": "EXEC"  },
                                {  "prim": "SWAP"  },
                                {  "prim": "DROP",
                                   "args": [
                                     {  "int": "1"  }
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
                           }  ]
                         ]
                      }  ],
                      [  {  "prim": "PUSH",
                            "args": [
                              {  "prim": "bytes"  },
                              {  "bytes": "ffffffff"  }
                            ]
                      },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "8"  }
                         ]
                      },
                      {  "prim": "CDR"  },
                      {  "prim": "CDR"  },
                      {  "prim": "CDR"  },
                      {  "prim": "CDR"  },
                      {  "prim": "CDR"  },
                      {  "prim": "CDR"  },
                      {  "prim": "CDR"  },
                      {  "prim": "CAR"  },
                      {  "prim": "COMPARE"  },
                      {  "prim": "EQ"  },
                      {  "prim": "IF",
                         "args": [
                           [  {  "prim": "PUSH",
                                 "args": [
                                   {  "prim": "bool"  },
                                   {  "prim": "False"  }
                                 ]
                           },
                           {  "prim": "NIL",
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
                           },
                           {  "prim": "PAIR"  },
                           {  "prim": "NIL",
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
                           },
                           {  "prim": "PAIR"  },
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
                           {  "prim": "DUP",
                              "args": [
                                {  "int": "4"  }
                              ]
                           },
                           {  "prim": "PAIR"  },
                           {  "prim": "EXEC"  },
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
                           }  ],
                           [  {  "prim": "PUSH",
                                 "args": [
                                   {  "prim": "string"  },
                                   {  "string": "ORDER_DATA_TYPE_UNKNOWN"  }
                                 ]
                           },
                           {  "prim": "FAILWITH"  }  ]
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
                 {  "prim": "option",
                    "args": [
                      {  "prim": "timestamp"  }
                    ]
                 },
                 {  "prim": "int"  }
               ]
            },
            {  "prim": "bool"  },
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
                 {  "int": "2"  }
               ]
            },
            {  "prim": "IF_NONE",
               "args": [
                 [  {  "prim": "PUSH",
                       "args": [
                         {  "prim": "bool"  },
                         {  "prim": "True"  }
                       ]
                 }  ],
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "4"  }
                       ]
                 },
                 {  "prim": "DUP"  },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "int"  },
                      {  "int": "0"  }
                    ]
                 },
                 {  "prim": "COMPARE"  },
                 {  "prim": "EQ"  },
                 {  "prim": "IF",
                    "args": [
                      [  {  "prim": "NOW"  },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "3"  }
                         ]
                      },
                      {  "prim": "COMPARE"  },
                      {  "prim": "LT"  }  ],
                      [  {  "prim": "NOW"  },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "3"  }
                         ]
                      },
                      {  "prim": "COMPARE"  },
                      {  "prim": "GT"  }  ]
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
                                                              {  "prim": "option",
                                                                 "args": [
                                                                   {  "prim": "timestamp"  }
                                                                 ]
                                                                 ,
                                                                 "annots": [
                                                                   "%end"
                                                                 ]
                                                              },
                                                              {  "prim": "pair",
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
                           },
                           {  "prim": "option",
                              "args": [
                                {  "prim": "signature"  }
                              ]
                           }
                         ]
                      }
                    ]
                 }
               ]
            },
            {  "prim": "bool"  },
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
                 {  "int": "4"  }
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
            {  "prim": "DUP"  },
            {  "prim": "HASH_KEY"  },
            {  "prim": "IMPLICIT_ACCOUNT"  },
            {  "prim": "ADDRESS"  },
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
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CAR"  },
            {  "prim": "COMPARE"  },
            {  "prim": "EQ"  },
            {  "prim": "IF",
               "args": [
                 [  {  "prim": "DUP"  },
                 {  "prim": "SOURCE"  },
                 {  "prim": "COMPARE"  },
                 {  "prim": "EQ"  },
                 {  "prim": "NOT"  },
                 {  "prim": "IF",
                    "args": [
                      [  {  "prim": "PUSH",
                            "args": [
                              {  "prim": "string"  },
                              {  "string": "MAKER_NOT_TX_SENDER"  }
                            ]
                      },
                      {  "prim": "FAILWITH"  }  ],
                      [    ]
                    ]
                 },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "bool"  },
                      {  "prim": "True"  }
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
                 }  ],
                 [  {  "prim": "DUP"  },
                 {  "prim": "SOURCE"  },
                 {  "prim": "COMPARE"  },
                 {  "prim": "NEQ"  },
                 {  "prim": "IF",
                    "args": [
                      [  {  "prim": "DUP",
                            "args": [
                              {  "int": "7"  }
                            ]
                      },
                      {  "prim": "IF_NONE",
                         "args": [
                           [  {  "prim": "PUSH",
                                 "args": [
                                   {  "prim": "string"  },
                                   {  "string": "SIGNATURE_NONE"  }
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
                      {  "prim": "PACK"  },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "2"  }
                         ]
                      },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "5"  }
                         ]
                      },
                      {  "prim": "CHECK_SIGNATURE"  },
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
                      }  ],
                      [  {  "prim": "PUSH",
                            "args": [
                              {  "prim": "bool"  },
                              {  "prim": "True"  }
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
                      }  ]
                    ]
                 }  ]
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "2"  }
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
            {  "prim": "option",
               "args": [
                 {  "prim": "key"  }
               ]
            },
            {  "prim": "bool"  },
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
            {  "prim": "IF_NONE",
               "args": [
                 [  {  "prim": "PUSH",
                       "args": [
                         {  "prim": "bool"  },
                         {  "prim": "False"  }
                       ]
                 },
                 {  "prim": "SWAP"  },
                 {  "prim": "DROP",
                    "args": [
                      {  "int": "1"  }
                    ]
                 }  ],
                 [  {  "prim": "SENDER"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "2"  }
                    ]
                 },
                 {  "prim": "HASH_KEY"  },
                 {  "prim": "IMPLICIT_ACCOUNT"  },
                 {  "prim": "ADDRESS"  },
                 {  "prim": "COMPARE"  },
                 {  "prim": "EQ"  },
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
                                {  "prim": "string"  },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "string"  },
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
                                                                 ,
                                                                 "annots": [
                                                                   "%take_asset"
                                                                 ]
                                                              },
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [
                                                                     "%salt"
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
                                          },
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "option",
                                                  "args": [
                                                    {  "prim": "signature"  }
                                                  ]
                                               },
                                               {  "prim": "pair",
                                                  "args": [
                                                    {  "prim": "lambda",
                                                       "args": [
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "string"  },
                                                              {  "prim": "pair",
                                                                 "args": [
                                                                   {  "prim": "string"  },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "key"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [
                                                                     "%maker"
                                                                   ]
                                                                   },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%make_asset"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "key"  }
                                                                   ]
                                                                   ,
                                                                   "annots": [
                                                                     "%taker"
                                                                   ]
                                                                   },
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
                                                                   ,
                                                                   "annots": [

                                                                   "%take_asset"
                                                                   ]
                                                                   },
                                                                   {
                                                                   "prim": "pair",
                                                                   "args": [

                                                                   {
                                                                   "prim": "nat",
                                                                   "annots": [
                                                                     "%salt"
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
                                                                   },
                                                                   {
                                                                   "prim": "option",
                                                                   "args": [

                                                                   {  "prim": "signature"  }
                                                                   ]
                                                                   }
                                                                   ]
                                                                   }
                                                                 ]
                                                              }
                                                            ]
                                                         },
                                                         {  "prim": "bool"  }
                                                       ]
                                                    },
                                                    {  "prim": "lambda",
                                                       "args": [
                                                         {  "prim": "pair",
                                                            "args": [
                                                              {  "prim": "option",
                                                                 "args": [
                                                                   {  "prim": "timestamp"  }
                                                                 ]
                                                              },
                                                              {  "prim": "int"  }
                                                            ]
                                                         },
                                                         {  "prim": "bool"  }
                                                       ]
                                                    }
                                                  ]
                                               }
                                             ]
                                          }
                                        ]
                                     }
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
            {  "prim": "bool"  },
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "9"  }
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
                 {  "int": "10"  }
               ]
            },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "int"  },
                 {  "int": "0"  }
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
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CAR"  },
            {  "prim": "PAIR"  },
            {  "prim": "EXEC"  },
            {  "prim": "NOT"  },
            {  "prim": "IF",
               "args": [
                 [  {  "prim": "PUSH",
                       "args": [
                         {  "prim": "string"  },
                         {  "string": "ORDER_START_VALID_FAILED"  }
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
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CDR"  },
            {  "prim": "CAR"  },
            {  "prim": "PAIR"  },
            {  "prim": "EXEC"  },
            {  "prim": "NOT"  },
            {  "prim": "IF",
               "args": [
                 [  {  "prim": "PUSH",
                       "args": [
                         {  "prim": "string"  },
                         {  "string": "ORDER_END_VALID_FAILED"  }
                       ]
                 },
                 {  "prim": "FAILWITH"  }  ],
                 [    ]
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "9"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "9"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "9"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "MAKER_NOT_TX_SENDER"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "SIGNATURE_NONE"  }
               ]
            },
            {  "prim": "PAIR"  },
            {  "prim": "EXEC"  },
            {  "prim": "NOT"  },
            {  "prim": "IF",
               "args": [
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "8"  }
                       ]
                 },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "8"  }
                    ]
                 },
                 {  "prim": "PACK"  },
                 {  "prim": "PAIR"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "8"  }
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
                 {  "prim": "PAIR"  },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "string"  },
                      {  "string": "BAD_SIGNATURE"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "FAILWITH"  }  ],
                 [    ]
               ]
            },
            {  "prim": "PUSH",
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
            },
            {  "prim": "DUG",
               "args": [
                 {  "int": "9"  }
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "9"  }
               ]
            }  ]
          ]
       },
       {  "prim": "LAMBDA",
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
                 },
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
                 }
               ]
            },
            {  "prim": "option",
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
                 }
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
                 {  "int": "2"  }
               ]
            },
            {  "prim": "CDR"  },
            {  "prim": "KECCAK"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "4"  }
               ]
            },
            {  "prim": "CDR"  },
            {  "prim": "KECCAK"  },
            {  "prim": "DUP"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "3"  }
               ]
            },
            {  "prim": "COMPARE"  },
            {  "prim": "EQ"  },
            {  "prim": "IF",
               "args": [
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "4"  }
                       ]
                 },
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
                 }  ],
                 [  {  "prim": "NONE",
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
                              {  "prim": "bytes"  }
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
                 }  ]
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "2"  }
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
            },
            {  "prim": "bool"  },
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
            {  "prim": "IF_LEFT",
               "args": [
                 [  {  "prim": "PUSH",
                       "args": [
                         {  "prim": "bool"  },
                         {  "prim": "False"  }
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
                      [  {  "prim": "PUSH",
                            "args": [
                              {  "prim": "bool"  },
                              {  "prim": "False"  }
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
                           [  {  "prim": "PUSH",
                                 "args": [
                                   {  "prim": "bool"  },
                                   {  "prim": "False"  }
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
                                [  {  "prim": "PUSH",
                                      "args": [
                                        {  "prim": "bool"  },
                                        {  "prim": "False"  }
                                      ]
                                },
                                {  "prim": "SWAP"  },
                                {  "prim": "DROP",
                                   "args": [
                                     {  "int": "1"  }
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
                 },
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
                      },
                      {  "prim": "lambda",
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
                           },
                           {  "prim": "bool"  }
                         ]
                      }
                    ]
                 }
               ]
            },
            {  "prim": "bool"  },
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
                 {  "int": "3"  }
               ]
            },
            {  "prim": "IF_LEFT",
               "args": [
                 [  {  "prim": "NONE",
                       "args": [
                         {  "prim": "bytes"  }
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
                              {  "prim": "bytes"  }
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
                                   {  "prim": "bytes"  }
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
                                        {  "prim": "bytes"  }
                                      ]
                                },
                                {  "prim": "SWAP"  },
                                {  "prim": "DROP",
                                   "args": [
                                     {  "int": "1"  }
                                   ]
                                }  ],
                                [  {  "prim": "DUP"  },
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
            {  "prim": "DUP",
               "args": [
                 {  "int": "3"  }
               ]
            },
            {  "prim": "IF_LEFT",
               "args": [
                 [  {  "prim": "NONE",
                       "args": [
                         {  "prim": "bytes"  }
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
                              {  "prim": "bytes"  }
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
                                   {  "prim": "bytes"  }
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
                                        {  "prim": "bytes"  }
                                      ]
                                },
                                {  "prim": "SWAP"  },
                                {  "prim": "DROP",
                                   "args": [
                                     {  "int": "1"  }
                                   ]
                                }  ],
                                [  {  "prim": "DUP"  },
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
            {  "prim": "COMPARE"  },
            {  "prim": "EQ"  },
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
            {  "prim": "EXEC"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "6"  }
               ]
            },
            {  "prim": "DUP",
               "args": [
                 {  "int": "5"  }
               ]
            },
            {  "prim": "EXEC"  },
            {  "prim": "AND"  },
            {  "prim": "AND"  },
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
                           {  "prim": "lambda",
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
                                     },
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
                                     }
                                   ]
                                },
                                {  "prim": "option",
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
                                          },
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
                                               },
                                               {  "prim": "lambda",
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
                                                    },
                                                    {  "prim": "bool"  }
                                                  ]
                                               }
                                             ]
                                          }
                                        ]
                                     },
                                     {  "prim": "bool"  }
                                   ]
                                },
                                {  "prim": "lambda",
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
                                     },
                                     {  "prim": "bool"  }
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
            {  "prim": "option",
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
                 }
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
                 {  "int": "2"  }
               ]
            },
            {  "prim": "CAR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "4"  }
               ]
            },
            {  "prim": "CAR"  },
            {  "prim": "DUP"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "3"  }
               ]
            },
            {  "prim": "PAIR"  },
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
            {  "prim": "PAIR"  },
            {  "prim": "DUP",
               "args": [
                 {  "int": "2"  }
               ]
            },
            {  "prim": "COMPARE"  },
            {  "prim": "EQ"  },
            {  "prim": "IF",
               "args": [
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "5"  }
                       ]
                 },
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
                 }  ],
                 [  {  "prim": "DUP",
                       "args": [
                         {  "int": "8"  }
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
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "5"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "EXEC"  },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "int"  },
                      {  "int": "1"  }
                    ]
                 },
                 {  "prim": "LEFT",
                    "args": [
                      {  "prim": "or",
                         "args": [
                           {  "prim": "int"  },
                           {  "prim": "bytes"  }
                         ]
                      }
                    ]
                 },
                 {  "prim": "RIGHT",
                    "args": [
                      {  "prim": "unit"  }
                    ]
                 },
                 {  "prim": "RIGHT",
                    "args": [
                      {  "prim": "unit"  }
                    ]
                 },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "int"  },
                      {  "int": "1"  }
                    ]
                 },
                 {  "prim": "LEFT",
                    "args": [
                      {  "prim": "or",
                         "args": [
                           {  "prim": "int"  },
                           {  "prim": "bytes"  }
                         ]
                      }
                    ]
                 },
                 {  "prim": "RIGHT",
                    "args": [
                      {  "prim": "unit"  }
                    ]
                 },
                 {  "prim": "RIGHT",
                    "args": [
                      {  "prim": "unit"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "3"  }
                    ]
                 },
                 {  "prim": "COMPARE"  },
                 {  "prim": "EQ"  },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "int"  },
                      {  "int": "0"  }
                    ]
                 },
                 {  "prim": "LEFT",
                    "args": [
                      {  "prim": "or",
                         "args": [
                           {  "prim": "int"  },
                           {  "prim": "bytes"  }
                         ]
                      }
                    ]
                 },
                 {  "prim": "RIGHT",
                    "args": [
                      {  "prim": "unit"  }
                    ]
                 },
                 {  "prim": "RIGHT",
                    "args": [
                      {  "prim": "unit"  }
                    ]
                 },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "int"  },
                      {  "int": "0"  }
                    ]
                 },
                 {  "prim": "LEFT",
                    "args": [
                      {  "prim": "or",
                         "args": [
                           {  "prim": "int"  },
                           {  "prim": "bytes"  }
                         ]
                      }
                    ]
                 },
                 {  "prim": "RIGHT",
                    "args": [
                      {  "prim": "unit"  }
                    ]
                 },
                 {  "prim": "RIGHT",
                    "args": [
                      {  "prim": "unit"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "4"  }
                    ]
                 },
                 {  "prim": "COMPARE"  },
                 {  "prim": "EQ"  },
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
                 },
                 {  "prim": "RIGHT",
                    "args": [
                      {  "prim": "unit"  }
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
                 },
                 {  "prim": "RIGHT",
                    "args": [
                      {  "prim": "unit"  }
                    ]
                 },
                 {  "prim": "PAIR"  },
                 {  "prim": "DUP",
                    "args": [
                      {  "int": "5"  }
                    ]
                 },
                 {  "prim": "COMPARE"  },
                 {  "prim": "EQ"  },
                 {  "prim": "OR"  },
                 {  "prim": "OR"  },
                 {  "prim": "OR"  },
                 {  "prim": "IF",
                    "args": [
                      [  {  "prim": "DUP",
                            "args": [
                              {  "int": "7"  }
                            ]
                      },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "7"  }
                         ]
                      },
                      {  "prim": "DUP",
                         "args": [
                           {  "int": "7"  }
                         ]
                      },
                      {  "prim": "PAIR"  },
                      {  "prim": "EXEC"  },
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
                      }  ],
                      [  {  "prim": "NONE",
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
                                   {  "prim": "bytes"  }
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
                      }  ]
                    ]
                 }  ]
               ]
            },
            {  "prim": "DROP",
               "args": [
                 {  "int": "3"  }
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
       {  "prim": "NIL",
          "args": [
            {  "prim": "operation"  }
          ]
       },
       {  "prim": "DIG",
          "args": [
            {  "int": "22"  }
          ]
       },
       {  "prim": "UNPAIR"  },
       {  "prim": "DIP",
          "args": [
            {  "int": "1"  },
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "7"  }
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
                                         {  "int": "7"  }
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
                                         {  "int": "5"  }
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
                                         {  "int": "5"  }
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
                                    {  "prim": "PAIR",
                                       "args": [
                                         {  "int": "7"  }
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
                                         {  "int": "7"  }
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
                                         {  "int": "7"  }
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
                                    {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": ""  }
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
                                         {  "int": "1"  }
                                       ]
                                    },
                                    {  "prim": "PAIR",
                                       "args": [
                                         {  "int": "7"  }
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
                                    {  "prim": "DUP"  },
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
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "CONTRACT_PAUSED"  }
                                               ]
                                         },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "bool"  },
                                         {  "prim": "True"  }
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
                                    {  "prim": "PAIR",
                                       "args": [
                                         {  "int": "7"  }
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
                                    {  "prim": "DUP"  },
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
                                    {  "prim": "NOT"  },
                                    {  "prim": "IF",
                                       "args": [
                                         [  {  "prim": "PUSH",
                                               "args": [
                                                 {  "prim": "string"  },
                                                 {  "string": "CONTRACT_NOT_PAUSED"  }
                                               ]
                                         },
                                         {  "prim": "FAILWITH"  }  ],
                                         [    ]
                                       ]
                                    },
                                    {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "bool"  },
                                         {  "prim": "False"  }
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
                                    {  "prim": "PAIR",
                                       "args": [
                                         {  "int": "7"  }
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
                                         {  "int": "7"  }
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
            }  ],
            [  {  "prim": "IF_LEFT",
                  "args": [
                    [  {  "prim": "IF_LEFT",
                          "args": [
                            [  {  "prim": "DUP"  },
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
                            {  "prim": "SENDER"  },
                            {  "prim": "COMPARE"  },
                            {  "prim": "EQ"  },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "3"  }
                               ]
                            },
                            {  "prim": "SENDER"  },
                            {  "prim": "COMPARE"  },
                            {  "prim": "EQ"  },
                            {  "prim": "OR"  },
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
                                 {  "int": "30"  }
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "8"  }
                               ]
                            },
                            {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": "CONTRACT_PAUSED"  }
                               ]
                            },
                            {  "prim": "PAIR"  },
                            {  "prim": "EXEC"  },
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
                            {  "prim": "CDR"  },
                            {  "prim": "CDR"  },
                            {  "prim": "CDR"  },
                            {  "prim": "CDR"  },
                            {  "prim": "CAR"  },
                            {  "prim": "COMPARE"  },
                            {  "prim": "NEQ"  },
                            {  "prim": "NOT"  },
                            {  "prim": "IF",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "CANNOT_USE_0_SALT"  }
                                       ]
                                 },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "9"  }
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "6"  }
                               ]
                            },
                            {  "prim": "CONTRACT",
                               "args": [
                                 {  "prim": "bytes"  }
                               ]
                               ,
                               "annots": [
                                 "%remove"
                               ]
                            },
                            {  "prim": "IF_NONE",
                               "args": [
                                 [  {  "prim": "PUSH",
                                       "args": [
                                         {  "prim": "string"  },
                                         {  "string": "remove"  }
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
                                 {  "int": "32"  }
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "5"  }
                               ]
                            },
                            {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": "V2"  }
                               ]
                            },
                            {  "prim": "PACK"  },
                            {  "prim": "KECCAK"  },
                            {  "prim": "PAIR"  },
                            {  "prim": "EXEC"  },
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
                            },
                            {  "prim": "PAIR",
                               "args": [
                                 {  "int": "7"  }
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
                            {  "prim": "SELF_ADDRESS"  },
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
                                         {  "string": "MAKE_MATCH_NONE"  }
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
                                         {  "string": "TAKE_MATCH_NONE"  }
                                       ]
                                 },
                                 {  "prim": "FAILWITH"  }  ],
                                 [    ]
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "34"  }
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "7"  }
                               ]
                            },
                            {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": "V2"  }
                               ]
                            },
                            {  "prim": "PACK"  },
                            {  "prim": "KECCAK"  },
                            {  "prim": "PAIR"  },
                            {  "prim": "EXEC"  },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "35"  }
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "7"  }
                               ]
                            },
                            {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": "V2"  }
                               ]
                            },
                            {  "prim": "PACK"  },
                            {  "prim": "KECCAK"  },
                            {  "prim": "PAIR"  },
                            {  "prim": "EXEC"  },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "25"  }
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "27"  }
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "10"  }
                               ]
                            },
                            {  "prim": "PAIR"  },
                            {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": "V1"  }
                               ]
                            },
                            {  "prim": "PACK"  },
                            {  "prim": "KECCAK"  },
                            {  "prim": "PAIR"  },
                            {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": "CANNOT_UNPACK_DATA_V2"  }
                               ]
                            },
                            {  "prim": "PAIR"  },
                            {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": "V2"  }
                               ]
                            },
                            {  "prim": "PACK"  },
                            {  "prim": "KECCAK"  },
                            {  "prim": "PAIR"  },
                            {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": "ORDER_DATA_TYPE_UNKNOWN"  }
                               ]
                            },
                            {  "prim": "PAIR"  },
                            {  "prim": "EXEC"  },
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
                                 {  "int": "10"  }
                               ]
                            },
                            {  "prim": "PAIR"  },
                            {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": "V1"  }
                               ]
                            },
                            {  "prim": "PACK"  },
                            {  "prim": "KECCAK"  },
                            {  "prim": "PAIR"  },
                            {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": "CANNOT_UNPACK_DATA_V2"  }
                               ]
                            },
                            {  "prim": "PAIR"  },
                            {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": "V2"  }
                               ]
                            },
                            {  "prim": "PACK"  },
                            {  "prim": "KECCAK"  },
                            {  "prim": "PAIR"  },
                            {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": "ORDER_DATA_TYPE_UNKNOWN"  }
                               ]
                            },
                            {  "prim": "PAIR"  },
                            {  "prim": "EXEC"  },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "29"  }
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "33"  }
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "39"  }
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
                                 {  "int": "37"  }
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
                                 {  "int": "35"  }
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
                                 {  "int": "4"  }
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
                                 {  "int": "6"  }
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
                                 {  "int": "12"  }
                               ]
                            },
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
                                 {  "string": "ORDER_CANCELED"  }
                               ]
                            },
                            {  "prim": "PAIR"  },
                            {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": "INVALID_FILL"  }
                               ]
                            },
                            {  "prim": "PAIR"  },
                            {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": "CALCULATE_REMAINING_FAILED"  }
                               ]
                            },
                            {  "prim": "PAIR"  },
                            {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": "ROUNDING_ERROR"  }
                               ]
                            },
                            {  "prim": "PAIR"  },
                            {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": "DIVISION_BY_ZERO"  }
                               ]
                            },
                            {  "prim": "PAIR"  },
                            {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": "CANNOT_FILL_LEFT"  }
                               ]
                            },
                            {  "prim": "PAIR"  },
                            {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": "CANNOT_FILL_RIGHT"  }
                               ]
                            },
                            {  "prim": "PAIR"  },
                            {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": "NOTHING_TO_FILL"  }
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
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "2"  }
                               ]
                            },
                            {  "prim": "IF_NONE",
                               "args": [
                                 [    ],
                                 [  {  "prim": "DUP",
                                       "args": [
                                         {  "int": "23"  }
                                       ]
                                 },
                                 {  "prim": "DUP",
                                    "args": [
                                      {  "int": "20"  }
                                    ]
                                 },
                                 {  "prim": "CONTRACT",
                                    "args": [
                                      {  "prim": "pair",
                                         "args": [
                                           {  "prim": "bytes"  },
                                           {  "prim": "nat"  }
                                         ]
                                      }
                                    ]
                                    ,
                                    "annots": [
                                      "%put"
                                    ]
                                 },
                                 {  "prim": "IF_NONE",
                                    "args": [
                                      [  {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "put"  }
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
                                      {  "int": "4"  }
                                    ]
                                 },
                                 {  "prim": "DUP",
                                    "args": [
                                      {  "int": "13"  }
                                    ]
                                 },
                                 {  "prim": "PAIR"  },
                                 {  "prim": "TRANSFER_TOKENS"  },
                                 {  "prim": "CONS"  },
                                 {  "prim": "DIP",
                                    "args": [
                                      {  "int": "1"  },
                                      [  {  "prim": "DIG",
                                            "args": [
                                              {  "int": "22"  }
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
                                      {  "int": "22"  }
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
                            {  "prim": "IF_NONE",
                               "args": [
                                 [    ],
                                 [  {  "prim": "DUP",
                                       "args": [
                                         {  "int": "23"  }
                                       ]
                                 },
                                 {  "prim": "DUP",
                                    "args": [
                                      {  "int": "20"  }
                                    ]
                                 },
                                 {  "prim": "CONTRACT",
                                    "args": [
                                      {  "prim": "pair",
                                         "args": [
                                           {  "prim": "bytes"  },
                                           {  "prim": "nat"  }
                                         ]
                                      }
                                    ]
                                    ,
                                    "annots": [
                                      "%put"
                                    ]
                                 },
                                 {  "prim": "IF_NONE",
                                    "args": [
                                      [  {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "put"  }
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
                                      {  "int": "4"  }
                                    ]
                                 },
                                 {  "prim": "DUP",
                                    "args": [
                                      {  "int": "12"  }
                                    ]
                                 },
                                 {  "prim": "PAIR"  },
                                 {  "prim": "TRANSFER_TOKENS"  },
                                 {  "prim": "CONS"  },
                                 {  "prim": "DIP",
                                    "args": [
                                      {  "int": "1"  },
                                      [  {  "prim": "DIG",
                                            "args": [
                                              {  "int": "22"  }
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
                                      {  "int": "22"  }
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
                                 {  "int": "35"  }
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "10"  }
                               ]
                            },
                            {  "prim": "CAR"  },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "12"  }
                               ]
                            },
                            {  "prim": "CAR"  },
                            {  "prim": "PAIR"  },
                            {  "prim": "EXEC"  },
                            {  "prim": "DUP"  },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "15"  }
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
                                 {  "int": "5"  }
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
                                 {  "int": "12"  }
                               ]
                            },
                            {  "prim": "PAIR"  },
                            {  "prim": "PACK"  },
                            {  "prim": "NIL",
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
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "3"  }
                               ]
                            },
                            {  "prim": "DUP"  },
                            {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "int"  },
                                 {  "int": "0"  }
                               ]
                            },
                            {  "prim": "COMPARE"  },
                            {  "prim": "EQ"  },
                            {  "prim": "IF",
                               "args": [
                                 [  {  "prim": "DUP",
                                       "args": [
                                         {  "int": "2"  }
                                       ]
                                 }  ],
                                 [  {  "prim": "DUP"  },
                                 {  "prim": "PUSH",
                                    "args": [
                                      {  "prim": "int"  },
                                      {  "int": "1"  }
                                    ]
                                 },
                                 {  "prim": "COMPARE"  },
                                 {  "prim": "EQ"  },
                                 {  "prim": "IF",
                                    "args": [
                                      [  {  "prim": "DUP",
                                            "args": [
                                              {  "int": "38"  }
                                            ]
                                      },
                                      {  "prim": "SELF_ADDRESS"  },
                                      {  "prim": "DUP",
                                         "args": [
                                           {  "int": "5"  }
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
                                           {  "int": "23"  }
                                         ]
                                      },
                                      {  "prim": "PAIR"  },
                                      {  "prim": "PUSH",
                                         "args": [
                                           {  "prim": "string"  },
                                           {  "string": "CANNOT_GET_ROYALTIES"  }
                                         ]
                                      },
                                      {  "prim": "PAIR"  },
                                      {  "prim": "PUSH",
                                         "args": [
                                           {  "prim": "string"  },
                                           {  "string": "CANNOT_UNPACK_FA_2"  }
                                         ]
                                      },
                                      {  "prim": "PAIR"  },
                                      {  "prim": "PUSH",
                                         "args": [
                                           {  "prim": "string"  },
                                           {  "string": "CANNOT_UNPACK_FA_2_LAZY"  }
                                         ]
                                      },
                                      {  "prim": "PAIR"  },
                                      {  "prim": "EXEC"  }  ],
                                      [  {  "prim": "DUP",
                                            "args": [
                                              {  "int": "38"  }
                                            ]
                                      },
                                      {  "prim": "SELF_ADDRESS"  },
                                      {  "prim": "DUP",
                                         "args": [
                                           {  "int": "5"  }
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
                                           {  "int": "23"  }
                                         ]
                                      },
                                      {  "prim": "PAIR"  },
                                      {  "prim": "PUSH",
                                         "args": [
                                           {  "prim": "string"  },
                                           {  "string": "CANNOT_GET_ROYALTIES"  }
                                         ]
                                      },
                                      {  "prim": "PAIR"  },
                                      {  "prim": "PUSH",
                                         "args": [
                                           {  "prim": "string"  },
                                           {  "string": "CANNOT_UNPACK_FA_2"  }
                                         ]
                                      },
                                      {  "prim": "PAIR"  },
                                      {  "prim": "PUSH",
                                         "args": [
                                           {  "prim": "string"  },
                                           {  "string": "CANNOT_UNPACK_FA_2_LAZY"  }
                                         ]
                                      },
                                      {  "prim": "PAIR"  },
                                      {  "prim": "EXEC"  }  ]
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
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "26"  }
                               ]
                            },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "21"  }
                               ]
                            },
                            {  "prim": "CONTRACT",
                               "args": [
                                 {  "prim": "pair",
                                    "args": [
                                      {  "prim": "pair",
                                         "args": [
                                           {  "prim": "option",
                                              "args": [
                                                {  "prim": "key"  }
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
                                                               {  "prim": "unit"  },
                                                               {  "prim": "or",
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
                                                          {  "prim": "bytes"  }
                                                        ]
                                                     },
                                                     {  "prim": "nat"  }
                                                   ]
                                                },
                                                {  "prim": "pair",
                                                   "args": [
                                                     {  "prim": "option",
                                                        "args": [
                                                          {  "prim": "key"  }
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
                                                                    {  "prim": "bytes"  }
                                                                  ]
                                                               },
                                                               {  "prim": "nat"  }
                                                             ]
                                                          },
                                                          {  "prim": "pair",
                                                             "args": [
                                                               {  "prim": "nat"  },
                                                               {  "prim": "pair",
                                                                  "args": [
                                                                    {
                                                                    "prim": "option",
                                                                    "args": [

                                                                    {  "prim": "timestamp"  }
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
                                                                    },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {  "prim": "bytes"  },
                                                                    {  "prim": "bytes"  }
                                                                    ]
                                                                    }
                                                                    ]
                                                                    }
                                                                  ]
                                                               }
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
                                           {  "prim": "pair",
                                              "args": [
                                                {  "prim": "option",
                                                   "args": [
                                                     {  "prim": "key"  }
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
                                                               {  "prim": "bytes"  }
                                                             ]
                                                          },
                                                          {  "prim": "nat"  }
                                                        ]
                                                     },
                                                     {  "prim": "pair",
                                                        "args": [
                                                          {  "prim": "option",
                                                             "args": [
                                                               {  "prim": "key"  }
                                                             ]
                                                          },
                                                          {  "prim": "pair",
                                                             "args": [
                                                               {  "prim": "pair",
                                                                  "args": [
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {
                                                                    "prim": "or",
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
                                                                    {  "prim": "bytes"  }
                                                                    ]
                                                                    },
                                                                    {  "prim": "nat"  }
                                                                  ]
                                                               },
                                                               {  "prim": "pair",
                                                                  "args": [
                                                                    {  "prim": "nat"  },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {
                                                                    "prim": "option",
                                                                    "args": [

                                                                    {  "prim": "timestamp"  }
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
                                                                    },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {  "prim": "bytes"  },
                                                                    {  "prim": "bytes"  }
                                                                    ]
                                                                    }
                                                                    ]
                                                                    }
                                                                    ]
                                                                    }
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
                                                     {  "prim": "bytes"  }
                                                   ]
                                                },
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
                                                          {  "prim": "bytes"  }
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

                                                                    {  "prim": "address"  },
                                                                    {  "prim": "nat"  }
                                                                    ]
                                                                    }
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

                                                                    {  "prim": "address"  },
                                                                    {  "prim": "nat"  }
                                                                    ]
                                                                    }
                                                                    ]
                                                                    },
                                                                    {  "prim": "bool"  }
                                                                  ]
                                                               }
                                                             ]
                                                          },
                                                          {  "prim": "pair",
                                                             "args": [
                                                               {  "prim": "pair",
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
                                                                    {  "prim": "bool"  }
                                                                    ]
                                                                    }
                                                                  ]
                                                               },
                                                               {  "prim": "pair",
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

                                                                    {  "prim": "int"  },
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
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "8"  }
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
                                 {  "int": "13"  }
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
                                 {  "int": "17"  }
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
                                 {  "int": "21"  }
                               ]
                            },
                            {  "prim": "PAIR"  },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "22"  }
                               ]
                            },
                            {  "prim": "PAIR"  },
                            {  "prim": "TRANSFER_TOKENS"  },
                            {  "prim": "CONS"  },
                            {  "prim": "DIP",
                               "args": [
                                 {  "int": "1"  },
                                 [  {  "prim": "DIG",
                                       "args": [
                                         {  "int": "25"  }
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
                                 {  "int": "25"  }
                               ]
                            },
                            {  "prim": "DROP",
                               "args": [
                                 {  "int": "18"  }
                               ]
                            },
                            {  "prim": "PAIR",
                               "args": [
                                 {  "int": "7"  }
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
                    [  {  "prim": "UNPAIR"  },
                    {  "prim": "SWAP"  },
                    {  "prim": "UNPAIR"  },
                    {  "prim": "SWAP"  },
                    {  "prim": "UNPAIR"  },
                    {  "prim": "SWAP"  },
                    {  "prim": "DUP",
                       "args": [
                         {  "int": "33"  }
                       ]
                    },
                    {  "prim": "DUP",
                       "args": [
                         {  "int": "11"  }
                       ]
                    },
                    {  "prim": "PUSH",
                       "args": [
                         {  "prim": "string"  },
                         {  "string": "CONTRACT_PAUSED"  }
                       ]
                    },
                    {  "prim": "PAIR"  },
                    {  "prim": "EXEC"  },
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
                         {  "int": "17"  }
                       ]
                    },
                    {  "prim": "DUP",
                       "args": [
                         {  "int": "21"  }
                       ]
                    },
                    {  "prim": "DUP",
                       "args": [
                         {  "int": "21"  }
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
                         {  "int": "6"  }
                       ]
                    },
                    {  "prim": "PAIR"  },
                    {  "prim": "PUSH",
                       "args": [
                         {  "prim": "string"  },
                         {  "string": "ORDER_START_VALID_FAILED"  }
                       ]
                    },
                    {  "prim": "PAIR"  },
                    {  "prim": "PUSH",
                       "args": [
                         {  "prim": "string"  },
                         {  "string": "ORDER_END_VALID_FAILED"  }
                       ]
                    },
                    {  "prim": "PAIR"  },
                    {  "prim": "PUSH",
                       "args": [
                         {  "prim": "string"  },
                         {  "string": "MAKER_NOT_TX_SENDER"  }
                       ]
                    },
                    {  "prim": "PAIR"  },
                    {  "prim": "PUSH",
                       "args": [
                         {  "prim": "string"  },
                         {  "string": "SIGNATURE_NONE"  }
                       ]
                    },
                    {  "prim": "PAIR"  },
                    {  "prim": "PUSH",
                       "args": [
                         {  "prim": "string"  },
                         {  "string": "BAD_SIGNATURE"  }
                       ]
                    },
                    {  "prim": "PAIR"  },
                    {  "prim": "EXEC"  },
                    {  "prim": "DUP",
                       "args": [
                         {  "int": "18"  }
                       ]
                    },
                    {  "prim": "DUP",
                       "args": [
                         {  "int": "22"  }
                       ]
                    },
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
                    {  "prim": "PAIR"  },
                    {  "prim": "DUP",
                       "args": [
                         {  "int": "5"  }
                       ]
                    },
                    {  "prim": "PAIR"  },
                    {  "prim": "PUSH",
                       "args": [
                         {  "prim": "string"  },
                         {  "string": "ORDER_START_VALID_FAILED"  }
                       ]
                    },
                    {  "prim": "PAIR"  },
                    {  "prim": "PUSH",
                       "args": [
                         {  "prim": "string"  },
                         {  "string": "ORDER_END_VALID_FAILED"  }
                       ]
                    },
                    {  "prim": "PAIR"  },
                    {  "prim": "PUSH",
                       "args": [
                         {  "prim": "string"  },
                         {  "string": "MAKER_NOT_TX_SENDER"  }
                       ]
                    },
                    {  "prim": "PAIR"  },
                    {  "prim": "PUSH",
                       "args": [
                         {  "prim": "string"  },
                         {  "string": "SIGNATURE_NONE"  }
                       ]
                    },
                    {  "prim": "PAIR"  },
                    {  "prim": "PUSH",
                       "args": [
                         {  "prim": "string"  },
                         {  "string": "BAD_SIGNATURE"  }
                       ]
                    },
                    {  "prim": "PAIR"  },
                    {  "prim": "EXEC"  },
                    {  "prim": "DUP",
                       "args": [
                         {  "int": "6"  }
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
                    {  "prim": "IF",
                       "args": [
                         [  {  "prim": "DUP",
                               "args": [
                                 {  "int": "6"  }
                               ]
                         },
                         {  "prim": "CDR"  },
                         {  "prim": "CDR"  },
                         {  "prim": "CAR"  },
                         {  "prim": "DUP",
                            "args": [
                              {  "int": "5"  }
                            ]
                         },
                         {  "prim": "CAR"  },
                         {  "prim": "COMPARE"  },
                         {  "prim": "EQ"  },
                         {  "prim": "NOT"  },
                         {  "prim": "IF",
                            "args": [
                              [  {  "prim": "PUSH",
                                    "args": [
                                      {  "prim": "string"  },
                                      {  "string": "LEFT_ORDER_TAKER_VALID_FAILED"  }
                                    ]
                              },
                              {  "prim": "FAILWITH"  }  ],
                              [    ]
                            ]
                         }  ],
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
                    {  "prim": "IF",
                       "args": [
                         [  {  "prim": "DUP",
                               "args": [
                                 {  "int": "6"  }
                               ]
                         },
                         {  "prim": "CAR"  },
                         {  "prim": "DUP",
                            "args": [
                              {  "int": "5"  }
                            ]
                         },
                         {  "prim": "CDR"  },
                         {  "prim": "CDR"  },
                         {  "prim": "CAR"  },
                         {  "prim": "COMPARE"  },
                         {  "prim": "EQ"  },
                         {  "prim": "NOT"  },
                         {  "prim": "IF",
                            "args": [
                              [  {  "prim": "PUSH",
                                    "args": [
                                      {  "prim": "string"  },
                                      {  "string": "RIGHT_ORDER_TAKER_VALID_FAILED"  }
                                    ]
                              },
                              {  "prim": "FAILWITH"  }  ],
                              [    ]
                            ]
                         }  ],
                         [    ]
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
                         {  "int": "20"  }
                       ]
                    },
                    {  "prim": "PAIR"  },
                    {  "prim": "DUP",
                       "args": [
                         {  "int": "6"  }
                       ]
                    },
                    {  "prim": "CDR"  },
                    {  "prim": "CDR"  },
                    {  "prim": "CDR"  },
                    {  "prim": "CAR"  },
                    {  "prim": "CAR"  },
                    {  "prim": "PAIR"  },
                    {  "prim": "DUP",
                       "args": [
                         {  "int": "8"  }
                       ]
                    },
                    {  "prim": "CDR"  },
                    {  "prim": "CAR"  },
                    {  "prim": "CAR"  },
                    {  "prim": "PAIR"  },
                    {  "prim": "EXEC"  },
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
                    {  "prim": "DUP",
                       "args": [
                         {  "int": "21"  }
                       ]
                    },
                    {  "prim": "PAIR"  },
                    {  "prim": "DUP",
                       "args": [
                         {  "int": "7"  }
                       ]
                    },
                    {  "prim": "CDR"  },
                    {  "prim": "CAR"  },
                    {  "prim": "CAR"  },
                    {  "prim": "PAIR"  },
                    {  "prim": "DUP",
                       "args": [
                         {  "int": "9"  }
                       ]
                    },
                    {  "prim": "CDR"  },
                    {  "prim": "CDR"  },
                    {  "prim": "CDR"  },
                    {  "prim": "CAR"  },
                    {  "prim": "CAR"  },
                    {  "prim": "PAIR"  },
                    {  "prim": "EXEC"  },
                    {  "prim": "DUP",
                       "args": [
                         {  "int": "16"  }
                       ]
                    },
                    {  "prim": "SELF_ADDRESS"  },
                    {  "prim": "CONTRACT",
                       "args": [
                         {  "prim": "pair",
                            "args": [
                              {  "prim": "pair",
                                 "args": [
                                   {  "prim": "option",
                                      "args": [
                                        {  "prim": "key"  }
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
                                                  {  "prim": "bytes"  }
                                                ]
                                             },
                                             {  "prim": "nat"  }
                                           ]
                                        },
                                        {  "prim": "pair",
                                           "args": [
                                             {  "prim": "option",
                                                "args": [
                                                  {  "prim": "key"  }
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
                                                                 {  "prim": "unit"  },
                                                                 {  "prim": "or",
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
                                                            {  "prim": "bytes"  }
                                                          ]
                                                       },
                                                       {  "prim": "nat"  }
                                                     ]
                                                  },
                                                  {  "prim": "pair",
                                                     "args": [
                                                       {  "prim": "nat"  },
                                                       {  "prim": "pair",
                                                          "args": [
                                                            {  "prim": "option",
                                                               "args": [
                                                                 {  "prim": "timestamp"  }
                                                               ]
                                                            },
                                                            {  "prim": "pair",
                                                               "args": [
                                                                 {  "prim": "option",
                                                                    "args": [

                                                                    {  "prim": "timestamp"  }
                                                                    ]
                                                                 },
                                                                 {  "prim": "pair",
                                                                    "args": [

                                                                    {  "prim": "bytes"  },
                                                                    {  "prim": "bytes"  }
                                                                    ]
                                                                 }
                                                               ]
                                                            }
                                                          ]
                                                       }
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
                                   {  "prim": "pair",
                                      "args": [
                                        {  "prim": "option",
                                           "args": [
                                             {  "prim": "key"  }
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
                                                       {  "prim": "bytes"  }
                                                     ]
                                                  },
                                                  {  "prim": "nat"  }
                                                ]
                                             },
                                             {  "prim": "pair",
                                                "args": [
                                                  {  "prim": "option",
                                                     "args": [
                                                       {  "prim": "key"  }
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
                                                                 {  "prim": "bytes"  }
                                                               ]
                                                            },
                                                            {  "prim": "nat"  }
                                                          ]
                                                       },
                                                       {  "prim": "pair",
                                                          "args": [
                                                            {  "prim": "nat"  },
                                                            {  "prim": "pair",
                                                               "args": [
                                                                 {  "prim": "option",
                                                                    "args": [

                                                                    {  "prim": "timestamp"  }
                                                                    ]
                                                                 },
                                                                 {  "prim": "pair",
                                                                    "args": [

                                                                    {
                                                                    "prim": "option",
                                                                    "args": [

                                                                    {  "prim": "timestamp"  }
                                                                    ]
                                                                    },
                                                                    {
                                                                    "prim": "pair",
                                                                    "args": [

                                                                    {  "prim": "bytes"  },
                                                                    {  "prim": "bytes"  }
                                                                    ]
                                                                    }
                                                                    ]
                                                                 }
                                                               ]
                                                            }
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
                                        {  "prim": "option",
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
                                                  {  "prim": "bytes"  }
                                                ]
                                             }
                                           ]
                                        },
                                        {  "prim": "option",
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
                                                  {  "prim": "bytes"  }
                                                ]
                                             }
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
                         "%match_and_transfer"
                       ]
                    },
                    {  "prim": "IF_NONE",
                       "args": [
                         [  {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": "match_and_transfer"  }
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
                    {  "prim": "DUP",
                       "args": [
                         {  "int": "6"  }
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
                         {  "int": "12"  }
                       ]
                    },
                    {  "prim": "PAIR"  },
                    {  "prim": "TRANSFER_TOKENS"  },
                    {  "prim": "CONS"  },
                    {  "prim": "DIP",
                       "args": [
                         {  "int": "1"  },
                         [  {  "prim": "DIG",
                               "args": [
                                 {  "int": "15"  }
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
                         {  "int": "15"  }
                       ]
                    },
                    {  "prim": "DROP",
                       "args": [
                         {  "int": "8"  }
                       ]
                    },
                    {  "prim": "PAIR",
                       "args": [
                         {  "int": "7"  }
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
       },
       {  "prim": "DIP",
          "args": [
            {  "int": "1"  },
            [  {  "prim": "DROP",
                  "args": [
                    {  "int": "21"  }
                  ]
            }  ]
          ]
       }  ]
     ]
  }  ]

export function exchange_storage(owner: string, transfer_manager: string, royalties: string, fill: string) : any {
  return {  "prim": "Pair",
            "args": [
              {  "string": owner  },
              {  "prim": "Pair",
                 "args": [
                   {  "string": transfer_manager  },
                   {  "prim": "Pair",
                      "args": [
                        {  "string": royalties  },
                        {  "prim": "Pair",
                           "args": [
                             {  "string": fill  },
                             {  "prim": "Pair",
                                "args": [
                                  {  "prim": "None"  },
                                  {  "prim": "Pair",
                                     "args": [
                                       {  "prim": "False"  },
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
}

export async function deploy_exchange(
  provider: Provider,
  owner: string,
  transfer_manager: string,
  royalties: string,
  fill: string) : Promise<DeployResult> {
  const init = exchange_storage(owner, transfer_manager, royalties, fill)
  return provider.tezos.originate({init, code: exchange_code})
}
