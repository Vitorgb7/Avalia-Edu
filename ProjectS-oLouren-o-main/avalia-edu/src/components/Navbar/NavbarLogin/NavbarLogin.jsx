import { Link } from "react-router-dom"

import './NavbarLogin.css'

const NavbarLogin = () => {
  return (
    <div className='navbar-login'>
        <nav className="navegation-navbar-login">
        <h1><img src="/logo.png" alt="logo" id='logo'/></h1>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/'}>Contact</Link></li>
                <li><Link to={'/'}>Exemple</Link></li>
            </ul>
        </nav>

    </div>
  )
}

export default NavbarLogin