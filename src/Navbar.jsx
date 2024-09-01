
import { NavLink } from "react-router-dom"
    export const Navbar = ({onChangeCoin})=>{
    return(<nav>
        <ul>
        <input type="button" onClick={onChangeCoin} value={"to change the dollar rate click here"}></input>
            <li><NavLink className={(Object)=>Object.isActive?"active":"notActive" } to={'zeev'}>Form</NavLink></li>
            <li><NavLink className={(Object)=>Object.isActive?"active":"notActive" } to={'ArrDonors'}>The List Donors</NavLink></li>
        </ul>
    </nav>)
}

export default Navbar;
