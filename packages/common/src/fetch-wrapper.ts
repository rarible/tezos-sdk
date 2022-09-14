import Fetch, {RequestInfo, RequestInit, Response} from "node-fetch";
import {NetworkError} from "@rarible/logger/build";

export async function fetchWrapper(
  url: RequestInfo,
  init?: RequestInit & { defaultErrorCode?: NetworkErrorCode }
): Promise<Response> {
  const response = await Fetch(url, init)
  if (!response.ok) {
    let value
    try {
      value = await response.clone().json()
    } catch (e) {
      value = await response.clone().text()
    }

    throw new NetworkError({
      status: response.status,
      url: response.url,
      value,
      code: init?.defaultErrorCode
    })
  }
  return response
}

export enum NetworkErrorCode {
  TEZOS_NETWORK_ERROR = "TEZOS_NETWORK_ERROR",
  TEZOS_EXTERNAL_ERR = "TEZOS_EXTERNAL_ERR"
}
