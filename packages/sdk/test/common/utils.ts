import fetch from "node-fetch";
import {retry} from "@rarible/tezos-common";

export async function getTestItemById(itemId: string) {
  const r = await fetch('https://testnet-api.rarible.org/v0.1/items/TEZOS:' + itemId)
  if (r.ok) {
    return r.json()
  } else {
    throw new Error(`cannot get item with id=${itemId}, reason:${r.statusText}`)
  }
}

export async function getDevItemById(itemId: string) {
  const r = await fetch('https://dev-api.rarible.org/v0.1/items/TEZOS:' + itemId)
  if (r.ok) {
    return r.json()
  } else {
    throw new Error(`cannot get item with id=${itemId}, reason:${r.statusText}`)
  }
}

export async function awaitItem(itemId: string) {
  return retry(20, 2000, () => {
    return getTestItemById(itemId)
  })
}

export async function awaitDevItem(itemId: string) {
  return retry(20, 2000, () => {
    return getDevItemById(itemId)
  })
}
