//Binance for Bitc in USD
import Binance from 'node-binance-api';
let binance = new Binance();

async function getBTUSPrice() {
  try { 
    const ticker = "";
    binance.prices('BTCBUSD', (error, ticker) => {
        console.info("BTCBUSD price on Binance: ", ticker.BTCBUSD);
      });
     
    return +ticker.BTCBUSD;
    
  } catch (error) {
        throw error
    }
}

getBTUSPrice();
//console.info(getBTUSPrice())