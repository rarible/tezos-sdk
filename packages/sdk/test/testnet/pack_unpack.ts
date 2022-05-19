import {testScript} from "../../main/script";
import BigNumber from "bignumber.js";
import {packFA12Asset, packFA2Asset, unpackFA12Asset, unpackFA2Asset} from "@rarible/tezos-common";

export async function pack_unpack() {
  console.log("--------------------")
  console.log("Running pack_unpack test")
  console.log("--------------------")
  const contract = "KT1EreNsT2gXRvuTUrpx6Ju4WMug5xcEpr43"
  const tokenId = new BigNumber("1")
  const packedFA12Asset = packFA12Asset(contract)
  const packedFA2Asset = packFA2Asset(contract, tokenId)
  console.log(packedFA12Asset)
  console.log(packedFA2Asset)
  const unpackedFA12Asset = unpackFA12Asset(packedFA12Asset.bytes)
  const unpackedFA2Asset = unpackFA2Asset(packedFA2Asset.bytes)
  console.log(unpackedFA12Asset)
  console.log(unpackedFA2Asset)

}
