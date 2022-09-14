import {fetchWrapper, NetworkErrorCode} from "./fetch-wrapper";

const cache: Record<string, any> = {}

export async function getJson(url: string): Promise<any> {
	if (cache[url] === undefined) {
		const response = await fetchWrapper(url, {
      defaultErrorCode: NetworkErrorCode.TEZOS_EXTERNAL_ERR
    })
		cache[url] = await response.json()
	}

	return cache[url]
}
