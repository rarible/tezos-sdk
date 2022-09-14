import {pk_to_pkh, Provider} from "./base"
import {fetchWrapper} from "./fetch-wrapper";

export async function check_signature(
    message: string,
    signature: string,
    pk: string,
    provider: Provider
): Promise<boolean> {
    const pkh = pk_to_pkh(pk)
    const payload = {
        "chain_id": provider.config.chain_id,
        "contract": provider.config.sig_checker,
        "entrypoint": "check_signature",
        "gas": "100000",
        "input": {
            "prim": "Pair",
            "args": [{
                "string": pk
            }, {
                "prim": "Pair",
                "args": [{
                    "bytes": message
                }, {
                    "string": signature
                }]
            }]
        },
        "payer": pkh,
        "source": pkh,
        "unparsing_mode": "Readable"
    }
    let result = false
    const response = await fetchWrapper(provider.config.node_url + "/chains/main/blocks/head/helpers/scripts/run_view", {
        method: 'post',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
    });

    const data = await response.json();

    if (data.data.prim == "True") {
        result = true
    }
    return result
}
