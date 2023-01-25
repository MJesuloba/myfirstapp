import React from 'react'
import './style.css'

const Navbar = () => {
  return (
    <div>
        <div className='container'>
            <header>
                <h1 className='header-logo'>Home</h1>
                <ul className='header-links'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Services</li>
                </ul>
            </header>
        </div>
    </div>
  )
}

export default Navbar