import { getBTMY } from "./lib/lunorm.js";
import { getExch } from "./lib/exch.js";
import { getLunoUSD } from "./lib/math.js";
import { getBiUSD } from "./lib/bi.js";
import { getPriceDiff } from "./lib/math.js";
import { lunoPrem } from "./lib/math.js";

export async function testResult() {

    const bitcoinrm = await getBTMY();
    const currency = await getExch();
    const bitcoinusd = await getLunoUSD();
    const binanceusd = await getBiUSD();
    const diference = await getPriceDiff();
    const premium = await lunoPrem(); 

    
    console.log("BTCMYR price on Luno: ".padEnd(30) + "MYR " + bitcoinrm)
    console.log("USDMYR:".padEnd(30) + currency)
    console.log("BTCUSD price on Luno: ".padEnd(30) + "USD " + bitcoinusd)
    console.log("BTCBUSD price on Binance:".padEnd(30) + "USD " + binanceusd)
    console.log("Price difference: ".padEnd(30) + "USD " + diference)
    console.log("Luno premium:".padEnd(30) + premium.toFixed(4) + "%" )    
}
testResult()