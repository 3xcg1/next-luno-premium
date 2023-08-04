// USD2MYR rate
import dotenv from 'dotenv'
dotenv.config();

export async function getExch() {
        try{
        const myHeaders = new Headers();
        myHeaders.append(process.env.API, process.env.API_KEY);
        
        const requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: myHeaders
    };
        const response = await fetch("https://api.apilayer.com/fixer/convert?to=MYR&from=USD&amount=1", requestOptions);
        if(response.status === 200) {  
        const req = await response.json();
        return +req.result
        }
        else {
                throw "Fetch error";
        }
        } catch (error) {
                    if(error === "Fetch error");
                    return "Failed to retrieve exrate";
            }    
    }

 getExch()