import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='Navbar'>
        <nav className='navegation'>
            <h1><img src="/logo.png" alt="logo" id='logo'/></h1>
            <ul>
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/Contact'}>Contact</Link></li>
                <li><Link to={'/exemple'}>Exemple</Link></li>

                {/* <li><a href="#">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Exemple</a></li> */}
            </ul>
        </nav>
    </div>
  )
}

export default Navbar