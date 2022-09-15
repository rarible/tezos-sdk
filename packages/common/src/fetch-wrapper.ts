import Fetch, {RequestInfo, RequestInit, Response} from "node-fetch";
import {handleFetchErrorResponse, NetworkError} from "@rarible/logger/build";

export async function fetchWrapper(
  url: string,
  init?: RequestInit & { defaultErrorCode?: NetworkErrorCode }
): Promise<Response> {
  let response
  try {
    response = await Fetch(url, init)
    await handleFetchErrorResponse(response, {
      code: init?.defaultErrorCode,
      requestInit: init
    })
  } catch (e) {
    if (e instanceof NetworkError) {
      throw e
    }
    throw new NetworkError({
      url,
      data: (e as Error).message,
      code: init?.defaultErrorCode,
    })
  }
  return response
}

export enum NetworkErrorCode {
  TEZOS_NETWORK_ERR = "TEZOS_NETWORK_ERR",
  TEZOS_EXTERNAL_ERR = "TEZOS_EXTERNAL_ERR"
}
