import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import './Home.css'


const Home = () => {
  const navigate = useNavigate()

  const handleBeforeUnload = (e) => {
    const message = 'Tem certeza de que deseja sair?';
    e.returnValue = message;
    return message;
  };

  const showExitConfirmation = () => {
    const isConfirmed = window.confirm('Tem certeza de que deseja sair?');
    if (isConfirmed) {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      navigate('/')
    }
  };

    useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);

    const handlePopstate = (e) => {
      e.preventDefault();
      showExitConfirmation();
    };

    window.history.pushState(null, null, window.location.href);
    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);


  return (
    <div className='Home'>
      <Navbar />
      <Outlet />
      <div className="footer-home">
        <Footer />
      </div>
    </div>
  )
}

export default Home