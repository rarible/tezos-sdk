import {BigMapAbstraction, OriginateParams, TezosToolkit, TransferParams} from "@taquito/taquito"
import {MichelsonData, packDataBytes, unpackDataBytes} from "@taquito/michel-codec"
import BigNumber from "bignumber.js"
import fetch from "node-fetch"
import { fetchAPI, fetchWrapper, NetworkErrorCode } from "./fetch-wrapper";
import {NetworkError} from "@rarible/logger/build";
import {get_aggregator_event_transaction} from "./aggregator-event";
import { Config } from "./types";

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

export interface StorageAuctions {
	auctions: BigMapAbstraction;
	bundle_auctions: BigMapAbstraction;
}

export type AssetData = {
	contract?: string;
	token_id?: BigNumber;
}

export enum Platform {
	RARIBLE_V1 = "RARIBLE_V1",
	RARIBLE_V2 = "RARIBLE_V2",
	OBJKT_V1 = "OBJKT_V1",
	OBJKT_V2 = "OBJKT_V2",
	HEN = "HEN",
	TEIA_V1 = "TEIA_V1",
	VERSUM_V1 = "VERSUM_V1",
	FXHASH_V1 = "FXHASH_V1",
	FXHASH_V2 = "FXHASH_V2"
}

export enum OrderStatus {
	ACTIVE = "ACTIVE",
	INACTIVE = "INACTIVE",
	FILLED = "FILLED"
}

export interface XTZAssetType {
	asset_class: "XTZ";
}

export interface FTAssetType {
	asset_class: "FT";
	contract: string;
	token_id?: BigNumber;
}

export interface NFTAssetType {
	asset_class: "NFT";
	contract: string;
	token_id: BigNumber;
}

export interface MTAssetType {
	asset_class: "MT";
	contract: string;
	token_id: BigNumber;
}

export type TokenAssetType = FTAssetType | NFTAssetType | MTAssetType
export type AssetType = XTZAssetType | TokenAssetType

export enum AssetTypeV2 {
	XTZ = 0,
	FA12 = 1,
	FA2 = 2
}

export enum OrderType {
	V1 = 0,
	V2 = 1
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
export type BatchMintResult = OperationResult & { token_ids: Array<BigNumber> }

export type DeployResult = OperationResult & { contract: string }

export interface TezosProvider {
	kind: 'in_memory' | "temple" | "beacon" | "kukai";
	transfer: (arg: TransferParams) => Promise<OperationResult>;
	originate: (arg: OriginateParams) => Promise<DeployResult>;
	batch: (args: TransferParams[]) => Promise<OperationResult>;
	sign: (bytes: string, type?: "operation" | "message") => Promise<{ signature: string, prefix: string }>;
	address: () => Promise<string>;
	public_key: () => Promise<string | undefined>;
	storage: (contract: string) => Promise<any>;
	balance: () => Promise<BigNumber>;
	chain_id: () => Promise<string>;
	tk: TezosToolkit
}



export interface Provider {
	tezos: TezosProvider;
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

export function asset_type_to_json(a: AssetType): any {
	switch (a.asset_class) {
		case "XTZ":
			return {assetClass: a.asset_class}
		case "FT":
			return {
				assetClass: a.asset_class, contract: a.contract,
				tokenId: (a.token_id == undefined) ? undefined : a.token_id.toString()
			}
		case "NFT":
		case "MT":
			return {
				assetClass: a.asset_class,
				contract: a.contract,
				tokenId: a.token_id.toString()
			}
	}
}

export function asset_type_of_json(a: any): AssetType {
	switch (a.assetClass) {
		case "XTZ":
			return {asset_class: a.assetClass}
		case "FT":
			return {
				asset_class: a.assetClass, contract: a.contract,
				token_id: (a.tokenId == undefined) ? undefined : new BigNumber(a.tokenId)
			}
		case "NFT":
		case "MT":
			return {
				asset_class: a.assetClass,
				contract: a.contract,
				token_id: new BigNumber(a.tokenId)
			}
		default:
			throw new Error("Unknown Asset Class")
	}
}

export function asset_to_json(a: Asset): any {
	return {
		assetType: asset_type_to_json(a.asset_type),
		value: a.value.toString()
	}
}

export function asset_of_json(a: any): Asset {
	return {
		asset_type: asset_type_of_json(a.assetType),
		value: new BigNumber(a.value)
	}
}

export function asset_type_contract(p: Provider, a: TokenAssetType) {
	switch (a.asset_class) {
		case 'NFT':
			return a.contract || p.config.nft_public
		case 'MT':
			return a.contract || p.config.mt_public
		case 'FT':
			return a.contract
	}
}

export async function get_address(p: Provider): Promise<string> {
  try {
	  return await p.tezos.address()
  } catch (e) {
    throw new TezosProviderError({
      error: e,
      method: "provider.tezos.address"
    })
  }
}

export async function get_public_key(p: Provider): Promise<string | undefined> {
  try {
	  return await p.tezos.public_key()
  } catch (e) {
    throw new TezosProviderError({
      error: e,
      method: "provider.tezos.public_key"
    })
  }
}

export async function get_storage(p: Provider, contract: string): Promise<any> {
  try {
	  return await p.tezos.storage(contract)
  } catch (e) {
    throw new TezosProviderError({
      error: e,
      args: { contract },
      method: "provider.tezos.storage"
    })
  }
}

export async function get_sign(
  provider: Provider,
  bytes: string,
  type?: "operation" | "message"
): Promise<{ signature: string, prefix: string }> {
  try {
    return await provider.tezos.sign(bytes, type)
  } catch (e) {
    throw new TezosProviderError({
      error: e,
      args: {bytes, type},
      method: "provider.tezos.sign"
    })
  }
}
export async function get_originate(
  provider: Provider,
  arg: OriginateParams
): Promise<DeployResult> {
  try {
    return wrap_confirmation(await provider.tezos.originate(arg), arg)
  } catch (e) {
    throw new TezosProviderError({
      error: e,
      args: {arg},
      method: "provider.tezos.originate"
    })
  }
}

export async function send(
	provider: Provider,
	arg: TransactionArg,
): Promise<OperationResult> {
  try {
    if (arg.entrypoint && arg.parameter) {
      const op = await provider.tezos.transfer({
        amount: (arg.amount != undefined) ? Number(arg.amount) : 0,
        to: arg.destination,
        parameter: {entrypoint: arg.entrypoint, value: arg.parameter}
      })
      return wrap_confirmation(op, arg)
    } else {
      const op = await provider.tezos.transfer({
        amount: (arg.amount != undefined) ? Number(arg.amount) : 0,
        to: arg.destination
      })
      return wrap_confirmation(op, arg)
    }
  } catch (e) {
    throw new TezosProviderError({
      error: e,
      args: arg,
      method: "send"
    })
  }
}

export class TezosProviderError extends Error {
  error: any
  args: any
  method: string
  constructor(data: {error?: any, args?: any, method: string}) {
    super(TezosProviderError.getErrorMessage(data?.error) || "TezosProviderError")
    Object.setPrototypeOf(this, TezosProviderError.prototype)
    this.name = "TezosProviderError"
    this.error = data?.error
    this.args = data?.args
    this.method = data?.method
  }

  static getErrorMessage(error: any) {
    try {
      const notEnoughFundsError = error?.data?.find((err: any) =>
        err?.id?.endsWith && err.id.endsWith("implicit.empty_implicit_contract")
      )

      if (notEnoughFundsError) {
        return `Wallet ${notEnoughFundsError?.implicit} does not have enough funds for transaction`
      }
    } catch (e) {}
    return error?.message || ""
  }
}

export async function send_batch(
	provider: Provider,
	args: TransactionArg[],
): Promise<OperationResult> {
  let prepared: TransferParams[]
  try {
    prepared = args
      //add log_event to track rarible tx
      .concat(get_aggregator_event_transaction(provider))
      .map(function (p) {
      if (p.entrypoint && p.parameter) {
        return {
          amount: (p.amount != undefined) ? Number(p.amount) : 0,
          to: p.destination,
          parameter: {entrypoint: p.entrypoint, value: p.parameter}
        }
      } else {
        return {
          amount: (p.amount != undefined) ? Number(p.amount) : 0,
          to: p.destination,
        }
      }
    })
	  const op = await provider.tezos.batch(prepared)
    return wrap_confirmation(op, args)
  } catch (e) {
    throw new TezosProviderError({
      error: e,
      args: args,
      method: "send_batch"
    })
  }
}

export function wrap_confirmation<T extends OperationResult>(op: T, args?: any) {
  return {
    ...op,
    confirmation: async () => {
      try {
        return await op.confirmation()
      } catch (e) {
        throw new TezosProviderError({
          error: e,
          args: args,
          method: "confirmation"
        })
      }
    }
  }
}

export async function get_royalties(
	provider: Provider,
	token_contract: string,
	tokenId: BigNumber
): Promise<Array<Part>> {
	const r = await fetchAPI(`/items/TEZOS:${token_contract}:${tokenId}/royalties`, {
    config: provider.config
  })
  const result = await r.json()
  const royalties: Array<Part> = result.royalties
  for (let share of royalties) {
    share.account = share.account.replace("TEZOS:", "")
  }
  return royalties
}

export async function are_royalties_on_chain(
	provider: Provider,
	token_contract: string,
	token_id: BigNumber
): Promise<boolean> {
	let is_on_chain = false
	let fetchUrl = provider.config.tzkt + `/v1/contracts/${token_contract}/bigmaps/royalties/keys/${token_id}`
	try {
		const r = await fetch(fetchUrl)
		if (r.status == 200) {
			is_on_chain = true
		} else {
			const key = `{"address":"${token_contract}","nat":"${token_id}"}`
			fetchUrl = provider.config.tzkt + `/v1/contracts/${provider.config.royalties_provider}/bigmaps/royalties/keys/${key}`
			const r_provider = await fetch(fetchUrl)
			if (r_provider.status == 200) {
				is_on_chain = true
			} else {
				const key = `{"address":"${token_contract}","nat":null}`
				fetchUrl = provider.config.tzkt + `/v1/contracts/${provider.config.royalties_provider}/bigmaps/royalties/keys/${key}`
				const r_provider = await fetch(fetchUrl)
				if (r_provider.status == 200) {
					is_on_chain = true
				}
			}
		}
		return is_on_chain
	} catch (e) {
		throw new NetworkError({
			url: fetchUrl,
			data: (e as Error).message,
			code: NetworkErrorCode.TEZOS_EXTERNAL_ERR,
		})
	}
}

export function uint8array_to_hex(a: Uint8Array): string {
	return a.reduce((acc, x) => acc + x.toString(16).padStart(2, '0'), '')
}

export function hex_to_uint8array(s: string): Uint8Array {
	const a = new Uint8Array(s.length / 2)
	for (let i = 0; i < s.length; i += 2) {
		a[i / 2] = parseInt(s.substring(i, i + 2), 16)
	}
	return a
}

export function to_hex(s: string): string {
	const encoder = new TextEncoder();
	const a = encoder.encode(s)
	return uint8array_to_hex(a)
}

export function pack_string(s: string): string {
	const h = to_hex(s)
	return '0501' + Number(h.length / 2).toString(16).padStart(8, '0') + h
}

export function of_hex(s: string): string {
	const a = hex_to_uint8array(s)
	const decoder = new TextDecoder();
	return decoder.decode(a)
}

export function tezos_signed_message_prefix(domain = "rarible.com"): string {
	const date = new Date()
	return `Tezos Signed Message: ${domain} ${date.toISOString()} `
}

export async function sign(p: TezosProvider, message: string, type: "operation" | "message"): Promise<SignatureResult> {
	type = type || "message"
	const edpk = await p.public_key()
	if (edpk == undefined) throw new Error("cannot get public key from provider")
	const r = await p.sign(message, type)
	return {edpk, ...r}
}

export const tz1_prefix = new Uint8Array([6, 161, 159])
export const tz2_prefix = new Uint8Array([6, 161, 161])
export const tz3_prefix = new Uint8Array([6, 161, 164])
export const edpk_prefix = new Uint8Array([13, 15, 37, 217])
export const sppk_prefix = new Uint8Array([3, 254, 226, 86])
export const p2pk_prefix = new Uint8Array([3, 178, 139, 127])
export const edsk_prefix = new Uint8Array([13, 15, 58, 7])
export const spsk_prefix = new Uint8Array([17, 162, 224, 201])
export const p2sk_prefix = new Uint8Array([16, 81, 238, 189])
export const edsig_prefix = new Uint8Array([9, 245, 205, 134, 18])
export const spsig1_prefix = new Uint8Array([13, 115, 101, 19, 63])
export const p2sig_prefix = new Uint8Array([54, 240, 44, 52])
export const sig_prefix = new Uint8Array([4, 130, 43])
export const op_prefix = new Uint8Array([5, 116])
export const kt1_prefix = new Uint8Array([2, 90, 121])

export function b58enc(payload: Uint8Array, prefix: Uint8Array): string {
	const n = new Uint8Array(prefix.length + payload.length);
	n.set(prefix);
	n.set(payload, prefix.length);
	return bs58check.encode(Buffer.from(n.buffer));
}

export function b58dec(enc: string, prefix: Uint8Array): Uint8Array {
	return bs58check.decode(enc).slice(prefix.length)
}

export function pk_to_pkh(pk: string): string {
	let pkh_prefix: Uint8Array;
	let pk_prefix: Uint8Array;
	switch (pk.substring(0, 2)) {
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
		default:
			throw new Error(`don't handle base58 key ${pk}`)
	}
	const pk_bytes = b58dec(pk, pk_prefix)
	const hash = blake.blake2b(pk_bytes, null, 20)
	return b58enc(hash, pkh_prefix)
}

export function op_to_kt1(hash: string): string {
	const op = b58dec(hash, op_prefix)
	const data = new Uint8Array([...op, 0, 0, 0, 0])
	const hash_kt1 = blake.blake2b(data, null, 20)
	return b58enc(hash_kt1, kt1_prefix)
}

export async function asset_factor(
	config: Config,
	asset_type: AssetTypeV2,
	asset_contract?: string,
	asset_token_id?: BigNumber
): Promise<BigNumber> {
	let decimals: BigNumber
	switch (+asset_type) {
		case AssetTypeV2.FA12:
		case AssetTypeV2.FA2:
			decimals = await get_decimals(config, asset_contract!, asset_token_id)
			break
		default:
			decimals = new BigNumber(6)
			break
	}
	return new BigNumber(10).pow(decimals)
}

export async function absolute_amount(
	config: Config,
	amount: BigNumber,
	asset_type: AssetTypeV2,
	asset_contract?: string,
	asset_token_id?: BigNumber
): Promise<BigNumber> {
	const factor = await asset_factor(config, asset_type, asset_contract, asset_token_id)
	return new BigNumber(amount).times(factor).integerValue()
}

export function packFA2Asset(assetContract: String, assetId: BigNumber) {
	return packDataBytes({
		prim: "Pair",
		args: [
			{
				string: `${assetContract}`,
			},
			{
				int: `${assetId}`,
			},
		],
	}, {
		prim: "pair",
		args: [
			{
				prim: "address",
			},
			{
				prim: "nat",
			},
		],
	});
};

export function unpackFA2Asset(data: string) {
	const unpackedData: MichelsonData = unpackDataBytes({
		bytes: data,
	}, {
		prim: "pair",
		args: [
			{
				prim: "address",
			},
			{
				prim: "nat",
			},
		],
	});
	const raw_result = JSON.parse(JSON.stringify(unpackedData))
	try {
		const result: AssetData = {
			contract: raw_result.args[0].string,
			token_id: raw_result.args[1].int
		}
		return result
	} catch (e) {
		throw new Error("Can't un pack FA2 asset: " + data)
	}
};

export function packFA12Asset(assetContract: string) {
	return packDataBytes({
		string: `${assetContract}`,
	}, {
		prim: "address",
	});
};

export function unpackFA12Asset(data: string): AssetData {
	const unpackedData = unpackDataBytes({
		bytes: data,
	}, {
		prim: "address",
	});
	const result: AssetData = {
		contract: "string" in unpackedData ? unpackedData.string : undefined
	}
	if (result.contract == undefined) {
		throw new Error("Can't unpack FA12 asset: " + data)
	}
	return result
}

export function getAsset(sale_type: AssetTypeV2, assetContract?: string, assetId?: BigNumber): string {
	let asset = ""
	if (sale_type == AssetTypeV2.FA2) {
		asset = packFA2Asset(assetContract!, assetId!).bytes
	} else if (sale_type == AssetTypeV2.FA12) {
		asset = packFA12Asset(assetContract!).bytes
	}
	return asset
}

export async function get_ft_type(config: Config, assetContract: string): Promise<AssetTypeV2 | undefined> {
	const result = await fetchWrapper(config.tzkt + '/v1/contracts/' + assetContract, {
		defaultErrorCode: NetworkErrorCode.TEZOS_EXTERNAL_ERR,
	})
	let assetType = undefined
	try {
		const data = await result.json()
		const tzips = data.tzips as Array<string>
		if (tzips.includes("fa2")) {
			assetType = AssetTypeV2.FA2
		} else if (tzips.includes("fa12")) {
			assetType = AssetTypeV2.FA12
		}
	} catch (e) {
		console.error(e)
	}
	return assetType
}

export async function get_decimals(config: Config, contract: string, token_id = new BigNumber(0)): Promise<BigNumber> {
	const result = await fetchWrapper(`${config.tzkt}/v1/tokens?contract=${contract}&tokenId=${token_id}`, {
		defaultErrorCode: NetworkErrorCode.TEZOS_EXTERNAL_ERR,
	})
	const token = await result.json()
	if (token.length == 1 && token[0].metadata != undefined) {
		if (token[0].metadata.decimals != undefined) {
			return new BigNumber(token[0].metadata.decimals)
		} else {
			return new BigNumber(0)
		}
	} else {
		return new BigNumber(0)
	}
}

export function process_token_id(sale_type: AssetTypeV2, token_id: BigNumber | undefined) {
	if (sale_type != AssetTypeV2.FA2) {
		return undefined
	} else {
		return token_id
	}
}

export interface Part {
	account: string;
	value: BigNumber;
}

export function parts_to_micheline(p: Array<Part>): MichelsonData[] {
	let parts: MichelsonData[] = []
	for (let part of p) {
		parts.push(
			{
				prim: "Pair",
				args: [{
					string: part.account
				}, {
					int: `${part.value}`
				}]
			})
	}
	return parts
}

export function objkt_parts_to_micheline(p: Array<Part>): MichelsonData[] {
	let parts: MichelsonData[] = []
	for (let part of p) {
		parts.push(
			{
				prim: "Pair",
				args: [{
					int: `${part.value}`
				}, {
					string: `${part.account}`
				}]
			})
	}
	return parts
}

export function optional_date_arg(date?: number): MichelsonData {
	if (date) {
		return {
			prim: "Some",
			args: [{
				int: new BigNumber(date).toFixed()
			}]
		}
	} else {
		return {
			prim: "None"
		}
	}
}

export function delay(num: number) {
	return new Promise<void>((r) => setTimeout(r, num))
}

export function retry<T>(
	num: number,
	del: number,
	thunk: () => Promise<T>
): Promise<T> {
	return thunk().catch((error) => {
		if (num === 0) {
			throw error
		}
		return delay(del).then(() => retry(num - 1, del, thunk))
	})
}

export type TezosNetwork = "mainnet" | "dev" | "testnet"
