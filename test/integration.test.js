beforeEach(() => {
    jest.resetModules(); });

test("Return expected outcome in console if everything is successful", async () => {
        const testResult = require("../index.js").testResult;
        const MOCK_LUNOMP = 130000;
        jest.mock("../lib/lunorm", () => {
            const MOCK_LUNOMP = 130000
            return {
                getBTMY() {
                    return new Promise(res => res(MOCK_LUNOMP) )
                }
            };
        })

        const MOCK_ERATE = 4.5;
        jest.mock("../lib/exch.js", () => {
            return {
                getExch() {
                    return new Promise(res => res(MOCK_ERATE))
                }
            };
        })

        const MOCK_BIRATE = 25000;
        jest.mock("../lib/bi.js", () => {
            return {
                getBiUSD() {
                    return new Promise(res => res(MOCK_BIRATE))
                }
            };
        })

        const MOCK_LUNOUP = 30000;
        const MOCK_PDIFF = 100;
        const MOCK_LUPREM = 0.3000;

        jest.mock("../lib/math.js", () => {
            return {
                getLunoUSD() {
                    return Promise.resolve(MOCK_LUNOUP);
                },

                getPriceDiff() {
                    return Promise.resolve(MOCK_PDIFF);
                },

                lunoPrem() {
                    return Promise.resolve(MOCK_LUPREM);
                },

            };
        });

    console.log = jest.fn(() => undefined)

    await testResult();

expect(console.log).toHaveBeenCalledWith("BTCMYR price on Luno: ".padEnd(30) + "MYR " + MOCK_LUNOMP)
expect(console.log).toHaveBeenCalledWith("USDMYR:".padEnd(30) + MOCK_ERATE)
expect(console.log).toHaveBeenCalledWith("BTCUSD price on Luno: ".padEnd(30) + "USD " + MOCK_LUNOUP)
expect(console.log).toHaveBeenCalledWith("BTCBUSD price on Binance:".padEnd(30) + "USD " + MOCK_BIRATE)
expect(console.log).toHaveBeenCalledWith("Price difference: ".padEnd(30) + "USD " + MOCK_PDIFF)
expect(console.log).toHaveBeenCalledWith("Luno premium:".padEnd(30) + MOCK_LUPREM.toFixed(4) + "%" )

})