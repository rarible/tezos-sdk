import { Provider, DeployResult, getJson, make_metadata } from "@rarible/tezos-common"
import {get_originate} from "@rarible/tezos-common";

const nft_public_contract_url = "https://raw.githubusercontent.com/rarible/contracts-registry/master/tezos/nft-public.json"

export function nft_public_storage(owner : string, metadata?: { [key : string] : string }, metadata_uri?: string) : any {
  return {  "prim": "Pair",
            "args": [
              {  "string": owner  },
              {  "prim": "Pair",
                 "args": [
                   {  "prim": "None"  },
                   {  "prim": "Pair",
                      "args": [
                        {  "prim": "False"  },
                        {  "prim": "Pair",
                           "args": [
                             [    ],
                             {  "prim": "Pair",
                                "args": [
                                  [    ],
                                  {  "prim": "Pair",
                                     "args": [
                                       [    ],
                                       {  "prim": "Pair",
                                          "args": [
                                            [    ],
                                            {  "prim": "Pair",
                                               "args": [
                                                 [    ],
                                                 {  "prim": "Pair",
                                                    "args": [
                                                      [    ],
                                                      {  "prim": "Pair",
                                                         "args": [
                                                           {  "int": "31556952"  },
                                                           make_metadata(metadata_uri, metadata)                                                       ]
                                                      }
                                                    ]
                                                 }
                                               ]
                                            }
                                          ]
                                       }
                                     ]
                                  }
                                ]
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

export async function deploy_nft_public(
  provider : Provider,
  owner: string,
  metadata?: { [key:string]: string },
  metadata_uri?: string,
  contractJson?: any
) : Promise<DeployResult> {
	const init = nft_public_storage(owner, metadata, metadata_uri)
	const code = contractJson ?? await getJson(nft_public_contract_url)
	return get_originate(provider, {init, code})
}
