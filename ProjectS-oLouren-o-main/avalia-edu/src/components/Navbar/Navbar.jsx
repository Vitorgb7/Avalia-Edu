import React from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const isConfirmad = window.confirm('Tem certeza que deseja sair? Voltará para página de login.')

    if (isConfirmad) {
      navigate('/')      
    }
  }

  return (
    <div className='Navbar'>
        <nav className='navegation'>
            <h1><img src="/logo.png" alt="logo" id='logo'/></h1>
            <ul>
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/Contact'}>Quem Somos</Link></li>
                <li><Link to={'/exemple'}>Desenvolvedores</Link></li>
            </ul>
            <button className='btn-logout' onClick={handleLogout}>Sair</button>
        </nav>
    </div>
  )
}

export default Navbar