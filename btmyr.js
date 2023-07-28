// BTC to USD
async function logBTMY() {
  try{
    const response = await fetch("https://api.luno.com/api/1/ticker?pair=XBTMYR")
    if(response.status === 200)
    {
      const res =  await response.json();// this is common code
      console.info("BTCMYR price on Luno:", res.last_trade)
      return +res.last_trade// this return value of last trade btc in myr *by wont printing out anything!!*
    }
    else
    {
      throw "Fetch error";
    }
  } catch (err) {
        if(err === "Fetch error")
          return "error message"
        throw err// this will crash the program
    }
    
    const BTMYdata = await res.json();
    console.log(BTMYdata.last_trade); 
    return +BTMYdata.last_trade;

}
logBTMY() 