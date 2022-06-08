import {Config, OrderType, retry} from "./base"
import BigNumber from "bignumber.js"
import fetch from "node-fetch"

export interface OrderDataTypeRequest {
  contract: string;
  token_id: BigNumber;
  seller: string;
  buy_asset_contract?: string;
  buy_asset_token_id?: string;
}

export async function get_active_order_type(
  config: Config,
  order: OrderDataTypeRequest) : Promise<OrderType | undefined> {
  let order_type = undefined
  const order_v1_result = await fetch(config.api + `/orders/sell/byItem?contract=${order.contract}&tokenId=${order.token_id}&maker=${order.seller}&status=ACTIVE`)
  if (order_v1_result.ok) {
    let json = await order_v1_result.json()
      if (json.orders != undefined && json.orders.length > 0){
      if (json.orders.length >= 1) {
        for(let i = 0; i < json.orders.length; i ++){
          const fetched_order = json.orders[i]
          const is_xtz = (fetched_order.take.assetType.assetClass == "XTZ" && order.buy_asset_contract == undefined && order.buy_asset_token_id == undefined)
          const is_fa2 = (
              fetched_order.take.assetType.assetClass == "FT" &&
              order.buy_asset_contract != undefined &&
              order.buy_asset_token_id != undefined &&
              fetched_order.take.assetType.tokenId != undefined &&
              order.buy_asset_contract == fetched_order.take.assetType.contract &&
              order.buy_asset_token_id == fetched_order.take.assetType.tokenId.toString()
          )
          const is_fa12 = (
              fetched_order.take.assetType.assetClass == "FT" &&
              order.buy_asset_contract != undefined &&
              order.buy_asset_token_id == undefined &&
              fetched_order.take.assetType.tokenId == undefined &&
              order.buy_asset_contract == fetched_order.take.assetType.contract
          )
          if(is_xtz || is_fa2 || is_fa12){
            order_type = OrderType.V1
            break
          }
        }
      }

    }
  }
  if(order_type == undefined){
    const order_v2_result = await get_v2_orders(config, order.contract, order.token_id, order.seller, "ACTIVE", order.buy_asset_contract, order.buy_asset_token_id)
      if(order_v2_result.length > 0){
        order_type = OrderType.V2
    }
  }
  return order_type
}

export async function await_v2_order(
    config: Config,
    asset_contract: string,
    asset_token_id: BigNumber,
    seller: string,
    op_hash: string,
    max_tries: number,
    sleep: number
): Promise<string | undefined> {
    let min_tries = 1

    const payload = {
        "query": `query MyQuery { marketplace_activity(where: {make_contract: {_eq: "${asset_contract}"}, make_token_id: {_eq: "${asset_token_id.toString()}"}, maker: {_eq: "${seller}"}, operation_hash: {_eq: "${op_hash}"}}) { id } }`,
        "variables": null,
        "operationName": "MyQuery"
    }

    return fetch_order_with_retry(config.dipdup, min_tries, max_tries, sleep, payload)
}

export async function await_v2_bid(
    config: Config,
    take_asset_contract: string,
    seller: string,
    op_hash: string,
    max_tries: number,
    sleep: number,
    take_asset_token_id?: string
): Promise<string | undefined> {
    let min_tries = 1
    let token_id_filter = ""
    if(take_asset_token_id != undefined){
        token_id_filter = `, take_token_id: {_eq: "${take_asset_token_id.toString()}"}`
    }
    const payload = {
        "query": `query MyQuery {
            marketplace_activity(where: {take_contract: {_eq: "${take_asset_contract}"}, maker: {_eq: "${seller}"}, operation_hash: {_eq: "${op_hash}"}${token_id_filter}}) {
                id
            }
        }`,
        "variables": null,
        "operationName": "MyQuery"
    }
    return fetch_order_with_retry(config.dipdup, min_tries, max_tries, sleep, payload)
}

export async function get_v2_orders(
    config: Config,
    asset_contract: string,
    asset_token_id: BigNumber,
    seller: string,
    status?: string,
    take_asset_contract?: string,
    take_asset_token_id?: string
): Promise<Array<string>> {
    const orders: Array<string> = []
    let status_filter = ""
    let take_asset_contract_filter = ""
    let take_asset_token_id_filter = ""
    if(status){
        status_filter = `, status: {_eq: "${status}"}`
    }
    if(take_asset_contract){
        take_asset_contract_filter = `, take_contract: {_eq: "${take_asset_contract}"}`
    }
    if(take_asset_token_id){
        take_asset_token_id_filter = `, take_token_id: {_eq: "${take_asset_token_id}"}`
    }
    const payload = {
        "query": `query MyQuery { marketplace_order(where: {make_contract: {_eq: "${asset_contract}"}, make_token_id: {_eq: "${asset_token_id.toString()}"}, maker: {_eq: "${seller}"}${status_filter}${take_asset_contract_filter}${take_asset_token_id_filter}}) { id }}`,
        "variables": null,
        "operationName": "MyQuery"
    }
    const res = await fetch(config.dipdup, {
        method: 'post',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
    })
    const json = await res.json()
    const result = json.data.marketplace_order
    if (result.length >= 1) {
        for(let i = 0; i < result.length; i ++){
            orders.push(result[i].id)
        }
    }
    return orders
}


function fetch_order_with_retry(url: string, min_tries: number, max_tries: number, sleep: number, payload: {query: string, variables: null, operationName: string}){
    return retry(max_tries || min_tries, sleep, async () => {
        const res = await fetch(url, {
            method: 'post',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}
        })
        const json = await res.json()
        const result = json.data.marketplace_activity
        if (result.length >= 1) {
            return result[0].id
        } else {
            throw new Error("OrderID cannot be requested")
        }
    })
}