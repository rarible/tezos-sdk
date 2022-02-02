import { Asset, Part, OrderForm, OrderRaribleV2DataV1, fill_offchain_royalties } from "../main"
import { in_memory_provider } from '../providers/in_memory/in_memory_provider'
import BigNumber from "bignumber.js"
import { MichelsonData, MichelsonType, packDataBytes } from "@taquito/michel-codec"
import { TezosToolkit } from "@taquito/taquito"
import { BigMapResponse } from "@taquito/rpc"
const blake = require('blakejs');

// edsk3UUamwmemNBJgDvS8jXCgKsvjL2NoTwYRFpGSRPut4Hmfs6dG8 Mxs
// edsk4RqeRTrhdKfJKBTndA9x1RLp4A3wtNL1iMFRXDvfs5ANeZAncZ ibJ
// edsk368NmXyps5vKts1TrFTTAgReC5VN9NtPmL9Er86XUdHm2yWiaU aMw
// edskRsg6YnXooVuL1mdBfiJYkH2sAbeVTLUxBGNiqhbAc76QwStLg61QDHoxV6F2ckfmWv7uBFSmQgRhoDVfhmGZ4CRnvKLG7W iA1

async function main() {

  try {
    const config = {
      exchange: "KT1ULGjK8FtaJ9QqCgJVN14B6tY76Ykaz6M8",
      transfer_proxy: "KT1Qypf9A7DHoAeesu5hj8v6iKwHsJb1RUR2",
      fees: new BigNumber(0),
      nft_public: "",
      mt_public: "",
      api: "https://tezos-api.rarible.org/v0.1",
      api_permit: "http://localhost:8081/v0.1/",
      permit_whitelist: [],
      wrapper: 'KT1LkKaeLBvTBo6knGeN5RsEunERCaqVcLr9',
    }

    const tezos = in_memory_provider(
      'edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3',
      'https://hangzhou.tz.functori.com')
    const provider = {
      tezos: tezos,
      config
    }

  // await mint(provider, "KT1VYBd25dw5GjYqPM8T8My6b4g5c4cd4hwu", {tz1ibJRnL6hHjAfmEzM7QtGyTsS6ZtHdgE2S: 10000n}, 100n, 101n)
    // console.log(op_to_kt1('ooraPaZtEMbQAM885Mhpc2jPRVJCxGchu5ZPJ9ZS2eK5p4VcJxP'))

  //   const st : StorageFA2 = await storage(provider, "KT1Rgf9RNW7gLj7JGn98yyVM34S4St9eudMC")
  //   let id = st.operators.toString()
  //   console.log(id)
  //   let value : MichelsonData = { prim: "Pair", args: [ { string: "tz1iA1KggftRjKtAxQs9QbGra2YdsB5MZmgX" }, { prim: "Pair", args: [ { string: "KT1Qypf9A7DHoAeesu5hj8v6iKwHsJb1RUR2" }, { int : "0" } ] } ] }
  //   let type : MichelsonType = { prim: "pair", args: [ { prim: "address" }, { prim: "pair", args: [ { prim: "address" }, { prim: "nat" } ] } ] }
  //   let r = await get_big_map_value('https://hangzhou.tz.functori.com', id, value, type)
  //   // const r = await st.operators.get({0: "tz1iA1KggftRjKtAxQs9QbGra2YdsB5MZmgX", 1: {0: "KT1Qypf9A7DHoAeesu5hj8v6iKwHsJb1RUR2" , 1: 0}})
  // console.log(r)

    // transfer(provider, { asset_class: "FA_2", contract: "KT1WUJBk5T53bfNLncG2csWo4y8pFSteBvQL", token_id: BigInt(1) }, "tz1iQ3DU476h5EUULD1e5yfuiYyk1JNR6HbY", BigInt(50)).then(console.log).catch(console.log)

    // burn(provider, { asset_class: "FA_2", contract: "KT1MWv7oH8JJhxJJs8co21XiByBEAYx2QDjY", token_id: 1n }, 1n)

  // get_balance(provider, await tezos.address(), { asset_class: 'XTZ' }).then(console.log)

    // check_asset_type(provider, {contract:"KT18ewjrhWB9ZZFYZkBACHxVEPuTtCg2eXPF", token_id: new BigNumber(6)}).then(console.log)

    // const op = await deploy_nft_public(provider, await provider.tezos.address())
    // await op.confirmation()
    // console.log('op', op)
    // const op = await mint(
    //   provider_mxs, "KT1GYa864wjMe61cdtW1UowweC7YHrH6rWb4", {}, undefined, new BigNumber(0))
    // const {transfer, permit} = await make_permit(
    //   provider_mxs, "KT1GYa864wjMe61cdtW1UowweC7YHrH6rWb4",
    //   [ { destination: "tz1ibJRnL6hHjAfmEzM7QtGyTsS6ZtHdgE2S", token_id: new BigNumber(0) } ])

    // const op = await add_permit(provider_amw, permit)

    // const op = await send(provider_u6h, {
    //   destination: "KT1JPYtEMv8PHXfmLoMuWRLsVykoEou5AqKG",
    //   entrypoint: 'setRoyalties',
    //   parameter: [ {string: 'KT1Ex1FBFh8JeGwNU3uZNrV4afU7LoUgLWEK' }, {prim: "Some", args: [{int: '0'}]}, [] ]
    // })

    // const s = await sign(provider, "I would like to save like for itemId: 0xf5de760f2e916647fd766b4ad9e85ff943ce3a2b:16440")
    // console.log(s)
    // const op = await deploy_fa1(provider, await provider.tezos.address(), new BigNumber(1000), 2)

    // const op = await send(provider, {
    //   destination: "KT1XZCojvmT858LXRmgAa7NFqAFkS35hs4fH",
    //   entrypoint: 'approve',
    //   parameter: [ {string: 'tz1iA1KggftRjKtAxQs9QbGra2YdsB5MZmgX' }, {int: "42"} ] })

    // console.log(op)
    // await op.confirmation()

    // const st : StorageFA1_2 = await provider.tezos.storage('KT1L5WyeKsBMTvseptzcX9Vtbn7Qw4naW98X')
    // const v : any = await st.token_metadata.get('0')
    // console.log(v)
    // console.log(v[Object.keys(v)[1]].get('decimals'))
    // console.log(of_hex(v[Object.keys(v)[1]].get('decimals')))

    const make : Asset = {
      asset_type: { asset_class: 'NFT', contract: "KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton" , token_id: new BigNumber(441685) },
      value: new BigNumber(1)
    }

    const take : Asset = {
      asset_type: { asset_class: 'XTZ' },
      value: new BigNumber(1)
    }

    const payouts : Part[] = [
      { account: "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC", value: new BigNumber(7005) },
      { account: "tz1iQ3DU476h5EUULD1e5yfuiYyk1JNR6HbY", value: new BigNumber(2995) }
    ]
    const data : OrderRaribleV2DataV1 = {
      data_type: "V1", payouts, origin_fees: []
    }
    const order : OrderForm = {
      type: "RARIBLE_V2",
      maker: "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC",
      maker_edpk: "edpkuaNBQd9rgqeDHUuCVpwRLFBK8DzneLVLLrFTKmam8A7BAyYir9",
      make, take, salt: '', data
    }
    console.log(JSON.stringify(order, null, 2))
    const order2 = await fill_offchain_royalties(provider, order)
    console.log(JSON.stringify(order2, null, 2))

  } catch (e) {
    console.error(e)
  }

}

main()
