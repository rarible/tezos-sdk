import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    Boolean: boolean,
    Int: number,
    String: string,
    jsonb: any,
    numeric: any,
    timestamptz: any,
    uuid: any,
}


/** columns and relationships of "dipdup_contract" */
export interface dipdup_contract {
    address: Scalars['String']
    created_at: Scalars['timestamptz']
    name: Scalars['String']
    typename?: Scalars['String']
    updated_at: Scalars['timestamptz']
    __typename: 'dipdup_contract'
}


/** columns and relationships of "dipdup_contract_metadata" */
export interface dipdup_contract_metadata {
    contract: Scalars['String']
    created_at: Scalars['timestamptz']
    id: Scalars['Int']
    metadata: Scalars['jsonb']
    network: Scalars['String']
    update_id: Scalars['Int']
    updated_at: Scalars['timestamptz']
    __typename: 'dipdup_contract_metadata'
}


/** select columns of table "dipdup_contract_metadata" */
export type dipdup_contract_metadata_select_column = 'contract' | 'created_at' | 'id' | 'metadata' | 'network' | 'update_id' | 'updated_at'


/** select columns of table "dipdup_contract" */
export type dipdup_contract_select_column = 'address' | 'created_at' | 'name' | 'typename' | 'updated_at'


/** columns and relationships of "dipdup_head" */
export interface dipdup_head {
    created_at: Scalars['timestamptz']
    hash: Scalars['String']
    level: Scalars['Int']
    name: Scalars['String']
    timestamp: Scalars['timestamptz']
    updated_at: Scalars['timestamptz']
    __typename: 'dipdup_head'
}


/** select columns of table "dipdup_head" */
export type dipdup_head_select_column = 'created_at' | 'hash' | 'level' | 'name' | 'timestamp' | 'updated_at'


/** columns and relationships of "dipdup_head_status" */
export interface dipdup_head_status {
    name?: Scalars['String']
    status?: Scalars['String']
    __typename: 'dipdup_head_status'
}


/** select columns of table "dipdup_head_status" */
export type dipdup_head_status_select_column = 'name' | 'status'


/** columns and relationships of "dipdup_index" */
export interface dipdup_index {
    config_hash: Scalars['String']
    created_at: Scalars['timestamptz']
    level: Scalars['Int']
    name: Scalars['String']
    /** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
    status: Scalars['String']
    template?: Scalars['String']
    template_values?: Scalars['jsonb']
    /** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer */
    type: Scalars['String']
    updated_at: Scalars['timestamptz']
    __typename: 'dipdup_index'
}


/** select columns of table "dipdup_index" */
export type dipdup_index_select_column = 'config_hash' | 'created_at' | 'level' | 'name' | 'status' | 'template' | 'template_values' | 'type' | 'updated_at'


/** columns and relationships of "dipdup_schema" */
export interface dipdup_schema {
    created_at: Scalars['timestamptz']
    hash: Scalars['String']
    name: Scalars['String']
    /** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
    reindex?: Scalars['String']
    updated_at: Scalars['timestamptz']
    __typename: 'dipdup_schema'
}


/** select columns of table "dipdup_schema" */
export type dipdup_schema_select_column = 'created_at' | 'hash' | 'name' | 'reindex' | 'updated_at'


/** columns and relationships of "dipdup_token_metadata" */
export interface dipdup_token_metadata {
    contract: Scalars['String']
    created_at: Scalars['timestamptz']
    id: Scalars['Int']
    metadata: Scalars['jsonb']
    network: Scalars['String']
    token_id: Scalars['String']
    update_id: Scalars['Int']
    updated_at: Scalars['timestamptz']
    __typename: 'dipdup_token_metadata'
}


/** select columns of table "dipdup_token_metadata" */
export type dipdup_token_metadata_select_column = 'contract' | 'created_at' | 'id' | 'metadata' | 'network' | 'token_id' | 'update_id' | 'updated_at'


/** columns and relationships of "indexing_status" */
export interface indexing_status {
    /** COLLECTION: COLLECTION\nLEGACY_ORDERS: LEGACY_ORDERS */
    index: Scalars['String']
    last_level: Scalars['String']
    __typename: 'indexing_status'
}


/** select columns of table "indexing_status" */
export type indexing_status_select_column = 'index' | 'last_level'


/** columns and relationships of "legacy_orders" */
export interface legacy_orders {
    data: Scalars['jsonb']
    hash: Scalars['String']
    id: Scalars['uuid']
    __typename: 'legacy_orders'
}


/** select columns of table "legacy_orders" */
export type legacy_orders_select_column = 'data' | 'hash' | 'id'


/** columns and relationships of "marketplace_activity" */
export interface marketplace_activity {
    id: Scalars['uuid']
    internal_order_id: Scalars['String']
    /** ETH: ETH\nXTZ: XTZ\nFUNGIBLE_TOKEN: TEZOS_FT\nNON_FUNGIBLE_TOKEN: TEZOS_NFT\nMULTI_TOKEN: TEZOS_MT\nERC20: ERC20\nERC721: ERC721\nERC1155: ERC1155\nERC721_LAZY: ERC721_LAZY\nERC1155_LAZY: ERC1155_LAZY\nCOLLECTION: COLLECTION\nGEN_ART: GEN_ART */
    make_asset_class: Scalars['String']
    make_contract?: Scalars['String']
    make_token_id?: Scalars['String']
    make_value: Scalars['numeric']
    maker?: Scalars['String']
    network: Scalars['String']
    operation_counter: Scalars['Int']
    operation_hash: Scalars['String']
    operation_level: Scalars['Int']
    operation_nonce?: Scalars['Int']
    operation_timestamp: Scalars['timestamptz']
    order_id: Scalars['uuid']
    /** HEN: HEN\nOBJKT: OBJKT\nOBJKT_V2: OBJKT_V2\nRARIBLE_V1: RARIBLE_V1\nRARIBLE_V2: RARIBLE_V2 */
    platform: Scalars['String']
    /** ETH: ETH\nXTZ: XTZ\nFUNGIBLE_TOKEN: TEZOS_FT\nNON_FUNGIBLE_TOKEN: TEZOS_NFT\nMULTI_TOKEN: TEZOS_MT\nERC20: ERC20\nERC721: ERC721\nERC1155: ERC1155\nERC721_LAZY: ERC721_LAZY\nERC1155_LAZY: ERC1155_LAZY\nCOLLECTION: COLLECTION\nGEN_ART: GEN_ART */
    take_asset_class?: Scalars['String']
    take_contract?: Scalars['String']
    take_token_id?: Scalars['String']
    take_value?: Scalars['numeric']
    taker?: Scalars['String']
    /** GET_BID: GET_BID\nGET_FLOOR_BID: GET_FLOOR_BID\nORDER_LIST: LIST\nORDER_MATCH: SELL\nORDER_CANCEL: CANCEL_LIST\nCANCEL_BID: CANCEL_BID\nCANCEL_FLOOR_BID: CANCEL_FLOOR_BID\nMAKE_BID: MAKE_BID\nMAKE_FLOOR_BID: MAKE_FLOOR_BID\nTOKEN_MINT: MINT\nTOKEN_TRANSFER: TRANSFER\nTOKEN_BURN: BURN */
    type: Scalars['String']
    __typename: 'marketplace_activity'
}


/** select columns of table "marketplace_activity" */
export type marketplace_activity_select_column = 'id' | 'internal_order_id' | 'make_asset_class' | 'make_contract' | 'make_token_id' | 'make_value' | 'maker' | 'network' | 'operation_counter' | 'operation_hash' | 'operation_level' | 'operation_nonce' | 'operation_timestamp' | 'order_id' | 'platform' | 'take_asset_class' | 'take_contract' | 'take_token_id' | 'take_value' | 'taker' | 'type'


/** columns and relationships of "marketplace_order" */
export interface marketplace_order {
    cancelled: Scalars['Boolean']
    created_at: Scalars['timestamptz']
    end_at?: Scalars['timestamptz']
    ended_at?: Scalars['timestamptz']
    fill: Scalars['numeric']
    id: Scalars['uuid']
    internal_order_id: Scalars['String']
    last_updated_at: Scalars['timestamptz']
    /** ETH: ETH\nXTZ: XTZ\nFUNGIBLE_TOKEN: TEZOS_FT\nNON_FUNGIBLE_TOKEN: TEZOS_NFT\nMULTI_TOKEN: TEZOS_MT\nERC20: ERC20\nERC721: ERC721\nERC1155: ERC1155\nERC721_LAZY: ERC721_LAZY\nERC1155_LAZY: ERC1155_LAZY\nCOLLECTION: COLLECTION\nGEN_ART: GEN_ART */
    make_asset_class: Scalars['String']
    make_contract?: Scalars['String']
    make_token_id?: Scalars['String']
    make_value: Scalars['numeric']
    maker: Scalars['String']
    network: Scalars['String']
    origin_fees: Scalars['jsonb']
    payouts: Scalars['jsonb']
    /** HEN: HEN\nOBJKT: OBJKT\nOBJKT_V2: OBJKT_V2\nRARIBLE_V1: RARIBLE_V1\nRARIBLE_V2: RARIBLE_V2 */
    platform: Scalars['String']
    salt: Scalars['String']
    start_at: Scalars['timestamptz']
    /** ACTIVE: ACTIVE\nFILLED: FILLED\nHISTORICAL: HISTORICAL\nINACTIVE: INACTIVE\nCANCELLED: CANCELLED */
    status: Scalars['String']
    /** ETH: ETH\nXTZ: XTZ\nFUNGIBLE_TOKEN: TEZOS_FT\nNON_FUNGIBLE_TOKEN: TEZOS_NFT\nMULTI_TOKEN: TEZOS_MT\nERC20: ERC20\nERC721: ERC721\nERC1155: ERC1155\nERC721_LAZY: ERC721_LAZY\nERC1155_LAZY: ERC1155_LAZY\nCOLLECTION: COLLECTION\nGEN_ART: GEN_ART */
    take_asset_class?: Scalars['String']
    take_contract?: Scalars['String']
    take_token_id?: Scalars['String']
    take_value?: Scalars['numeric']
    taker?: Scalars['String']
    __typename: 'marketplace_order'
}


/** select columns of table "marketplace_order" */
export type marketplace_order_select_column = 'cancelled' | 'created_at' | 'end_at' | 'ended_at' | 'fill' | 'id' | 'internal_order_id' | 'last_updated_at' | 'make_asset_class' | 'make_contract' | 'make_token_id' | 'make_value' | 'maker' | 'network' | 'origin_fees' | 'payouts' | 'platform' | 'salt' | 'start_at' | 'status' | 'take_asset_class' | 'take_contract' | 'take_token_id' | 'take_value' | 'taker'


/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'

export interface query_root {
    /** fetch data from the table: "dipdup_contract" */
    dipdup_contract: dipdup_contract[]
    /** fetch data from the table: "dipdup_contract" using primary key columns */
    dipdup_contract_by_pk?: dipdup_contract
    /** fetch data from the table: "dipdup_contract_metadata" */
    dipdup_contract_metadata: dipdup_contract_metadata[]
    /** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
    dipdup_contract_metadata_by_pk?: dipdup_contract_metadata
    /** fetch data from the table: "dipdup_head" */
    dipdup_head: dipdup_head[]
    /** fetch data from the table: "dipdup_head" using primary key columns */
    dipdup_head_by_pk?: dipdup_head
    /** fetch data from the table: "dipdup_head_status" */
    dipdup_head_status: dipdup_head_status[]
    /** fetch data from the table: "dipdup_index" */
    dipdup_index: dipdup_index[]
    /** fetch data from the table: "dipdup_index" using primary key columns */
    dipdup_index_by_pk?: dipdup_index
    /** fetch data from the table: "dipdup_schema" */
    dipdup_schema: dipdup_schema[]
    /** fetch data from the table: "dipdup_schema" using primary key columns */
    dipdup_schema_by_pk?: dipdup_schema
    /** fetch data from the table: "dipdup_token_metadata" */
    dipdup_token_metadata: dipdup_token_metadata[]
    /** fetch data from the table: "dipdup_token_metadata" using primary key columns */
    dipdup_token_metadata_by_pk?: dipdup_token_metadata
    /** fetch data from the table: "indexing_status" */
    indexing_status: indexing_status[]
    /** fetch data from the table: "indexing_status" using primary key columns */
    indexing_status_by_pk?: indexing_status
    /** fetch data from the table: "legacy_orders" */
    legacy_orders: legacy_orders[]
    /** fetch data from the table: "legacy_orders" using primary key columns */
    legacy_orders_by_pk?: legacy_orders
    /** fetch data from the table: "marketplace_activity" */
    marketplace_activity: marketplace_activity[]
    /** fetch data from the table: "marketplace_activity" using primary key columns */
    marketplace_activity_by_pk?: marketplace_activity
    /** fetch data from the table: "marketplace_order" */
    marketplace_order: marketplace_order[]
    /** fetch data from the table: "marketplace_order" using primary key columns */
    marketplace_order_by_pk?: marketplace_order
    __typename: 'query_root'
}

export interface subscription_root {
    /** fetch data from the table: "dipdup_contract" */
    dipdup_contract: dipdup_contract[]
    /** fetch data from the table: "dipdup_contract" using primary key columns */
    dipdup_contract_by_pk?: dipdup_contract
    /** fetch data from the table: "dipdup_contract_metadata" */
    dipdup_contract_metadata: dipdup_contract_metadata[]
    /** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
    dipdup_contract_metadata_by_pk?: dipdup_contract_metadata
    /** fetch data from the table: "dipdup_head" */
    dipdup_head: dipdup_head[]
    /** fetch data from the table: "dipdup_head" using primary key columns */
    dipdup_head_by_pk?: dipdup_head
    /** fetch data from the table: "dipdup_head_status" */
    dipdup_head_status: dipdup_head_status[]
    /** fetch data from the table: "dipdup_index" */
    dipdup_index: dipdup_index[]
    /** fetch data from the table: "dipdup_index" using primary key columns */
    dipdup_index_by_pk?: dipdup_index
    /** fetch data from the table: "dipdup_schema" */
    dipdup_schema: dipdup_schema[]
    /** fetch data from the table: "dipdup_schema" using primary key columns */
    dipdup_schema_by_pk?: dipdup_schema
    /** fetch data from the table: "dipdup_token_metadata" */
    dipdup_token_metadata: dipdup_token_metadata[]
    /** fetch data from the table: "dipdup_token_metadata" using primary key columns */
    dipdup_token_metadata_by_pk?: dipdup_token_metadata
    /** fetch data from the table: "indexing_status" */
    indexing_status: indexing_status[]
    /** fetch data from the table: "indexing_status" using primary key columns */
    indexing_status_by_pk?: indexing_status
    /** fetch data from the table: "legacy_orders" */
    legacy_orders: legacy_orders[]
    /** fetch data from the table: "legacy_orders" using primary key columns */
    legacy_orders_by_pk?: legacy_orders
    /** fetch data from the table: "marketplace_activity" */
    marketplace_activity: marketplace_activity[]
    /** fetch data from the table: "marketplace_activity" using primary key columns */
    marketplace_activity_by_pk?: marketplace_activity
    /** fetch data from the table: "marketplace_order" */
    marketplace_order: marketplace_order[]
    /** fetch data from the table: "marketplace_order" using primary key columns */
    marketplace_order_by_pk?: marketplace_order
    __typename: 'subscription_root'
}

export type Query = query_root
export type Subscription = subscription_root


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface Boolean_comparison_exp {_eq?: (Scalars['Boolean'] | null),_gt?: (Scalars['Boolean'] | null),_gte?: (Scalars['Boolean'] | null),_in?: (Scalars['Boolean'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Boolean'] | null),_lte?: (Scalars['Boolean'] | null),_neq?: (Scalars['Boolean'] | null),_nin?: (Scalars['Boolean'][] | null)}


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {_eq?: (Scalars['Int'] | null),_gt?: (Scalars['Int'] | null),_gte?: (Scalars['Int'] | null),_in?: (Scalars['Int'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Int'] | null),_lte?: (Scalars['Int'] | null),_neq?: (Scalars['Int'] | null),_nin?: (Scalars['Int'][] | null)}


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {_eq?: (Scalars['String'] | null),_gt?: (Scalars['String'] | null),_gte?: (Scalars['String'] | null),
/** does the column match the given case-insensitive pattern */
_ilike?: (Scalars['String'] | null),_in?: (Scalars['String'][] | null),
/** does the column match the given POSIX regular expression, case insensitive */
_iregex?: (Scalars['String'] | null),_is_null?: (Scalars['Boolean'] | null),
/** does the column match the given pattern */
_like?: (Scalars['String'] | null),_lt?: (Scalars['String'] | null),_lte?: (Scalars['String'] | null),_neq?: (Scalars['String'] | null),
/** does the column NOT match the given case-insensitive pattern */
_nilike?: (Scalars['String'] | null),_nin?: (Scalars['String'][] | null),
/** does the column NOT match the given POSIX regular expression, case insensitive */
_niregex?: (Scalars['String'] | null),
/** does the column NOT match the given pattern */
_nlike?: (Scalars['String'] | null),
/** does the column NOT match the given POSIX regular expression, case sensitive */
_nregex?: (Scalars['String'] | null),
/** does the column NOT match the given SQL regular expression */
_nsimilar?: (Scalars['String'] | null),
/** does the column match the given POSIX regular expression, case sensitive */
_regex?: (Scalars['String'] | null),
/** does the column match the given SQL regular expression */
_similar?: (Scalars['String'] | null)}


/** columns and relationships of "dipdup_contract" */
export interface dipdup_contractRequest{
    address?: boolean | number
    created_at?: boolean | number
    name?: boolean | number
    typename?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_contract". All fields are combined with a logical 'AND'. */
export interface dipdup_contract_bool_exp {_and?: (dipdup_contract_bool_exp[] | null),_not?: (dipdup_contract_bool_exp | null),_or?: (dipdup_contract_bool_exp[] | null),address?: (String_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),name?: (String_comparison_exp | null),typename?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** columns and relationships of "dipdup_contract_metadata" */
export interface dipdup_contract_metadataRequest{
    contract?: boolean | number
    created_at?: boolean | number
    id?: boolean | number
    metadata?: [{
    /** JSON select path */
    path?: (Scalars['String'] | null)}] | boolean | number
    network?: boolean | number
    update_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_contract_metadata". All fields are combined with a logical 'AND'. */
export interface dipdup_contract_metadata_bool_exp {_and?: (dipdup_contract_metadata_bool_exp[] | null),_not?: (dipdup_contract_metadata_bool_exp | null),_or?: (dipdup_contract_metadata_bool_exp[] | null),contract?: (String_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),id?: (Int_comparison_exp | null),metadata?: (jsonb_comparison_exp | null),network?: (String_comparison_exp | null),update_id?: (Int_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** Ordering options when selecting data from "dipdup_contract_metadata". */
export interface dipdup_contract_metadata_order_by {contract?: (order_by | null),created_at?: (order_by | null),id?: (order_by | null),metadata?: (order_by | null),network?: (order_by | null),update_id?: (order_by | null),updated_at?: (order_by | null)}


/** Ordering options when selecting data from "dipdup_contract". */
export interface dipdup_contract_order_by {address?: (order_by | null),created_at?: (order_by | null),name?: (order_by | null),typename?: (order_by | null),updated_at?: (order_by | null)}


/** columns and relationships of "dipdup_head" */
export interface dipdup_headRequest{
    created_at?: boolean | number
    hash?: boolean | number
    level?: boolean | number
    name?: boolean | number
    timestamp?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_head". All fields are combined with a logical 'AND'. */
export interface dipdup_head_bool_exp {_and?: (dipdup_head_bool_exp[] | null),_not?: (dipdup_head_bool_exp | null),_or?: (dipdup_head_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),hash?: (String_comparison_exp | null),level?: (Int_comparison_exp | null),name?: (String_comparison_exp | null),timestamp?: (timestamptz_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** Ordering options when selecting data from "dipdup_head". */
export interface dipdup_head_order_by {created_at?: (order_by | null),hash?: (order_by | null),level?: (order_by | null),name?: (order_by | null),timestamp?: (order_by | null),updated_at?: (order_by | null)}


/** columns and relationships of "dipdup_head_status" */
export interface dipdup_head_statusRequest{
    name?: boolean | number
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_head_status". All fields are combined with a logical 'AND'. */
export interface dipdup_head_status_bool_exp {_and?: (dipdup_head_status_bool_exp[] | null),_not?: (dipdup_head_status_bool_exp | null),_or?: (dipdup_head_status_bool_exp[] | null),name?: (String_comparison_exp | null),status?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "dipdup_head_status". */
export interface dipdup_head_status_order_by {name?: (order_by | null),status?: (order_by | null)}


/** columns and relationships of "dipdup_index" */
export interface dipdup_indexRequest{
    config_hash?: boolean | number
    created_at?: boolean | number
    level?: boolean | number
    name?: boolean | number
    /** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
    status?: boolean | number
    template?: boolean | number
    template_values?: [{
    /** JSON select path */
    path?: (Scalars['String'] | null)}] | boolean | number
    /** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer */
    type?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_index". All fields are combined with a logical 'AND'. */
export interface dipdup_index_bool_exp {_and?: (dipdup_index_bool_exp[] | null),_not?: (dipdup_index_bool_exp | null),_or?: (dipdup_index_bool_exp[] | null),config_hash?: (String_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),level?: (Int_comparison_exp | null),name?: (String_comparison_exp | null),status?: (String_comparison_exp | null),template?: (String_comparison_exp | null),template_values?: (jsonb_comparison_exp | null),type?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** Ordering options when selecting data from "dipdup_index". */
export interface dipdup_index_order_by {config_hash?: (order_by | null),created_at?: (order_by | null),level?: (order_by | null),name?: (order_by | null),status?: (order_by | null),template?: (order_by | null),template_values?: (order_by | null),type?: (order_by | null),updated_at?: (order_by | null)}


/** columns and relationships of "dipdup_schema" */
export interface dipdup_schemaRequest{
    created_at?: boolean | number
    hash?: boolean | number
    name?: boolean | number
    /** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
    reindex?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_schema". All fields are combined with a logical 'AND'. */
export interface dipdup_schema_bool_exp {_and?: (dipdup_schema_bool_exp[] | null),_not?: (dipdup_schema_bool_exp | null),_or?: (dipdup_schema_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),hash?: (String_comparison_exp | null),name?: (String_comparison_exp | null),reindex?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** Ordering options when selecting data from "dipdup_schema". */
export interface dipdup_schema_order_by {created_at?: (order_by | null),hash?: (order_by | null),name?: (order_by | null),reindex?: (order_by | null),updated_at?: (order_by | null)}


/** columns and relationships of "dipdup_token_metadata" */
export interface dipdup_token_metadataRequest{
    contract?: boolean | number
    created_at?: boolean | number
    id?: boolean | number
    metadata?: [{
    /** JSON select path */
    path?: (Scalars['String'] | null)}] | boolean | number
    network?: boolean | number
    token_id?: boolean | number
    update_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_token_metadata". All fields are combined with a logical 'AND'. */
export interface dipdup_token_metadata_bool_exp {_and?: (dipdup_token_metadata_bool_exp[] | null),_not?: (dipdup_token_metadata_bool_exp | null),_or?: (dipdup_token_metadata_bool_exp[] | null),contract?: (String_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),id?: (Int_comparison_exp | null),metadata?: (jsonb_comparison_exp | null),network?: (String_comparison_exp | null),token_id?: (String_comparison_exp | null),update_id?: (Int_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** Ordering options when selecting data from "dipdup_token_metadata". */
export interface dipdup_token_metadata_order_by {contract?: (order_by | null),created_at?: (order_by | null),id?: (order_by | null),metadata?: (order_by | null),network?: (order_by | null),token_id?: (order_by | null),update_id?: (order_by | null),updated_at?: (order_by | null)}


/** columns and relationships of "indexing_status" */
export interface indexing_statusRequest{
    /** COLLECTION: COLLECTION\nLEGACY_ORDERS: LEGACY_ORDERS */
    index?: boolean | number
    last_level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "indexing_status". All fields are combined with a logical 'AND'. */
export interface indexing_status_bool_exp {_and?: (indexing_status_bool_exp[] | null),_not?: (indexing_status_bool_exp | null),_or?: (indexing_status_bool_exp[] | null),index?: (String_comparison_exp | null),last_level?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "indexing_status". */
export interface indexing_status_order_by {index?: (order_by | null),last_level?: (order_by | null)}


/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export interface jsonb_comparison_exp {
/** is the column contained in the given json value */
_contained_in?: (Scalars['jsonb'] | null),
/** does the column contain the given json value at the top level */
_contains?: (Scalars['jsonb'] | null),_eq?: (Scalars['jsonb'] | null),_gt?: (Scalars['jsonb'] | null),_gte?: (Scalars['jsonb'] | null),
/** does the string exist as a top-level key in the column */
_has_key?: (Scalars['String'] | null),
/** do all of these strings exist as top-level keys in the column */
_has_keys_all?: (Scalars['String'][] | null),
/** do any of these strings exist as top-level keys in the column */
_has_keys_any?: (Scalars['String'][] | null),_in?: (Scalars['jsonb'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['jsonb'] | null),_lte?: (Scalars['jsonb'] | null),_neq?: (Scalars['jsonb'] | null),_nin?: (Scalars['jsonb'][] | null)}


/** columns and relationships of "legacy_orders" */
export interface legacy_ordersRequest{
    data?: [{
    /** JSON select path */
    path?: (Scalars['String'] | null)}] | boolean | number
    hash?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "legacy_orders". All fields are combined with a logical 'AND'. */
export interface legacy_orders_bool_exp {_and?: (legacy_orders_bool_exp[] | null),_not?: (legacy_orders_bool_exp | null),_or?: (legacy_orders_bool_exp[] | null),data?: (jsonb_comparison_exp | null),hash?: (String_comparison_exp | null),id?: (uuid_comparison_exp | null)}


/** Ordering options when selecting data from "legacy_orders". */
export interface legacy_orders_order_by {data?: (order_by | null),hash?: (order_by | null),id?: (order_by | null)}


/** columns and relationships of "marketplace_activity" */
export interface marketplace_activityRequest{
    id?: boolean | number
    internal_order_id?: boolean | number
    /** ETH: ETH\nXTZ: XTZ\nFUNGIBLE_TOKEN: TEZOS_FT\nNON_FUNGIBLE_TOKEN: TEZOS_NFT\nMULTI_TOKEN: TEZOS_MT\nERC20: ERC20\nERC721: ERC721\nERC1155: ERC1155\nERC721_LAZY: ERC721_LAZY\nERC1155_LAZY: ERC1155_LAZY\nCOLLECTION: COLLECTION\nGEN_ART: GEN_ART */
    make_asset_class?: boolean | number
    make_contract?: boolean | number
    make_token_id?: boolean | number
    make_value?: boolean | number
    maker?: boolean | number
    network?: boolean | number
    operation_counter?: boolean | number
    operation_hash?: boolean | number
    operation_level?: boolean | number
    operation_nonce?: boolean | number
    operation_timestamp?: boolean | number
    order_id?: boolean | number
    /** HEN: HEN\nOBJKT: OBJKT\nOBJKT_V2: OBJKT_V2\nRARIBLE_V1: RARIBLE_V1\nRARIBLE_V2: RARIBLE_V2 */
    platform?: boolean | number
    /** ETH: ETH\nXTZ: XTZ\nFUNGIBLE_TOKEN: TEZOS_FT\nNON_FUNGIBLE_TOKEN: TEZOS_NFT\nMULTI_TOKEN: TEZOS_MT\nERC20: ERC20\nERC721: ERC721\nERC1155: ERC1155\nERC721_LAZY: ERC721_LAZY\nERC1155_LAZY: ERC1155_LAZY\nCOLLECTION: COLLECTION\nGEN_ART: GEN_ART */
    take_asset_class?: boolean | number
    take_contract?: boolean | number
    take_token_id?: boolean | number
    take_value?: boolean | number
    taker?: boolean | number
    /** GET_BID: GET_BID\nGET_FLOOR_BID: GET_FLOOR_BID\nORDER_LIST: LIST\nORDER_MATCH: SELL\nORDER_CANCEL: CANCEL_LIST\nCANCEL_BID: CANCEL_BID\nCANCEL_FLOOR_BID: CANCEL_FLOOR_BID\nMAKE_BID: MAKE_BID\nMAKE_FLOOR_BID: MAKE_FLOOR_BID\nTOKEN_MINT: MINT\nTOKEN_TRANSFER: TRANSFER\nTOKEN_BURN: BURN */
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "marketplace_activity". All fields are combined with a logical 'AND'. */
export interface marketplace_activity_bool_exp {_and?: (marketplace_activity_bool_exp[] | null),_not?: (marketplace_activity_bool_exp | null),_or?: (marketplace_activity_bool_exp[] | null),id?: (uuid_comparison_exp | null),internal_order_id?: (String_comparison_exp | null),make_asset_class?: (String_comparison_exp | null),make_contract?: (String_comparison_exp | null),make_token_id?: (String_comparison_exp | null),make_value?: (numeric_comparison_exp | null),maker?: (String_comparison_exp | null),network?: (String_comparison_exp | null),operation_counter?: (Int_comparison_exp | null),operation_hash?: (String_comparison_exp | null),operation_level?: (Int_comparison_exp | null),operation_nonce?: (Int_comparison_exp | null),operation_timestamp?: (timestamptz_comparison_exp | null),order_id?: (uuid_comparison_exp | null),platform?: (String_comparison_exp | null),take_asset_class?: (String_comparison_exp | null),take_contract?: (String_comparison_exp | null),take_token_id?: (String_comparison_exp | null),take_value?: (numeric_comparison_exp | null),taker?: (String_comparison_exp | null),type?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "marketplace_activity". */
export interface marketplace_activity_order_by {id?: (order_by | null),internal_order_id?: (order_by | null),make_asset_class?: (order_by | null),make_contract?: (order_by | null),make_token_id?: (order_by | null),make_value?: (order_by | null),maker?: (order_by | null),network?: (order_by | null),operation_counter?: (order_by | null),operation_hash?: (order_by | null),operation_level?: (order_by | null),operation_nonce?: (order_by | null),operation_timestamp?: (order_by | null),order_id?: (order_by | null),platform?: (order_by | null),take_asset_class?: (order_by | null),take_contract?: (order_by | null),take_token_id?: (order_by | null),take_value?: (order_by | null),taker?: (order_by | null),type?: (order_by | null)}


/** columns and relationships of "marketplace_order" */
export interface marketplace_orderRequest{
    cancelled?: boolean | number
    created_at?: boolean | number
    end_at?: boolean | number
    ended_at?: boolean | number
    fill?: boolean | number
    id?: boolean | number
    internal_order_id?: boolean | number
    last_updated_at?: boolean | number
    /** ETH: ETH\nXTZ: XTZ\nFUNGIBLE_TOKEN: TEZOS_FT\nNON_FUNGIBLE_TOKEN: TEZOS_NFT\nMULTI_TOKEN: TEZOS_MT\nERC20: ERC20\nERC721: ERC721\nERC1155: ERC1155\nERC721_LAZY: ERC721_LAZY\nERC1155_LAZY: ERC1155_LAZY\nCOLLECTION: COLLECTION\nGEN_ART: GEN_ART */
    make_asset_class?: boolean | number
    make_contract?: boolean | number
    make_token_id?: boolean | number
    make_value?: boolean | number
    maker?: boolean | number
    network?: boolean | number
    origin_fees?: [{
    /** JSON select path */
    path?: (Scalars['String'] | null)}] | boolean | number
    payouts?: [{
    /** JSON select path */
    path?: (Scalars['String'] | null)}] | boolean | number
    /** HEN: HEN\nOBJKT: OBJKT\nOBJKT_V2: OBJKT_V2\nRARIBLE_V1: RARIBLE_V1\nRARIBLE_V2: RARIBLE_V2 */
    platform?: boolean | number
    salt?: boolean | number
    start_at?: boolean | number
    /** ACTIVE: ACTIVE\nFILLED: FILLED\nHISTORICAL: HISTORICAL\nINACTIVE: INACTIVE\nCANCELLED: CANCELLED */
    status?: boolean | number
    /** ETH: ETH\nXTZ: XTZ\nFUNGIBLE_TOKEN: TEZOS_FT\nNON_FUNGIBLE_TOKEN: TEZOS_NFT\nMULTI_TOKEN: TEZOS_MT\nERC20: ERC20\nERC721: ERC721\nERC1155: ERC1155\nERC721_LAZY: ERC721_LAZY\nERC1155_LAZY: ERC1155_LAZY\nCOLLECTION: COLLECTION\nGEN_ART: GEN_ART */
    take_asset_class?: boolean | number
    take_contract?: boolean | number
    take_token_id?: boolean | number
    take_value?: boolean | number
    taker?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "marketplace_order". All fields are combined with a logical 'AND'. */
export interface marketplace_order_bool_exp {_and?: (marketplace_order_bool_exp[] | null),_not?: (marketplace_order_bool_exp | null),_or?: (marketplace_order_bool_exp[] | null),cancelled?: (Boolean_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),end_at?: (timestamptz_comparison_exp | null),ended_at?: (timestamptz_comparison_exp | null),fill?: (numeric_comparison_exp | null),id?: (uuid_comparison_exp | null),internal_order_id?: (String_comparison_exp | null),last_updated_at?: (timestamptz_comparison_exp | null),make_asset_class?: (String_comparison_exp | null),make_contract?: (String_comparison_exp | null),make_token_id?: (String_comparison_exp | null),make_value?: (numeric_comparison_exp | null),maker?: (String_comparison_exp | null),network?: (String_comparison_exp | null),origin_fees?: (jsonb_comparison_exp | null),payouts?: (jsonb_comparison_exp | null),platform?: (String_comparison_exp | null),salt?: (String_comparison_exp | null),start_at?: (timestamptz_comparison_exp | null),status?: (String_comparison_exp | null),take_asset_class?: (String_comparison_exp | null),take_contract?: (String_comparison_exp | null),take_token_id?: (String_comparison_exp | null),take_value?: (numeric_comparison_exp | null),taker?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "marketplace_order". */
export interface marketplace_order_order_by {cancelled?: (order_by | null),created_at?: (order_by | null),end_at?: (order_by | null),ended_at?: (order_by | null),fill?: (order_by | null),id?: (order_by | null),internal_order_id?: (order_by | null),last_updated_at?: (order_by | null),make_asset_class?: (order_by | null),make_contract?: (order_by | null),make_token_id?: (order_by | null),make_value?: (order_by | null),maker?: (order_by | null),network?: (order_by | null),origin_fees?: (order_by | null),payouts?: (order_by | null),platform?: (order_by | null),salt?: (order_by | null),start_at?: (order_by | null),status?: (order_by | null),take_asset_class?: (order_by | null),take_contract?: (order_by | null),take_token_id?: (order_by | null),take_value?: (order_by | null),taker?: (order_by | null)}


/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export interface numeric_comparison_exp {_eq?: (Scalars['numeric'] | null),_gt?: (Scalars['numeric'] | null),_gte?: (Scalars['numeric'] | null),_in?: (Scalars['numeric'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['numeric'] | null),_lte?: (Scalars['numeric'] | null),_neq?: (Scalars['numeric'] | null),_nin?: (Scalars['numeric'][] | null)}

export interface query_rootRequest{
    /** fetch data from the table: "dipdup_contract" */
    dipdup_contract?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_bool_exp | null)},dipdup_contractRequest] | dipdup_contractRequest
    /** fetch data from the table: "dipdup_contract" using primary key columns */
    dipdup_contract_by_pk?: [{name: Scalars['String']},dipdup_contractRequest]
    /** fetch data from the table: "dipdup_contract_metadata" */
    dipdup_contract_metadata?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_metadata_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_metadata_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_metadata_bool_exp | null)},dipdup_contract_metadataRequest] | dipdup_contract_metadataRequest
    /** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
    dipdup_contract_metadata_by_pk?: [{id: Scalars['Int']},dipdup_contract_metadataRequest]
    /** fetch data from the table: "dipdup_head" */
    dipdup_head?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_bool_exp | null)},dipdup_headRequest] | dipdup_headRequest
    /** fetch data from the table: "dipdup_head" using primary key columns */
    dipdup_head_by_pk?: [{name: Scalars['String']},dipdup_headRequest]
    /** fetch data from the table: "dipdup_head_status" */
    dipdup_head_status?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_status_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_status_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_status_bool_exp | null)},dipdup_head_statusRequest] | dipdup_head_statusRequest
    /** fetch data from the table: "dipdup_index" */
    dipdup_index?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_index_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_index_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_index_bool_exp | null)},dipdup_indexRequest] | dipdup_indexRequest
    /** fetch data from the table: "dipdup_index" using primary key columns */
    dipdup_index_by_pk?: [{name: Scalars['String']},dipdup_indexRequest]
    /** fetch data from the table: "dipdup_schema" */
    dipdup_schema?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_schema_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_schema_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_schema_bool_exp | null)},dipdup_schemaRequest] | dipdup_schemaRequest
    /** fetch data from the table: "dipdup_schema" using primary key columns */
    dipdup_schema_by_pk?: [{name: Scalars['String']},dipdup_schemaRequest]
    /** fetch data from the table: "dipdup_token_metadata" */
    dipdup_token_metadata?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_token_metadata_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_token_metadata_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_token_metadata_bool_exp | null)},dipdup_token_metadataRequest] | dipdup_token_metadataRequest
    /** fetch data from the table: "dipdup_token_metadata" using primary key columns */
    dipdup_token_metadata_by_pk?: [{id: Scalars['Int']},dipdup_token_metadataRequest]
    /** fetch data from the table: "indexing_status" */
    indexing_status?: [{
    /** distinct select on columns */
    distinct_on?: (indexing_status_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (indexing_status_order_by[] | null),
    /** filter the rows returned */
    where?: (indexing_status_bool_exp | null)},indexing_statusRequest] | indexing_statusRequest
    /** fetch data from the table: "indexing_status" using primary key columns */
    indexing_status_by_pk?: [{
    /** COLLECTION: COLLECTION\nLEGACY_ORDERS: LEGACY_ORDERS */
    index: Scalars['String']},indexing_statusRequest]
    /** fetch data from the table: "legacy_orders" */
    legacy_orders?: [{
    /** distinct select on columns */
    distinct_on?: (legacy_orders_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (legacy_orders_order_by[] | null),
    /** filter the rows returned */
    where?: (legacy_orders_bool_exp | null)},legacy_ordersRequest] | legacy_ordersRequest
    /** fetch data from the table: "legacy_orders" using primary key columns */
    legacy_orders_by_pk?: [{hash: Scalars['String']},legacy_ordersRequest]
    /** fetch data from the table: "marketplace_activity" */
    marketplace_activity?: [{
    /** distinct select on columns */
    distinct_on?: (marketplace_activity_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (marketplace_activity_order_by[] | null),
    /** filter the rows returned */
    where?: (marketplace_activity_bool_exp | null)},marketplace_activityRequest] | marketplace_activityRequest
    /** fetch data from the table: "marketplace_activity" using primary key columns */
    marketplace_activity_by_pk?: [{id: Scalars['uuid']},marketplace_activityRequest]
    /** fetch data from the table: "marketplace_order" */
    marketplace_order?: [{
    /** distinct select on columns */
    distinct_on?: (marketplace_order_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (marketplace_order_order_by[] | null),
    /** filter the rows returned */
    where?: (marketplace_order_bool_exp | null)},marketplace_orderRequest] | marketplace_orderRequest
    /** fetch data from the table: "marketplace_order" using primary key columns */
    marketplace_order_by_pk?: [{id: Scalars['uuid']},marketplace_orderRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface subscription_rootRequest{
    /** fetch data from the table: "dipdup_contract" */
    dipdup_contract?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_bool_exp | null)},dipdup_contractRequest] | dipdup_contractRequest
    /** fetch data from the table: "dipdup_contract" using primary key columns */
    dipdup_contract_by_pk?: [{name: Scalars['String']},dipdup_contractRequest]
    /** fetch data from the table: "dipdup_contract_metadata" */
    dipdup_contract_metadata?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_metadata_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_metadata_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_metadata_bool_exp | null)},dipdup_contract_metadataRequest] | dipdup_contract_metadataRequest
    /** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
    dipdup_contract_metadata_by_pk?: [{id: Scalars['Int']},dipdup_contract_metadataRequest]
    /** fetch data from the table: "dipdup_head" */
    dipdup_head?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_bool_exp | null)},dipdup_headRequest] | dipdup_headRequest
    /** fetch data from the table: "dipdup_head" using primary key columns */
    dipdup_head_by_pk?: [{name: Scalars['String']},dipdup_headRequest]
    /** fetch data from the table: "dipdup_head_status" */
    dipdup_head_status?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_status_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_status_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_status_bool_exp | null)},dipdup_head_statusRequest] | dipdup_head_statusRequest
    /** fetch data from the table: "dipdup_index" */
    dipdup_index?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_index_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_index_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_index_bool_exp | null)},dipdup_indexRequest] | dipdup_indexRequest
    /** fetch data from the table: "dipdup_index" using primary key columns */
    dipdup_index_by_pk?: [{name: Scalars['String']},dipdup_indexRequest]
    /** fetch data from the table: "dipdup_schema" */
    dipdup_schema?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_schema_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_schema_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_schema_bool_exp | null)},dipdup_schemaRequest] | dipdup_schemaRequest
    /** fetch data from the table: "dipdup_schema" using primary key columns */
    dipdup_schema_by_pk?: [{name: Scalars['String']},dipdup_schemaRequest]
    /** fetch data from the table: "dipdup_token_metadata" */
    dipdup_token_metadata?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_token_metadata_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_token_metadata_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_token_metadata_bool_exp | null)},dipdup_token_metadataRequest] | dipdup_token_metadataRequest
    /** fetch data from the table: "dipdup_token_metadata" using primary key columns */
    dipdup_token_metadata_by_pk?: [{id: Scalars['Int']},dipdup_token_metadataRequest]
    /** fetch data from the table: "indexing_status" */
    indexing_status?: [{
    /** distinct select on columns */
    distinct_on?: (indexing_status_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (indexing_status_order_by[] | null),
    /** filter the rows returned */
    where?: (indexing_status_bool_exp | null)},indexing_statusRequest] | indexing_statusRequest
    /** fetch data from the table: "indexing_status" using primary key columns */
    indexing_status_by_pk?: [{
    /** COLLECTION: COLLECTION\nLEGACY_ORDERS: LEGACY_ORDERS */
    index: Scalars['String']},indexing_statusRequest]
    /** fetch data from the table: "legacy_orders" */
    legacy_orders?: [{
    /** distinct select on columns */
    distinct_on?: (legacy_orders_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (legacy_orders_order_by[] | null),
    /** filter the rows returned */
    where?: (legacy_orders_bool_exp | null)},legacy_ordersRequest] | legacy_ordersRequest
    /** fetch data from the table: "legacy_orders" using primary key columns */
    legacy_orders_by_pk?: [{hash: Scalars['String']},legacy_ordersRequest]
    /** fetch data from the table: "marketplace_activity" */
    marketplace_activity?: [{
    /** distinct select on columns */
    distinct_on?: (marketplace_activity_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (marketplace_activity_order_by[] | null),
    /** filter the rows returned */
    where?: (marketplace_activity_bool_exp | null)},marketplace_activityRequest] | marketplace_activityRequest
    /** fetch data from the table: "marketplace_activity" using primary key columns */
    marketplace_activity_by_pk?: [{id: Scalars['uuid']},marketplace_activityRequest]
    /** fetch data from the table: "marketplace_order" */
    marketplace_order?: [{
    /** distinct select on columns */
    distinct_on?: (marketplace_order_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (marketplace_order_order_by[] | null),
    /** filter the rows returned */
    where?: (marketplace_order_bool_exp | null)},marketplace_orderRequest] | marketplace_orderRequest
    /** fetch data from the table: "marketplace_order" using primary key columns */
    marketplace_order_by_pk?: [{id: Scalars['uuid']},marketplace_orderRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {_eq?: (Scalars['timestamptz'] | null),_gt?: (Scalars['timestamptz'] | null),_gte?: (Scalars['timestamptz'] | null),_in?: (Scalars['timestamptz'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamptz'] | null),_lte?: (Scalars['timestamptz'] | null),_neq?: (Scalars['timestamptz'] | null),_nin?: (Scalars['timestamptz'][] | null)}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface uuid_comparison_exp {_eq?: (Scalars['uuid'] | null),_gt?: (Scalars['uuid'] | null),_gte?: (Scalars['uuid'] | null),_in?: (Scalars['uuid'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['uuid'] | null),_lte?: (Scalars['uuid'] | null),_neq?: (Scalars['uuid'] | null),_nin?: (Scalars['uuid'][] | null)}

export type QueryRequest = query_rootRequest
export type SubscriptionRequest = subscription_rootRequest


const dipdup_contract_possibleTypes: string[] = ['dipdup_contract']
export const isdipdup_contract = (obj?: { __typename?: any } | null): obj is dipdup_contract => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract"')
  return dipdup_contract_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_metadata_possibleTypes: string[] = ['dipdup_contract_metadata']
export const isdipdup_contract_metadata = (obj?: { __typename?: any } | null): obj is dipdup_contract_metadata => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_metadata"')
  return dipdup_contract_metadata_possibleTypes.includes(obj.__typename)
}



const dipdup_head_possibleTypes: string[] = ['dipdup_head']
export const isdipdup_head = (obj?: { __typename?: any } | null): obj is dipdup_head => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head"')
  return dipdup_head_possibleTypes.includes(obj.__typename)
}



const dipdup_head_status_possibleTypes: string[] = ['dipdup_head_status']
export const isdipdup_head_status = (obj?: { __typename?: any } | null): obj is dipdup_head_status => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_status"')
  return dipdup_head_status_possibleTypes.includes(obj.__typename)
}



const dipdup_index_possibleTypes: string[] = ['dipdup_index']
export const isdipdup_index = (obj?: { __typename?: any } | null): obj is dipdup_index => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index"')
  return dipdup_index_possibleTypes.includes(obj.__typename)
}



const dipdup_schema_possibleTypes: string[] = ['dipdup_schema']
export const isdipdup_schema = (obj?: { __typename?: any } | null): obj is dipdup_schema => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_schema"')
  return dipdup_schema_possibleTypes.includes(obj.__typename)
}



const dipdup_token_metadata_possibleTypes: string[] = ['dipdup_token_metadata']
export const isdipdup_token_metadata = (obj?: { __typename?: any } | null): obj is dipdup_token_metadata => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_token_metadata"')
  return dipdup_token_metadata_possibleTypes.includes(obj.__typename)
}



const indexing_status_possibleTypes: string[] = ['indexing_status']
export const isindexing_status = (obj?: { __typename?: any } | null): obj is indexing_status => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isindexing_status"')
  return indexing_status_possibleTypes.includes(obj.__typename)
}



const legacy_orders_possibleTypes: string[] = ['legacy_orders']
export const islegacy_orders = (obj?: { __typename?: any } | null): obj is legacy_orders => {
  if (!obj?.__typename) throw new Error('__typename is missing in "islegacy_orders"')
  return legacy_orders_possibleTypes.includes(obj.__typename)
}



const marketplace_activity_possibleTypes: string[] = ['marketplace_activity']
export const ismarketplace_activity = (obj?: { __typename?: any } | null): obj is marketplace_activity => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismarketplace_activity"')
  return marketplace_activity_possibleTypes.includes(obj.__typename)
}



const marketplace_order_possibleTypes: string[] = ['marketplace_order']
export const ismarketplace_order = (obj?: { __typename?: any } | null): obj is marketplace_order => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismarketplace_order"')
  return marketplace_order_possibleTypes.includes(obj.__typename)
}



const query_root_possibleTypes: string[] = ['query_root']
export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}



const subscription_root_possibleTypes: string[] = ['subscription_root']
export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}



/** columns and relationships of "dipdup_contract" */
export interface dipdup_contractPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    typename: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_contract" */
export interface dipdup_contractObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    typename: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_contract_metadata" */
export interface dipdup_contract_metadataPromiseChain{
    contract: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    metadata: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Promise<Scalars['jsonb']>})&({get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Promise<Scalars['jsonb']>}),
    network: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_contract_metadata" */
export interface dipdup_contract_metadataObservableChain{
    contract: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    metadata: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Observable<Scalars['jsonb']>})&({get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Observable<Scalars['jsonb']>}),
    network: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_head" */
export interface dipdup_headPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_head" */
export interface dipdup_headObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_head_status" */
export interface dipdup_head_statusPromiseChain{
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** columns and relationships of "dipdup_head_status" */
export interface dipdup_head_statusObservableChain{
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** columns and relationships of "dipdup_index" */
export interface dipdup_indexPromiseChain{
    config_hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
status: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    template: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    template_values: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Promise<(Scalars['jsonb'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Promise<(Scalars['jsonb'] | undefined)>}),
    
/** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer */
type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_index" */
export interface dipdup_indexObservableChain{
    config_hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
status: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    template: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    template_values: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Observable<(Scalars['jsonb'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Observable<(Scalars['jsonb'] | undefined)>}),
    
/** operation: operation\nbig_map: big_map\nhead: head\ntoken_transfer: token_transfer */
type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_schema" */
export interface dipdup_schemaPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
reindex: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_schema" */
export interface dipdup_schemaObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** manual: manual\nmigration: migration\nrollback: rollback\nconfig_modified: config_modified\nschema_modified: schema_modified */
reindex: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_token_metadata" */
export interface dipdup_token_metadataPromiseChain{
    contract: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    metadata: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Promise<Scalars['jsonb']>})&({get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Promise<Scalars['jsonb']>}),
    network: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_token_metadata" */
export interface dipdup_token_metadataObservableChain{
    contract: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    metadata: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Observable<Scalars['jsonb']>})&({get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Observable<Scalars['jsonb']>}),
    network: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    update_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** columns and relationships of "indexing_status" */
export interface indexing_statusPromiseChain{
    
/** COLLECTION: COLLECTION\nLEGACY_ORDERS: LEGACY_ORDERS */
index: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    last_level: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "indexing_status" */
export interface indexing_statusObservableChain{
    
/** COLLECTION: COLLECTION\nLEGACY_ORDERS: LEGACY_ORDERS */
index: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    last_level: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** columns and relationships of "legacy_orders" */
export interface legacy_ordersPromiseChain{
    data: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Promise<Scalars['jsonb']>})&({get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Promise<Scalars['jsonb']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>})
}


/** columns and relationships of "legacy_orders" */
export interface legacy_ordersObservableChain{
    data: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Observable<Scalars['jsonb']>})&({get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Observable<Scalars['jsonb']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>})
}


/** columns and relationships of "marketplace_activity" */
export interface marketplace_activityPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>}),
    internal_order_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** ETH: ETH\nXTZ: XTZ\nFUNGIBLE_TOKEN: TEZOS_FT\nNON_FUNGIBLE_TOKEN: TEZOS_NFT\nMULTI_TOKEN: TEZOS_MT\nERC20: ERC20\nERC721: ERC721\nERC1155: ERC1155\nERC721_LAZY: ERC721_LAZY\nERC1155_LAZY: ERC1155_LAZY\nCOLLECTION: COLLECTION\nGEN_ART: GEN_ART */
make_asset_class: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    make_contract: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    make_token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    make_value: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    maker: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    network: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    operation_counter: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    operation_hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    operation_level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    operation_nonce: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    operation_timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    order_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>}),
    
/** HEN: HEN\nOBJKT: OBJKT\nOBJKT_V2: OBJKT_V2\nRARIBLE_V1: RARIBLE_V1\nRARIBLE_V2: RARIBLE_V2 */
platform: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** ETH: ETH\nXTZ: XTZ\nFUNGIBLE_TOKEN: TEZOS_FT\nNON_FUNGIBLE_TOKEN: TEZOS_NFT\nMULTI_TOKEN: TEZOS_MT\nERC20: ERC20\nERC721: ERC721\nERC1155: ERC1155\nERC721_LAZY: ERC721_LAZY\nERC1155_LAZY: ERC1155_LAZY\nCOLLECTION: COLLECTION\nGEN_ART: GEN_ART */
take_asset_class: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    take_contract: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    take_token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    take_value: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    taker: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** GET_BID: GET_BID\nGET_FLOOR_BID: GET_FLOOR_BID\nORDER_LIST: LIST\nORDER_MATCH: SELL\nORDER_CANCEL: CANCEL_LIST\nCANCEL_BID: CANCEL_BID\nCANCEL_FLOOR_BID: CANCEL_FLOOR_BID\nMAKE_BID: MAKE_BID\nMAKE_FLOOR_BID: MAKE_FLOOR_BID\nTOKEN_MINT: MINT\nTOKEN_TRANSFER: TRANSFER\nTOKEN_BURN: BURN */
type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "marketplace_activity" */
export interface marketplace_activityObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>}),
    internal_order_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** ETH: ETH\nXTZ: XTZ\nFUNGIBLE_TOKEN: TEZOS_FT\nNON_FUNGIBLE_TOKEN: TEZOS_NFT\nMULTI_TOKEN: TEZOS_MT\nERC20: ERC20\nERC721: ERC721\nERC1155: ERC1155\nERC721_LAZY: ERC721_LAZY\nERC1155_LAZY: ERC1155_LAZY\nCOLLECTION: COLLECTION\nGEN_ART: GEN_ART */
make_asset_class: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    make_contract: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    make_token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    make_value: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    maker: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    network: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    operation_counter: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    operation_hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    operation_level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    operation_nonce: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    operation_timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    order_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>}),
    
/** HEN: HEN\nOBJKT: OBJKT\nOBJKT_V2: OBJKT_V2\nRARIBLE_V1: RARIBLE_V1\nRARIBLE_V2: RARIBLE_V2 */
platform: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** ETH: ETH\nXTZ: XTZ\nFUNGIBLE_TOKEN: TEZOS_FT\nNON_FUNGIBLE_TOKEN: TEZOS_NFT\nMULTI_TOKEN: TEZOS_MT\nERC20: ERC20\nERC721: ERC721\nERC1155: ERC1155\nERC721_LAZY: ERC721_LAZY\nERC1155_LAZY: ERC1155_LAZY\nCOLLECTION: COLLECTION\nGEN_ART: GEN_ART */
take_asset_class: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    take_contract: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    take_token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    take_value: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    taker: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** GET_BID: GET_BID\nGET_FLOOR_BID: GET_FLOOR_BID\nORDER_LIST: LIST\nORDER_MATCH: SELL\nORDER_CANCEL: CANCEL_LIST\nCANCEL_BID: CANCEL_BID\nCANCEL_FLOOR_BID: CANCEL_FLOOR_BID\nMAKE_BID: MAKE_BID\nMAKE_FLOOR_BID: MAKE_FLOOR_BID\nTOKEN_MINT: MINT\nTOKEN_TRANSFER: TRANSFER\nTOKEN_BURN: BURN */
type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** columns and relationships of "marketplace_order" */
export interface marketplace_orderPromiseChain{
    cancelled: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    end_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    ended_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    fill: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>}),
    internal_order_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    last_updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    
/** ETH: ETH\nXTZ: XTZ\nFUNGIBLE_TOKEN: TEZOS_FT\nNON_FUNGIBLE_TOKEN: TEZOS_NFT\nMULTI_TOKEN: TEZOS_MT\nERC20: ERC20\nERC721: ERC721\nERC1155: ERC1155\nERC721_LAZY: ERC721_LAZY\nERC1155_LAZY: ERC1155_LAZY\nCOLLECTION: COLLECTION\nGEN_ART: GEN_ART */
make_asset_class: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    make_contract: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    make_token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    make_value: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Promise<Scalars['numeric']>}),
    maker: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    network: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    origin_fees: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Promise<Scalars['jsonb']>})&({get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Promise<Scalars['jsonb']>}),
    payouts: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Promise<Scalars['jsonb']>})&({get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Promise<Scalars['jsonb']>}),
    
/** HEN: HEN\nOBJKT: OBJKT\nOBJKT_V2: OBJKT_V2\nRARIBLE_V1: RARIBLE_V1\nRARIBLE_V2: RARIBLE_V2 */
platform: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    salt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    start_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    
/** ACTIVE: ACTIVE\nFILLED: FILLED\nHISTORICAL: HISTORICAL\nINACTIVE: INACTIVE\nCANCELLED: CANCELLED */
status: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** ETH: ETH\nXTZ: XTZ\nFUNGIBLE_TOKEN: TEZOS_FT\nNON_FUNGIBLE_TOKEN: TEZOS_NFT\nMULTI_TOKEN: TEZOS_MT\nERC20: ERC20\nERC721: ERC721\nERC1155: ERC1155\nERC721_LAZY: ERC721_LAZY\nERC1155_LAZY: ERC1155_LAZY\nCOLLECTION: COLLECTION\nGEN_ART: GEN_ART */
take_asset_class: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    take_contract: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    take_token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    take_value: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Promise<(Scalars['numeric'] | undefined)>}),
    taker: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** columns and relationships of "marketplace_order" */
export interface marketplace_orderObservableChain{
    cancelled: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    end_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    ended_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    fill: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>}),
    internal_order_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    last_updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    
/** ETH: ETH\nXTZ: XTZ\nFUNGIBLE_TOKEN: TEZOS_FT\nNON_FUNGIBLE_TOKEN: TEZOS_NFT\nMULTI_TOKEN: TEZOS_MT\nERC20: ERC20\nERC721: ERC721\nERC1155: ERC1155\nERC721_LAZY: ERC721_LAZY\nERC1155_LAZY: ERC1155_LAZY\nCOLLECTION: COLLECTION\nGEN_ART: GEN_ART */
make_asset_class: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    make_contract: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    make_token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    make_value: ({get: (request?: boolean|number, defaultValue?: Scalars['numeric']) => Observable<Scalars['numeric']>}),
    maker: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    network: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    origin_fees: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Observable<Scalars['jsonb']>})&({get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Observable<Scalars['jsonb']>}),
    payouts: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Observable<Scalars['jsonb']>})&({get: (request?: boolean|number, defaultValue?: Scalars['jsonb']) => Observable<Scalars['jsonb']>}),
    
/** HEN: HEN\nOBJKT: OBJKT\nOBJKT_V2: OBJKT_V2\nRARIBLE_V1: RARIBLE_V1\nRARIBLE_V2: RARIBLE_V2 */
platform: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    salt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    start_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    
/** ACTIVE: ACTIVE\nFILLED: FILLED\nHISTORICAL: HISTORICAL\nINACTIVE: INACTIVE\nCANCELLED: CANCELLED */
status: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** ETH: ETH\nXTZ: XTZ\nFUNGIBLE_TOKEN: TEZOS_FT\nNON_FUNGIBLE_TOKEN: TEZOS_NFT\nMULTI_TOKEN: TEZOS_MT\nERC20: ERC20\nERC721: ERC721\nERC1155: ERC1155\nERC721_LAZY: ERC721_LAZY\nERC1155_LAZY: ERC1155_LAZY\nCOLLECTION: COLLECTION\nGEN_ART: GEN_ART */
take_asset_class: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    take_contract: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    take_token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    take_value: ({get: (request?: boolean|number, defaultValue?: (Scalars['numeric'] | undefined)) => Observable<(Scalars['numeric'] | undefined)>}),
    taker: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}

export interface query_rootPromiseChain{
    
/** fetch data from the table: "dipdup_contract" */
dipdup_contract: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>})&({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>}),
    
/** fetch data from the table: "dipdup_contract" using primary key columns */
dipdup_contract_by_pk: ((args: {name: Scalars['String']}) => dipdup_contractPromiseChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract_metadata" */
dipdup_contract_metadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_metadata_bool_exp | null)}) => {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Promise<FieldsSelection<dipdup_contract_metadata, R>[]>})&({get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Promise<FieldsSelection<dipdup_contract_metadata, R>[]>}),
    
/** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
dipdup_contract_metadata_by_pk: ((args: {id: Scalars['Int']}) => dipdup_contract_metadataPromiseChain & {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_metadata, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head" */
dipdup_head: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>})&({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>}),
    
/** fetch data from the table: "dipdup_head" using primary key columns */
dipdup_head_by_pk: ((args: {name: Scalars['String']}) => dipdup_headPromiseChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Promise<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head_status" */
dipdup_head_status: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_status_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_status_bool_exp | null)}) => {get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Promise<FieldsSelection<dipdup_head_status, R>[]>})&({get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Promise<FieldsSelection<dipdup_head_status, R>[]>}),
    
/** fetch data from the table: "dipdup_index" */
dipdup_index: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>})&({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>}),
    
/** fetch data from the table: "dipdup_index" using primary key columns */
dipdup_index_by_pk: ((args: {name: Scalars['String']}) => dipdup_indexPromiseChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Promise<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_schema" */
dipdup_schema: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>})&({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>}),
    
/** fetch data from the table: "dipdup_schema" using primary key columns */
dipdup_schema_by_pk: ((args: {name: Scalars['String']}) => dipdup_schemaPromiseChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Promise<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_token_metadata" */
dipdup_token_metadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_token_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_token_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_token_metadata_bool_exp | null)}) => {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Promise<FieldsSelection<dipdup_token_metadata, R>[]>})&({get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Promise<FieldsSelection<dipdup_token_metadata, R>[]>}),
    
/** fetch data from the table: "dipdup_token_metadata" using primary key columns */
dipdup_token_metadata_by_pk: ((args: {id: Scalars['Int']}) => dipdup_token_metadataPromiseChain & {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata, R> | undefined)) => Promise<(FieldsSelection<dipdup_token_metadata, R> | undefined)>}),
    
/** fetch data from the table: "indexing_status" */
indexing_status: ((args?: {
/** distinct select on columns */
distinct_on?: (indexing_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (indexing_status_order_by[] | null),
/** filter the rows returned */
where?: (indexing_status_bool_exp | null)}) => {get: <R extends indexing_statusRequest>(request: R, defaultValue?: FieldsSelection<indexing_status, R>[]) => Promise<FieldsSelection<indexing_status, R>[]>})&({get: <R extends indexing_statusRequest>(request: R, defaultValue?: FieldsSelection<indexing_status, R>[]) => Promise<FieldsSelection<indexing_status, R>[]>}),
    
/** fetch data from the table: "indexing_status" using primary key columns */
indexing_status_by_pk: ((args: {
/** COLLECTION: COLLECTION\nLEGACY_ORDERS: LEGACY_ORDERS */
index: Scalars['String']}) => indexing_statusPromiseChain & {get: <R extends indexing_statusRequest>(request: R, defaultValue?: (FieldsSelection<indexing_status, R> | undefined)) => Promise<(FieldsSelection<indexing_status, R> | undefined)>}),
    
/** fetch data from the table: "legacy_orders" */
legacy_orders: ((args?: {
/** distinct select on columns */
distinct_on?: (legacy_orders_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (legacy_orders_order_by[] | null),
/** filter the rows returned */
where?: (legacy_orders_bool_exp | null)}) => {get: <R extends legacy_ordersRequest>(request: R, defaultValue?: FieldsSelection<legacy_orders, R>[]) => Promise<FieldsSelection<legacy_orders, R>[]>})&({get: <R extends legacy_ordersRequest>(request: R, defaultValue?: FieldsSelection<legacy_orders, R>[]) => Promise<FieldsSelection<legacy_orders, R>[]>}),
    
/** fetch data from the table: "legacy_orders" using primary key columns */
legacy_orders_by_pk: ((args: {hash: Scalars['String']}) => legacy_ordersPromiseChain & {get: <R extends legacy_ordersRequest>(request: R, defaultValue?: (FieldsSelection<legacy_orders, R> | undefined)) => Promise<(FieldsSelection<legacy_orders, R> | undefined)>}),
    
/** fetch data from the table: "marketplace_activity" */
marketplace_activity: ((args?: {
/** distinct select on columns */
distinct_on?: (marketplace_activity_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (marketplace_activity_order_by[] | null),
/** filter the rows returned */
where?: (marketplace_activity_bool_exp | null)}) => {get: <R extends marketplace_activityRequest>(request: R, defaultValue?: FieldsSelection<marketplace_activity, R>[]) => Promise<FieldsSelection<marketplace_activity, R>[]>})&({get: <R extends marketplace_activityRequest>(request: R, defaultValue?: FieldsSelection<marketplace_activity, R>[]) => Promise<FieldsSelection<marketplace_activity, R>[]>}),
    
/** fetch data from the table: "marketplace_activity" using primary key columns */
marketplace_activity_by_pk: ((args: {id: Scalars['uuid']}) => marketplace_activityPromiseChain & {get: <R extends marketplace_activityRequest>(request: R, defaultValue?: (FieldsSelection<marketplace_activity, R> | undefined)) => Promise<(FieldsSelection<marketplace_activity, R> | undefined)>}),
    
/** fetch data from the table: "marketplace_order" */
marketplace_order: ((args?: {
/** distinct select on columns */
distinct_on?: (marketplace_order_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (marketplace_order_order_by[] | null),
/** filter the rows returned */
where?: (marketplace_order_bool_exp | null)}) => {get: <R extends marketplace_orderRequest>(request: R, defaultValue?: FieldsSelection<marketplace_order, R>[]) => Promise<FieldsSelection<marketplace_order, R>[]>})&({get: <R extends marketplace_orderRequest>(request: R, defaultValue?: FieldsSelection<marketplace_order, R>[]) => Promise<FieldsSelection<marketplace_order, R>[]>}),
    
/** fetch data from the table: "marketplace_order" using primary key columns */
marketplace_order_by_pk: ((args: {id: Scalars['uuid']}) => marketplace_orderPromiseChain & {get: <R extends marketplace_orderRequest>(request: R, defaultValue?: (FieldsSelection<marketplace_order, R> | undefined)) => Promise<(FieldsSelection<marketplace_order, R> | undefined)>})
}

export interface query_rootObservableChain{
    
/** fetch data from the table: "dipdup_contract" */
dipdup_contract: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>})&({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>}),
    
/** fetch data from the table: "dipdup_contract" using primary key columns */
dipdup_contract_by_pk: ((args: {name: Scalars['String']}) => dipdup_contractObservableChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract_metadata" */
dipdup_contract_metadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_metadata_bool_exp | null)}) => {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Observable<FieldsSelection<dipdup_contract_metadata, R>[]>})&({get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Observable<FieldsSelection<dipdup_contract_metadata, R>[]>}),
    
/** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
dipdup_contract_metadata_by_pk: ((args: {id: Scalars['Int']}) => dipdup_contract_metadataObservableChain & {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_metadata, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head" */
dipdup_head: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>})&({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>}),
    
/** fetch data from the table: "dipdup_head" using primary key columns */
dipdup_head_by_pk: ((args: {name: Scalars['String']}) => dipdup_headObservableChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Observable<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head_status" */
dipdup_head_status: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_status_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_status_bool_exp | null)}) => {get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Observable<FieldsSelection<dipdup_head_status, R>[]>})&({get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Observable<FieldsSelection<dipdup_head_status, R>[]>}),
    
/** fetch data from the table: "dipdup_index" */
dipdup_index: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>})&({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>}),
    
/** fetch data from the table: "dipdup_index" using primary key columns */
dipdup_index_by_pk: ((args: {name: Scalars['String']}) => dipdup_indexObservableChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Observable<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_schema" */
dipdup_schema: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>})&({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>}),
    
/** fetch data from the table: "dipdup_schema" using primary key columns */
dipdup_schema_by_pk: ((args: {name: Scalars['String']}) => dipdup_schemaObservableChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Observable<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_token_metadata" */
dipdup_token_metadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_token_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_token_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_token_metadata_bool_exp | null)}) => {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Observable<FieldsSelection<dipdup_token_metadata, R>[]>})&({get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Observable<FieldsSelection<dipdup_token_metadata, R>[]>}),
    
/** fetch data from the table: "dipdup_token_metadata" using primary key columns */
dipdup_token_metadata_by_pk: ((args: {id: Scalars['Int']}) => dipdup_token_metadataObservableChain & {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata, R> | undefined)) => Observable<(FieldsSelection<dipdup_token_metadata, R> | undefined)>}),
    
/** fetch data from the table: "indexing_status" */
indexing_status: ((args?: {
/** distinct select on columns */
distinct_on?: (indexing_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (indexing_status_order_by[] | null),
/** filter the rows returned */
where?: (indexing_status_bool_exp | null)}) => {get: <R extends indexing_statusRequest>(request: R, defaultValue?: FieldsSelection<indexing_status, R>[]) => Observable<FieldsSelection<indexing_status, R>[]>})&({get: <R extends indexing_statusRequest>(request: R, defaultValue?: FieldsSelection<indexing_status, R>[]) => Observable<FieldsSelection<indexing_status, R>[]>}),
    
/** fetch data from the table: "indexing_status" using primary key columns */
indexing_status_by_pk: ((args: {
/** COLLECTION: COLLECTION\nLEGACY_ORDERS: LEGACY_ORDERS */
index: Scalars['String']}) => indexing_statusObservableChain & {get: <R extends indexing_statusRequest>(request: R, defaultValue?: (FieldsSelection<indexing_status, R> | undefined)) => Observable<(FieldsSelection<indexing_status, R> | undefined)>}),
    
/** fetch data from the table: "legacy_orders" */
legacy_orders: ((args?: {
/** distinct select on columns */
distinct_on?: (legacy_orders_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (legacy_orders_order_by[] | null),
/** filter the rows returned */
where?: (legacy_orders_bool_exp | null)}) => {get: <R extends legacy_ordersRequest>(request: R, defaultValue?: FieldsSelection<legacy_orders, R>[]) => Observable<FieldsSelection<legacy_orders, R>[]>})&({get: <R extends legacy_ordersRequest>(request: R, defaultValue?: FieldsSelection<legacy_orders, R>[]) => Observable<FieldsSelection<legacy_orders, R>[]>}),
    
/** fetch data from the table: "legacy_orders" using primary key columns */
legacy_orders_by_pk: ((args: {hash: Scalars['String']}) => legacy_ordersObservableChain & {get: <R extends legacy_ordersRequest>(request: R, defaultValue?: (FieldsSelection<legacy_orders, R> | undefined)) => Observable<(FieldsSelection<legacy_orders, R> | undefined)>}),
    
/** fetch data from the table: "marketplace_activity" */
marketplace_activity: ((args?: {
/** distinct select on columns */
distinct_on?: (marketplace_activity_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (marketplace_activity_order_by[] | null),
/** filter the rows returned */
where?: (marketplace_activity_bool_exp | null)}) => {get: <R extends marketplace_activityRequest>(request: R, defaultValue?: FieldsSelection<marketplace_activity, R>[]) => Observable<FieldsSelection<marketplace_activity, R>[]>})&({get: <R extends marketplace_activityRequest>(request: R, defaultValue?: FieldsSelection<marketplace_activity, R>[]) => Observable<FieldsSelection<marketplace_activity, R>[]>}),
    
/** fetch data from the table: "marketplace_activity" using primary key columns */
marketplace_activity_by_pk: ((args: {id: Scalars['uuid']}) => marketplace_activityObservableChain & {get: <R extends marketplace_activityRequest>(request: R, defaultValue?: (FieldsSelection<marketplace_activity, R> | undefined)) => Observable<(FieldsSelection<marketplace_activity, R> | undefined)>}),
    
/** fetch data from the table: "marketplace_order" */
marketplace_order: ((args?: {
/** distinct select on columns */
distinct_on?: (marketplace_order_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (marketplace_order_order_by[] | null),
/** filter the rows returned */
where?: (marketplace_order_bool_exp | null)}) => {get: <R extends marketplace_orderRequest>(request: R, defaultValue?: FieldsSelection<marketplace_order, R>[]) => Observable<FieldsSelection<marketplace_order, R>[]>})&({get: <R extends marketplace_orderRequest>(request: R, defaultValue?: FieldsSelection<marketplace_order, R>[]) => Observable<FieldsSelection<marketplace_order, R>[]>}),
    
/** fetch data from the table: "marketplace_order" using primary key columns */
marketplace_order_by_pk: ((args: {id: Scalars['uuid']}) => marketplace_orderObservableChain & {get: <R extends marketplace_orderRequest>(request: R, defaultValue?: (FieldsSelection<marketplace_order, R> | undefined)) => Observable<(FieldsSelection<marketplace_order, R> | undefined)>})
}

export interface subscription_rootPromiseChain{
    
/** fetch data from the table: "dipdup_contract" */
dipdup_contract: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>})&({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>}),
    
/** fetch data from the table: "dipdup_contract" using primary key columns */
dipdup_contract_by_pk: ((args: {name: Scalars['String']}) => dipdup_contractPromiseChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract_metadata" */
dipdup_contract_metadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_metadata_bool_exp | null)}) => {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Promise<FieldsSelection<dipdup_contract_metadata, R>[]>})&({get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Promise<FieldsSelection<dipdup_contract_metadata, R>[]>}),
    
/** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
dipdup_contract_metadata_by_pk: ((args: {id: Scalars['Int']}) => dipdup_contract_metadataPromiseChain & {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_metadata, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head" */
dipdup_head: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>})&({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>}),
    
/** fetch data from the table: "dipdup_head" using primary key columns */
dipdup_head_by_pk: ((args: {name: Scalars['String']}) => dipdup_headPromiseChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Promise<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head_status" */
dipdup_head_status: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_status_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_status_bool_exp | null)}) => {get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Promise<FieldsSelection<dipdup_head_status, R>[]>})&({get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Promise<FieldsSelection<dipdup_head_status, R>[]>}),
    
/** fetch data from the table: "dipdup_index" */
dipdup_index: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>})&({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>}),
    
/** fetch data from the table: "dipdup_index" using primary key columns */
dipdup_index_by_pk: ((args: {name: Scalars['String']}) => dipdup_indexPromiseChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Promise<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_schema" */
dipdup_schema: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>})&({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>}),
    
/** fetch data from the table: "dipdup_schema" using primary key columns */
dipdup_schema_by_pk: ((args: {name: Scalars['String']}) => dipdup_schemaPromiseChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Promise<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_token_metadata" */
dipdup_token_metadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_token_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_token_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_token_metadata_bool_exp | null)}) => {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Promise<FieldsSelection<dipdup_token_metadata, R>[]>})&({get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Promise<FieldsSelection<dipdup_token_metadata, R>[]>}),
    
/** fetch data from the table: "dipdup_token_metadata" using primary key columns */
dipdup_token_metadata_by_pk: ((args: {id: Scalars['Int']}) => dipdup_token_metadataPromiseChain & {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata, R> | undefined)) => Promise<(FieldsSelection<dipdup_token_metadata, R> | undefined)>}),
    
/** fetch data from the table: "indexing_status" */
indexing_status: ((args?: {
/** distinct select on columns */
distinct_on?: (indexing_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (indexing_status_order_by[] | null),
/** filter the rows returned */
where?: (indexing_status_bool_exp | null)}) => {get: <R extends indexing_statusRequest>(request: R, defaultValue?: FieldsSelection<indexing_status, R>[]) => Promise<FieldsSelection<indexing_status, R>[]>})&({get: <R extends indexing_statusRequest>(request: R, defaultValue?: FieldsSelection<indexing_status, R>[]) => Promise<FieldsSelection<indexing_status, R>[]>}),
    
/** fetch data from the table: "indexing_status" using primary key columns */
indexing_status_by_pk: ((args: {
/** COLLECTION: COLLECTION\nLEGACY_ORDERS: LEGACY_ORDERS */
index: Scalars['String']}) => indexing_statusPromiseChain & {get: <R extends indexing_statusRequest>(request: R, defaultValue?: (FieldsSelection<indexing_status, R> | undefined)) => Promise<(FieldsSelection<indexing_status, R> | undefined)>}),
    
/** fetch data from the table: "legacy_orders" */
legacy_orders: ((args?: {
/** distinct select on columns */
distinct_on?: (legacy_orders_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (legacy_orders_order_by[] | null),
/** filter the rows returned */
where?: (legacy_orders_bool_exp | null)}) => {get: <R extends legacy_ordersRequest>(request: R, defaultValue?: FieldsSelection<legacy_orders, R>[]) => Promise<FieldsSelection<legacy_orders, R>[]>})&({get: <R extends legacy_ordersRequest>(request: R, defaultValue?: FieldsSelection<legacy_orders, R>[]) => Promise<FieldsSelection<legacy_orders, R>[]>}),
    
/** fetch data from the table: "legacy_orders" using primary key columns */
legacy_orders_by_pk: ((args: {hash: Scalars['String']}) => legacy_ordersPromiseChain & {get: <R extends legacy_ordersRequest>(request: R, defaultValue?: (FieldsSelection<legacy_orders, R> | undefined)) => Promise<(FieldsSelection<legacy_orders, R> | undefined)>}),
    
/** fetch data from the table: "marketplace_activity" */
marketplace_activity: ((args?: {
/** distinct select on columns */
distinct_on?: (marketplace_activity_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (marketplace_activity_order_by[] | null),
/** filter the rows returned */
where?: (marketplace_activity_bool_exp | null)}) => {get: <R extends marketplace_activityRequest>(request: R, defaultValue?: FieldsSelection<marketplace_activity, R>[]) => Promise<FieldsSelection<marketplace_activity, R>[]>})&({get: <R extends marketplace_activityRequest>(request: R, defaultValue?: FieldsSelection<marketplace_activity, R>[]) => Promise<FieldsSelection<marketplace_activity, R>[]>}),
    
/** fetch data from the table: "marketplace_activity" using primary key columns */
marketplace_activity_by_pk: ((args: {id: Scalars['uuid']}) => marketplace_activityPromiseChain & {get: <R extends marketplace_activityRequest>(request: R, defaultValue?: (FieldsSelection<marketplace_activity, R> | undefined)) => Promise<(FieldsSelection<marketplace_activity, R> | undefined)>}),
    
/** fetch data from the table: "marketplace_order" */
marketplace_order: ((args?: {
/** distinct select on columns */
distinct_on?: (marketplace_order_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (marketplace_order_order_by[] | null),
/** filter the rows returned */
where?: (marketplace_order_bool_exp | null)}) => {get: <R extends marketplace_orderRequest>(request: R, defaultValue?: FieldsSelection<marketplace_order, R>[]) => Promise<FieldsSelection<marketplace_order, R>[]>})&({get: <R extends marketplace_orderRequest>(request: R, defaultValue?: FieldsSelection<marketplace_order, R>[]) => Promise<FieldsSelection<marketplace_order, R>[]>}),
    
/** fetch data from the table: "marketplace_order" using primary key columns */
marketplace_order_by_pk: ((args: {id: Scalars['uuid']}) => marketplace_orderPromiseChain & {get: <R extends marketplace_orderRequest>(request: R, defaultValue?: (FieldsSelection<marketplace_order, R> | undefined)) => Promise<(FieldsSelection<marketplace_order, R> | undefined)>})
}

export interface subscription_rootObservableChain{
    
/** fetch data from the table: "dipdup_contract" */
dipdup_contract: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>})&({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>}),
    
/** fetch data from the table: "dipdup_contract" using primary key columns */
dipdup_contract_by_pk: ((args: {name: Scalars['String']}) => dipdup_contractObservableChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract_metadata" */
dipdup_contract_metadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_metadata_bool_exp | null)}) => {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Observable<FieldsSelection<dipdup_contract_metadata, R>[]>})&({get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_metadata, R>[]) => Observable<FieldsSelection<dipdup_contract_metadata, R>[]>}),
    
/** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
dipdup_contract_metadata_by_pk: ((args: {id: Scalars['Int']}) => dipdup_contract_metadataObservableChain & {get: <R extends dipdup_contract_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_metadata, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_metadata, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head" */
dipdup_head: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>})&({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>}),
    
/** fetch data from the table: "dipdup_head" using primary key columns */
dipdup_head_by_pk: ((args: {name: Scalars['String']}) => dipdup_headObservableChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Observable<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head_status" */
dipdup_head_status: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_status_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_status_bool_exp | null)}) => {get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Observable<FieldsSelection<dipdup_head_status, R>[]>})&({get: <R extends dipdup_head_statusRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_status, R>[]) => Observable<FieldsSelection<dipdup_head_status, R>[]>}),
    
/** fetch data from the table: "dipdup_index" */
dipdup_index: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>})&({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>}),
    
/** fetch data from the table: "dipdup_index" using primary key columns */
dipdup_index_by_pk: ((args: {name: Scalars['String']}) => dipdup_indexObservableChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Observable<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_schema" */
dipdup_schema: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>})&({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>}),
    
/** fetch data from the table: "dipdup_schema" using primary key columns */
dipdup_schema_by_pk: ((args: {name: Scalars['String']}) => dipdup_schemaObservableChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Observable<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_token_metadata" */
dipdup_token_metadata: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_token_metadata_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_token_metadata_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_token_metadata_bool_exp | null)}) => {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Observable<FieldsSelection<dipdup_token_metadata, R>[]>})&({get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: FieldsSelection<dipdup_token_metadata, R>[]) => Observable<FieldsSelection<dipdup_token_metadata, R>[]>}),
    
/** fetch data from the table: "dipdup_token_metadata" using primary key columns */
dipdup_token_metadata_by_pk: ((args: {id: Scalars['Int']}) => dipdup_token_metadataObservableChain & {get: <R extends dipdup_token_metadataRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_token_metadata, R> | undefined)) => Observable<(FieldsSelection<dipdup_token_metadata, R> | undefined)>}),
    
/** fetch data from the table: "indexing_status" */
indexing_status: ((args?: {
/** distinct select on columns */
distinct_on?: (indexing_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (indexing_status_order_by[] | null),
/** filter the rows returned */
where?: (indexing_status_bool_exp | null)}) => {get: <R extends indexing_statusRequest>(request: R, defaultValue?: FieldsSelection<indexing_status, R>[]) => Observable<FieldsSelection<indexing_status, R>[]>})&({get: <R extends indexing_statusRequest>(request: R, defaultValue?: FieldsSelection<indexing_status, R>[]) => Observable<FieldsSelection<indexing_status, R>[]>}),
    
/** fetch data from the table: "indexing_status" using primary key columns */
indexing_status_by_pk: ((args: {
/** COLLECTION: COLLECTION\nLEGACY_ORDERS: LEGACY_ORDERS */
index: Scalars['String']}) => indexing_statusObservableChain & {get: <R extends indexing_statusRequest>(request: R, defaultValue?: (FieldsSelection<indexing_status, R> | undefined)) => Observable<(FieldsSelection<indexing_status, R> | undefined)>}),
    
/** fetch data from the table: "legacy_orders" */
legacy_orders: ((args?: {
/** distinct select on columns */
distinct_on?: (legacy_orders_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (legacy_orders_order_by[] | null),
/** filter the rows returned */
where?: (legacy_orders_bool_exp | null)}) => {get: <R extends legacy_ordersRequest>(request: R, defaultValue?: FieldsSelection<legacy_orders, R>[]) => Observable<FieldsSelection<legacy_orders, R>[]>})&({get: <R extends legacy_ordersRequest>(request: R, defaultValue?: FieldsSelection<legacy_orders, R>[]) => Observable<FieldsSelection<legacy_orders, R>[]>}),
    
/** fetch data from the table: "legacy_orders" using primary key columns */
legacy_orders_by_pk: ((args: {hash: Scalars['String']}) => legacy_ordersObservableChain & {get: <R extends legacy_ordersRequest>(request: R, defaultValue?: (FieldsSelection<legacy_orders, R> | undefined)) => Observable<(FieldsSelection<legacy_orders, R> | undefined)>}),
    
/** fetch data from the table: "marketplace_activity" */
marketplace_activity: ((args?: {
/** distinct select on columns */
distinct_on?: (marketplace_activity_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (marketplace_activity_order_by[] | null),
/** filter the rows returned */
where?: (marketplace_activity_bool_exp | null)}) => {get: <R extends marketplace_activityRequest>(request: R, defaultValue?: FieldsSelection<marketplace_activity, R>[]) => Observable<FieldsSelection<marketplace_activity, R>[]>})&({get: <R extends marketplace_activityRequest>(request: R, defaultValue?: FieldsSelection<marketplace_activity, R>[]) => Observable<FieldsSelection<marketplace_activity, R>[]>}),
    
/** fetch data from the table: "marketplace_activity" using primary key columns */
marketplace_activity_by_pk: ((args: {id: Scalars['uuid']}) => marketplace_activityObservableChain & {get: <R extends marketplace_activityRequest>(request: R, defaultValue?: (FieldsSelection<marketplace_activity, R> | undefined)) => Observable<(FieldsSelection<marketplace_activity, R> | undefined)>}),
    
/** fetch data from the table: "marketplace_order" */
marketplace_order: ((args?: {
/** distinct select on columns */
distinct_on?: (marketplace_order_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (marketplace_order_order_by[] | null),
/** filter the rows returned */
where?: (marketplace_order_bool_exp | null)}) => {get: <R extends marketplace_orderRequest>(request: R, defaultValue?: FieldsSelection<marketplace_order, R>[]) => Observable<FieldsSelection<marketplace_order, R>[]>})&({get: <R extends marketplace_orderRequest>(request: R, defaultValue?: FieldsSelection<marketplace_order, R>[]) => Observable<FieldsSelection<marketplace_order, R>[]>}),
    
/** fetch data from the table: "marketplace_order" using primary key columns */
marketplace_order_by_pk: ((args: {id: Scalars['uuid']}) => marketplace_orderObservableChain & {get: <R extends marketplace_orderRequest>(request: R, defaultValue?: (FieldsSelection<marketplace_order, R> | undefined)) => Observable<(FieldsSelection<marketplace_order, R> | undefined)>})
}