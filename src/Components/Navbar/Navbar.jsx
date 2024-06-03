import React,{useContext, useState} from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import Cookies from 'js-cookie'
import cart_icon from '../assets/cart_icon.png'
import { Link,useNavigate } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
   const {getTotalCartItems} = useContext(ShopContext)
   const [menu , setMenu] = useState("shop")
   const navigate=useNavigate()

   const removeCookie=()=>{
      Cookies.remove('token')
      navigate("/signup")
   }

  return (
    <div className='navbar'>
         <div className="nav-logo">
            <img src={logo} alt=''/>
            <p>Shopper</p>
         </div>
         <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:'none'}}  to='/'>Shop</Link>{menu === "shop"?<hr/>:<></> }</li>
            <li onClick={()=>{setMenu("men")}}> <Link style={{textDecoration:'none'}} to='/mens'>Men</Link> {menu === "men"?<hr/>:<></> }</li>
            <li onClick={()=>{setMenu("women")}}> <Link style={{textDecoration:'none'}} to='/womens'>Women</Link> {menu === "women"?<hr/>:<></> }</li>
            <li onClick={()=>{setMenu("kid")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link> {menu === "kid"?<hr/>:<></> }</li>
         </ul>
         <div className="nav-login-cart">
            <button onClick={removeCookie}>Logout</button>
            <Link to='/cart'> <img src={cart_icon} alt="" /></Link> 
            <div className="nav-cart-count">{getTotalCartItems()}</div>
         </div>
         
    </div>
  )
}

export default Navbar
