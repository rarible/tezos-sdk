import {
  Auction,
  AuctionBid, BundleAuction, BundleAuctionBid,
  burn,
  cancel_auction, cancel_bundle_auction,
  deploy_nft_public,
  fill_order,
  finish_auction, finish_bundle_auction,
  get_auction,
  mint, mint_batch, MintingForm,
  get_v2_orders,
  order_of_json,
  OrderForm,
  put_auction_bid, put_bundle_auction_bid,
  sell,
  SellRequest,
  set_token_metadata,
  start_auction, start_bundle_auction,
  transfer, transfer_batch, TransferForm
} from "./index"
import {in_memory_provider} from '../providers/in_memory/in_memory_provider'
import yargs from 'yargs'
import BigNumber from "bignumber.js"
import {
  deploy_exchange,
  deploy_fill,
  deploy_royalties,
  deploy_transfer_manager,
  deploy_transfer_proxy
} from "@rarible/tezos-contracts"
import {
  check_asset_type,
  get_decimals, get_public_key,
  pk_to_pkh,
  send, set_metadata,
  TransactionArg,
  UnknownTokenAssetType,
  BundleItem,
  check_signature,
  get_ft_type,
  get_balance, await_v2_order, get_active_order_type, OrderDataTypeRequest
} from "@rarible/tezos-common"
import fetch from "node-fetch"
import {
  accept_bid, accept_bundle_bid,
  AcceptBid,
  AcceptBundleBid,
  Bid,
  BundleBid, cancel_bid, cancel_bundle_bid, cancel_floor_bid, CancelBid, CancelBundleBid, CancelFloorBid,
  FloorBid,
  put_bid,
  put_bundle_bid,
  put_floor_bid
} from "../bids";
import {BundleOrderForm, OrderFormV2, sell_v2_batch, sellBundle, sellV2} from "../sales/sell";
import {buy_bundle, buy_v2_batch, BuyBundleRequest, BuyRequest, buyV2, isExistsSaleOrder} from "../sales/buy";
import {cancel_bundle_sale, CancelBundleSaleRequest, cancelV2, CancelV2OrderRequest} from "../sales/cancel";

export async function testScript(operation?: string, options: any = {}) {
  let argv = await yargs(process.argv.slice(2)).options({
    edsk: {
      type: 'string',
      default: 'edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj'
    },
    endpoint: {type: 'string', default: 'https://test-tezos-node.rarible.org'},
    exchange: {type: 'string', default: 'KT1S6H2FWxrpaD7aPRSW1cTTE1xPucXBSTL5'},
    // contract: {type: 'string', default: 'KT1VnhPmUJnEH5dfeD8WW87LCoxdhGUUVfMV'},
    contract: {type: 'string', default: 'KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA'},
    royalties_contract: {type: 'string', default: 'KT1AZfqFGFLMUrscNFyawDYAyqXYydz714ya'},
    token_id: {type: 'number'},
    royalties: {type: 'string', default: '{}'},
    amount: {type: 'number', default: 0},
    qty: {type: 'number', default: 0},
    metadata: {type: 'string', default: '{}'},
    metadata_key: {type: 'string', default: ''},
    metadata_value: {type: 'string', default: ''},
    to: {type: 'string'},
    owner: {type: 'string'},
    receiver: {type: 'string'},
    fee: {type: 'number', default: 0},
    operator: {type: 'string', default: ''},
    fill: {type: 'string', default: 'KT1FAndThSQsVqYQVPHGSG5sQPk1XZycNBvL'},
    transfer_proxy: {type: 'string', default: 'KT1WbVjXdmBpzzVoYSSUiNt6QFnSC3W768d1'},
    transfer_manager: {type: 'string', default: 'KT1L1WfmvjQRTRqT8Zv4qey4vdZbyML43UT4'},
    fee_receiver: {type: 'string'},
    protocol_fee: {type: 'number', default: 0},
    wrapper: {type: 'string', default: ''},
    item_id: {type: 'string', default: ''},
    order_id: {type: 'string', default: ''},
    ft_contract: {type: 'string', default: undefined},
    ft_token_id: {type: 'string', default: undefined},
    is_dev: {type: 'boolean', default: false},
    sale_type: {type: 'number', default: 0},
    tzkt: {type: 'string', default: ''},
    message: {type: 'string', default: ''},
    dipdup: {type: 'string', default: ''}
  }).argv
  argv = {
    ...argv,
    ...options
  }
  const action = operation ?? argv._[0]

  const token_id_opt = (argv.token_id != undefined) ? new BigNumber(argv.token_id) : undefined
  const token_id = (argv.token_id != undefined) ? new BigNumber(argv.token_id) : new BigNumber(0)

  const royalties0 = JSON.parse(argv.royalties) as { [key: string]: number }
  const royalties: { [key: string]: BigNumber } = {};
  if (royalties0) {
    Object.keys(royalties0).forEach(
      function (k: string): void {
        royalties[k] = new BigNumber(royalties0[k])
      })
  }

  const amount = (argv.amount) ? new BigNumber(argv.amount as number) : undefined
  const metadata = JSON.parse(argv.metadata) as { [_: string]: string }

  const devNode = "https://dev-tezos-node.rarible.org"
  const tezos = in_memory_provider(argv.edsk, argv.is_dev ? devNode : argv.endpoint)

  const config = {
    chain_id: "NetXnHfVqm9iesp",
    exchange: argv.exchange,
    transfer_proxy: argv.transfer_proxy,
    fees: new BigNumber(argv.protocol_fee),
    nft_public: "",
    mt_public: "",
    api: "https://test-tezos-api.rarible.org/v0.1",
    api_permit: "https://test-tezos-api.rarible.org/v0.1",
    permit_whitelist: [],
    wrapper: argv.wrapper,
    auction: "KT1CB5JBSC7kTxRV3ir2xsooMA1FLieiD4Mt",
    auction_storage: "KT1KWAPPjuDq4ZeX67rzZWsf6eAeqwtuAfSP",
    node_url: argv.endpoint,
    sales: "KT199VxDKE7TLxoHwc3pbu9NgKhaUSki8x9i",
    sales_storage: "KT1GDUG3AQpaKmFjFHVn6PYT4Tprf7ccwPa3",
    transfer_manager: "KT1LQPAi4w2h9GQ61S8NkENcNe3aH5vYEzjP",
    bid: "KT1MwKGYWWbXtfYdnQfwspwz5ZGfqGwiJuQF",
    bid_storage: "KT1ENB6j6uMJn7MtDV4VBE1AAAwCXmMtzjUd",
    sig_checker: "KT1RGGtyEtGCYCoRmTVNoE6qg3ay2DZ1BmDs",
    tzkt: "https://api.ithacanet.tzkt.io",
    dipdup: "https://rarible-ithacanet.dipdup.net/v1/graphql"
  }

  const devConfig = {
    chain_id: "NetXfHjxW3qBoxi",
    exchange: "KT18isH58SBp7UaRWB652UwLMPxCe1bsjMMe",
    transfer_proxy: "KT1LmiHVNjfbZvPx9qvASVk8mzFcaJNtfj8q",
    fees: new BigNumber(argv.protocol_fee),
    nft_public: "",
    mt_public: "",
    api: "https://dev-tezos-api.rarible.org/v0.1",
    api_permit: "https://dev-tezos-api.rarible.org/v0.1",
    permit_whitelist: [],
    wrapper: "",
    auction: "KT1UThqUUyAM9g8Nk6u74ke6XAFZNycAWU7c",
    auction_storage: "KT1AJXNtHfFMB4kuJJexdevH2XeULivjThEX",
    node_url: devNode,
    sales: "KT1Tm7AogCrKA13rCzovyoKQVeUKK9TtV7xL",
    sales_storage: "KT19i8Dc5Bibei6YrtdzUt27B9UBkQo6oLsG",
    transfer_manager: "KT1Xj6gsE694LkMg25SShYkU7dGzagm7BTSK",
    bid: "KT1DJxerfM2nPYYsVNBxaevppwhkCGwZzsGT",
    bid_storage: "KT1NvX6EQUqjUuQXsBU3eocpkbZsVX71FcTn",
    sig_checker: "KT1ShTc4haTgT76z5nTLSQt3GSTLzeLPZYfT",
    tzkt: "http://dev-tezos-tzkt.rarible.org",
    dipdup: "http://dev-tezos-indexer.rarible.org/v1/graphql"
  }

  const provider = {
    tezos,
    config: argv.is_dev ? devConfig : config
  }
  console.log('is_dev=', !!argv.is_dev)

  const to = (argv.to) ? argv.to : await provider.tezos.address()
  const owner = (argv.owner) ? argv.owner : await provider.tezos.address()
  const fee_receiver = (argv.fee_receiver) ? argv.fee_receiver : await provider.tezos.address()
  const asset_class = (amount == undefined) ? "NFT" : "MT"

  switch (action) {
    case 'transfer' :
      console.log("transfer")
      const op_transfer = await transfer(provider, {asset_class, contract: argv.contract, token_id}, to, amount)
      await op_transfer.confirmation()
      console.log(op_transfer.hash)
      break

    case 'batch_transfer' :
      console.log("transfer")
      const transfer_batch_form: Array<TransferForm> = []
      const items = argv.item_id.split(",")
      items.forEach(item => {
        const [contract, tokenId] = item.split(":")
          transfer_batch_form.push({
            asset_type: {asset_class: "MT", contract: contract, token_id: new BigNumber(tokenId)},
            to: to,
            amount: amount
          })
      })

      const op_batch_transfer = await transfer_batch(provider, transfer_batch_form)
      await op_batch_transfer.confirmation()
      console.log(op_batch_transfer.hash)
      return op_batch_transfer
      break

    case 'mint':
      console.log("mint")
      const op_mint = await mint(provider, argv.contract, royalties, amount, token_id_opt, metadata, argv.owner)
      await op_mint.confirmation()
      console.log(`minted item=${argv.contract}:${op_mint.token_id.toString()} hash=${op_mint.hash}`)
      return `${argv.contract}:${op_mint.token_id.toString()}`

    case 'batch_mint':
      console.log("mint")
        const batch_form: Array<MintingForm> = []
        for(let i = 0; i < argv.qty; i++){
          batch_form.push({
            contract: argv.contract,
            royalties: royalties,
            supply: amount,
            owner: argv.owner,
            token_id: token_id_opt,
            metadata: metadata
          })
        }
      const batch_op_mint = await mint_batch(provider, batch_form)
      await batch_op_mint.confirmation()
      console.log(`minted item=${argv.contract}:${batch_op_mint.token_ids.toString()} hash=${batch_op_mint.hash}`)
      return batch_op_mint


    case 'burn':
      console.log("burn")
      const op_burn = await burn(provider, {asset_class, contract: argv.contract, token_id}, amount)
      await op_burn.confirmation()
      console.log(op_burn.hash)
      break

    case 'deploy_nft':
      console.log("deploy nft")
      const meta = {
        name: 'My NFT collection',
        symbol: 'MYNFT',
        contractURI: 'https://ipfs.io/ipfs/QmTKxwnqqxTxH4HE3UVM9yoJFZgbsZ8CuqqRFZCSWBF53m'
      }
      console.log(provider, owner, meta)
      const op_deploy_fa2 = await deploy_nft_public(provider, owner, meta)
      await op_deploy_fa2.confirmation()
      console.log(op_deploy_fa2.contract)
      break

    case 'deploy_royalties':
      console.log("deploy royalties")
      const op_deploy_royalties = await deploy_royalties(provider, owner)
      await op_deploy_royalties.confirmation()
      console.log(op_deploy_royalties.contract)
      break

    case 'set_token_metadata':
      console.log("set token metadata")
      const op_token_metadata = await set_token_metadata(provider, argv.contract, token_id, metadata)
      await op_token_metadata.confirmation()
      console.log(op_token_metadata.hash)
      break

    case 'set_metadata':
      console.log("set metadata uri")
      const op_metadata_uri = await set_metadata(provider, argv.contract, argv.metadata_key, argv.metadata_value)
      await op_metadata_uri.confirmation()
      console.log(op_metadata_uri.hash)
      break

    case 'deploy_fill':
      console.log("deploy fill")
      const op_deploy_fill = await deploy_fill(provider, owner)
      await op_deploy_fill.confirmation()
      console.log(op_deploy_fill.contract)
      break

    case 'sell': {
      console.log("sell item", argv.item_id)
      const publicKey = await get_public_key(provider)
      if (!publicKey) {
        throw new Error("publicKey is undefined")
      }
      const maker = pk_to_pkh(publicKey)
      if (!argv.item_id || argv.item_id.split(":").length !== 2) throw new Error("item_id was not set or set incorrectly")

      const [contract, tokenId] = argv.item_id.split(":")
      const asset: UnknownTokenAssetType = {
        contract: contract,
        token_id: new BigNumber(tokenId),
      }
      const request: SellRequest = {
        maker,
        maker_edpk: publicKey,
        make_asset_type: await check_asset_type(provider, asset),
        take_asset_type: {
          asset_class: "XTZ"
        },
        amount: new BigNumber("1"),
        price: new BigNumber("0.02"),
        payouts: [],
        origin_fees: []
      }
      const order = await sell(provider, request)
      console.log('order=', order)
      return order
    }

    case 'sell_with_ft_fa12': {
      console.log("sell item", argv.item_id)
      const publicKey = await get_public_key(provider)
      if (!publicKey) {
        throw new Error("publicKey is undefined")
      }
      const maker = pk_to_pkh(publicKey)
      if (!argv.item_id || argv.item_id.split(":").length !== 2) throw new Error("item_id was not set or set incorrectly")

      const [contract, tokenId] = argv.item_id.split(":")
      const asset: UnknownTokenAssetType = {
        contract: contract,
        token_id: new BigNumber(tokenId),
      }
      const request: SellRequest = {
        maker,
        maker_edpk: publicKey,
        make_asset_type: await check_asset_type(provider, asset),
        take_asset_type: {
          asset_class: "FT",
          contract: argv.ft_contract!,
          token_id: argv.ft_token_id != undefined ? new BigNumber(argv.ft_token_id) : undefined,
        },
        amount: new BigNumber("1"),
        price: new BigNumber("2"),
        payouts: [],
        origin_fees: []
      }
      const order = await sell(provider, request)
      console.log('order=', order)
      return order
    }

    case 'sell_with_ft_fa2': {
      console.log("sell item", argv.item_id)
      const publicKey = await get_public_key(provider)
      if (!publicKey) {
        throw new Error("publicKey is undefined")
      }
      const maker = pk_to_pkh(publicKey)
      if (!argv.item_id || argv.item_id.split(":").length !== 2) throw new Error("item_id was not set or set incorrectly")

      const [contract, tokenId] = argv.item_id.split(":")
      const asset: UnknownTokenAssetType = {
        contract: contract,
        token_id: new BigNumber(tokenId),
      }
      const request: SellRequest = {
        maker,
        maker_edpk: publicKey,
        make_asset_type: await check_asset_type(provider, asset),
        take_asset_type: {
          asset_class: "FT",
          contract: argv.ft_contract!,
          token_id: argv.ft_token_id != undefined ? new BigNumber(argv.ft_token_id) : undefined,
        },
        amount: new BigNumber("1"),
        price: new BigNumber("2"),
        payouts: [],
        origin_fees: []
      }
      const order = await sell(provider, request)
      console.log('order=', order)
      return order
    }

    case 'sell_v2': {
      console.log("sell item", argv.item_id)
      const publicKey = await get_public_key(provider)
      if (!publicKey) {
        throw new Error("publicKey is undefined")
      }
      if (!argv.item_id || argv.item_id.split(":").length !== 2) throw new Error("item_id was not set or set incorrectly")

      const [contract, tokenId] = argv.item_id.split(":")

      const sell_request: OrderFormV2 = {
        s_asset_contract: contract,
        s_asset_token_id: new BigNumber(tokenId),
        s_sale_type: argv.sale_type,
        s_sale_asset_contract: argv.ft_contract,
        s_sale_asset_token_id: argv.ft_token_id,
        s_sale: {
          sale_amount: new BigNumber(argv.amount),
          sale_asset_qty: new BigNumber(argv.qty),
          sale_max_fees_base_boint: 10000,
          sale_end: Date.now() + 100 * 1000,
          sale_start: undefined,
          sale_origin_fees: [],
          sale_payouts: [],
          sale_data: undefined,
          sale_data_type: undefined
        }

      }
      const order = await sellV2(provider, sell_request)
      console.log('order=', order)
      return order
    }

    case 'batch_sell_v2': {
      console.log("sell item", argv.item_id)
      const batch_sell_form: Array<OrderFormV2> = []
      const publicKey = await get_public_key(provider)
      if (!publicKey) {
        throw new Error("publicKey is undefined")
      }
      const items = argv.item_id.split(",")
      items.forEach(item => {
        const [contract, tokenId] = item.split(":")
        batch_sell_form.push({
          s_asset_contract: contract,
          s_asset_token_id: new BigNumber(tokenId),
          s_sale_type: argv.sale_type,
          s_sale_asset_contract: argv.ft_contract,
          s_sale_asset_token_id: argv.ft_token_id,
          s_sale: {
            sale_amount: new BigNumber(argv.amount),
            sale_asset_qty: new BigNumber(argv.qty),
            sale_max_fees_base_boint: 10000,
            sale_end: undefined,
            sale_start: undefined,
            sale_origin_fees: [],
            sale_payouts: [],
            sale_data: undefined,
            sale_data_type: undefined
          }
        })
      })

      const order = await sell_v2_batch(provider, batch_sell_form)
      console.log('order=', order)
      return order
    }

    case 'sell_bundle': {
      console.log("sell bundle", argv.item_id)
      const publicKey = await get_public_key(provider)
      if (!publicKey) {
        throw new Error("publicKey is undefined")
      }

      const items = argv.item_id.split(",")
      const bundle: Array<BundleItem> = []
      items.forEach(item => {
        const [contract, tokenId] = item.split(":")
        bundle.push({
          asset_contract: contract,
          asset_token_id: new BigNumber(tokenId),
          asset_quantity: new BigNumber(1)
        })
      })

      const sell_request: BundleOrderForm = {
        bundle: bundle,
        s_sale_type: argv.sale_type,
        s_sale_asset_contract: argv.ft_contract,
        s_sale_asset_token_id: argv.ft_token_id,
        s_sale: {
          sale_amount: new BigNumber(argv.amount),
          sale_qty: new BigNumber(argv.qty),
          sale_max_fees_base_boint: 10000,
          sale_end: undefined,
          sale_start: undefined,
          sale_origin_fees: [],
          sale_payouts: [],
          sale_data: undefined,
          sale_data_type: undefined
        }

      }
      const order = await sellBundle(provider, sell_request)
      console.log('order=', order)
      return order
    }

    case "fill": {
      try {
        console.log(`fill order=${argv.order_id} from ${await provider.tezos.address()}`)
        const response = await fetch(`${provider.config.api}/orders/${argv.order_id}`)
        if (response.ok) {
          const order = order_of_json(await response.json())
          const op = await fill_order(provider, order as OrderForm, {
            amount: new BigNumber(order.make.value)
          })
          await op.confirmation()
          return op
        } else {
          throw new Error(response.statusText)
        }
      } catch (e) {
        try {
          console.error(JSON.stringify(e, null, ' '))
        } catch (e) {
          console.error(e)
        }
      }
      break
    }

    case "buy_v2": {
      try {
        if (!argv.item_id || argv.item_id.split(":").length !== 2) throw new Error("item_id was not set or set incorrectly")
        const [contract, tokenId] = argv.item_id.split(":")
        const ft_token_id = (argv.ft_token_id!=undefined) ? new BigNumber(argv.ft_token_id) : new BigNumber(0)
        const amount = (argv.amount!=undefined) ? new BigNumber(argv.amount) : new BigNumber(0)
        const buyRequest: BuyRequest = {
          asset_contract: contract,
          asset_token_id: new BigNumber(tokenId),
          asset_seller: argv.owner!,
          sale_type: argv.sale_type,
          sale_asset_contract: argv.ft_contract,
          sale_asset_token_id: ft_token_id,
          sale_amount: amount,
          sale_qty: new BigNumber(argv.qty),
          sale_payouts: [],
          sale_origin_fees: [],
          use_all: false,
        }
        const isOrderExists = await isExistsSaleOrder(provider, buyRequest)
        if (isOrderExists) {
          const op = await buyV2(provider, buyRequest)
          return op
        } else {
          throw new Error("Error order does not exist")
        }
      } catch (e) {
        try {
          console.error(JSON.stringify(e, null, ' '))
        } catch (e) {
          console.error(e)
        }
      }
      break
    }

    case "batch_buy_v2": {
      const batch_buy_form: Array<BuyRequest> = []
      const publicKey = await get_public_key(provider)
      if (!publicKey) {
        throw new Error("publicKey is undefined")
      }

      const ft_token_id = (argv.ft_token_id!=undefined) ? new BigNumber(argv.ft_token_id) : new BigNumber(0)
      const amount = (argv.amount!=undefined) ? new BigNumber(argv.amount) : new BigNumber(0)

      const items = argv.item_id.split(",")
      items.forEach(item => {
        const [contract, tokenId] = item.split(":")
        batch_buy_form.push({
          asset_contract: contract,
          asset_token_id: new BigNumber(tokenId),
          asset_seller: argv.owner!,
          sale_type: argv.sale_type,
          sale_asset_contract: argv.ft_contract,
          sale_asset_token_id: ft_token_id,
          sale_amount: amount,
          sale_qty: new BigNumber(argv.qty),
          sale_payouts: [],
          sale_origin_fees: [],
          use_all: false,
        })
      })

      const op = await buy_v2_batch(provider, batch_buy_form)
      return op
    }

    case "buy_bundle": {
      try {
        const items = argv.item_id.split(",")
        const bundle: Array<BundleItem> = []
        items.forEach(item => {
          const [contract, tokenId] = item.split(":")
          bundle.push({
            asset_contract: contract,
            asset_token_id: new BigNumber(tokenId),
            asset_quantity: new BigNumber(1)
          })
        })
        const amount = (argv.amount != undefined) ? new BigNumber(argv.amount) : new BigNumber(0)

        const buyRequest: BuyBundleRequest = {
          bundle: bundle,
          asset_seller: argv.owner!,
          sale_type: argv.sale_type,
          sale_asset_contract: argv.ft_contract,
          sale_asset_token_id: argv.ft_token_id,
          sale_amount: amount,
          sale_qty: new BigNumber(argv.qty),
          sale_payouts: [],
          sale_origin_fees: [],
          use_all: false,
        }
        const op = await buy_bundle(provider, buyRequest)
        return op
      } catch (e) {
        try {
          console.error(JSON.stringify(e, null, ' '))
        } catch (e) {
          console.error(e)
        }
      }
      break
    }

    case 'auction': {
      console.log("auction item", argv.item_id)
      if (!argv.item_id || argv.item_id.split(":").length !== 2) throw new Error("item_id was not set or set incorrectly")

      const [contract, tokenId] = argv.item_id.split(":")

      const auction_request: Auction = {
        sell_asset_contract: contract,
        sell_asset_token_id: new BigNumber(tokenId),
        sell_asset_amount: new BigNumber("1"),
        buy_asset_type: argv.sale_type,
        buy_asset_contract: argv.ft_contract,
        buy_asset_token_id: argv.ft_token_id,
        start: undefined,
        duration: new BigNumber("30"),
        minimal_price: new BigNumber("10"),
        max_seller_fees: new BigNumber("10000"),
        buyout_price: new BigNumber("100000"),
        minimal_step: new BigNumber("1"),
        payouts: [],
        origin_fees: []
      }

      const auction = await start_auction(provider, auction_request)
      return auction
    }

    case 'bundle_auction': {
      console.log("auction item", argv.item_id)
      const items = argv.item_id.split(",")
      const bundle: Array<BundleItem> = []
      items.forEach(item => {
        const [contract, tokenId] = item.split(":")
        bundle.push({
          asset_contract: contract,
          asset_token_id: new BigNumber(tokenId),
          asset_quantity: new BigNumber(1)
        })
      })

      const auction_request: BundleAuction = {
        bundle: bundle,
        buy_asset_type: argv.sale_type,
        buy_asset_contract: argv.ft_contract,
        buy_asset_token_id: argv.ft_token_id,
        start: undefined,
        duration: new BigNumber("30"),
        minimal_price: new BigNumber("10"),
        max_seller_fees: new BigNumber("10000"),
        buyout_price: new BigNumber("100000"),
        minimal_step: new BigNumber("1"),
        payouts: [],
        origin_fees: []
      }

      const auction = await start_bundle_auction(provider, auction_request)
      return auction
    }

    case 'put_auction_bid': {
      console.log("put_auction_bid", argv.item_id)
      if (!argv.item_id || argv.item_id.split(":").length !== 2) throw new Error("item_id was not set or set incorrectly")

      const [contract, tokenId] = argv.item_id.split(":")
      const bid: AuctionBid = {
        asset_contract: contract,
        asset_token_id: new BigNumber(tokenId),
        amount: new BigNumber("0.00001"),
        payouts: [],
        origin_fees: [],
        bidder: await provider.tezos.address(),
        asset_seller: argv.owner!
      }
      const auction = await put_auction_bid(provider, bid, contract, new BigNumber(tokenId), argv.owner!)
      return auction
    }

    case 'put_bundle_auction_bid': {
      console.log("put_bundle_auction_bid", argv.item_id)
      const items = argv.item_id.split(",")
      const bundle: Array<BundleItem> = []
      items.forEach(item => {
        const [contract, tokenId] = item.split(":")
        bundle.push({
          asset_contract: contract,
          asset_token_id: new BigNumber(tokenId),
          asset_quantity: new BigNumber(1)
        })
      })
      const bid: BundleAuctionBid = {
        bundle: bundle,
        amount: new BigNumber("0.00001"),
        payouts: [],
        origin_fees: [],
        bidder: await provider.tezos.address(),
        asset_seller: argv.owner!
      }
      const auction = await put_bundle_auction_bid(provider, bid, argv.owner!)
      return auction
    }

    case 'cancel_auction': {
      console.log("cancel auction", argv.item_id)
      if (!argv.item_id || argv.item_id.split(":").length !== 2) throw new Error("item_id was not set or set incorrectly")

      const [contract, tokenId] = argv.item_id.split(":")

      const auction = await cancel_auction(provider, contract, new BigNumber(tokenId))
      return auction
    }

    case 'cancel_v2': {
      console.log("cancel_v2", argv.item_id)
      if (!argv.item_id || argv.item_id.split(":").length !== 2) throw new Error("item_id was not set or set incorrectly")

      const [contract, tokenId] = argv.item_id.split(":")
      const cancel_request: CancelV2OrderRequest = {
        asset_contract: contract,
        asset_token_id: new BigNumber(tokenId),
        sale_asset_contract: argv.ft_contract,
        sale_asset_token_id: argv.ft_token_id,
        sale_type: argv.sale_type
      }
      const canceled_order = await cancelV2(provider, cancel_request)
      return canceled_order
    }

    case 'cancel_bundle_sale': {
      console.log("cancel_bundle_sale", argv.item_id)
      const items = argv.item_id.split(",")
      const bundle: Array<BundleItem> = []
      items.forEach(item => {
        const [contract, tokenId] = item.split(":")
        bundle.push({
          asset_contract: contract,
          asset_token_id: new BigNumber(tokenId),
          asset_quantity: new BigNumber(1)
        })
      })
      const cancel_request: CancelBundleSaleRequest = {
        bundle: bundle,
        sale_asset_contract: argv.ft_contract,
        sale_asset_token_id: argv.ft_token_id,
        sale_type: argv.sale_type
      }
      const canceled_order = await cancel_bundle_sale(provider, cancel_request)
      return canceled_order
    }

    case 'cancel_bid': {
      console.log("cancel_bid", argv.item_id)
      if (!argv.item_id || argv.item_id.split(":").length !== 2) throw new Error("item_id was not set or set incorrectly")

      const [contract, tokenId] = argv.item_id.split(":")
      const cancel_request: CancelBid = {
        asset_contract: contract,
        asset_token_id: new BigNumber(tokenId),
        bid_asset_contract: argv.ft_contract,
        bid_asset_token_id: argv.ft_token_id,
        bid_type: argv.sale_type
      }
      const canceled_order = await cancel_bid(provider, cancel_request)
      return canceled_order
    }

    case 'cancel_floor_bid': {
      console.log("cancel_floor_bid", argv.item_id)
      if (!argv.item_id || argv.item_id.split(":").length !== 2) throw new Error("item_id was not set or set incorrectly")

      const [contract, tokenId] = argv.item_id.split(":")
      const cancel_request: CancelFloorBid = {
        asset_contract: contract,
        bid_asset_contract: argv.ft_contract,
        bid_asset_token_id: argv.ft_token_id,
        bid_type: argv.sale_type
      }
      const canceled_order = await cancel_floor_bid(provider, cancel_request)
      return canceled_order
    }

    case 'cancel_bundle_bid': {
      console.log("cancel_bundle_bid", argv.item_id)
      const items = argv.item_id.split(",")
      const bundle: Array<BundleItem> = []
      items.forEach(item => {
        const [contract, tokenId] = item.split(":")
        bundle.push({
          asset_contract: contract,
          asset_token_id: new BigNumber(tokenId),
          asset_quantity: new BigNumber(1)
        })
      })
      const cancel_request: CancelBundleBid = {
        bundle: bundle,
        bid_asset_contract: argv.ft_contract,
        bid_asset_token_id: argv.ft_token_id,
        bid_type: argv.sale_type
      }
      const canceled_order = await cancel_bundle_bid(provider, cancel_request)
      return canceled_order
    }

    case 'cancel_bundle_auction': {
      console.log("cancel_bundle_auction", argv.item_id)
      const items = argv.item_id.split(",")
      const bundle: Array<BundleItem> = []
      items.forEach(item => {
        const [contract, tokenId] = item.split(":")
        bundle.push({
          asset_contract: contract,
          asset_token_id: new BigNumber(tokenId),
          asset_quantity: new BigNumber(1)
        })
      })

      const auction = await cancel_bundle_auction(provider, bundle)
      return auction
    }

    case 'finish_auction': {
      console.log("finish auction", argv.item_id)
      if (!argv.item_id || argv.item_id.split(":").length !== 2) throw new Error("item_id was not set or set incorrectly")

      const [contract, tokenId] = argv.item_id.split(":")

      const auction = await finish_auction(provider, contract, new BigNumber(tokenId), argv.owner!)
      return auction
    }

    case 'finish_bundle_auction': {
      console.log("finish_bundle_auction", argv.item_id)
      const items = argv.item_id.split(",")
      const bundle: Array<BundleItem> = []
      items.forEach(item => {
        const [contract, tokenId] = item.split(":")
        bundle.push({
          asset_contract: contract,
          asset_token_id: new BigNumber(tokenId),
          asset_quantity: new BigNumber(1)
        })
      })

      const auction = await finish_bundle_auction(provider, bundle, argv.owner!)
      return auction
    }

    case 'get_auction': {
      console.log("auction item", argv.item_id)
      const publicKey = await get_public_key(provider)
      if (!publicKey) {
        throw new Error("publicKey is undefined")
      }
      if (!argv.item_id || argv.item_id.split(":").length !== 2) throw new Error("item_id was not set or set incorrectly")

      const [contract, tokenId] = argv.item_id.split(":")

      const auction = await get_auction(provider, contract, new BigNumber(tokenId), "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC")
      return auction
    }

    case 'put_bid': {
      console.log("put_bid", argv.item_id)
      if (!argv.item_id || argv.item_id.split(":").length !== 2) throw new Error("item_id was not set or set incorrectly")

      const [contract, tokenId] = argv.item_id.split(":")
      const bid: Bid = {
        asset_contract: contract,
        asset_token_id: new BigNumber(tokenId),
        bid_asset_contract: argv.ft_contract,
        bid_asset_token_id: argv.ft_token_id,
        bid_type: argv.sale_type,
        bid: {
          bid_amount: new BigNumber("0.01"),
          bid_asset_qty: new BigNumber("1"),
          bid_payouts: [],
          bid_origin_fees: [],
          bid_data: undefined,
          bid_data_type: undefined
        }
      }
      const bid_op = await put_bid(provider, bid)
      return bid_op
    }

    case 'accept_bid': {
      console.log("accept_bid", argv.item_id)
      if (!argv.item_id || argv.item_id.split(":").length !== 2) throw new Error("item_id was not set or set incorrectly")

      const [contract, tokenId] = argv.item_id.split(":")

      const bid_data: AcceptBid = {
        bid_asset_contract: argv.ft_contract,
        bid_asset_token_id: argv.ft_token_id,
        bid_type: argv.sale_type,
        bid_payouts: [],
        bid_origin_fees: [],
        asset_contract: contract,
        asset_token_id: new BigNumber(tokenId),
        bidder: argv.owner!
      }
      const result = await accept_bid(provider, bid_data)
      return result
    }

    case 'put_floor_bid': {
      console.log("put_floor_bid", argv.item_id)
      if (!argv.item_id || argv.item_id.split(":").length !== 2) throw new Error("item_id was not set or set incorrectly")

      const [contract, tokenId] = argv.item_id.split(":")
      const bid: FloorBid = {
        asset_contract: contract,
        bid_asset_contract: argv.ft_contract,
        bid_asset_token_id: argv.ft_token_id,
        bid_type: argv.sale_type,
        bid: {
          bid_amount: new BigNumber("0.01"),
          bid_asset_qty: new BigNumber("1"),
          bid_payouts: [],
          bid_origin_fees: [],
          bid_data: undefined,
          bid_data_type: undefined
        }
      }
      const bid_op = await put_floor_bid(provider, bid)
      return bid_op
    }

    case 'accept_floor_bid': {
      console.log("accept_floor_bid", argv.item_id)
      if (!argv.item_id || argv.item_id.split(":").length !== 2) throw new Error("item_id was not set or set incorrectly")

      const [contract, tokenId] = argv.item_id.split(":")

      const bid_data: AcceptBid = {
        bid_asset_contract: argv.ft_contract,
        bid_asset_token_id: argv.ft_token_id,
        bid_type: argv.sale_type,
        bid_payouts: [],
        bid_origin_fees: [],
        asset_contract: contract,
        asset_token_id: new BigNumber(tokenId),
        bidder: argv.owner!
      }
      const result = await accept_bid(provider, bid_data, true)
      return result
    }

    case 'put_bundle_bid': {
      console.log("put_bundle_bid", argv.item_id)
      const items = argv.item_id.split(",")
      const bundle: Array<BundleItem> = []
      items.forEach(item => {
        const [contract, tokenId] = item.split(":")
        bundle.push({
          asset_contract: contract,
          asset_token_id: new BigNumber(tokenId),
          asset_quantity: new BigNumber(1)
        })
      })
      const bid: BundleBid = {
        bundle: bundle,
        bid_asset_contract: argv.ft_contract,
        bid_asset_token_id: argv.ft_token_id,
        bid_type: argv.sale_type,
        bid: {
          bid_amount: new BigNumber("0.01"),
          bid_payouts: [],
          bid_origin_fees: [],
          bid_data: undefined,
          bid_data_type: undefined
        }
      }
      const bid_op = await put_bundle_bid(provider, bid)
      return bid_op
    }

    case 'accept_bundle_bid': {
      console.log("accept_bundle_bid", argv.item_id)

      const items = argv.item_id.split(",")
      const bundle: Array<BundleItem> = []
      items.forEach(item => {
        const [contract, tokenId] = item.split(":")
        bundle.push({
          asset_contract: contract,
          asset_token_id: new BigNumber(tokenId),
          asset_quantity: new BigNumber(1)
        })
      })

      const bid_data: AcceptBundleBid = {
        bundle: bundle,
        bid_type: argv.sale_type,
        bid_payouts: [],
        bid_origin_fees: [],
        bid_asset_contract: argv.ft_contract,
        bid_asset_token_id: argv.ft_token_id,
        bidder: argv.owner!
      }
      const result = await accept_bundle_bid(provider, bid_data)
      return result
    }

    case "get_decimals": {
      try {
        return get_decimals(provider.config, argv.ft_contract!, argv.ft_token_id)
      } catch (e) {
        console.error(e)
      }
    }

    case "await_v2_order": {
      try {
        return await_v2_order(provider.config, argv.ft_contract!, argv.ft_token_id!, argv.owner!, argv.order_id, 10, 10)
      } catch (e) {
        console.error(e)
      }
    }

    case "check_signature": {
      try {
        const signature = await provider.tezos.sign(argv.message, "operation")
        const pk = await provider.tezos.public_key()
        if (pk == undefined) {
          throw new Error("publicKey is undefined")
        }
        return check_signature(argv.message, signature.signature, pk, provider)
      } catch (e) {
        console.error(e)
      }
    }

    case "get_ft_type": {
      try {
        return get_ft_type(provider.config, argv.ft_contract!)
      } catch (e) {
        console.error(e)
      }
    }

    case "get_order_type": {
      try {
        if (!argv.item_id || argv.item_id.split(":").length !== 2) throw new Error("item_id was not set or set incorrectly")

        const [contract, tokenId] = argv.item_id.split(":")
        const publicKey = await get_public_key(provider)
        if (!publicKey) {
          throw new Error("publicKey is undefined")
        }
        const maker = pk_to_pkh(publicKey)
        const request: OrderDataTypeRequest = {
          contract: contract,
          token_id: new BigNumber(tokenId),
          seller: maker,
          buy_asset_contract: argv.ft_contract,
          buy_asset_token_id: argv.ft_token_id
        }
        return await get_active_order_type(provider.config, request)
      } catch (e) {
        console.error(e)
      }
    }

    case "get_balance": {
      try {
        return get_balance(provider.config, argv.owner!, argv.sale_type, argv.ft_contract, argv.ft_token_id)
      } catch (e) {
        console.error(e)
      }
    }

    case 'deploy_exchange':
      console.log("deploy exchange")
      const op_deploy_exchange = await deploy_exchange(provider, owner, argv.transfer_manager, argv.royalties_contract, argv.fill)
      await op_deploy_exchange.confirmation()
      console.log(op_deploy_exchange.contract)
      break

    case 'deploy_transfer_proxy':
      console.log("deploy transfer proxy")
      const op_deploy_transfer_proxy = await deploy_transfer_proxy(provider, owner)
      await op_deploy_transfer_proxy.confirmation()
      console.log(op_deploy_transfer_proxy.contract)
      break

    case 'deploy_transfer_manager':
      console.log("deploy transfer manager")
      const op_deploy_transfer_manager = await deploy_transfer_manager(provider, owner, fee_receiver, new BigNumber(argv.protocol_fee))
      await op_deploy_transfer_manager.confirmation()
      console.log(op_deploy_transfer_manager.contract)
      break

    case 'update_operators_for_all':
      console.log('update operators for all')
      const arg_update: TransactionArg = {
        destination: argv.contract,
        entrypoint: "update_operators_for_all",
        parameter: [{prim: 'Left', args: [{string: argv.operator}]}]
      }
      const op_update = await send(provider, arg_update)
      await op_update.confirmation()
      console.log(op_update.hash)
      break

  }
}

// testScript()
