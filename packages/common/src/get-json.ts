import fetch from "node-fetch"

const cache: Record<string, any> = {}

export async function getJson(url: string): Promise<any> {
	if (cache[url] === undefined) {
		const response = await fetch(url)
		cache[url] = await response.json()
	}

	return cache[url]
}