const {
  linkTypeMap,
  createClient: createClientOriginal,
  generateGraphqlOperation,
  assertSameVersion,
} = require('@genql/runtime')
var typeMap = linkTypeMap(require('./types.cjs'))

var version = '2.10.0'
assertSameVersion(version)

module.exports.version = version

module.exports.createClient = function(options) {
  options = options || {}
  var optionsCopy = {
    url: 'http://localhost:49180/v1/graphql',
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  }
  for (var name in options) {
    optionsCopy[name] = options[name]
  }
  return createClientOriginal(optionsCopy)
}

module.exports.enumdipdupContractMetadataSelectColumn = {
  contract: 'contract',
  created_at: 'created_at',
  id: 'id',
  metadata: 'metadata',
  network: 'network',
  update_id: 'update_id',
  updated_at: 'updated_at',
}

module.exports.enumdipdupContractSelectColumn = {
  address: 'address',
  created_at: 'created_at',
  name: 'name',
  typename: 'typename',
  updated_at: 'updated_at',
}

module.exports.enumdipdupHeadSelectColumn = {
  created_at: 'created_at',
  hash: 'hash',
  level: 'level',
  name: 'name',
  timestamp: 'timestamp',
  updated_at: 'updated_at',
}

module.exports.enumdipdupHeadStatusSelectColumn = {
  name: 'name',
  status: 'status',
}

module.exports.enumdipdupIndexSelectColumn = {
  config_hash: 'config_hash',
  created_at: 'created_at',
  level: 'level',
  name: 'name',
  status: 'status',
  template: 'template',
  template_values: 'template_values',
  type: 'type',
  updated_at: 'updated_at',
}

module.exports.enumdipdupModelUpdateSelectColumn = {
  action: 'action',
  created_at: 'created_at',
  data: 'data',
  id: 'id',
  index: 'index',
  level: 'level',
  model_name: 'model_name',
  model_pk: 'model_pk',
  updated_at: 'updated_at',
}

module.exports.enumdipdupSchemaSelectColumn = {
  created_at: 'created_at',
  hash: 'hash',
  name: 'name',
  reindex: 'reindex',
  updated_at: 'updated_at',
}

module.exports.enumdipdupTokenMetadataSelectColumn = {
  contract: 'contract',
  created_at: 'created_at',
  id: 'id',
  metadata: 'metadata',
  network: 'network',
  token_id: 'token_id',
  update_id: 'update_id',
  updated_at: 'updated_at',
}

module.exports.enumindexingStatusSelectColumn = {
  index: 'index',
  last_level: 'last_level',
}

module.exports.enumlegacyOrdersSelectColumn = {
  data: 'data',
  hash: 'hash',
  id: 'id',
}

module.exports.enummarketplaceActivitySelectColumn = {
  id: 'id',
  internal_order_id: 'internal_order_id',
  make_asset_class: 'make_asset_class',
  make_contract: 'make_contract',
  make_token_id: 'make_token_id',
  make_value: 'make_value',
  maker: 'maker',
  network: 'network',
  operation_counter: 'operation_counter',
  operation_hash: 'operation_hash',
  operation_level: 'operation_level',
  operation_nonce: 'operation_nonce',
  operation_timestamp: 'operation_timestamp',
  order_id: 'order_id',
  platform: 'platform',
  take_asset_class: 'take_asset_class',
  take_contract: 'take_contract',
  take_token_id: 'take_token_id',
  take_value: 'take_value',
  taker: 'taker',
  type: 'type',
}

module.exports.enummarketplaceOrderSelectColumn = {
  cancelled: 'cancelled',
  created_at: 'created_at',
  end_at: 'end_at',
  ended_at: 'ended_at',
  fill: 'fill',
  id: 'id',
  internal_order_id: 'internal_order_id',
  last_updated_at: 'last_updated_at',
  make_asset_class: 'make_asset_class',
  make_contract: 'make_contract',
  make_price: 'make_price',
  make_token_id: 'make_token_id',
  make_value: 'make_value',
  maker: 'maker',
  network: 'network',
  origin_fees: 'origin_fees',
  payouts: 'payouts',
  platform: 'platform',
  salt: 'salt',
  start_at: 'start_at',
  status: 'status',
  take_asset_class: 'take_asset_class',
  take_contract: 'take_contract',
  take_price: 'take_price',
  take_token_id: 'take_token_id',
  take_value: 'take_value',
  taker: 'taker',
}

module.exports.enumorderBy = {
  asc: 'asc',
  asc_nulls_first: 'asc_nulls_first',
  asc_nulls_last: 'asc_nulls_last',
  desc: 'desc',
  desc_nulls_first: 'desc_nulls_first',
  desc_nulls_last: 'desc_nulls_last',
}

module.exports.generateQueryOp = function(fields) {
  return generateGraphqlOperation('query', typeMap.Query, fields)
}
module.exports.generateMutationOp = function(fields) {
  return generateGraphqlOperation('mutation', typeMap.Mutation, fields)
}
module.exports.generateSubscriptionOp = function(fields) {
  return generateGraphqlOperation('subscription', typeMap.Subscription, fields)
}
module.exports.everything = {
  __scalar: true,
}

var schemaExports = require('./guards.cjs')
for (var k in schemaExports) {
  module.exports[k] = schemaExports[k]
}
