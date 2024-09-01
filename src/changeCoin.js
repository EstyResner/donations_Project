 import React from "react";
 import { UseContext } from "react";
 import {RateContext} from './App'
 export  const CalculateDollar=()=>{
   const fromShekelToX = (totalAmount, dollarRate, toCoin) => {
    let Rate = UseContext(RateContext);
    if(Rate.currentCoin=="shekel")
      return totalAmount;
    return totalAmount/3.5

    //אם הוא רוצה לקבל את התוצאה בשקלים את המחזירה את הסכום כמו שהוא
    //אחרת היא ממירה את הערך משקל לדולרים
}

 const fromXToShekel=(sumInX,doolarRate,fromCoin)=>{
    //הטופס ישתמש בפונקציה זו
}




}
export default CalculateDollar;
