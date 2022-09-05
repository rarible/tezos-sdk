import {testScript} from "../../../main/script";

export async function get_decimals() {
  console.log("--------------------")
  console.log("Running get_decimals test")
  console.log("--------------------")
  const decimals = await testScript('get_decimals', {
    ft_contract: "KT1PEBh9oKkQosYuw4tvzigps5p7uqXMgdez",
    ft_token_id: "0",
    is_dev: true
  })
  console.log(decimals)
}
