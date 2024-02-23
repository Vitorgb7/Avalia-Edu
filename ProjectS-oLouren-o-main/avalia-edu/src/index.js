import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import QuemSomos from './components/QuemSomos/QuemSomos';
import TurmasList from './components/Turmas/TumasList'
import TurmaDetails from './components/Turmas/TurmaDetails'
import GestoresDetails from './components/Gestores/GestoresDetails'
import GestoresList from './components/Gestores/GestoresList'
import EscolasList from './components/Escolas/EscolasList'
import EscolasDetails from './components/Escolas/EscolasDetails'
import AlunosDetails from './components/Alunos/AlunosDetails'
import AlunosList from './components/Alunos/AlunosList'

import{ createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css';



const router = createBrowserRouter([
  { path: '/', element: <App />},
  { path: '/login', element: <Login /> }, 
  { path: '/home', element: <Home /> },
  { path: '/Quem-somos', element: <QuemSomos /> },

  {path: '/api/aluno', element: <AlunosList />},
  {path: '/api/aluno/:id', element: <AlunosDetails />},


  { path: '/api/escola', element: <EscolasList /> },
  { path: '/api/escola:id', element: <EscolasDetails /> },

  { path: '/api/gestor', element: <GestoresList /> },
  { path: '/api/gestor:id', element: <GestoresDetails /> },

  { path: '/api/turma', element: <TurmasList /> },
  { path: '/api/turma:id', element: <TurmaDetails /> },

  { path: '/api/escola', element: <EscolasList /> },
  { path: '/api/escola:id', element: <EscolasDetails /> },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
