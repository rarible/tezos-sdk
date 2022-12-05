import { Provider, DeployResult } from "@rarible/tezos-common"
import {get_originate} from "@rarible/tezos-common";

export const royalties_code : any =
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
                         {  "prim": "set",
                            "args": [
                              {  "prim": "address"  }
                            ]
                            ,
                            "annots": [
                              "%user"
                            ]
                         },
                         {  "prim": "pair",
                            "args": [
                              {  "prim": "big_map",
                                 "args": [
                                   {  "prim": "pair",
                                      "args": [
                                        {  "prim": "address"  },
                                        {  "prim": "option",
                                           "args": [
                                             {  "prim": "nat"  }
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
                                   }
                                 ]
                                 ,
                                 "annots": [
                                   "%royalties"
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
  },
  {  "prim": "parameter",
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
                 {  "prim": "or",
                    "args": [
                      {  "prim": "unit",
                         "annots": [
                           "%claim_ownership"
                         ]
                      },
                      {  "prim": "address",
                         "annots": [
                           "%add_user"
                         ]
                      }
                    ]
                 },
                 {  "prim": "or",
                    "args": [
                      {  "prim": "address",
                         "annots": [
                           "%rm_user"
                         ]
                      },
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "address",
                              "annots": [
                                "%token"
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
                                     "%tokenId"
                                   ]
                                },
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
                                   ,
                                   "annots": [
                                     "%value"
                                   ]
                                }
                              ]
                           }
                         ]
                         ,
                         "annots": [
                           "%set_royalties"
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
       [  {  "prim": "UNPAIR"  },
       {  "prim": "DIP",
          "args": [
            {  "int": "1"  },
            [  {  "prim": "UNPAIR",
                  "args": [
                    {  "int": "5"  }
                  ]
            }  ]
          ]
       },
       {  "prim": "IF_LEFT",
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
                         {  "int": "5"  }
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
                         {  "int": "5"  }
                       ]
                    },
                    {  "prim": "NIL",
                       "args": [
                         {  "prim": "operation"  }
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
                         {  "int": "5"  }
                       ]
                    },
                    {  "prim": "NIL",
                       "args": [
                         {  "prim": "operation"  }
                       ]
                    },
                    {  "prim": "PAIR"  }  ]
                  ]
            }  ],
            [  {  "prim": "IF_LEFT",
                  "args": [
                    [  {  "prim": "IF_LEFT",
                          "args": [
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
                                 {  "int": "5"  }
                               ]
                            },
                            {  "prim": "NIL",
                               "args": [
                                 {  "prim": "operation"  }
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
                                 {  "int": "4"  }
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
                                         {  "string": "user"  }
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
                                         {  "int": "4"  }
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
                            },
                            {  "prim": "DROP",
                               "args": [
                                 {  "int": "1"  }
                               ]
                            },
                            {  "prim": "PAIR",
                               "args": [
                                 {  "int": "5"  }
                               ]
                            },
                            {  "prim": "NIL",
                               "args": [
                                 {  "prim": "operation"  }
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
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "4"  }
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
                                 {  "int": "5"  }
                               ]
                            },
                            {  "prim": "NIL",
                               "args": [
                                 {  "prim": "operation"  }
                               ]
                            },
                            {  "prim": "PAIR"  }  ],
                            [  {  "prim": "UNPAIR"  },
                            {  "prim": "SWAP"  },
                            {  "prim": "UNPAIR"  },
                            {  "prim": "SWAP"  },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "6"  }
                               ]
                            },
                            {  "prim": "SENDER"  },
                            {  "prim": "MEM"  },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "5"  }
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
                                 {  "int": "7"  }
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
                            {  "prim": "IF",
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
                                 {  "prim": "SOME"  },
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
                                 }  ],
                                 [  {  "prim": "DUP",
                                       "args": [
                                         {  "int": "7"  }
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
                                 {  "prim": "IF",
                                    "args": [
                                      [  {  "prim": "PUSH",
                                            "args": [
                                              {  "prim": "string"  },
                                              {  "string": "royalties"  }
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
                                      {  "prim": "DUP",
                                         "args": [
                                           {  "int": "6"  }
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
                            {  "prim": "PAIR",
                               "args": [
                                 {  "int": "5"  }
                               ]
                            },
                            {  "prim": "NIL",
                               "args": [
                                 {  "prim": "operation"  }
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
  {  "prim": "view",
     "args": [
       {  "string": "get_royalties"  },
       {  "prim": "pair",
          "args": [
            {  "prim": "address"  },
            {  "prim": "nat"  }
          ]
       },
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
       [  {  "prim": "UNPAIR"  },
       {  "prim": "DIP",
          "args": [
            {  "int": "1"  },
            [  {  "prim": "CDR"  },
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
       {  "prim": "SOME"  },
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
            {  "prim": "SOME"  },
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
                         {  "string": "royalties"  }
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
            }  ],
            [  {  "prim": "DUP",
                  "args": [
                    {  "int": "4"  }
                  ]
            },
            {  "prim": "NONE",
               "args": [
                 {  "prim": "nat"  }
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
                 {  "prim": "NONE",
                    "args": [
                      {  "prim": "nat"  }
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
                              {  "string": "royalties"  }
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
                 }  ],
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
                 {  "prim": "VIEW",
                    "args": [
                      {  "string": "get_royalties"  },
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
                      }
                    ]
                 },
                 {  "prim": "IF_NONE",
                    "args": [
                      [  {  "prim": "NIL",
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
                      }  ],
                      [    ]
                    ]
                 }  ]
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

export function royalties_storage(owner: string) : any {
  return {  "prim": "Pair",
            "args": [
              {  "string": owner  },
              {  "prim": "Pair",
                 "args": [
                   {  "prim": "None"  },
                   {  "prim": "Pair",
                      "args": [
                        [    ],
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
}

export async function deploy_royalties(
  provider : Provider,
  owner: string,
) : Promise<DeployResult> {
  const init = royalties_storage(owner)
  return get_originate(provider, {init, code: royalties_code})
}
