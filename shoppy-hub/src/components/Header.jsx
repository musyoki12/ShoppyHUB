import React from "react";
// import './Header'
import {Link} from 'react-router-dom';
// import  image from "./airbnb.jpeg"
import "./Home.css"
import "./Header.css"
// import { Avatar } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Header(){
    return(
     <div className='header'>
    <Link to='/'>
    <h1>SHOPPY HUB</h1>
      </Link>
        
<div className="header_right">
    <p> View Cart</p>
    {/* <LanguageIcon/> */}
    <Link to='/'>
    <AddShoppingCartIcon/>
      </Link>
   
    <ExpandMoreIcon/>
    {/* <Avatar/> */}
</div>
</div>



    )
}



export default Header 