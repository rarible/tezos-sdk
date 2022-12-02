import { Provider, DeployResult, to_hex } from "@rarible/tezos-common"
import BigNumber from "bignumber.js"
import {get_originate} from "@rarible/tezos-common";

export const fa1_code : any =
  [ { "prim": "parameter",
      "args":
      [ { "prim": "or",
          "args":
          [ { "prim": "pair",
              "args":
              [ { "prim": "address", "annots": [ "%from" ] },
                { "prim": "pair",
                  "args":
                  [ { "prim": "address", "annots": [ "%to" ] },
                    { "prim": "nat", "annots": [ "%value" ] } ] } ],
              "annots": [ "%transfer" ] },
            { "prim": "pair",
              "args":
              [ { "prim": "address", "annots": [ "%spender" ] },
                { "prim": "nat", "annots": [ "%value" ] } ],
              "annots": [ "%approve" ] } ] } ] },
    { "prim": "storage",
      "args":
      [ { "prim": "pair",
          "args":
          [ { "prim": "nat", "annots": [ "%supply" ] },
            { "prim": "pair",
              "args":
              [ { "prim": "big_map",
                  "args":
                  [ { "prim": "address" },
                    { "prim": "pair",
                      "args":
                      [ { "prim": "nat", "annots": [ "%balance" ] },
                        { "prim": "map",
                          "args":
                          [ { "prim": "address" },
                            { "prim": "nat" } ],
                          "annots": [ "%allowances" ] } ] } ],
                  "annots": [ "%ledger" ] },
                { "prim": "big_map",
                  "args":
                  [ { "prim": "nat" },
                    { "prim": "pair",
                      "args":
                      [ { "prim": "nat" },
                        { "prim": "map",
                          "args":
                          [ { "prim": "string" },
                            { "prim": "bytes" } ] } ] } ],
                  "annots": [ "%token_metadata" ] } ] } ] } ] },
    { "prim": "code",
      "args":
      [ [ { "prim": "UNPAIR" },
          { "prim": "IF_LEFT",
            "args":
            [ [ { "prim": "SWAP" }, { "prim": "DUP" },
                { "prim": "DUG", "args": [ { "int": "2" } ] },
                { "prim": "GET", "args": [ { "int": "3" } ] },
                { "prim": "SWAP" }, { "prim": "DUP" },
                { "prim": "DUG", "args": [ { "int": "2" } ] },
                { "prim": "CAR" }, { "prim": "GET" },
                { "prim": "IF_NONE",
                  "args":
                  [ [ { "prim": "PUSH",
                        "args": [ { "prim": "nat" }, { "int": "0" } ] },
                      { "prim": "EMPTY_MAP",
                        "args":
                        [ { "prim": "address" }, { "prim": "nat" } ] },
                      { "prim": "SWAP" }, { "prim": "PAIR" } ], [] ] },
                { "prim": "SWAP" }, { "prim": "DUP" },
                { "prim": "DUG", "args": [ { "int": "2" } ] },
                { "prim": "GET", "args": [ { "int": "4" } ] },
                { "prim": "SWAP" }, { "prim": "DUP" },
                { "prim": "DUG", "args": [ { "int": "2" } ] },
                { "prim": "CAR" }, { "prim": "SUB" }, { "prim": "ISNAT" },
                { "prim": "IF_NONE",
                  "args":
                  [ [ { "prim": "DROP", "args": [ { "int": "3" } ] },
                      { "prim": "PUSH",
                        "args":
                        [ { "prim": "string" },
                          { "string": "NotEnoughBalance" } ] },
                      { "prim": "FAILWITH" } ],
                    [ { "prim": "SENDER" },
                      { "prim": "DUP", "args": [ { "int": "4" } ] },
                      { "prim": "CAR" }, { "prim": "COMPARE" },
                      { "prim": "NEQ" },
                      { "prim": "IF",
                        "args":
                        [ [ { "prim": "SWAP" }, { "prim": "DUP" },
                            { "prim": "DUG",
                              "args": [ { "int": "2" } ] },
                            { "prim": "SENDER" }, { "prim": "SWAP" },
                            { "prim": "CDR" }, { "prim": "SWAP" },
                            { "prim": "GET" },
                            { "prim": "IF_NONE",
                              "args":
                              [ [ { "prim": "PUSH",
                                    "args":
                                    [ { "prim": "nat" },
                                      { "int": "0" } ] } ], [] ] },
                            { "prim": "DUP",
                              "args": [ { "int": "4" } ] },
                            { "prim": "GET",
                              "args": [ { "int": "4" } ] },
                            { "prim": "SWAP" }, { "prim": "SUB" },
                            { "prim": "ISNAT" },
                            { "prim": "IF_NONE",
                              "args":
                              [ [ { "prim": "DROP",
                                    "args": [ { "int": "2" } ] },
                                  { "prim": "PUSH",
                                    "args":
                                    [ { "prim": "string" },
                                      { "string":
                                        "NotEnoughAllowance" } ] },
                                  { "prim": "FAILWITH" } ],
                                [ { "prim": "DIG",
                                    "args": [ { "int": "2" } ] },
                                  { "prim": "CDR" },
                                  { "prim": "SWAP" },
                                  { "prim": "SOME" },
                                  { "prim": "SENDER" },
                                  { "prim": "UPDATE" },
                                  { "prim": "SWAP" },
                                  { "prim": "PAIR" } ] ] } ],
                          [ { "prim": "UPDATE",
                              "args": [ { "int": "1" } ] } ] ] },
                      { "prim": "DIG", "args": [ { "int": "2" } ] },
                      { "prim": "DUP" },
                      { "prim": "GET", "args": [ { "int": "3" } ] },
                      { "prim": "DIG", "args": [ { "int": "2" } ] },
                      { "prim": "SOME" },
                      { "prim": "DUP", "args": [ { "int": "4" } ] },
                      { "prim": "CAR" }, { "prim": "UPDATE" },
                      { "prim": "UPDATE", "args": [ { "int": "3" } ] },
                      { "prim": "DUP" },
                      { "prim": "GET", "args": [ { "int": "3" } ] },
                      { "prim": "DUP", "args": [ { "int": "3" } ] },
                      { "prim": "GET", "args": [ { "int": "3" } ] },
                      { "prim": "GET" },
                      { "prim": "IF_NONE",
                        "args":
                        [ [ { "prim": "PUSH",
                              "args":
                              [ { "prim": "nat" }, { "int": "0" } ] },
                            { "prim": "EMPTY_MAP",
                              "args":
                              [ { "prim": "address" },
                                { "prim": "nat" } ] },
                            { "prim": "SWAP" }, { "prim": "PAIR" } ],
                          [] ] }, { "prim": "DUP" },
                      { "prim": "DUP", "args": [ { "int": "4" } ] },
                      { "prim": "GET", "args": [ { "int": "4" } ] },
                      { "prim": "DIG", "args": [ { "int": "2" } ] },
                      { "prim": "CAR" }, { "prim": "ADD" },
                      { "prim": "UPDATE", "args": [ { "int": "1" } ] },
                      { "prim": "SWAP" }, { "prim": "DUP" },
                      { "prim": "GET", "args": [ { "int": "3" } ] },
                      { "prim": "DIG", "args": [ { "int": "2" } ] },
                      { "prim": "SOME" },
                      { "prim": "DIG", "args": [ { "int": "3" } ] },
                      { "prim": "GET", "args": [ { "int": "3" } ] },
                      { "prim": "UPDATE" },
                      { "prim": "UPDATE", "args": [ { "int": "3" } ] },
                      { "prim": "NIL",
                        "args": [ { "prim": "operation" } ] },
                      { "prim": "PAIR" } ] ] } ],
              [ { "prim": "SWAP" }, { "prim": "DUP" },
                { "prim": "DUG", "args": [ { "int": "2" } ] },
                { "prim": "SENDER" }, { "prim": "SWAP" },
                { "prim": "GET", "args": [ { "int": "3" } ] },
                { "prim": "SWAP" }, { "prim": "GET" },
                { "prim": "IF_NONE",
                  "args":
                  [ [ { "prim": "PUSH",
                        "args": [ { "prim": "nat" }, { "int": "0" } ] },
                      { "prim": "EMPTY_MAP",
                        "args":
                        [ { "prim": "address" }, { "prim": "nat" } ] },
                      { "prim": "SWAP" }, { "prim": "PAIR" } ], [] ] },
                { "prim": "PUSH",
                  "args": [ { "prim": "nat" }, { "int": "0" } ] },
                { "prim": "DUP", "args": [ { "int": "3" } ] },
                { "prim": "CDR" }, { "prim": "COMPARE" }, { "prim": "GT" },
                { "prim": "PUSH",
                  "args": [ { "prim": "nat" }, { "int": "0" } ] },
                { "prim": "DUP", "args": [ { "int": "3" } ] },
                { "prim": "CDR" },
                { "prim": "DUP", "args": [ { "int": "5" } ] },
                { "prim": "CAR" }, { "prim": "GET" },
                { "prim": "IF_NONE",
                  "args":
                  [ [ { "prim": "PUSH",
                        "args": [ { "prim": "nat" }, { "int": "0" } ] } ],
                    [] ] }, { "prim": "COMPARE" }, { "prim": "GT" },
                { "prim": "AND" },
                { "prim": "IF",
                  "args":
                  [ [ { "prim": "PUSH",
                        "args":
                        [ { "prim": "string" },
                          { "string": "UnsafeAllowanceChange" } ] },
                      { "prim": "FAILWITH" } ], [] ] },
                { "prim": "DIG", "args": [ { "int": "2" } ] },
                { "prim": "DUP" },
                { "prim": "GET", "args": [ { "int": "3" } ] },
                { "prim": "DIG", "args": [ { "int": "2" } ] },
                { "prim": "DUP" }, { "prim": "CDR" },
                { "prim": "DUP", "args": [ { "int": "5" } ] },
                { "prim": "CDR" }, { "prim": "SOME" },
                { "prim": "DIG", "args": [ { "int": "5" } ] },
                { "prim": "CAR" }, { "prim": "UPDATE" },
                { "prim": "UPDATE", "args": [ { "int": "2" } ] },
                { "prim": "SOME" }, { "prim": "SENDER" },
                { "prim": "UPDATE" },
                { "prim": "UPDATE", "args": [ { "int": "3" } ] },
                { "prim": "NIL", "args": [ { "prim": "operation" } ] },
                { "prim": "PAIR" } ] ] } ] ] },
    { "prim": "view",
      "args":
      [ { "string": "getBalance" }, { "prim": "address" }, { "prim": "nat" },
        [ { "prim": "UNPAIR" }, { "prim": "SWAP" },
          { "prim": "GET", "args": [ { "int": "3" } ] }, { "prim": "SWAP" },
          { "prim": "GET" },
          { "prim": "IF_NONE",
            "args":
            [ [ { "prim": "PUSH",
                  "args": [ { "prim": "nat" }, { "int": "0" } ] },
                { "prim": "EMPTY_MAP",
                  "args": [ { "prim": "address" }, { "prim": "nat" } ] },
                { "prim": "SWAP" }, { "prim": "PAIR" } ], [] ] },
          { "prim": "CAR" } ] ] },
    { "prim": "view",
      "args":
      [ { "string": "getAllowance" },
        { "prim": "pair",
          "args":
          [ { "prim": "address", "annots": [ "%owner" ] },
            { "prim": "address", "annots": [ "%spender" ] } ] },
        { "prim": "nat" },
        [ { "prim": "UNPAIR" }, { "prim": "SWAP" },
          { "prim": "GET", "args": [ { "int": "3" } ] }, { "prim": "SWAP" },
          { "prim": "DUP" }, { "prim": "DUG", "args": [ { "int": "2" } ] },
          { "prim": "CAR" }, { "prim": "GET" },
          { "prim": "IF_NONE",
            "args":
            [ [ { "prim": "PUSH",
                  "args": [ { "prim": "nat" }, { "int": "0" } ] },
                { "prim": "EMPTY_MAP",
                  "args": [ { "prim": "address" }, { "prim": "nat" } ] },
                { "prim": "SWAP" }, { "prim": "PAIR" } ], [] ] },
          { "prim": "CDR" }, { "prim": "SWAP" }, { "prim": "CDR" },
          { "prim": "GET" },
          { "prim": "IF_NONE",
            "args":
            [ [ { "prim": "PUSH",
                  "args": [ { "prim": "nat" }, { "int": "0" } ] } ], [] ] } ] ] },
    { "prim": "view",
      "args":
      [ { "string": "getTotalSupply" }, { "prim": "unit" },
        { "prim": "nat" }, [ { "prim": "CDR" }, { "prim": "CAR" } ] ] } ]

export function fa1_storage(
  owner: string,
  supply: BigNumber,
  decimals: number,
  name?: string,
  symbol?: string,
  uri?: string,
) : any {
  let sup = supply.times((new BigNumber(10)).pow(new BigNumber(decimals))).toString()
  let ledger = [ { "prim": "Elt", "args": [
    { "string": owner },
    { "prim": "Pair", "args": [
      { "int": sup },
      [] ] } ] } ]
  let metadata = [
    { "prim": "Elt", "args": [ {"string": "decimals"}, {"bytes": to_hex(decimals.toString())} ]} ]
  if (name!=undefined) {
    metadata = metadata.concat({ "prim": "Elt", "args": [ {"string": "name"}, {"bytes": to_hex(name)} ] })
  }
  if (symbol!=undefined) {
    metadata = metadata.concat({ "prim": "Elt", "args": [ {"string": "symbol"}, {"bytes": to_hex(symbol)} ] })
  }
  if (uri!=undefined) {
    metadata = metadata.concat({ "prim": "Elt", "args": [ {"string": ""}, {"bytes": to_hex(uri)} ] })
  }
  let st = {
    "prim": "Pair", "args": [
      { "int": sup },
      { "prim": "Pair", "args": [
        ledger,
        [ {"prim": "Elt", "args":[
          {"int":"0"},
          {"prim":"Pair", "args": [
            {"int": "0"},
            metadata
          ] } ] } ] ] } ] }
  return st
}

export async function deploy_fa1(
  provider : Provider,
  owner: string,
  supply: BigNumber,
  decimals: number,
  name?: string,
  symbol?: string,
  uri?: string,
) : Promise<DeployResult> {
  const init = fa1_storage(owner, supply, decimals, name, symbol, uri)
  return get_originate(provider, {init, code: fa1_code})
}
