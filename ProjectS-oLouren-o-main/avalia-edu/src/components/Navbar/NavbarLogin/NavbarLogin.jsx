import { Link } from "react-router-dom"

import './NavbarLogin.css'

const NavbarLogin = () => {
  return (
    <div className='navbar-login'>
        <nav className="navegation-navbar-login">
        <h1><img src="/logo.png" alt="logo" id='logo'/></h1>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/'}>Quem Somos</Link></li>
                <li><Link to={'/'}>Desenvolvedores</Link></li>
            </ul>
        </nav>

    </div>
  )
}

export default NavbarLogin