import {testScript} from "../../../main/script";

export async function royalties_onchain() {
  console.log("--------------------")
  console.log("Running royalties_onchain test")
  console.log("--------------------")

  //OBJKT -> should be false
  const royalties_objkt: boolean = await testScript('royalties_on_chain', {
    item_id: "KT1TcrYJatTbrg9GoYDbsCu3phPGzMcTSaJn:0",
    is_dev: true
  }) as boolean
  console.log(royalties_objkt)

  //RARIBLE -> should be true
  const royalties_rarible: boolean = await testScript('royalties_on_chain', {
    item_id: "KT1RuoaCbnZpMgdRpSoLfJUzSkGz1ZSiaYwj:407",
    is_dev: true
  }) as boolean
  console.log(royalties_rarible)

}
