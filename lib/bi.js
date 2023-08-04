//Binance for Bitc in USD
import Binance from 'node-binance-api';
let binance = new Binance();

export async function getBiUSD() {
    try { 
      const ticker = await binance.prices();
      return +ticker.BTCBUSD;
    
        } catch (error) {
        throw error
      }
}

getBiUSD();