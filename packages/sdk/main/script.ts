import {
  transfer,
  mint,
  burn,
  deploy_nft_public,
  set_token_metadata,
  set_metadata,
  sell,
  get_public_key,
  SellRequest, pk_to_pkh, fill_order, OrderForm, order_of_json, get_decimals, buyV2
} from "./index"
import { in_memory_provider } from '../providers/in_memory/in_memory_provider'
import yargs from 'yargs'
import BigNumber from "bignumber.js"
import { deploy_exchange, deploy_fill, deploy_royalties, deploy_transfer_manager, deploy_transfer_proxy } from "@rarible/tezos-contracts"
import {AssetTypeV2, check_asset_type, send, StorageSalesV2, TransactionArg, UnknownTokenAssetType} from "@rarible/tezos-common"
import fetch from "node-fetch"
import { BuyRequest, getAsset, OrderFormV2, sellV2 } from "../order"

export async function testScript(operation?: string, options: any = {}) {
  let argv = await yargs(process.argv.slice(2)).options({
    edsk: {type: 'string', default: 'edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj'},
    endpoint: {type: 'string', default: 'https://test-tezos-node.rarible.org'},
    exchange: {type: 'string', default: 'KT1S6H2FWxrpaD7aPRSW1cTTE1xPucXBSTL5'},
    // contract: {type: 'string', default: 'KT1VnhPmUJnEH5dfeD8WW87LCoxdhGUUVfMV'},
    contract: {type: 'string', default: 'KT1EreNsT2gXRvuTUrpx6Ju4WMug5xcEpr43'},
    royalties_contract: {type: 'string', default: 'KT1AZfqFGFLMUrscNFyawDYAyqXYydz714ya'},
    token_id: {type : 'number'},
    royalties: {type: 'string', default: '{}'},
    amount: {type: 'number', default: 0},
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
    ft_contract: {type: 'string', default: 'KT1LJSq4mhyLtPKrncLXerwAF2Xvk7eU3KJX'},
    ft_token_id: {type: 'string', default: undefined},
    is_dev: {type: 'boolean', default: false},
    sale_type : {type: 'number', default: 0},
  }).argv
  argv = {
    ...argv,
    ...options
  }
  const action = operation ?? argv._[0]

  const token_id_opt = (argv.token_id!=undefined) ? new BigNumber(argv.token_id) : undefined
  const token_id = (argv.token_id!=undefined) ? new BigNumber(argv.token_id) : new BigNumber(0)

  const royalties0 = JSON.parse(argv.royalties) as { [key: string] : number }
  const royalties : { [key: string] : BigNumber } = {};
  if (royalties0) {
    Object.keys(royalties0).forEach(
      function(k : string) : void {
        royalties[k] = new BigNumber(royalties0[k])
      })
  }

  const amount = (argv.amount) ? new BigNumber(argv.amount as number) : undefined
  const metadata = JSON.parse(argv.metadata) as { [_: string] : string }

  const devNode = "https://dev-tezos-node.rarible.org"
  const tezos = in_memory_provider(argv.edsk, argv.is_dev ? devNode : argv.endpoint)

  const config = {
    exchange: argv.exchange,
    transfer_proxy: argv.transfer_proxy,
    fees: new BigNumber(argv.protocol_fee),
    nft_public: "",
    mt_public: "",
    api: "https://test-tezos-api.rarible.org/v0.1",
    api_permit: "https://test-tezos-api.rarible.org/v0.1",
    permit_whitelist: [],
    wrapper: argv.wrapper,
    auction: "",
    auction_storage: "",
    node_url: argv.endpoint,
    sales: "KT1QaGwLxoBqeQaWpe7HUyEFnXQfGi9P2g6a",
    sales_storage: "KT1S3AAy7XH7qtmYHkvvPtxJj8MLxUX1FrVH",
    transfer_manager: "KT1LQPAi4w2h9GQ61S8NkENcNe3aH5vYEzjP"
  }

  const devConfig = {
    exchange: "KT1V1FP839LnLBT7bUaR9vgTyKwoLgwH7Eni",
    transfer_proxy: "KT1UR39jhgCStFkvriwx6QWPWiH4HHfWxorB",
    fees: new BigNumber(argv.protocol_fee),
    nft_public: "",
    mt_public: "",
    api: "https://dev-tezos-api.rarible.org/v0.1",
    api_permit: "https://dev-tezos-api.rarible.org/v0.1",
    permit_whitelist: [],
    wrapper: "",
    auction: "",
    auction_storage: "",
    node_url: devNode,
    sales: "KT1RTGCiZnCVW6EtDK71NWkKTyCxT2HVkGK1",
    sales_storage: "KT1Wcizh9JHA2j6EmCSLJQQmMuYq3FfgPCRb",
    transfer_manager: "KT1Kq8dR8qjRWEFbzyyYdaKAG7nAtk2amnJg"
  }

  const provider = {
    tezos,
    config: argv.is_dev ? devConfig : config
  }
  console.log('is_dev=', !!argv.is_dev)

  const to = (argv.to) ? argv.to : await provider.tezos.address()
  const owner = (argv.owner) ? argv.owner : await provider.tezos.address()
  const fee_receiver = (argv.fee_receiver) ? argv.fee_receiver : await provider.tezos.address()
  const asset_class = (amount==undefined) ? "NFT" : "MT"

  switch(action) {
    case 'transfer' :
      console.log("transfer")
      const op_transfer = await transfer(provider, { asset_class, contract: argv.contract, token_id }, to, amount)
      await op_transfer.confirmation()
      console.log(op_transfer.hash)
      break

    case 'mint':
      console.log("mint")
      const op_mint = await mint(provider, argv.contract, royalties, amount, token_id_opt, metadata, argv.owner)
      await op_mint.confirmation()
      console.log(`minted item=${argv.contract}:${op_mint.token_id.toString()} hash=${op_mint.hash}`)
      return `${argv.contract}:${op_mint.token_id.toString()}`

    case 'burn':
      console.log("burn")
      const op_burn = await burn(provider, { asset_class, contract: argv.contract, token_id }, amount)
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
        origin_fees: [],
        start: Math.floor(Date.now()/1000 + 100)
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
          contract: argv.ft_contract,
          token_id: argv.ft_token_id != undefined ? new BigNumber(argv.ft_token_id): undefined,
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
          contract: argv.ft_contract,
          token_id: argv.ft_token_id != undefined ? new BigNumber(argv.ft_token_id): undefined,
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
        s_sale_type: AssetTypeV2.XTZ,
        s_sale_asset_contract: undefined,
        s_sale_asset_token_id: undefined,
        s_sale: {
          sale_amount: new BigNumber("2"),
          sale_asset_qty: new BigNumber("1"),
          sale_max_fees_base_boint: 10000,
          sale_end: undefined,
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

    case 'sell_v2_with_fa2': {
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
        s_sale_type: AssetTypeV2.FA2,
        s_sale_asset_contract: argv.ft_contract,
        s_sale_asset_token_id: argv.ft_token_id,
        s_sale: {
          sale_amount: new BigNumber("2"),
          sale_asset_qty: new BigNumber("1"),
          sale_max_fees_base_boint: 10000,
          sale_end: undefined,
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

    case 'sell_v2_with_fa12': {
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
        s_sale_type: AssetTypeV2.FA12,
        s_sale_asset_contract: argv.ft_contract,
        s_sale_asset_token_id: undefined,
        s_sale: {
          sale_amount: new BigNumber("2"),
          sale_asset_qty: new BigNumber("1"),
          sale_max_fees_base_boint: 10000,
          sale_end: undefined,
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
          console.log(op)
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
        const st : StorageSalesV2 = await provider.tezos.storage(provider.config.sales_storage)
        let key_exists = false
        const ft_token_id = (argv.ft_token_id!=undefined) ? new BigNumber(argv.ft_token_id) : new BigNumber(0)
        const amount = (argv.amount!=undefined) ? new BigNumber(argv.amount) : new BigNumber(0)
        try {
          let order : any = await st.sales.get(
            {
              0: contract,
              1: tokenId,
              2: argv.owner,
              3: argv.sale_type,
              4: getAsset(argv.sale_type, argv.ft_contract, ft_token_id),
            }
          )
          key_exists = order!=undefined
        } catch(error) {
          console.log(error)
          key_exists = false
          throw new Error("Error order does not exist")
        }
        if (key_exists) {
          const buyRequest: BuyRequest = {
            asset_contract: contract,
            asset_token_id: new BigNumber(tokenId),
            asset_seller: argv.owner!,
            sale_type: argv.sale_type,
            sale_asset_contract: argv.ft_contract,
            sale_asset_token_id: ft_token_id,
            sale_amount: amount,
            sale_payouts: [],
            sale_origin_fees: [],
            use_all: false,
          }
          const op = await buyV2(provider, buyRequest)
          console.log(op)
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

    case "get_decimals": {
      try {
        return get_decimals(provider, argv.ft_contract, argv.ft_token_id)
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
      const arg_update : TransactionArg = {
        destination: argv.contract,
        entrypoint: "update_operators_for_all",
        parameter: [ { prim: 'Left', args : [ { string: argv.operator } ] } ]
      }
      const op_update = await send(provider, arg_update)
      await op_update.confirmation()
      console.log(op_update.hash)
      break

  }
}

// testScript()
