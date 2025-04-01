import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' viewBox="0 0 1000 400"/>
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Working</li>
            <li><button className='btn'>Contact us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
