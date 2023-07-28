// BTC to MYR
async function logBTMY() {
  try{
    const res = await fetch("https://api.luno.com/api/1/ticker?pair=XBTMYR")
    //     { this part can be shorten to just declaring line 1
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json", **
    //   }
    // });
    const BTMYdata = await res.json();// need get last trade
    console.log(BTMYdata.last_trade); 
    return +BTMYdata.last_trade
    
  } catch (error) {
    console.error("Error fetching data:", error); // another way is to put this after declaring fetch using respond
}
}
logBTMY()

//// BTC to USD
async function logBTMY() {
  try{
    const response = await fetch("https://api.luno.com/api/1/ticker?pair=XBTMYR")
    if(response.status === 200)
    {
      const res =  await response.json();// this is common code
      console.log(res.last_trade)
      return +res.last_trade// this return value of last trade btc in myr *by wont printing out anything!!*
    }
    else
    {
      throw "Fetch error";
    }
  } catch (err) {
        if(err === "Fetch error")
          return "error message"
        throw err// this will crash the program, EXIT
    }
    
    const BTMYdata = await res.json();
    console.log(BTMYdata.last_trade); 
    return +BTMYdata.last_trade;

  // } catch (error) {
  //   console.error("Error fetching data:", error)  
  // }
}
logBTMY() 

  

 