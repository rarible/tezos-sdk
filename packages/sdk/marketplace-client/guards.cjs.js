
var dipdup_contract_possibleTypes = ['dipdup_contract']
module.exports.isdipdup_contract = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_contract"')
  return dipdup_contract_possibleTypes.includes(obj.__typename)
}



var dipdup_contract_metadata_possibleTypes = ['dipdup_contract_metadata']
module.exports.isdipdup_contract_metadata = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_contract_metadata"')
  return dipdup_contract_metadata_possibleTypes.includes(obj.__typename)
}



var dipdup_head_possibleTypes = ['dipdup_head']
module.exports.isdipdup_head = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_head"')
  return dipdup_head_possibleTypes.includes(obj.__typename)
}



var dipdup_head_status_possibleTypes = ['dipdup_head_status']
module.exports.isdipdup_head_status = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_head_status"')
  return dipdup_head_status_possibleTypes.includes(obj.__typename)
}



var dipdup_index_possibleTypes = ['dipdup_index']
module.exports.isdipdup_index = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_index"')
  return dipdup_index_possibleTypes.includes(obj.__typename)
}



var dipdup_schema_possibleTypes = ['dipdup_schema']
module.exports.isdipdup_schema = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_schema"')
  return dipdup_schema_possibleTypes.includes(obj.__typename)
}



var dipdup_token_metadata_possibleTypes = ['dipdup_token_metadata']
module.exports.isdipdup_token_metadata = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_token_metadata"')
  return dipdup_token_metadata_possibleTypes.includes(obj.__typename)
}



var indexing_status_possibleTypes = ['indexing_status']
module.exports.isindexing_status = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isindexing_status"')
  return indexing_status_possibleTypes.includes(obj.__typename)
}



var marketplace_activity_possibleTypes = ['marketplace_activity']
module.exports.ismarketplace_activity = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismarketplace_activity"')
  return marketplace_activity_possibleTypes.includes(obj.__typename)
}



var marketplace_order_possibleTypes = ['marketplace_order']
module.exports.ismarketplace_order = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismarketplace_order"')
  return marketplace_order_possibleTypes.includes(obj.__typename)
}



var query_root_possibleTypes = ['query_root']
module.exports.isquery_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}



var subscription_root_possibleTypes = ['subscription_root']
module.exports.issubscription_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}
