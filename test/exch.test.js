// Reset module mocks before each test to not affect other tests in this file
beforeEach(() => {
        jest.resetModules(); 
      });

import { getExch } from "../lib/exch";

const MOCK_EXCR = 3.9256;
const MOCK_JSON_RESP = { result: MOCK_EXCR }

test("Return exchange rate is true if successful", async () =>{
      
      global.fetch = jest.fn(() => Promise.resolve({
          status: 200,
          json: () => Promise.resolve(MOCK_JSON_RESP)
      }));
      
      expect(await getExch()).toBe(MOCK_EXCR); 
});


test("Returns Message failed for Luno Response", async () => {
      const MOCK_STATUS = 99;
      global.fetch = jest.fn(() => Promise.resolve({
        status: MOCK_STATUS,
        json: () => {}

      }));
      expect(await getExch()).toBe("Failed to retrieve exrate");

})

