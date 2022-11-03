import {Provider, TransactionArg} from "@rarible/tezos-common";
import {MichelsonData} from "@taquito/michel-codec";

export function get_aggregator_event_transaction(provider: Provider): TransactionArg {
	const parameter: MichelsonData =
		{
			bytes: `${provider.config.aggregator_tracker_id}`
		}
	return {destination: provider.config.aggregator_tracker, entrypoint: "log_event", parameter};
}