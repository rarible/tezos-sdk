import {testScript} from "../../../main/script";

export async function get_asset_type() {
  console.log("--------------------")
  console.log("Running get_asset_type test")
  console.log("--------------------")
  const typeNFT = await testScript('get_collection_type', {
    item_id: "KT1PbgUdefpvLWdBuxiL9n6sXMon2ZvsqCDK:7",
    is_dev: true
  })
  console.log(typeNFT)
  const typeMT = await testScript('get_collection_type', {
    item_id: "KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA:433",
    is_dev: true
  })
  console.log(typeMT)
}
