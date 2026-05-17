import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <h1>AfridiGym</h1>
        </div>
        <div className='navigation'>
            <ul className='navigationUL'>
                <li className='navigationLI'><NavLink to="/">Home</NavLink></li>
                <li className='navigationLI'><NavLink to="/about">About</NavLink></li>
                <li className='navigationLI'><NavLink to="/features">Features</NavLink></li>
                <li className='navigationLI'><NavLink to="/services">Services</NavLink></li>
                <li className='navigationLI'><NavLink to="/exercise">Exercise</NavLink></li>
            </ul>
        </div>
        <div className='contact-links'>
            <ul className='contact-UL'>
                <li id='contact-btn' className='contact-LI'><NavLink to="/contact">Contact Us</NavLink></li>
                <li id='get-started-btn' className='contact-LI'><NavLink to="/get-started">Get Started</NavLink></li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar
