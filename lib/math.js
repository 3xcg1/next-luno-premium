import dotenv from 'dotenv';
dotenv.config();


import { getBTMY } from './lunorm.js';
import { getExch } from './exch.js';
import { getBiUSD } from './bi.js';

export async function getLunoUSD() {
    try {
        const priceLmyr = await getBTMY();
        const rate = await getExch();
        const lunoUSD = priceLmyr / rate
        return +(priceLmyr / rate);

    } catch (error) {
        if(error === "Fetch error");
            return "Error message";
        
    }     
}
getLunoUSD()

export async function getPriceDiff() {
    try {
        const lunoPrice = await getLunoUSD();
        const biPrice = await getBiUSD();
        const priceDiff = lunoPrice - biPrice;
        return +(priceDiff);

    } catch (error) {
        if(error === "Fetch error");
            return "Error message";
        
    }     
}
getPriceDiff()


export async function lunoPrem() {
    try{
        const luno = await getLunoUSD();
        const diff = await getPriceDiff();
        const prem = (diff / luno) * 100;
        return +prem; 
    
    } catch (error) {
        if(error === "Fetch error");
            return "Error message";
        }
}
lunoPrem()