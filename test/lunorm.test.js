beforeEach(() => {
  jest.resetModules(); 
});

import { getBTMY } from '../lib/lunorm.js'


const MOCK_PRICE = 100;
const MOCK_JSON_RESP = { last_trade: MOCK_PRICE }

test("Return BTCMYR price if successful", async () =>{
      
      global.fetch = jest.fn(() => Promise.resolve({
          status: 200,
          json: () => Promise.resolve(MOCK_JSON_RESP)
      }));
      
      expect(await getBTMY()).toBe(MOCK_PRICE); 
});


test("Returns Message failed for Luno Response", async () => {
      const MOCK_STATUS = 99;
      global.fetch = jest.fn(() => Promise.resolve({
        status: MOCK_STATUS,
        json: () => {}

      }));
      expect(await getBTMY()).toBe("Failed to retrieve price");

})

