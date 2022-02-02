import { Provider, send, OperationResult, to_hex } from "./base"

export async function set_metadata(
  provider: Provider,
  contract: string,
  key: string,
  value: string) : Promise<OperationResult> {
  return send(provider, {
    destination: contract,
    entrypoint: "setMetadata",
    parameter: [ { string: key }, { bytes: to_hex(value) } ] })
}

export function make_metadata(metadata_uri?: string, metadata?: { [key : string] : string }) : any {
  if (metadata_uri) {
    return [  {
      "prim": "Elt",
      "args": [
        {  "string": ""  },
        {  "bytes": to_hex(metadata_uri)  }
      ] } ]
  } else if (metadata) {
    return Object.keys(metadata).sort().map(function(k) {
      return {
      "prim": "Elt",
      "args": [
        {  "string": k  },
        {  "bytes": to_hex(metadata[k])  }
      ] }
    })
  } else {
    return [  {
      "prim": "Elt",
      "args": [
        {  "string": ""  },
        {  "bytes": ""  }
      ] } ]
  }
}
