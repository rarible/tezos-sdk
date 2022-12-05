import { Provider, DeployResult } from "@rarible/tezos-common"
import {get_originate} from "@rarible/tezos-common";

export const fill_code : any =
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
                                   {  "prim": "bytes"  },
                                   {  "prim": "option",
                                      "args": [
                                        {  "prim": "nat"  }
                                      ]
                                   }
                                 ]
                                 ,
                                 "annots": [
                                   "%fill"
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
                           "%add_user"
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
                           "%rm_user"
                         ]
                      },
                      {  "prim": "bytes",
                         "annots": [
                           "%remove"
                         ]
                      }
                    ]
                 },
                 {  "prim": "pair",
                    "args": [
                      {  "prim": "bytes",
                         "annots": [
                           "%k"
                         ]
                      },
                      {  "prim": "nat",
                         "annots": [
                           "%v"
                         ]
                      }
                    ]
                    ,
                    "annots": [
                      "%put"
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
                            [  {  "prim": "DUP",
                                  "args": [
                                    {  "int": "4"  }
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
                            {  "prim": "DIG",
                               "args": [
                                 {  "int": "4"  }
                               ]
                            },
                            {  "prim": "NONE",
                               "args": [
                                 {  "prim": "nat"  }
                               ]
                            },
                            {  "prim": "SOME"  },
                            {  "prim": "DUP",
                               "args": [
                                 {  "int": "3"  }
                               ]
                            },
                            {  "prim": "UPDATE"  },
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
                    [  {  "prim": "UNPAIR"  },
                    {  "prim": "SWAP"  },
                    {  "prim": "DUP",
                       "args": [
                         {  "int": "5"  }
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
                    {  "prim": "SOME"  },
                    {  "prim": "DUP",
                       "args": [
                         {  "int": "4"  }
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
                         {  "int": "2"  }
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
  },
  {  "prim": "view",
     "args": [
       {  "string": "get"  },
       {  "prim": "bytes"  },
       {  "prim": "option",
          "args": [
            {  "prim": "nat"  }
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
       {  "prim": "UNIT"  },
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
       {  "prim": "GET"  },
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
       {  "prim": "DIP",
          "args": [
            {  "int": "1"  },
            [  {  "prim": "DROP",
                  "args": [
                    {  "int": "2"  }
                  ]
            }  ]
          ]
       }  ]
     ]
  },
  {  "prim": "view",
     "args": [
       {  "string": "contains"  },
       {  "prim": "bytes"  },
       {  "prim": "bool"  },
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
       {  "prim": "UNIT"  },
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
                    {  "int": "2"  }
                  ]
            }  ]
          ]
       }  ]
     ]
  }  ]

export function fill_storage(owner: string) : any {
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

export async function deploy_fill(
  provider : Provider,
  owner: string,
) : Promise<DeployResult> {
  const init = fill_storage(owner)
  return get_originate(provider, {init, code: fill_code})
}
