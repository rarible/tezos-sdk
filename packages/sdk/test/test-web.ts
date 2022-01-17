import { Provider, transfer, mint, burn, deploy_nft_private, deploy_mt_private, upsert_order, bid, sell, Part, AssetType, OrderForm, SellRequest, BidRequest, ExtendedAssetType, XTZAssetType, FTAssetType, TokenAssetType, fill_order, get_public_key, order_of_json, salt, pk_to_pkh, DeployResult, sign, TezosProvider, approve } from "../main"
import { beacon_provider } from '../providers/beacon/beacon_provider'
import { temple_provider } from '../providers/temple/temple_provider'
import { kukai_provider } from '../providers/kukai/kukai_provider'
import { BeaconWallet } from "@taquito/beacon-wallet"
import { TezosToolkit } from "@taquito/taquito"
import JSONFormatter from "json-formatter-js"
import Vue from "vue"
import BigNumber from "bignumber.js"
import { NetworkType } from "@airgap/beacon-sdk"
import { Networks, KukaiEmbed } from "kukai-embed"
import { TempleWallet } from "@temple-wallet/dapp"
import fetch from "node-fetch"

function parse_parts(s : string) : Array<Part> {
  try {
    if (s == '') s = '{}'
    const json = JSON.parse(s) as { [key:string] : number }
    const parts : Array<Part> = []
    Object.keys(json).forEach(
      function(k : string) : void {
        parts.push({account: k, value: new BigNumber(json[k])})
      })
    return parts
  } catch (e) {
    console.error(e)
    throw e
  }

}

interface RawAssetType {
  asset_class: string;
  contract: string;
  contract_custom: string;
  token_id: number;
}

interface StorageContract {
  contract: string,
  owner: string,
}

function parse_asset_type(r : RawAssetType) : AssetType | ExtendedAssetType | undefined {
  if (r.asset_class == 'XTZ') {
    return { asset_class: 'XTZ' }
  } else if (r.asset_class == 'FT' && (r.contract || (r.contract == 'custom' && r.contract_custom))) {
    return {
      asset_class: 'FT',
      contract: (r.contract=='custom') ? r.contract_custom : r.contract,
      token_id: (r.token_id<0) ? undefined : new BigNumber(r.token_id)
    }
  } else if ((r.asset_class == 'NFT' || r.asset_class == 'MT') && (r.contract || r.contract=='public' || (r.contract == 'custom' && r.contract_custom))) {
    return {
      asset_class: r.asset_class,
      contract: (r.contract=='public') ? undefined : (r.contract=='custom') ? r.contract_custom : r.contract,
      token_id: new BigNumber(r.token_id)
    }
  } else if (r.asset_class == 'Unknown' && (r.contract || (r.contract == 'custom' && r.contract_custom))) {
    return {
      contract: (r.contract=='custom') ? r.contract_custom : r.contract,
      token_id: new BigNumber(r.token_id)
    }
  } else return undefined
}

async function provider(node: string, api:string, wallet: 'temple' | 'beacon' | 'kukai') : Promise<Provider> {
  const tk = new TezosToolkit(node)
  let tezos : TezosProvider
  switch (wallet) {
    case 'beacon':
      const network = NetworkType.HANGZHOUNET
      const wallet_beacon = new BeaconWallet({ name : 'rarible', preferredNetwork: network })
      await wallet_beacon.requestPermissions({ network: {type: network, rpcUrl: node} })
      tezos = await beacon_provider(wallet_beacon, tk)
      break
    case 'temple':
      const wallet_temple = new TempleWallet('rarible')
      await wallet_temple.connect({name: 'hangzhounet', rpc: node})
      tezos = await temple_provider(wallet_temple, tk)
      break
    case 'kukai':
      const wallet_kukai = new KukaiEmbed({net: Networks.dev, enableLogging:true})
      tezos = await kukai_provider(wallet_kukai, tk)
      break
  }
  const config = {
    exchange: "KT1ULGjK8FtaJ9QqCgJVN14B6tY76Ykaz6M8",
    transfer_proxy: "KT1Qypf9A7DHoAeesu5hj8v6iKwHsJb1RUR2",
    fees: new BigNumber(0),
    nft_public: "",
    mt_public: "",
    api, api_permit: "http://localhost:8081/v0.1/",
    permit_whitelist: [ "KT1VY7fDqc2FxhfCPM1DrELKFz6EHwudAXQb" ],
    wrapper: 'KT1LkKaeLBvTBo6knGeN5RsEunERCaqVcLr9',
  }
  return { tezos, config }
}

function not_connected(connected: boolean, output : { status: string, result: string }) {
  if (!connected) {
    output.status = 'danger'
    output.result = 'not connected'
    throw new Error('not connected')
  }
}

export default new Vue({
  el: "#app",
  data: {
    api_url: "http://localhost:8080/v0.1/",
    node: 'https://hangzhou.tz.functori.com',
    wallet: 'temple' as 'temple' | 'beacon' | 'kukai',
    provider: {} as Provider,
    path: "home",
    connected: false,
    address: '',
    transfer : {
      asset_type: {
        asset_class: 'NFT',
        contract: '',
        contract_custom: '',
        token_id: 0,
      },
      destination: '',
      amount: '',
      result: '',
      status: 'info'
    },
    mint: {
      asset_class: 'NFT',
      contract: '',
      contract_custom: '',
      token_id: '' as undefined | string ,
      royalties: '',
      amount: '',
      metadata: '',
      result: '',
      status: 'info'
    },
    burn: {
      asset_type: {
        asset_class: 'NFT',
        contract: '',
        contract_custom: '',
        token_id: 0,
      },
      amount: '',
      result: '',
      status: 'info'
    },
    deploy: {
      owner: '',
      kind: 'NFT',
      metadata: '',
      result: '',
      status: 'info',
    },
    approve: {
      asset_type: {
        asset_class: 'NFT',
        contract: '',
        contract_custom: '',
        token_id: 0,
      },
      value: 1,
      status: 'info',
      result: ''
    },
    api: {
      path: '',
      data: '',
      result: '',
      status: ''
    },
    upsert: {
      maker: '',
      taker: '',
      make: {
        asset_type: {
          asset_class: 'NFT',
          contract: '',
          contract_custom: '',
          token_id: 0,
        },
        value: 1
      },
      take: {
        asset_type: {
          asset_class: 'NFT',
          contract: '',
          contract_custom: '',
          token_id: 0,
        },
        value: 1
      },
      payouts: '',
      origin_fees: '',
      status: 'info',
      result: ''
    },
    sell: {
      maker: '',
      make_asset_type: {
        asset_class: 'NFT',
        contract: '',
        contract_custom: '',
        token_id: 0,
      },
      take_asset_type: {
        asset_class: 'XTZ',
        contract: '',
        contract_custom: '',
        token_id: 0,
      },
      payouts: '',
      origin_fees: '',
      amount: 1,
      price: 1,
      status: 'info',
      result: ''
    },
    bid: {
      maker: '',
      make_asset_type: {
        asset_class: 'XTZ',
        contract: '',
        contract_custom: '',
        token_id: 0,
      },
      take_asset_type: {
        asset_class: 'NFT',
        contract: '',
        contract_custom: '',
        token_id: 0,
      },
      payouts: '',
      origin_fees: '',
      amount: 1,
      price: 1,
      status: 'info',
      result: ''
    },
    fill : {
      continuation: undefined,
      orders: [],
      selected: undefined as any | undefined,
      amount: 1,
      status: 'info',
      result: '',
      get_result: '',
      fields: [ 'hash', 'make_class', 'make_contract', 'make_token_id', 'make_value', 'take_class', 'take_contract', 'take_token_id', 'take_value' ],
      payouts: '',
      origin_fees: ''
    },
    sign : {
      message: '',
      status: 'info',
      result: ''
    },
    nft_contracts: new Set<StorageContract>()
  },

  async created() {
    const r = await fetch("/config.json")
    if (r.ok) {
      const r2 = await r.json()
      if (r2.nft_contracts) r2.nft_contracts.forEach((c : StorageContract) => this.nft_contracts.add(c))
      if (r2.api_url) { this.api_url = r2.api_url }
      if (r2.node) { this.node = r2.node }
    }
    let nft_contracts_s = JSON.parse(localStorage.getItem('nft_contracts') || '[]')
    nft_contracts_s.forEach((c : StorageContract) => this.nft_contracts.add(c))
    localStorage.setItem('nft_contracts', JSON.stringify(Array.from(this.nft_contracts)))
  },

  computed: {
    nft_contracts_options() {
      let options = []
      for (let c of this.nft_contracts) {
        options.push({ text: c.contract.substring(0,10) + ' - ' + c.owner.substring(0,10), value: c.contract })
      }
      options.push({text:'Custom', value:'custom'})
      options.push({text:'Public', value:'public'})
      return options
    }
  },

  methods: {
    async connect() {
      this.provider = await provider(this.node, this.api_url, this.wallet)
      this.connected = true
      this.address = await this.provider.tezos.address()
      this.path = (this.path=="home") ? "tokens" : this.path
    },
    disconnect() {
      this.provider = {} as Provider
      this.connected = false
      this.address = ""
    },
    async ftransfer() {
      not_connected(this.connected, this.transfer)
      this.transfer.status = 'info'
      this.transfer.result = ''
      const asset_type = parse_asset_type(this.transfer.asset_type) as TokenAssetType
      const transfer_amount = (this.transfer.amount) ? new BigNumber(this.transfer.amount) : undefined
      const op = await transfer(this.provider, asset_type, this.transfer.destination, transfer_amount)
      this.transfer.result = `operation ${op.hash} injected`
      await op.confirmation()
      this.transfer.status = 'success'
      this.transfer.result = `operation ${op.hash} confirmed`
    },

    async fmint() {
      not_connected(this.connected, this.mint)
      this.mint.status = 'info'
      this.mint.result = ''
      if (!this.mint.contract) {
        this.mint.status = 'danger'
        this.mint.result = "no contract given"
      } else {
        if (!this.mint.royalties) this.mint.royalties = '{}'
        if (this.mint.token_id=='') this.mint.token_id = undefined
        const royalties0 = JSON.parse(this.mint.royalties) as { [key:string] : number }
        const royalties : { [key:string] : BigNumber } = {}
        const contract = (this.mint.contract=="custom") ? this.mint.contract_custom : this.mint.contract
        const mint_amount = (this.mint.asset_class=='NFT') ? undefined : new BigNumber(this.mint.amount)
        Object.keys(royalties0).forEach(
          function(k : string) : void {
            royalties[k] = new BigNumber(royalties0[k])
          })
        const metadata = (this.mint.metadata) ? JSON.parse(this.mint.metadata) : undefined
        const token_id = (this.mint.token_id!=undefined) ? new BigNumber(this.mint.token_id) : undefined
        const op = await mint(this.provider, contract, royalties, mint_amount, token_id, metadata)
        this.mint.result = `operation ${op.hash} injected`
        await op.confirmation()
        this.mint.status = 'success'
        this.mint.result = `operation ${op.hash} confirmed`
      }
    },

    async fburn() {
      not_connected(this.connected, this.burn)
      this.burn.status = 'info'
      this.burn.result = ''
      const asset_type = parse_asset_type(this.burn.asset_type) as TokenAssetType
      const op = await burn(this.provider, asset_type, (this.burn.amount) ? new BigNumber(this.burn.amount) : undefined)
      this.burn.result = `operation ${op.hash} injected`
      await op.confirmation()
      this.burn.status = 'success'
      this.burn.result = `operation ${op.hash} confirmed`
    },

    async deploy_fa2() {
      not_connected(this.connected, this.deploy)
      this.deploy.status = 'info'
      this.deploy.result = ''
      const owner = (this.deploy.owner) ? this.deploy.owner : this.address
      let metadata = (this.deploy.metadata=='') ? undefined : JSON.parse(this.deploy.metadata)
      let op : DeployResult | undefined ;
      if (this.deploy.kind == 'NFT') op = await deploy_nft_private(this.provider, owner, metadata)
      else if (this.deploy.kind == 'MT') op = await deploy_mt_private(this.provider, owner, metadata)
      if (!op) {
        this.deploy.status = 'danger'
        this.deploy.result = "kind not understood"
      } else {
        this.deploy.result = `operation ${op.hash} injected -> new contract: ${op.contract}`
        await op.confirmation()
        this.deploy.status = 'success'
        this.deploy.result = `operation ${op.hash} confirmed -> new contract: ${op.contract}`
        this.nft_contracts.add({contract: op.contract, owner: this.deploy.owner })
        localStorage.setItem('nft_contracts', JSON.stringify(Array.from(this.nft_contracts)))
      }
    },

    async fapprove() {
      not_connected(this.connected, this.approve)
      this.approve.status = 'info'
      this.approve.result = ''
      const asset_type = parse_asset_type(this.approve.asset_type) as TokenAssetType
      if (!asset_type) {
        this.approve.status = 'danger'
        this.approve.result = "invalid asset type"
      } else {
        const owner = await this.provider.tezos.address()
        const op = await approve(this.provider, owner, { asset_type, value: new BigNumber(this.approve.value) })
        if (!op) {
          this.approve.status = 'warning'
          this.approve.result = "asset already approved"
        } else {
          this.approve.result = `operation ${op.hash} injected`
          await op.confirmation()
          this.approve.status = 'success'
          this.approve.result = `operation ${op.hash} confirmed`
        }
      }
    },

    async api_request() {
      not_connected(this.connected, this.api)
      this.api.status = 'info'
      const elt = document.getElementById("api-request-result")
      if (!elt) throw new Error('element "api-request-result" not found')
      elt.innerHTML = ''
      const options = (this.api.data)
        ? { method: "POST", headers : { "Content-Type": "application/json" }, body: JSON.stringify(this.api.data) }
        : undefined
      try {
        const r = await fetch(this.api_url + this.api.path, options)
        if (r.ok) {
          const formatter = new JSONFormatter(await r.json(), 3)
          elt.appendChild(formatter.render())
        }
        else {
          this.api.status = 'danger'
          this.api.result = r.statusText
        }
      } catch(e: any) {
        this.api.status = 'danger'
        this.api.result = e.toString()
      }
    },

    async fupsert_order() {
      not_connected(this.connected, this.upsert)
      this.upsert.status = 'info'
      this.upsert.result = ''
      const elt = document.getElementById("upsert-result")
      if (!elt) throw new Error('element "upsert-result" not found')
      elt.innerHTML = ''
      const maker_edpk = this.upsert.maker || await get_public_key(this.provider)
      if (!maker_edpk) {
        this.upsert.status = 'danger'
        this.upsert.result = "no maker given"
      } else {
        const make_asset_type = parse_asset_type(this.upsert.make.asset_type) as AssetType
        const take_asset_type = parse_asset_type(this.upsert.take.asset_type) as AssetType
        const make_value = new BigNumber(this.upsert.make.value)
        const take_value = new BigNumber(this.upsert.take.value)
        let payouts = parse_parts(this.upsert.payouts)
        const origin_fees = parse_parts(this.upsert.origin_fees)
        if (!make_asset_type) {
          this.upsert.status = 'danger'
          this.upsert.result = "invalid make asset"
        } else if (!take_asset_type) {
          this.upsert.status = 'danger'
          this.upsert.result = "invalid take asset"
        } else {
          const order : OrderForm = {
            type: "RARIBLE_V2",
            maker: pk_to_pkh(maker_edpk),
            maker_edpk,
            taker_edpk: (this.upsert.taker) ? this.upsert.taker : undefined,
            taker: (this.upsert.taker) ? pk_to_pkh(this.upsert.taker) : undefined,
            make: { asset_type: make_asset_type, value: make_value },
            take: { asset_type: take_asset_type, value: take_value },
            salt: salt(),
            start: undefined,
            end: undefined,
            signature: undefined,
            data: { data_type: "V1", payouts, origin_fees } }
          try {
            const r = await upsert_order(this.provider, order)
            this.upsert.status = 'success'
            const formatter = new JSONFormatter(r, 3)
            elt.appendChild(formatter.render())
          } catch(e : any) {
            this.upsert.status = 'danger'
            this.upsert.result = e.toString()
          }
        }
      }
    },

    async sell_order() {
      not_connected(this.connected, this.sell)
      this.sell.status = 'info'
      this.sell.result = ''
      const elt = document.getElementById("sell-result")
      if (!elt) throw new Error('element "sell-result" not found')
      elt.innerHTML = ''
      const maker_edpk = this.upsert.maker || await get_public_key(this.provider)
      if (!maker_edpk) {
        this.sell.status = 'danger'
        this.sell.result = "no maker given"
      } else {
        const maker = pk_to_pkh(maker_edpk)
        const make_asset_type = parse_asset_type(this.sell.make_asset_type) as ExtendedAssetType
        const take_asset_type = parse_asset_type(this.sell.take_asset_type) as XTZAssetType | FTAssetType
        const amount = new BigNumber(this.sell.amount)
        const price = new BigNumber(this.sell.price)
        let payouts = parse_parts(this.sell.payouts)
        const origin_fees = parse_parts(this.sell.origin_fees)
        if (!make_asset_type) {
          this.sell.status = 'danger'
          this.sell.result = "invalid make asset"
        } else if (!take_asset_type) {
          this.sell.status = 'danger'
          this.sell.result = "invalid take asset"
        } else {
          const request : SellRequest = {
            maker,
            maker_edpk,
            make_asset_type,
            take_asset_type,
            amount,
            price,
            payouts,
            origin_fees }
          try {
            const r = await sell(this.provider, request)
            this.sell.status = 'success'
            const formatter = new JSONFormatter(r, 3)
            elt.appendChild(formatter.render())
          } catch(e : any) {
            this.sell.status = 'danger'
            this.sell.result = e.toString()
          }
        }
      }
    },

    async bid_order() {
      not_connected(this.connected, this.bid)
      this.bid.status = 'info'
      this.bid.result = ''
      const elt = document.getElementById("bid-result")
      if (!elt) throw new Error('element "bid-result" not found')
      elt.innerHTML = ''
      const maker_edpk = this.bid.maker || await get_public_key(this.provider)
      if (!maker_edpk) {
        this.bid.status = 'danger'
        this.bid.result = "no maker given"
      } else {
        const maker = pk_to_pkh(maker_edpk)
        const make_asset_type = parse_asset_type(this.bid.make_asset_type) as XTZAssetType | FTAssetType
        const take_asset_type = parse_asset_type(this.bid.take_asset_type) as ExtendedAssetType
        const amount = new BigNumber(this.bid.amount)
        const price = new BigNumber(this.bid.price)
        let payouts = parse_parts(this.bid.payouts)
        const origin_fees = parse_parts(this.bid.origin_fees)
        if (!make_asset_type) {
          this.bid.status = 'danger'
          this.bid.result = "invalid make asset"
        } else if (!take_asset_type) {
          this.bid.status = 'danger'
          this.bid.result = "invalid take asset"
        } else {
          const request : BidRequest = {
            maker,
            maker_edpk,
            make_asset_type,
            take_asset_type,
            amount,
            price,
            payouts,
            origin_fees }
          try {
            const r = await bid(this.provider, request)
            this.bid.status = 'success'
            const formatter = new JSONFormatter(r, 3)
            elt.appendChild(formatter.render())
          } catch(e : any) {
            this.bid.status = 'danger'
            this.bid.result = e.toString()
          }
        }
      }
    },

    async get_orders() {
      const continuation = (this.fill.continuation) ? '?' + this.fill.continuation : ''
      try {
        const r = await fetch(this.api_url + "/orders/all" + continuation)
        if (!r.ok) {
          this.fill.status = 'danger'
          this.fill.get_result = r.statusText
        } else {
          const res = await r.json()
          this.fill.orders = res.orders.map(order_of_json)
          this.fill.continuation = res.continuation
        }
      } catch(error : any) {
        this.fill.status = 'danger'
        this.fill.get_result = error.toString()
      }
    },

    onselected(items : any) {
      this.fill.selected = {
        type: items[0].type,
        maker: items[0].maker,
        maker_edpk: items[0].maker_edpk,
        taker: items[0].taker,
        taker_edpk: items[0].taker_edpk,
        make: items[0].make,
        take: items[0].take,
        salt: items[0].salt,
        start: items[0].start,
        end: items[0].end,
        signature: items[0].signature,
        data: items[0].data,
      }
    },

    async ffill_order() {
      not_connected(this.connected, this.fill)
      this.fill.status = 'info'
      this.fill.result = ''
      if (!this.fill.selected) {
        this.fill.status = 'danger'
        this.fill.result = 'no order selected'
      } else {
        let payouts = parse_parts(this.upsert.payouts)
        const origin_fees = parse_parts(this.upsert.origin_fees)
        const op = await fill_order(this.provider, this.fill.selected, {
          amount: new BigNumber(this.fill.amount),
          payouts, origin_fees
        })
        this.fill.result = `operation ${op.hash} injected`
        await op.confirmation()
        this.fill.status = 'success'
        this.fill.result = `operation ${op.hash} confirmed`
      }
    },

    async sign_message() {
      not_connected(this.connected, this.sign)
      this.sign.status = 'info'
      this.sign.result = ''
      const elt = document.getElementById("sign-result")
      if (!elt) throw new Error('element "sign-result" not found')
      elt.innerHTML = ''
      let r = await sign(this.provider, this.sign.message, "message")
      const formatter = new JSONFormatter(r, 3)
      elt.appendChild(formatter.render())
    },

    async copy(text : string) {
      await navigator.clipboard.writeText(text)
    },

    async test() {
    }
  }
})
