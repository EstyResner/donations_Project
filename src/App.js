import './App.css';
import { Zeev } from './Zeev';
import {BeDonate}from './BeDonate'
import { ArrDonors } from './ArrDonors';
import { createContext, useContext, useEffect } from 'react';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar';
import  {MyColorContext} from './Context'
import {CalculateDollar}from './changeCoin';
import axios from 'axios';
export const RateContext = createContext();
function App() {
  const [selectedC,setSelectedC]=useState("green")
  const changeColor=(x)=>{
  setSelectedC(x)
  console.log({selectedC})
}
  const [arr,setArr] =useState( [
    { name: "Ariel", dedication: "a seed of sustainability", price: "500",id :1,time:'02/03/2012'},
    { name: "Ester", dedication: "blessing and success", price: "300",id :2,time:'02/05/2002' },
    { name: "Neria", dedication: "soulmate", price: "700",id :3 ,time:'18/12/2001'},
]);
const totalAmount=arr.reduce((sum,arr) => sum+ Number(arr.price), 0);
const numberOfDonors=arr.length;
const addToArr=(myDonate)=>{
let copy=[...arr ,myDonate];
setArr(copy);
}
let [rate, setRate] = useState({ dollar: undefined, currentCoin: "shekel" })
const changeCoin = () => {
  setRate({ ...rate, currentCoin: rate.currentCoin == "dollar" ? "shekel" : "dollar" })
}


useEffect(() => {
  axios.get('https://v6.exchangerate-api.com/v6/ef8e1a4bf250d9aadabcf604/latest/USD').then(res => {
    setRate({ ...rate, dollar: res.data.rates.ILS });
  }).catch(err => {
    alert("we are sorry we cannot bring ")
  })
}, [])

  return (
    <div>
      <RateContext.Provider value={rate}>
      <BeDonate totalAmount={totalAmount} numberOfDonors={numberOfDonors} onAdd={addToArr}/>
      <Navbar onChangeCoin={changeCoin} />
      <MyColorContext.Provider value={{theColor:selectedC,theFunc:changeColor}} > 
      <Routes>
      <Route path='/zeev' element={<Zeev onAdd={addToArr}/>}/>
      <Route path='/ArrDonors' element={<ArrDonors arr={arr} />}/>
      </Routes>
      </MyColorContext.Provider>
      </RateContext.Provider>
    </div>
  );
}

export default App;

