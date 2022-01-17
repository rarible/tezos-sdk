import { Provider, send, OperationResult, TransactionArg, hex_to_uint8array, uint8array_to_hex } from "../common/base"
import { pk_to_pkh } from "../common/base"
import { BigMapAbstraction } from "@taquito/taquito"
import { MichelsonData, MichelsonType, packDataBytes } from "@taquito/michel-codec"
import BigNumber from "bignumber.js"
const blake = require('blakejs');

function pack(data: MichelsonData, type: MichelsonType) : string {
  return packDataBytes(data, type).bytes
}

export interface TransferDestination {
  destination: string;
  token_id: BigNumber;
  amount?: BigNumber;
}

export interface Permit {
  hash: string;
  signature: string;
  pk: string;
  contract: string;
}

const transfer_type : MichelsonType = {
  prim: "list", args: [
    { prim : "pair", args: [
      { prim: "address" },
      { prim: "list", args: [
        { prim : "pair", args: [
          { prim: "address"}, { prim: "nat" }, { prim: "nat" }
        ] }
      ] }
    ] }
  ]
}

const permit_type : MichelsonType = {
  prim: "pair", args: [
    { prim: "pair", args: [ { prim : "address" }, { prim: "chain_id" } ] },
    { prim: "pair", args: [ { prim : "nat" }, { prim: "bytes" } ] },
  ]
}

export async function get_counter(
  provider: Provider,
  contract: string,
  mandator?: string) : Promise<BigNumber> {
  const st = await provider.tezos.storage(contract)
  const permits : BigMapAbstraction = st.permits
  const issuer = (mandator==undefined) ? await provider.tezos.address() : mandator
  try {
    const info : any | undefined = await permits.get(issuer)
    if (info==undefined) return new BigNumber(0)
    else return info.counter
  } catch(_e) {
    return new BigNumber(0)
  }
}

export async function make_permit(
  provider: Provider,
  contract: string,
  transfers: TransferDestination[],
  counter?: number) : Promise<{permit: Permit, transfer: TransactionArg}> {
  const issuer = await provider.tezos.address()
  const pk = await provider.tezos.public_key()
  if (pk==undefined) throw new Error("cannot retrieve public key from wallet")
  const transfer_data : MichelsonData = [ {
    prim: "Pair", args: [
      { string: issuer },
      transfers.map(function(tr) {
        return { prim: "Pair", args: [
          { string: tr.destination },
          { prim: "Pair", args: [ {int : tr.token_id.toString()}, {int: (tr.amount || new BigNumber(1)).toString()} ] }
        ] }
      })
    ] } ]
  const transfer_permit = pack(transfer_data, transfer_type)
  const transfer_permit_array = hex_to_uint8array(transfer_permit)
  const hash_array : Uint8Array = blake.blake2b(transfer_permit_array, null, 32)
  const hash = uint8array_to_hex(hash_array)
  const chain_id = await provider.tezos.chain_id()
  const counter_aux = (counter==undefined) ? await get_counter(provider, contract, issuer) : counter
  const permit_data : MichelsonData = {
    prim: "Pair", args:[
      { prim: "Pair", args:[ {string: contract}, {string: chain_id} ] },
      { prim: "Pair", args:[ {int: counter_aux.toString()}, {bytes: hash} ] }
    ]
  }
  const permit = pack(permit_data, permit_type)
  const {signature} = await provider.tezos.sign(permit)
  return {
    permit: { hash, signature, pk, contract },
    transfer: {
      destination: contract,
      entrypoint: "transfer",
      parameter: transfer_data,
      amount: new BigNumber(0) }
  }
}

export async function add_permit(
  provider: Provider,
  permit: Permit) : Promise<OperationResult> {
  const parameter : MichelsonData = [
    {string: permit.pk}, {string: permit.signature}, {bytes: permit.hash} ]
  const arg = {
    destination: permit.contract, entrypoint: "permit", parameter, amount: new BigNumber(0)}
  return send(provider, arg)
}

export async function set_expiry(
  provider: Provider,
  permit: Permit,
  expiry: Date,
  global=false) : Promise<OperationResult> {
  const parameter : MichelsonData = [
    { prim: "Some", args: [ { int: (expiry.valueOf() / 1000).toString() } ] },
    (global) ? { prim: "None" } : { prim: "Some", args: [ { bytes: permit.hash } ] }
  ]
  const arg = {
    destination: permit.contract, entrypoint: "set_expiry", parameter, amount: new BigNumber(0)}
  return send(provider, arg)
}
