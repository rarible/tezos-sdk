import {testScript} from "../../main/script";

export async function dev_get_decimals() {
  console.log("--------------------")
  console.log("Running dev_get_decimals test")
  console.log("--------------------")
  const decimalsFA2 = await testScript('get_decimals', {
    ft_contract: "KT1HvTfYG7DgeujAQ1LDvCHiQc29VMycoJh5",
    ft_token_id: "0",
    is_dev: true
  })
  console.log("FA2 decimals = " + decimalsFA2.toString())
  const decimalsFA12 = await testScript('get_decimals', {
    ft_contract: "KT1X9S5Z69r36kToUx2xSi32gmhRjEW64dMS",
    is_dev: true
  })
  console.log("FA12 decimals = " + decimalsFA12.toString())
}
