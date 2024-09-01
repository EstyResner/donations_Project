import { useState } from "react";
import { useContext } from "react";
import { MyColorContext } from "./Context";
export const Zeev = ({onAdd}) => {
  let myColor=useContext(MyColorContext);
    const [myDonate,setMyDonate]=useState({
        name:"",
        price:"",
        dedication:"",
    })
    const [MyErrors,setMyErrors]=useState({});
    const change=(e)=>{
        let inputName=e.target.name;
       let inputValue=e.target.value;
        let copy={...myDonate};
        copy[inputName]=inputValue;
        setMyDonate(copy);
        console.log("change");
      }
 
    const validate = () => {
      let err = {};
      if (!myDonate.price) err.price = "Price is a required field";
      if (!myDonate.name) err.name = "Name is a required field";
      if (!myDonate.dedication) err.dedication = "Dedication is a required field";
      console.log(err);
      return err;
    };
 

      const save=(e)=>{
        e.preventDefault();
        const a=validate();
        if(Object.keys(a).length===0){
        alert("the form passed by success")
        console.log("the form passed by success")
        onAdd(myDonate);
        }
        else
        setMyErrors(a);
      }

    return <div className="donate">
      <input type="color"  onChange={(e)=>{{myColor.theFunc(e.target.value)}}}/>
    <form onSubmit={save}><h1 style={{backgroundColor: myColor.theColor}} className="title" >Adding donate :  {myColor.theColor}</h1>
    <p>enter the price</p>
          <input type="text" className='price' name="price" onBlur={change}></input>
          {MyErrors.price && <span className="error-message">{MyErrors.price}</span>}
          <p>enter the name of the donate</p>
          <input type="text" className='nameDonate' name="name" onBlur={change}></input>
          {MyErrors.name && <span className="error-message">{MyErrors.name}</span>}
          <p>enter the dedication</p>
          <input type="text" className='dedication' name="dedication" onBlur={change}></input>
          {MyErrors.dedication && <span className="error-message">{MyErrors.dedication}</span>}
           <input type="submit" value="for the finish process enter here"  className='save'></input> 
           <input type="button" value="add donation" onClick={save}></input>

      
    </form>
    </div>
}