// BTC in MYR
export async function getBTMY() {
      try{
        const response = await fetch("https://api.luno.com/api/1/ticker?pair=XBTMYR")
        if(response.status === 200)
        {
          const res =  await response.json();
          return +res.last_trade
        }
        else
        {
          throw "Fetch error";
        }
      } catch (err) {
            if(err === "Fetch error")
              return "Failed to retrieve price"
            throw err
        }
}

getBTMY()
