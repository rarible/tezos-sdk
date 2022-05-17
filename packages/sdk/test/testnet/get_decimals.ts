import {testScript} from "../../main/script";

async function get_decimals() {
  const decimals = await testScript('get_decimals', {
    ft_contract: "KT1PEBh9oKkQosYuw4tvzigps5p7uqXMgdez",
    ft_token_id: "0",
  })
  console.log(decimals.toString())
}
get_decimals()
