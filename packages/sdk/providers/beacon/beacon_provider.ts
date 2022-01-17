import { BeaconWallet } from '@taquito/beacon-wallet'
import { SigningType } from "@airgap/beacon-sdk"
import { TezosToolkit, TransferParams, OriginateParams, OpKind } from "@taquito/taquito"
import { TezosProvider, b58enc, hex_to_uint8array, edpk_prefix, tezos_signed_message_prefix, pack_string, op_to_kt1 } from "../../common/base"

export async function beacon_provider(wallet: BeaconWallet, tk: TezosToolkit) : Promise<TezosProvider> {
  tk.setWalletProvider(wallet)
  const transfer = async(arg: TransferParams) => {
    const op = await tk.wallet.transfer(arg).send()
    return { hash: op.opHash, confirmation: async() => { await op.confirmation() } }
  }
  const originate = async(arg: OriginateParams) => {
    const op = await tk.wallet.originate(arg).send()
    return {
      hash: op.opHash,
      contract: op_to_kt1(op.opHash),
      confirmation: async() => { await op.confirmation() }
    }
  }
  const batch = async(args: TransferParams[]) => {
    const args2 = args.map(function(a) {
      return {...a, kind: <OpKind.TRANSACTION>OpKind.TRANSACTION} })
    const op = await tk.wallet.batch(args2).send()
    return { hash: op.opHash, confirmation: async() => { await op.confirmation() } }
  }
  const sign = async(bytes: string, type?: "message" | "operation") => {
    const signingType = SigningType.MICHELINE
    let prefix = ''
    let payload = bytes
    if (type=='message') {
      prefix = tezos_signed_message_prefix()
      payload = pack_string(prefix + bytes)
    }
    const { signature } = await wallet.client.requestSignPayload({ signingType, payload })
    return { signature, prefix }
  }
  const address = async() => {
    return wallet.getPKH()
  }
  const public_key = async() => {
    const account = await wallet.client.getActiveAccount()
    if (account) {
      if (['edpk', 'sppk', 'p2pk'].includes(account.publicKey.substring(0, 4))) return account.publicKey
      else return b58enc(hex_to_uint8array(account.publicKey), edpk_prefix)
    }
    else return undefined
  }
  const storage = async(contract: string) => {
    const c = await tk.wallet.at(contract)
    return c.storage()
  }
  const balance = async() => {
    const a = await address()
    return tk.tz.getBalance(a)
  }
  const chain_id = async () => tk.rpc.getChainId()

  return {
    kind: "beacon",
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
