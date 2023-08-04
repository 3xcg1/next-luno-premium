beforeEach(() => {
    jest.resetModules()
});

test("Return BTCUSD price if successful", async () => {
    const { getLunoUSD } = require("../lib/math.js")
    const { getBTMY } = require("../lib/lunorm.js")
    const { getExch } = require("../lib/exch.js")

    jest.mock("../lib/lunorm.js")
    jest.mock("../lib/exch.js")
   
    getBTMY.mockResolvedValue(100)
    getExch.mockResolvedValue(4)
    
    expect(await getLunoUSD()).toBe(25)
}) 

test("Return expected DiffinPrice in console if all is successful", async () => {
    const lunoPr = require("../lib/math.js").lunoResult;
    const MOCK_PD = 90;
    jest.mock('../lib/math.js', () =>{
        return {
            getPriceDiff() {
                return new Promise(res => res(MOCK_PD))
            }
        }
    })
})    


test("Return expected LunoPremium in console if all is successful", async () => {
    const lunoPM = require("../lib/math.js").lunoResult;
    const MOCK_LPM = 90;
    jest.mock('../lib/math.js', () =>{
        return {
            lunoPrem() {
                return new Promise(res => res(MOCK_LPM))
            }
        }
    })
})  

