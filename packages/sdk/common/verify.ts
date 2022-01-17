import { ready, crypto_generichash, crypto_sign_verify_detached } from 'libsodium-wrappers'
import { ec } from 'elliptic'
import { b58cdecode, buf2hex, hex2buf, isValidPrefix, prefix } from '@taquito/utils'
import { pk_to_pkh, pack_string } from './base'

type curves = 'ed' | 'p2' | 'sp'

const pref = {
  ed: {
    pk: prefix['edpk'],
    sk: prefix['edsk'],
    pkh: prefix.tz1,
    sig: prefix.edsig,
  },
  p2: {
    pk: prefix['p2pk'],
    sk: prefix['p2sk'],
    pkh: prefix.tz3,
    sig: prefix.p2sig,
  },
  sp: {
    pk: prefix['sppk'],
    sk: prefix['spsk'],
    pkh: prefix.tz2,
    sig: prefix.spsig,
  },
}

export async function verify_bytes(
  public_key: string,
  bytes: string,
  signature: string)
: Promise<boolean> {
  await ready
  const curve = public_key.substring(0, 2) as curves
  const pk = b58cdecode(public_key, pref[curve].pk)

  const sig_prefix = signature.startsWith('sig')
    ? signature.substr(0, 3)
    : signature.substr(0, 5)

  if (!isValidPrefix(sig_prefix)) {
    throw new Error(`Unsupported signature given by remote signer: ${signature}`)
  }

  const sig = (signature.substring(0, 3) === 'sig')
    ? b58cdecode(signature, prefix.sig)
    : (signature.substring(0, 5) === `${curve}sig`)
    ? b58cdecode(signature, pref[curve].sig)
    : undefined
  if (!sig) throw new Error(`Invalid signature provided: ${signature}`)

  const hash = crypto_generichash(32, hex2buf(bytes))

  switch (curve) {
    case 'ed':
      try { return crypto_sign_verify_detached(sig, hash, pk) }
      catch (e) { return false }
    case 'sp':
      const key_sp = new ec('secp256k1').keyFromPublic(pk)
      const hex_sig_sp = buf2hex(Buffer.from(sig))
      const match_sp = hex_sig_sp.match(/([a-f\d]{64})/gi)
      if (match_sp) {
        try {
          const [r, s] = match_sp
          return key_sp.verify(hash, { r, s })
        } catch (e) { return false }
      } else return false

    case 'p2':
      const key_p2 = new ec('p256').keyFromPublic(pk)
      const hex_sig_p2 = buf2hex(Buffer.from(sig))
      const match_p2 = hex_sig_p2.match(/([a-f\d]{64})/gi)
      if (match_p2) {
        try {
          const [r, s] = match_p2
          return key_p2.verify(hash, { r, s })
        } catch (e) { return false }
      } else return false

    default: throw new Error(`Curve '${curve}' not supported`)
  }
}

export async function verify(
  address: string,
  edpk: string,
  message: string,
  signature: string) : Promise<boolean> {
  if (address != pk_to_pkh(edpk)) return false
  return verify_bytes(edpk, message, signature)
}
