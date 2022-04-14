import {testScript} from "../main/script";

async function get_decimals() {
  const decimals = await testScript('get_decimals', {
    ft_contract: "KT1LJSq4mhyLtPKrncLXerwAF2Xvk7eU3KJX",
    ft_token_id: "0",
  })
  console.log(decimals.toString())
}
get_decimals()
