import React from 'react'
import "../Header/style.css"
import { NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";



const Header = () => {
  return (
    <div className='container'>
      <div className="headerr"><img src="https://preview.colorlib.com/theme/aranoz/img/logo.png" alt=""  className='logo'/>
<div className="navv">
 <ul>
   <li><NavLink to="/">Home</NavLink></li> 
  <li><NavLink to="/shop">Shop</NavLink></li> 
  <li><NavLink to="/pages">Pages</NavLink></li>   
  <li><NavLink to="/blog">Blog</NavLink></li>   
  <li><NavLink to-="/contact">Contact</NavLink></li>  

 </ul>
</div>
<div className="icons">
<CiSearch />
<CiHeart />
<CiShoppingCart />


</div>
</div>

    </div>
  )
}

export default Header   