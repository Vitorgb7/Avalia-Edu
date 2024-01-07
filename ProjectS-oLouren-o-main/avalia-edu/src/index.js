import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Home from './components/Home/Home';
import Membros from './components/Membros/Membros';

import{ createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css';
import QuemSomos from './components/QuemSomos/QuemSomos';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/Membros',
    element: <Membros />
  },
  {
    path: '/Quem-somos',
    element: <QuemSomos />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
