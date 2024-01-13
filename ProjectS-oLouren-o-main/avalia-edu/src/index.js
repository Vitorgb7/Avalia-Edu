import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Home from './components/Home/Home';
import Membros from './components/Membros/Membros';
import Login from './components/Login/Login';
import UserProfile from './components/UserProfile/UserProfile'
import TurmaDetails from './components/TurmaDetails/TurmaDetails';
import EscolaDetails from './components/EscolaDetails/EscolaDetails';
import RespostasDetails from './components/RespostasDetails/RespostasDetails';

import{ createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css';
import QuemSomos from './components/QuemSomos/QuemSomos';



const router = createBrowserRouter([
  { path: '/', element: <App />},
  { path: '/login', element: <Login /> }, 
  { path: '/:cpf', element: <UserProfile /> },
  { path: '/:escolaId', element: <EscolaDetails /> },
  { path: '/:escolaId/turmas/:turmaId', element: <TurmaDetails /> },
  { path: '/:turmaId/respostas', element: <RespostasDetails /> },
  { path: '/home', element: <Home /> },
  { path: '/Membros', element: <Membros /> },
  { path: '/Quem-somos', element: <QuemSomos /> },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
