import {
  FieldsSelection,
  GraphqlOperation,
  ClientOptions,
  Observable,
} from '@genql/runtime'
import { SubscriptionClient } from 'subscriptions-transport-ws'
export * from './schema'
import {
  query_rootRequest,
  query_rootPromiseChain,
  query_root,
  subscription_rootRequest,
  subscription_rootObservableChain,
  subscription_root,
} from './schema'
export declare const createClient: (options?: ClientOptions) => Client
export declare const everything: { __scalar: boolean }
export declare const version: string

export interface Client {
  wsClient?: SubscriptionClient

  query<R extends query_rootRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<query_root, R>>

  subscription<R extends subscription_rootRequest>(
    request: R & { __name?: string },
  ): Observable<FieldsSelection<subscription_root, R>>

  chain: {
    query: query_rootPromiseChain

    subscription: subscription_rootObservableChain
  }
}

export type QueryResult<fields extends query_rootRequest> = FieldsSelection<
  query_root,
  fields
>

export declare const generateQueryOp: (
  fields: query_rootRequest & { __name?: string },
) => GraphqlOperation
export type SubscriptionResult<
  fields extends subscription_rootRequest
> = FieldsSelection<subscription_root, fields>

export declare const generateSubscriptionOp: (
  fields: subscription_rootRequest & { __name?: string },
) => GraphqlOperation

export declare const enumdipdupContractMetadataSelectColumn: {
  readonly contract: 'contract'
  readonly created_at: 'created_at'
  readonly id: 'id'
  readonly metadata: 'metadata'
  readonly network: 'network'
  readonly update_id: 'update_id'
  readonly updated_at: 'updated_at'
}

export declare const enumdipdupContractSelectColumn: {
  readonly address: 'address'
  readonly created_at: 'created_at'
  readonly name: 'name'
  readonly typename: 'typename'
  readonly updated_at: 'updated_at'
}

export declare const enumdipdupHeadSelectColumn: {
  readonly created_at: 'created_at'
  readonly hash: 'hash'
  readonly level: 'level'
  readonly name: 'name'
  readonly timestamp: 'timestamp'
  readonly updated_at: 'updated_at'
}

export declare const enumdipdupHeadStatusSelectColumn: {
  readonly name: 'name'
  readonly status: 'status'
}

export declare const enumdipdupIndexSelectColumn: {
  readonly config_hash: 'config_hash'
  readonly created_at: 'created_at'
  readonly level: 'level'
  readonly name: 'name'
  readonly status: 'status'
  readonly template: 'template'
  readonly template_values: 'template_values'
  readonly type: 'type'
  readonly updated_at: 'updated_at'
}

export declare const enumdipdupSchemaSelectColumn: {
  readonly created_at: 'created_at'
  readonly hash: 'hash'
  readonly name: 'name'
  readonly reindex: 'reindex'
  readonly updated_at: 'updated_at'
}

export declare const enumdipdupTokenMetadataSelectColumn: {
  readonly contract: 'contract'
  readonly created_at: 'created_at'
  readonly id: 'id'
  readonly metadata: 'metadata'
  readonly network: 'network'
  readonly token_id: 'token_id'
  readonly update_id: 'update_id'
  readonly updated_at: 'updated_at'
}

export declare const enumindexingStatusSelectColumn: {
  readonly index: 'index'
  readonly last_level: 'last_level'
}

export declare const enumlegacyOrdersSelectColumn: {
  readonly data: 'data'
  readonly hash: 'hash'
  readonly id: 'id'
}

export declare const enummarketplaceActivitySelectColumn: {
  readonly id: 'id'
  readonly internal_order_id: 'internal_order_id'
  readonly make_asset_class: 'make_asset_class'
  readonly make_contract: 'make_contract'
  readonly make_token_id: 'make_token_id'
  readonly make_value: 'make_value'
  readonly maker: 'maker'
  readonly network: 'network'
  readonly operation_counter: 'operation_counter'
  readonly operation_hash: 'operation_hash'
  readonly operation_level: 'operation_level'
  readonly operation_nonce: 'operation_nonce'
  readonly operation_timestamp: 'operation_timestamp'
  readonly order_id: 'order_id'
  readonly platform: 'platform'
  readonly take_asset_class: 'take_asset_class'
  readonly take_contract: 'take_contract'
  readonly take_token_id: 'take_token_id'
  readonly take_value: 'take_value'
  readonly taker: 'taker'
  readonly type: 'type'
}

export declare const enummarketplaceOrderSelectColumn: {
  readonly cancelled: 'cancelled'
  readonly created_at: 'created_at'
  readonly end_at: 'end_at'
  readonly ended_at: 'ended_at'
  readonly fill: 'fill'
  readonly id: 'id'
  readonly internal_order_id: 'internal_order_id'
  readonly last_updated_at: 'last_updated_at'
  readonly make_asset_class: 'make_asset_class'
  readonly make_contract: 'make_contract'
  readonly make_token_id: 'make_token_id'
  readonly make_value: 'make_value'
  readonly maker: 'maker'
  readonly network: 'network'
  readonly origin_fees: 'origin_fees'
  readonly payouts: 'payouts'
  readonly platform: 'platform'
  readonly salt: 'salt'
  readonly start_at: 'start_at'
  readonly status: 'status'
  readonly take_asset_class: 'take_asset_class'
  readonly take_contract: 'take_contract'
  readonly take_token_id: 'take_token_id'
  readonly take_value: 'take_value'
  readonly taker: 'taker'
}

export declare const enumorderBy: {
  readonly asc: 'asc'
  readonly asc_nulls_first: 'asc_nulls_first'
  readonly asc_nulls_last: 'asc_nulls_last'
  readonly desc: 'desc'
  readonly desc_nulls_first: 'desc_nulls_first'
  readonly desc_nulls_last: 'desc_nulls_last'
}
