beforeEach(() => {
  jest.resetModules(); // reset module mocks before each test to not affect other tests in this file
});

test("Returns price if Binance request succeeds", async () => {
  const getBiUSD = require('../lib/bi.js').getBiUSD 
  jest.mock('node-binance-api', () => {
      return class Binance {
      // we use only the prices method for this particular test, so we'll mock just this method
      prices() {
        return new Promise(res => {
          res({
            BTCBUSD: 9
          })
        })
      }
    }
  })

  expect(await getBiUSD()).toBe(9);
});



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