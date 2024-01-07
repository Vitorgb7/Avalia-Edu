import Login from './components/Login/Login';
import NavbarLogin from './components/Navbar/NavbarLogin/NavbarLogin';
import Footer from './components/Footer/Footer';
import Membros from './components/Membros/Membros';
import QuemSomos from './components/QuemSomos/QuemSomos';

import { Outlet } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarLogin />
      <Login />
      <Outlet/>
      <hr></hr>
      <QuemSomos />
      <hr></hr>
      <Membros /> 
      <Footer />
    </div>
  );
}

export default App;
