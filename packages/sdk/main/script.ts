import { transfer, mint, burn, deploy_nft_public, set_token_metadata, set_metadata } from "./index"
import { in_memory_provider } from '../providers/in_memory/in_memory_provider'
import yargs from 'yargs'
import BigNumber from "bignumber.js"
import { deploy_exchange, deploy_fill, deploy_royalties, deploy_transfer_manager, deploy_transfer_proxy } from "@rarible/tezos-contracts"
import { send, TransactionArg } from "@rarible/tezos-common"

async function main() {
  const argv = await yargs(process.argv.slice(2)).options({
    edsk: {type: 'string', default: 'edsk4CmgW9r4fwqtsT6x2bB7BdVcERxLPt6poFXGpk1gTKbqR43G5H'},
    endpoint: {type: 'string', default: 'https://hangzhou.tz.functori.com'},
    exchange: {type: 'string', default: 'KT1ULGjK8FtaJ9QqCgJVN14B6tY76Ykaz6M8'},
    contract: {type: 'string', default: ''},
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
    transfer_proxy: {type: 'string', default: 'KT1Qypf9A7DHoAeesu5hj8v6iKwHsJb1RUR2'},
    transfer_manager: {type: 'string', default: 'KT1DyDkW16XBuFzpLkXKraD46SAxQDrha5gm'},
    fee_receiver: {type: 'string'},
    protocol_fee: {type: 'number', default: 0},
    wrapper: {type: 'string', default: 'KT1LkKaeLBvTBo6knGeN5RsEunERCaqVcLr9'},
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
    api: "https://localhost:8080/v0.1",
    api_permit: "https://localhost:8081/v0.1",
    permit_whitelist: [],
    wrapper: argv.wrapper,
    auction: "",
    auction_storage: "",
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
      console.log(op_mint.hash)
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
