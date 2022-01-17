import { TezosToolkit, TransferParams, OriginateParams, OpKind } from "@taquito/taquito"
import { InMemorySigner } from '@taquito/signer'
import { TezosProvider, to_hex, op_to_kt1 } from "../../common/base"

export function in_memory_provider(edsk: string, endpoint: string) : TezosProvider {
  const tk = new TezosToolkit(endpoint)
  tk.setProvider({
    signer: new InMemorySigner(edsk),
  })

  const transfer = async(arg: TransferParams) => {
    const op = await tk.contract.transfer(arg)
    return { hash: op.hash, confirmation: async() => { await op.confirmation() } }
  }
  const originate = async(arg: OriginateParams) => {
    const op = await tk.contract.originate(arg)
    return {
      hash: op.hash,
      confirmation: async() => { await op.confirmation() },
      contract: op_to_kt1(op.hash)
    }
  }
  const batch = async(args: TransferParams[]) => {
    const args2 = args.map(function(a) {
      return {...a, kind: <OpKind.TRANSACTION>OpKind.TRANSACTION} })
    const op = await tk.contract.batch(args2).send()
    return { hash: op.hash, confirmation: async() => { await op.confirmation() } }
  }
  const sign = async(bytes: string, type?: "message" | "operation") => {
    let message = (type=='message') ? to_hex(bytes) : bytes
    const sig = await tk.signer.sign(message)
    return {signature: sig.prefixSig, prefix:''}
  }
  const address = async() => {
    return tk.signer.publicKeyHash()
  }
  const public_key = async() => {
    return tk.signer.publicKey()
  }
  const storage = async(contract: string) => {
    const c = await tk.contract.at(contract)
    return c.storage()
  }
  const balance = async() => {
    const a = await address()
    return tk.tz.getBalance(a)
  }
  const chain_id = async () => tk.rpc.getChainId()
  return {
    kind: "in_memory",
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
