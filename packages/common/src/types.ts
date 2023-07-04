import BigNumber from "bignumber.js";

export interface Config {
  chain_id: string;
  exchange: string;
  transfer_proxy: string;
  fees: BigNumber;
  nft_public: string;
  mt_public: string;
  auction: string;
  auction_storage: string;
  node_url: string;
  sales: string,
  sales_storage: string,
  transfer_manager: string,
  bid: string,
  bid_storage: string,
  sig_checker: string,
  tzkt: string,
  dipdup: string,
  union_api: string,
  objkt_sales_v1: string,
  objkt_sales_v2: string,
  hen_marketplace: string,
  hen_objkts: string,
  teia_marketplace: string,
  versum_marketplace: string,
  versum_nfts: string,
  royalties_provider: string,
  fxhash_sales_v1: string,
  fxhash_sales_v2: string,
  fxhash_nfts_v1: string,
  fxhash_nfts_v2: string,
  aggregator_tracker: string,
  aggregator_tracker_id: string
  api_key?: string
}
