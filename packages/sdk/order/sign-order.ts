import { MichelsonData, MichelsonType, packDataBytes } from "@taquito/michel-codec"
import { Provider, AssetType, Asset, StorageFA1_2, StorageFA2, of_hex } from "../common/base"
import { OrderForm, OrderRaribleV2DataV1 } from "./utils"
import BigNumber from "bignumber.js"
const keccak_base = require("keccak")

export function keccak(s : string) : string {
  return keccak_base('keccak256').update(s, 'hex').digest('hex')
}

function pack(
  data: MichelsonData,
  type: MichelsonType) : string {
  return packDataBytes(data, type).bytes
}

export const XTZ : MichelsonData = { prim: 'Left', args: [ { prim: 'Unit' } ] }

export const FA_1_2 : MichelsonData = {
  prim: 'Right', args: [ { prim: 'Left', args: [ { prim: 'Unit' } ] } ] }

export const FT_FA_2 : MichelsonData = {
  prim: 'Right', args: [
    { prim: 'Right', args: [ { prim: 'Left', args: [ { int: '0' } ] } ] } ] }
export const FA_2 : MichelsonData = {
  prim: 'Right', args: [
    { prim: 'Right', args: [ { prim: 'Left', args: [ { int: '1' } ] } ] } ] }

export function some_struct(v : MichelsonData ) : MichelsonData {
  return {
    prim: 'Some',
    args: [ v ]
  }
}

export function none_struct() : MichelsonData { return { prim: 'None' } }

export const fa_1_2_type : MichelsonType = {prim:'address'}
export const fa_2_type : MichelsonType =
  {prim:'pair',args:[{prim:'address'},{prim:'nat'}]}
export const asset_class_type : MichelsonType =
  {prim:'or', args:[{prim:'unit'},{prim:'or',args:[{prim:'unit'}, {prim:'or',args:[
    {prim:'nat'}, {prim:'or',args:[{prim:'unit'}, {prim:'bytes'}]}]}]}]}
export const asset_type_type : MichelsonType =
  {prim:'pair',args:[ asset_class_type, {prim: 'bytes'}]}
export const asset_type : MichelsonType =
  {prim:'pair',args:[asset_type_type, {prim:'nat'}]}
export const part_type : MichelsonType =
  {prim:'pair',args:[{prim:'address'},{prim:'nat'}]}
export const order_data_type : MichelsonType =
  {prim:'pair',args:[{prim:'list',args:[part_type]},{prim:'list',args:[part_type]}]}
export const order_type : MichelsonType = {
  prim: 'pair', args:[
    { prim: 'option', args:[ {prim: 'key'} ] },
    { prim: 'pair', args:[
      asset_type,
      {prim: 'pair', args:[
        {prim: 'option', args:[ {prim: 'key'} ]},
        {prim: 'pair', args:[
          asset_type,
          {prim: 'pair', args:[
            {prim: 'nat'},
            {prim: 'pair', args:[
              {prim: 'option', args:[ {prim: 'timestamp'} ]},
              {prim: 'pair', args:[
                {prim: 'option', args:[ {prim: 'timestamp'} ]},
                {prim: 'pair', args:[
                  {prim: 'bytes'}, {prim: 'bytes'} ]}]}]}]}]}]}]}]}

export function asset_type_to_struct(p: Provider, a : AssetType) : MichelsonData {
  switch (a.asset_class) {
    case "XTZ":
      return { prim: 'Pair', args: [ XTZ,  { bytes: "00" } ] }
    case "FT":
      if (a.token_id==undefined) {
        return { prim: 'Pair', args: [ FA_1_2,  {
          bytes: pack({ string: a.contract }, fa_1_2_type) } ] }
      } else {
        return { prim: 'Pair', args: [ FT_FA_2,  {
          bytes: pack({ prim: "Pair", args: [
            { string: a.contract }, { int: a.token_id.toString() } ] }, fa_2_type) } ] }
      }
    case "NFT":
      return { prim: 'Pair', args: [ FA_2,  {
        bytes: pack({ prim: "Pair", args: [
          { string: a.contract || p.config.nft_public  }, { int: a.token_id.toString() } ] }, fa_2_type) } ] }
    case "MT":
      return { prim: 'Pair', args: [ FA_2,  {
        bytes: pack({ prim: "Pair", args: [
          { string: a.contract || p.config.mt_public  }, { int: a.token_id.toString() } ] }, fa_2_type) } ] }
  }
}

export async function get_decimals(p: Provider, contract: string, token_id = new BigNumber(0)) : Promise<BigNumber> {
  const st : StorageFA1_2 | StorageFA2 = await p.tezos.storage(contract)
  if (st.token_metadata==undefined) return new BigNumber(0)
  else {
    let v : any = await st.token_metadata.get(token_id.toString())
    if (v==undefined) return new BigNumber(0)
    else {
      let v2 = v[Object.keys(v)[1]].get('decimals')
      if (v2==undefined) return new BigNumber(0)
      else return new BigNumber(of_hex(v2))
    }
  }
}

export async function asset_to_struct(p: Provider, a: Asset) : Promise<MichelsonData> {
  let value : string
  switch (a.asset_type.asset_class) {
    case "XTZ":
      value = a.value.times(new BigNumber(1000000)).toString()
      break
    case "FT":
      if (a.asset_type.contract == p.config.wrapper && a.asset_type.token_id != undefined && a.asset_type.token_id.isZero()) {
        value = a.value.times(new BigNumber(1000000)).toString()
      } else {
        let decimals = await get_decimals(p, a.asset_type.contract, a.asset_type.token_id)
        value = a.value.times((new BigNumber(10).pow(decimals))).toString()
      }
      break
    default:
      value = a.value.toString()
      break
  }
  let b : MichelsonData = { prim: "Pair", args: [ asset_type_to_struct(p, a.asset_type), { int: value } ] }
  return b
}

export function data_to_struct(data: OrderRaribleV2DataV1) : MichelsonData {
  return { prim : "Pair", args: [
    data.payouts.map((p) => {
      return { prim : "Pair", args: [ {string: p.account}, {int: p.value.toString()} ] } }),
    data.origin_fees.map((p) => {
      return { prim : "Pair", args: [ {string: p.account}, {int: p.value.toString()} ] } })
  ] }
}

export async function order_to_struct(p: Provider, order: OrderForm) : Promise<MichelsonData> {
  let data_type = keccak(
    pack({ string: order.data.data_type }, { prim: 'string'} ))
  let data = pack(data_to_struct(order.data), order_data_type)
  return {
    prim: "Pair", args: [
      some_struct({string: order.maker_edpk}),
      { prim: "Pair", args: [
        await asset_to_struct(p, order.make),
        { prim: "Pair", args: [
          (order.taker_edpk) ? some_struct({string: order.taker_edpk}) : none_struct(),
          { prim: "Pair", args: [
            await asset_to_struct(p, order.take),
            { prim: "Pair", args: [
              { int: order.salt },
              { prim: "Pair", args: [
                (order.start) ? some_struct({int: order.start.toString()}) : none_struct(),
                { prim: "Pair", args: [
                  (order.end) ? some_struct({int: order.end.toString()}) : none_struct(),
                  { prim: "Pair", args: [
                    { bytes: data_type },
                    { bytes: data } ] } ] } ] } ] } ] } ] } ] } ] }
}

export async function sign_order(
  provider: Provider,
  order: OrderForm) : Promise<string> {
  let o = await order_to_struct(provider, order)
  let h = pack(o, order_type)
  const {signature} = await provider.tezos.sign(h)
  return signature
}

export async function order_key(
  provider: Provider,
  order: OrderForm) : Promise<string> {
  const maker = pack({string: order.maker_edpk}, { prim: "key" })
  const make_asset = keccak(pack(asset_type_to_struct(provider, order.make.asset_type), asset_type_type))
  const take_asset = keccak(pack(asset_type_to_struct(provider, order.take.asset_type), asset_type_type))
  const salt = pack({int: order.salt}, {prim:"nat"})
  return keccak(maker + make_asset + take_asset + salt)
}
