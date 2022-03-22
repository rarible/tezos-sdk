import {
  transfer,
  mint,
  burn,
  deploy_nft_public,
  set_token_metadata,
  set_metadata,
  sell,
  get_public_key,
  SellRequest, pk_to_pkh, fill_order, OrderForm, order_of_json
} from "./index"
import { in_memory_provider } from '../providers/in_memory/in_memory_provider'
import yargs from 'yargs'
import BigNumber from "bignumber.js"
import { deploy_exchange, deploy_fill, deploy_royalties, deploy_transfer_manager, deploy_transfer_proxy } from "@rarible/tezos-contracts"
import {check_asset_type, send, TransactionArg, UnknownTokenAssetType} from "@rarible/tezos-common"
import fetch from "node-fetch"

async function main() {
  const argv = await yargs(process.argv.slice(2)).options({
    edsk: {type: 'string', default: 'edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj'},
    endpoint: {type: 'string', default: 'https://dev-tezos-node.rarible.org'},
    exchange: {type: 'string', default: 'KT1JwjYHgiM5YDGju6g3PhSoSSmpeSMwyTMF'},
    // contract: {type: 'string', default: 'KT1VnhPmUJnEH5dfeD8WW87LCoxdhGUUVfMV'},
    contract: {type: 'string', default: 'KT1RiPFXDqb5TW43mX3zZSPCTtbNLCJVVRdR'},
    royalties_contract: {type: 'string', default: 'KT1WKRXswxEpTbVg2pGgofzwZCNKjAVcuMgh'},
    token_id: {type : 'number'},
    royalties: {type: 'string', default: '{}'},
    amount: {type: 'number'},
    metadata: {type: 'string', default: '{}'},
    metadata_key: {type: 'string', default: ''},
    metadata_value: {type: 'string', default: ''},
    to: {type: 'string'},
    owner: {type: 'string'},
    receiver: {type: 'string'},
    fee: {type: 'number', default: 0},
    operator: {type: 'string', default: ''},
    fill: {type: 'string', default: 'KT1FAndThSQsVqYQVPHGSG5sQPk1XZycNBvL'},
    transfer_proxy: {type: 'string', default: 'KT1KDAErX2DE1n8Xs6KQU6A3trxsFCh44X4a'},
    transfer_manager: {type: 'string', default: 'KT1DyDkW16XBuFzpLkXKraD46SAxQDrha5gm'},
    fee_receiver: {type: 'string'},
    protocol_fee: {type: 'number', default: 0},
    wrapper: {type: 'string', default: 'KT1LkKaeLBvTBo6knGeN5RsEunERCaqVcLr9'},
    item_id: {type: 'string', default: ''},
    order_id: {type: 'string', default: ''},
  }).argv

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

  const tezos = in_memory_provider(argv.edsk, argv.endpoint)

  const config = {
    exchange: argv.exchange,
    transfer_proxy: argv.transfer_proxy,
    fees: new BigNumber(argv.protocol_fee),
    nft_public: "",
    mt_public: "",
    api: "https://dev-tezos-api.rarible.org/v0.1",
    api_permit: "https://dev-tezos-api.rarible.org/v0.1",
    permit_whitelist: [],
    wrapper: argv.wrapper,
    auction: "",
    auction_storage: "",
    node_url: argv.endpoint,
  }

  const provider = {
    tezos,
    config
  }
  const to = (argv.to) ? argv.to : await provider.tezos.address()
  const owner = (argv.owner) ? argv.owner : await provider.tezos.address()
  const fee_receiver = (argv.fee_receiver) ? argv.fee_receiver : await provider.tezos.address()
  const asset_class = (amount==undefined) ? "NFT" : "MT"

  switch(argv._[0]) {
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
      break

    case 'burn':
      console.log("burn")
      const op_burn = await burn(provider, { asset_class, contract: argv.contract, token_id }, amount)
      await op_burn.confirmation()
      console.log(op_burn.hash)
      break

    case 'deploy_nft':
      console.log("deploy nft")
      const op_deploy_fa2 = await deploy_nft_public(provider, owner)
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
      console.log("sell")
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
      break
    }

    case "fill": {
      try {
        console.log("fill order")
        const response = await fetch(`${provider.config.api}/orders/${argv.orderId}`)
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
        console.error(e)
      }
      break
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


main()
