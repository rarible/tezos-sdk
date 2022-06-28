import {testScript} from "../../../main/script";

async function dev_await_v2_order() {
  const order_id = await testScript('await_v2_order', {
    ft_contract: "KT1NWdwVA8zq5DDJTKcMkRqWYJcEcyTTm5WK",
    ft_token_id: "463",
    owner: "tz1Mxsc66En4HsVHr6rppYZW82ZpLhpupToC",
    order_id: "onzvCvVRxMMracE5Zs1qoEXHKfggUHrNtXHPosNh6kC37bycUZs",
    is_dev: true
  })
  console.log(order_id)
}
