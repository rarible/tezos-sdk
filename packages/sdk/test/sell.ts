import {
  mint,
  sell,
  pk_to_pkh, get_public_key, fill_order
} from "../main"
import {in_memory_provider} from '../providers/in_memory/in_memory_provider'
import BigNumber from "bignumber.js"
import { deploy_nft_public } from "@rarible/tezos-sdk-tests"

// edsk3UUamwmemNBJgDvS8jXCgKsvjL2NoTwYRFpGSRPut4Hmfs6dG8 Mxs
// edsk4RqeRTrhdKfJKBTndA9x1RLp4A3wtNL1iMFRXDvfs5ANeZAncZ ibJ
// edsk368NmXyps5vKts1TrFTTAgReC5VN9NtPmL9Er86XUdHm2yWiaU aMw
// edskRsg6YnXooVuL1mdBfiJYkH2sAbeVTLUxBGNiqhbAc76QwStLg61QDHoxV6F2ckfmWv7uBFSmQgRhoDVfhmGZ4CRnvKLG7W iA1
async function main() {

  try {
    const config = {
      exchange: "KT1AguExF32Z9UEKzD5nuixNmqrNs1jBKPT8",
      fees: new BigNumber(0),
      nft_public: "",
      mt_public: "",
    }

    const tezos_seller = in_memory_provider(
      'edsk3UUamwmemNBJgDvS8jXCgKsvjL2NoTwYRFpGSRPut4Hmfs6dG8',
      'https://hangzhou.tz.functori.com')
    const provider_seller = {
      tezos: tezos_seller,
      api: "https://rarible-api.functori.com/v0.1",
      config
    }

    const tezos_buyer = in_memory_provider(
      'edsk4RqeRTrhdKfJKBTndA9x1RLp4A3wtNL1iMFRXDvfs5ANeZAncZ',
      'https://hangzhou.tz.functori.com')
    const provider_buyer = {
      tezos: tezos_buyer,
      api: "https://rarible-api.functori.com/v0.1",
      config
    }

    // await mint(provider, "KT1VYBd25dw5GjYqPM8T8My6b4g5c4cd4hwu", {tz1ibJRnL6hHjAfmEzM7QtGyTsS6ZtHdgE2S: 10000n}, 100n, 101n)

    console.log('before deploy')
    const deployOp = await deploy_nft_public(
      provider_seller,
      await provider_seller.tezos.address()
    )
    await deployOp.confirmation()

    console.log('deploy nft contract=', deployOp.contract)
    if (!deployOp.contract) throw new Error("Contract does not exist")
    // const deployOp = { contract: "KT1QwMQkzcYYGucBQMyAZ9VMmWp6dSNAp1rb" }

    const mintOp = await mint(
      provider_seller,
      // "KT1QwMQkzcYYGucBQMyAZ9VMmWp6dSNAp1rb",
      deployOp.contract,
      {},
      undefined,
      undefined
    )
    await mintOp.confirmation()

    console.log(`mint tokenId=${deployOp.contract}:${mintOp.token_id}`)
    if (!mintOp.token_id) throw new Error('tokenId')


    // const mintOp = { token_id: "3" }

    const maker_edpk = await get_public_key(provider_seller)
    if (!maker_edpk) throw new Error('Maker does not exist')
    const maker = pk_to_pkh(maker_edpk)
    console.log('maker', maker)
    const sellOp = await sell(
      provider_seller,
      {
        maker: maker,
        maker_edpk: maker_edpk,
        make_asset_type: {
          asset_class: "NFT",
          contract: deployOp.contract,
          token_id: new BigNumber(mintOp.token_id),
        },
        amount: new BigNumber(1),
        take_asset_type: {
          asset_class: "XTZ",
        },
        price: new BigNumber("0.0006"),
        payouts: [
          {
            account: maker,
            value: new BigNumber(10000)
          }
        ],
        origin_fees: []
      }
    )
    console.log('sellOp', sellOp)


    const fillMakerEdpk = await get_public_key(provider_buyer)
    if (!fillMakerEdpk) throw new Error('Maker does not exist')
    const fillMaker = pk_to_pkh(fillMakerEdpk)
    const fill = await fill_order(
      provider_buyer,
      {
        maker: sellOp.maker,
        maker_edpk: sellOp.maker_edpk,
        make: {
          asset_type: {
            asset_class: sellOp.make.assetType.assetClass,
            contract: sellOp.make.assetType.contract,
            token_id: sellOp.make.assetType.tokenId,
          },
          value: sellOp.make.value,
        },
        take: {
          asset_type: sellOp.take.assetType.assetClass,
          value: sellOp.take.value
        },
        type: sellOp.type,
        salt: sellOp.salt,
        data: {
          data_type: sellOp.data.dataType,
          payouts: sellOp.data.payouts,
          origin_fees: sellOp.data.originFees,
        },
      },
      {
        amount: new BigNumber(1),
        // payouts: [],
        payouts: sellOp.data.payouts.length === 0 ? [{ account: maker, value: new BigNumber(10000) }] : sellOp.data.payouts,
        // origin_fees: [],
        origin_fees: sellOp.data.originFees || [],
        infinite: true,
        edpk: fillMakerEdpk
      }
    )
    console.log('fill', fill)

  } catch (e) {
    console.error(e)
  }

}

main()
