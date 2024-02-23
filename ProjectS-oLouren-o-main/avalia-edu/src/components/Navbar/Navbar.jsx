import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

import EscolasList from '../Escolas/EscolasList';
import GestoresList from '../Gestores/GestoresList'

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
            <h1><img src="/logo.png" alt="logo" id='logo-nav-home'/></h1>

            {/* tambem sincronizar com a escola cadastrada do banco de dados, que a partir do cpf colocado no input,apareça apenas a escola do gestor*/}
            <h1 className='escola'><EscolasList /></h1>

            {/* sincronizar com o input do login para está sincronizado ao entrar na home (dados salvos no bd) */}
            <h2 className='usuario'><GestoresList /></h2>
            <button className='btn-logout' onClick={handleLogout}>Sair</button>
        </nav>
    </div>
  )
}

export default Navbar