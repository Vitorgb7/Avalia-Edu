import Login from './components/Login/Login';
import NavbarLogin from './components/Navbar/NavbarLogin/NavbarLogin';
import Footer from './components/Footer/Footer';

import { Outlet } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarLogin />
      <Outlet/>
      <Login />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
