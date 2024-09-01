import React from 'react';
import { RateContext } from "./App";
import { useContext } from 'react';
import  {CalculateDollar } from './changeCoin'; 

export const BeDonate = ({numberOfDonors,totalAmount,onAdd}) => {
    let rate = useContext(RateContext);
    return(<div className="beDonate">
        <h1 className="target">The target is: 1,000,000</h1>
        <div className="divPicture"><img alt='' className="picMoney" src="picMoney.jpg"></img></div>
        <h2>The Percent total Amount Donated: {((totalAmount / 1000000) * 100).toFixed(2)}%</h2> 
        <h3>The number of the Donors is:{numberOfDonors}</h3>
         <h4>The  total Amount Donated: <CalculateDollar TotalAmount={totalAmount} dollarRate ={rate.dollar} toCoin={ rate.currentCoin}/> </h4> 
         

    </div>)

}
