let bitcoin = document.querySelector(".bitcoin");
let ethereum = document.querySelector(".ethereum");
let dogecoin= document.querySelector(".dogecoin");
async function getprices(){
    const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd");
    const data = await response.json();

    bitcoin.innerHTML = data.bitcoin.usd
    ethereum.innerHTML = data.ethereum.usd
    dogecoin.innerHTML = data.dogecoin.usd
}
getprices()