import { BigMapAbstraction, TransferParams, OriginateParams, TezosToolkit } from "@taquito/taquito"
import { MichelsonData } from "@taquito/michel-codec"
import BigNumber from "bignumber.js"
import fetch from "node-fetch"
const {TextEncoder, TextDecoder} = require("text-encoder")
const bs58check = require("bs58check")
const blake = require('blakejs')

export interface StorageFA2 {
  ledger: BigMapAbstraction;
  operator: BigMapAbstraction;
  operators: BigMapAbstraction;
  operators_for_all: BigMapAbstraction;
  token_metadata: BigMapAbstraction;
}

export interface StorageFA1_2 {
  ledger: BigMapAbstraction;
  token_metadata: BigMapAbstraction;
  allowance: BigMapAbstraction;
}

export interface StorageSalesV2 {
  sales: BigMapAbstraction;
  bundle_sales: BigMapAbstraction;
}

export interface XTZAssetType  {
  asset_class: "XTZ";
}

export interface FTAssetType {
  asset_class: "FT";
  contract: string;
  token_id?: BigNumber;
}

export interface NFTAssetType {
  asset_class: "NFT";
  contract?: string;
  token_id: BigNumber;
}

export interface MTAssetType {
  asset_class: "MT";
  contract?: string;
  token_id: BigNumber;
}

export type TokenAssetType = FTAssetType | NFTAssetType | MTAssetType
export type AssetType = XTZAssetType | TokenAssetType

export enum AssetTypeV2 {
  XTZ = 0,
  FA12 = 1,
  FA2 = 2
}

export interface AssetBase<T> {
  asset_type: T;
  value: BigNumber;
}

export type Asset = AssetBase<AssetType>

export interface OperationResult {
  hash: string;
  confirmation: () => Promise<void>;
}

export type MintResult = OperationResult & { token_id: BigNumber }
export type DeployResult = OperationResult & { contract: string }

export interface TezosProvider {
  kind: 'in_memory' | "temple" | "beacon" | "kukai";
  transfer: (arg: TransferParams) => Promise<OperationResult>;
  originate: (arg: OriginateParams) => Promise<DeployResult>;
  batch: (args: TransferParams[]) => Promise<OperationResult>;
  sign: (bytes: string, type?: "operation" | "message") => Promise<{signature: string, prefix: string}>;
  address: () => Promise<string>;
  public_key: () => Promise<string | undefined>;
  storage: (contract: string) => Promise<any>;
  balance: () => Promise<BigNumber>;
  chain_id: () => Promise<string>;
  tk: TezosToolkit
}

export interface Config {
  exchange: string;
  transfer_proxy: string;
  fees: BigNumber;
  nft_public: string;
  mt_public: string;
  permit_whitelist: string[];
  api: string;
  api_permit: string;
  wrapper: string;
  auction: string;
  auction_storage: string;
  node_url: string;
  sales: string,
  sales_storage: string,
  transfer_manager: string
}

export interface Provider {
  tezos: TezosProvider ;
  config: Config;
}

export interface TransactionArg {
  destination: string,
  amount?: BigNumber,
  entrypoint?: string,
  parameter?: MichelsonData
}

export interface SignatureResult {
  signature: string;
  edpk: string;
  prefix: string;
}

export function asset_type_to_json(a: AssetType) : any {
  switch (a.asset_class) {
    case "XTZ":
      return { assetClass: a.asset_class }
    case "FT":
      return { assetClass: a.asset_class, contract: a.contract,
               tokenId: (a.token_id==undefined) ? undefined : a.token_id.toString() }
    case "NFT":
    case "MT":
      return {
        assetClass: a.asset_class,
        contract: a.contract,
        tokenId: a.token_id.toString()
      }
  }
}

export function asset_type_of_json(a: any) : AssetType {
  switch (a.assetClass) {
    case "XTZ":
      return { asset_class: a.assetClass }
    case "FT":
      return { asset_class: a.assetClass, contract: a.contract,
               token_id: (a.tokenId==undefined) ? undefined : new BigNumber(a.tokenId) }
    case "NFT":
    case "MT":
      return {
        asset_class: a.assetClass,
        contract: a.contract,
        token_id: new BigNumber(a.tokenId)
      }
    default: throw new Error("Unknown Asset Class")
  }
}

export function asset_to_json(a: Asset) : any {
  return {
    assetType : asset_type_to_json(a.asset_type),
    value: a.value.toString()
  }
}

export function asset_of_json(a: any) : Asset {
  return {
    asset_type : asset_type_of_json(a.assetType),
    value: new BigNumber(a.value)
  }
}

export function asset_type_contract(p: Provider, a: TokenAssetType) {
  switch (a.asset_class) {
    case 'NFT': return a.contract || p.config.nft_public
    case 'MT': return a.contract || p.config.mt_public
    case 'FT': return a.contract
  }
}

export function get_address(p: Provider) : Promise<string> {
  return p.tezos.address()
}

export function get_public_key(p: Provider) : Promise<string | undefined> {
  return p.tezos.public_key()
}

export async function storage<T>(p : Provider, contract: string) : Promise<T> {
  return p.tezos.storage(contract)
}

export async function send(
  provider : Provider,
  arg: TransactionArg,
) : Promise<OperationResult> {
  if (arg.entrypoint && arg.parameter) {
    return provider.tezos.transfer({
      amount: (arg.amount!=undefined) ? Number(arg.amount) : 0,
      to: arg.destination,
      parameter: { entrypoint: arg.entrypoint, value: arg.parameter }
    })
  } else {
    return provider.tezos.transfer({
      amount: (arg.amount!=undefined) ? Number(arg.amount) : 0,
      to: arg.destination
    })
  }
}

export async function send_batch(
  provider: Provider,
  args: TransactionArg[],
) : Promise<OperationResult> {
  const params = args.map(function(p) {
    if (p.entrypoint && p.parameter) {
      return {
        amount: (p.amount!=undefined) ? Number(p.amount) : 0,
        to: p.destination,
        parameter: { entrypoint: p.entrypoint, value: p.parameter }
      }
    } else {
      return {
        amount: (p.amount!=undefined) ? Number(p.amount) : 0,
        to: p.destination,
      }
    }
  })
  return provider.tezos.batch(params)
}

export async function get_transaction(
  provider: Provider,
  op_hash: string) {
  const r = await fetch(provider.config.api + '/transaction/' + op_hash)
  if (r.ok) { return r.json() }
  else throw new Error("/transaction/" + op_hash + " failed")
}

export function uint8array_to_hex(a: Uint8Array) : string {
  return a.reduce((acc, x) => acc + x.toString(16).padStart(2, '0'), '')
}

export function hex_to_uint8array(s: string) : Uint8Array {
  const a = new Uint8Array(s.length / 2)
  for (let i = 0; i < s.length; i += 2) {
    a[i / 2] = parseInt(s.substring(i, i + 2), 16)
  }
  return a
}

export function to_hex(s: string) : string {
  const encoder = new TextEncoder();
  const a = encoder.encode(s)
  return uint8array_to_hex(a)
}

export function pack_string(s: string) : string {
  const h = to_hex(s)
  return '0501' + Number(h.length/2).toString(16).padStart(8,'0') + h
}

export function of_hex(s: string) : string {
  const a = hex_to_uint8array(s)
  const decoder = new TextDecoder();
  return decoder.decode(a)
}

export function tezos_signed_message_prefix(domain = "rarible.com") : string {
  const date = new Date()
  return `Tezos Signed Message: ${domain} ${date.toISOString()} `
}

export async function sign(p : TezosProvider, message: string, type: "operation" | "message") : Promise<SignatureResult> {
  type = type || "message"
  const edpk = await p.public_key()
  if (edpk==undefined) throw new Error("cannot get public key from provider")
  const r = await p.sign(message, type)
  return { edpk, ...r }
}

export const tz1_prefix =  new Uint8Array([6, 161, 159])
export const tz2_prefix =  new Uint8Array([6, 161, 161])
export const tz3_prefix =  new Uint8Array([6, 161, 164])
export const edpk_prefix =  new Uint8Array([13, 15, 37, 217])
export const sppk_prefix =  new Uint8Array([3, 254, 226, 86])
export const p2pk_prefix =  new Uint8Array([3, 178, 139, 127])
export const edsk_prefix =  new Uint8Array([13, 15, 58, 7])
export const spsk_prefix =  new Uint8Array([17, 162, 224, 201])
export const p2sk_prefix =  new Uint8Array([16, 81, 238, 189])
export const edsig_prefix =  new Uint8Array([9, 245, 205, 134, 18])
export const spsig1_prefix =  new Uint8Array([13, 115, 101, 19, 63])
export const p2sig_prefix =  new Uint8Array([54, 240, 44, 52])
export const sig_prefix =  new Uint8Array([4, 130, 43])
export const op_prefix =  new Uint8Array([5, 116])
export const kt1_prefix =  new Uint8Array([2, 90, 121])

export function b58enc(payload: Uint8Array, prefix: Uint8Array) : string {
  const n = new Uint8Array(prefix.length + payload.length);
  n.set(prefix);
  n.set(payload, prefix.length);
  return bs58check.encode(Buffer.from(n.buffer));
}

export function b58dec(enc : string, prefix : Uint8Array) : Uint8Array {
  return bs58check.decode(enc).slice(prefix.length)
}

export function pk_to_pkh(pk: string) : string {
  let pkh_prefix: Uint8Array;
  let pk_prefix: Uint8Array;
  switch (pk.substring(0,2)) {
    case 'ed':
      pkh_prefix = tz1_prefix
      pk_prefix = edpk_prefix
      break
    case 'sp':
      pkh_prefix = tz2_prefix
      pk_prefix = sppk_prefix
      break
    case 'p2':
      pkh_prefix = tz3_prefix
      pk_prefix = p2pk_prefix
      break
    default: throw new Error(`don't handle base58 key ${pk}`)
  }
  const pk_bytes = b58dec(pk, pk_prefix)
  const hash = blake.blake2b(pk_bytes, null, 20)
  return b58enc(hash, pkh_prefix)
}

export function op_to_kt1(hash: string) : string {
  const op = b58dec(hash, op_prefix)
  const data = new Uint8Array([...op, 0, 0, 0, 0])
  const hash_kt1 = blake.blake2b(data, null, 20)
  return b58enc(hash_kt1, kt1_prefix)
}

export type TezosNetwork = "mainnet" | "dev" | "hangzhou"
