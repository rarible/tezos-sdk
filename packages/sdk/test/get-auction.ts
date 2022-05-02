import {testScript} from "../main/script";

async function getAuction() {
  const sellerEdsk = "edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj"
  const buyerEdsk = "edskS4QxJFDSkHaf6Ax3ByfrZj5cKvLUR813uqwE94baan31c1cPPTMvoAvUKbEv2xM9mvtwoLANNTBSdyZf3CCyN2re7qZyi3"

  const mintedItemId = "KT1EreNsT2gXRvuTUrpx6Ju4WMug5xcEpr43:247"
  const auction = await testScript('get_auction', {
    edsk: sellerEdsk,
    item_id: mintedItemId
  })
  console.log('auction', auction)
}
getAuction()
