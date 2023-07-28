import Binance from 'node-binance-api';
let binance = new Binance();

function getBTUSPrice() {
  return new Promise((resolve, reject) => {
    binance.prices('BTCBUSD', (error, ticker) => {
      if (error) {
        reject(error);
      } else {
        console.info("Price of BUSD: ", ticker.BTCBUSD);
        resolve(+ticker.BTCBUSD);
      }
    });
  });
}

async function fetchAndLogBTUSPrice() {
  try {
    const price = await getBTUSPrice();
    return price;
  } catch (error) {
    throw error;
  }
}

// To get the price, use an async function or resolve the promise with .then()
fetchAndLogBTUSPrice()
  .then(price => {
    console.info('BTCBUSD Price:', price);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });