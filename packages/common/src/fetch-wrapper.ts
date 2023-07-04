import Fetch, { HeadersInit, RequestInfo, RequestInit, Response } from "node-fetch";
import {handleFetchErrorResponse, NetworkError} from "@rarible/logger/build";
import { Config } from "./types";

export type FetchOptions = RequestInit & { defaultErrorCode?: NetworkErrorCode }
export async function fetchWrapper(
  url: string,
  options?: FetchOptions
): Promise<Response> {
  let response
  try {
    response = await Fetch(url, {
      ...options,
    })
    await handleFetchErrorResponse(response, {
      code: options?.defaultErrorCode,
      requestInit: options
    })
  } catch (e) {
    if (e instanceof NetworkError) {
      throw e
    }
    throw new NetworkError({
      url,
      data: (e as Error).message,
      code: options?.defaultErrorCode,
    })
  }
  return response
}

export enum NetworkErrorCode {
  TEZOS_NETWORK_ERR = "TEZOS_NETWORK_ERR",
  TEZOS_EXTERNAL_ERR = "TEZOS_EXTERNAL_ERR"
}

export function fetchAPI(
  relativeUrl: string,
  options: FetchOptions & { config: Config }
): Promise<Response> {
  const {config, ...fetchOptions} = options
  return fetchWrapper(`${options.config.union_api}${relativeUrl}`, {
    ...fetchOptions,
    headers: {
      ...(fetchOptions?.headers || {}),
      ...(options.config.api_key ? { "X-API-KEY": options.config.api_key} : {})
    }
  })
}
