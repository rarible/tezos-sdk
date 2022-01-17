import { TezosProvider, pack_string, tezos_signed_message_prefix } from "../../common/base"
import { KukaiEmbed, Networks, LoginInfo } from 'kukai-embed'
import BigNumber from "bignumber.js"
import { TezosOperationType, PartialTezosTransactionOperation, TezosTransactionParameters } from '@airgap/beacon-sdk'
import { TezosToolkit, TransferParams, OriginateParams, Signer } from "@taquito/taquito"

async function get_user(embed: KukaiEmbed) : Promise<LoginInfo> {
  if (embed.user) return embed.user
  else return await embed.login()
}

function mk_transfer_params(arg: TransferParams) : PartialTezosTransactionOperation {
  const amount = (new BigNumber(arg.amount).times(1000000)).toString()
  const kind = TezosOperationType.TRANSACTION
  const destination = arg.to
  const parameters =
    (arg.parameter) ? { entrypoint: arg.parameter.entrypoint, value: arg.parameter.value } as TezosTransactionParameters : undefined
  return { kind, destination, amount, parameters }
}

// export class KukaiSigner implements Signer {
//   constructor(
//     private embed: KukaiEmbed
//   ) {}
//   async publicKey(): Promise<string> {
//     const user = await get_user(this.embed)
//     return user.pk
//   }
//   async publicKeyHash(): Promise<string> {
//     const user = await get_user(this.embed)
//     return user.pkh
//   }
//   async secretKey(): Promise<string> {
//     throw new Error('Secret key cannot be exposed');
//   }
//   async sign(bytes: string, watermark?: Uint8Array): Promise<{ bytes: string; prefixSig: string; sbytes: string; sig: string }> {
//     const payload = (watermark) ? uint8array_to_hex(watermark) + bytes : bytes
//     const prefixSig = await this.embed.signExpr(payload)
//     let prefix : Uint8Array;
//     switch (prefixSig.substring(0, 4)) {
//       case 'edsig':
//         prefix = edsig_prefix
//         break
//       case 'spsig':
//         prefix = spsig1_prefix
//         break
//       case 'p2sig':
//         prefix = p2sig_prefix
//         break
//       default:
//         throw new Error(`signature {prefixSig} is not valid`)
//     }
//     let b = b58dec(prefixSig, prefix)
//     const sig = b58enc(b, sig_prefix)
//     const sbytes = bytes + uint8array_to_hex(b)
//     return {sig, prefixSig, bytes, sbytes }
//   }
// }

export async function kukai_provider(embed: KukaiEmbed, tk: TezosToolkit) : Promise<TezosProvider> {
  await embed.init()
  const transfer = async(arg: TransferParams) => {
    const hash = await embed.send([mk_transfer_params(arg)])
    const confirmation = async() => {
      const r = await embed.trackOperation(hash)
      if (r.failed) throw new Error(r.error)
    }
    return { hash, confirmation }
  }
  const originate = async(_arg: OriginateParams) => {
    throw new Error("origination not implemented for kukai provider")
  }
  const batch = async(args: TransferParams[]) => {
    const ts : PartialTezosTransactionOperation[] = args.map(mk_transfer_params)
    const hash = await embed.send(ts)
    const confirmation = async() => {
      const r = await embed.trackOperation(hash)
      if (r.failed) throw new Error(r.error)
    }
    return { hash, confirmation }
  }
  const sign = async(bytes: string, type?: "operation" | "message") => {
    let prefix = (type=="message") ? tezos_signed_message_prefix() : ''
    let message = prefix + bytes
    let payload = pack_string(message)
    const signature = await embed.signExpr(payload)
    return {signature, prefix}
  }
  const address = async() => {
    const user = await get_user(embed)
    return user.pkh
  }
  const public_key = async() => {
    const user = await get_user(embed)
    return user.pk
  }
  const balance = async() => {
    const a = await address()
    return tk.tz.getBalance(a)
  }
  const chain_id = async () => tk.rpc.getChainId()
  const storage = async(contract: string) => {
    const c = await tk.wallet.at(contract)
    return c.storage()
  }

  return {
    kind: "kukai",
    transfer,
    originate,
    batch,
    sign,
    address,
    public_key,
    storage,
    balance,
    chain_id,
    tk,
  }

}
