import {testScript} from "../../main/script";

async function await_v2_order() {
  const order_id = await testScript('await_v2_order', {
    ft_contract: "KT1Uke8qc4YTfP41dGuoGC8UsgRyCtyvKPLA",
    ft_token_id: "463",
    owner: "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC",
    order_id: "onzvCvVRxMMracE5Zs1qoEXHKfggUHrNtXHPosNh6kC37bycUZs",
    is_dev: false
  })
  console.log(order_id)
}
await_v2_order()
