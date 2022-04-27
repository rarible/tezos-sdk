import {Provider} from "@rarible/tezos-common";
import fetch from "node-fetch";

export async function getTestItemById(itemId: string) {
  const r = await fetch('https://test-tezos-api.rarible.org/v0.1/items/' + itemId)
  if (r.ok) {
    return r.json()
  } else {
    throw new Error(`cannot get item with id=${itemId}, reason:${r.statusText}`)
  }
}

export async function getDevItemById(itemId: string) {
  const r = await fetch('https://dev-tezos-api.rarible.org/v0.1/items/' + itemId)
  if (r.ok) {
    return r.json()
  } else {
    throw new Error(`cannot get item with id=${itemId}, reason:${r.statusText}`)
  }
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

export function delay(num: number) {
  return new Promise<void>((r) => setTimeout(r, num))
}

export async function awaitItem(itemId: string) {
  return retry(10, 2000, () => {
    return getTestItemById(itemId)
  })
}

export async function awaitDevItem(itemId: string) {
  return retry(10, 2000, () => {
    return getDevItemById(itemId)
  })
}
