import React, {includes, useState, useMemo, useEffect } from 'react';
import {Contribution} from './Contribution';
import axios from 'axios';

export const ArrDonors = ({arr}) =>{


    let [search, setSearch] = useState("");
    let [x, setX] = useState(5);
    let [sortBy, setSortBy] = useState("date");

    let [arrD,setArrD]=useState([...arr]);
  let [sortedArray,setSortedArray]=useState([...arr]);
//   function Filter (e){
//   let inputName=e.target.value;
//   if(inputName==""){
//     setArrD([...arr]);
//     return;
// }

let FilterArr=()=>{arr.filter(item=>item.name==arr.name)
setArrD(FilterArr)
}
    useEffect(() => {
        console.log({arr});
        
    },[])

    //let arrFilter = useMemo(() => { return arrD.filter(x => x.firstName.includes(search)); }, [search])
    let sorted = useMemo(() => {
        return arrD.sort((a, b) => {
            if (sortBy == "date")
                if (a.date > b.date)
                    return 1;
                else return -1;
            else if (sortBy == "date desc")
                if (a.date < b.date)
                    return 1;
                else return -1;
            else if (sortBy == "price")
                if (a.price > b.price)
                    return 1;
                else return -1;


        })
    }, [sortBy,search]);



    
//    const SortingFromTheOld = () => {
//         const sorted = [...sortedArray].sort((a, b) => new Date(a.date) - new Date(b.date));
//         setSortedArray(sorted);
//       };
    
//       const SortingFromTheNew = () => {
//         const sorted = [...sortedArray].sort((a, b) => new Date(b.date) - new Date(a.date));
//         setSortedArray(sorted);
//       };
    
//       const SortingByHight = () => {
//         const sorted = [...sortedArray].sort((a, b) => b.sum - a.sum);
//         setSortedArray(sorted);
//       };
    return (
    <div className='all-contributions'>
        <input type='text' onChange={FilterArr}/>
        <h1>all the contributions</h1>
        {/* <input type='button' value="ישן" onClick={sorted()}></input>
                   <input type='button' value="חדש" onClick={SortingFromTheNew() }></input>
                   <input type='button' value="גובה התרומה" onClick={SortingByHight()}></input> */}
        <ul>{sorted?.map((item)=>{
            return <li key={item.id}>
                   <Contribution arr={item}/>
             
            </li>
        })}</ul>

        

    </div>
 );

    }