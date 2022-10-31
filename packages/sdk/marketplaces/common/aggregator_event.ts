import {Provider, TransactionArg} from "@rarible/tezos-common";
import {MichelsonData} from "@taquito/michel-codec";

export function get_aggregator_event_transaction(provider: Provider): TransactionArg {
	const tracker = '09616c6c64617461'
	const parameter: MichelsonData =
		{
			bytes: `${tracker}`
		}
	return {destination: provider.config.aggregator_tracker, entrypoint: "log_event", parameter};
}