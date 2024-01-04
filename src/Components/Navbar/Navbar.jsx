import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import  logo from '../Assets/logo.png'
import  cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [menu,setmenu] = useState("shop");
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
          <li onClick={() => {setmenu("shop")}}><Link>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
          <li onClick={() => {setmenu("men")}}>Men{menu === "men"? <hr /> : <></>}</li>
          <li onClick={() => {setmenu("women")}}>Women {menu === "women" ? <hr /> : <></>}</li>
          <li onClick={() => {setmenu("kids")}}>Kids {menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
       <button>Log in</button>
       <img src={cart_icon} alt="" />
        <div className="nav-cart-count"></div>
      </div>

    </div>
  )
}

export default Navbar
