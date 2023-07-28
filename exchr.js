// USD2MYR rate
var myHeaders = new Headers();
const apiKey = process.env.api_key
myHeaders.append("Authority", apiKey);

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/fixer/latest?symbols=MYR&base=USD", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


// async function logExcr() {
//     try{
//       const response = await fetch("https://api.apilayer.com/fixer/convert?to=MYR&from=USD&amount=1")
//       if(response.status === 200)
//       {
//         const res =  await response.json();// this is common code
//         console.info("BTCMYR price on Luno:", res.last_trade)
//         return +res.last_trade// this return value of last trade btc in myr *by wont printing out anything!!*
//       }
//       else
//       {
//         throw "Fetch error";
//       }
//     } catch (err) {
//           if(err === "Fetch error")
//             return "error message"
//           throw err// this will crash the program
//       }
      
//       const BTMYdata = await res.json();
//       console.log(BTMYdata.last_trade); 
//       return +BTMYdata.last_trade;
  
//   }
//   logBTMY() 