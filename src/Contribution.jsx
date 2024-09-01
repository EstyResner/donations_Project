import React from 'react';
export const Contribution= (props) => {
    let now=new Date();
    let dediString=props.arr.dedication;
    let contributionTime=new Date(props.arr.time);
    let timeDiff = Math.abs(contributionTime - now);
    let overTimeContribution = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // חישוב נכון של מספר הימים
  return( <div className="Contribution" ><h1>the name is:{props.arr.name}</h1>
  <p>the dedication is:{dediString}</p>
  <p>the price is:{props.arr.price}</p>
  <p>the over time is:{overTimeContribution.toString()}</p></div>
 
  )  
}
