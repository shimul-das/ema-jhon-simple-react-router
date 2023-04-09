import React from 'react'
import './header.css'
import logo from '../images/Logo.svg'

const Header = () => {
  return (
    <nav className='header'>
        <img src={logo} alt="" />
        <div className='h_link'>
        <a href='/'>Shop</a>
        <a href='/orders'>Orders</a>
        <a href='/inventory'>Inventory</a>
        <a href='/login'>Login</a>
        </div>
        
    </nav>
  )
}

export default Header