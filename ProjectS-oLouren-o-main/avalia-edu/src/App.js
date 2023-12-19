import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import { Outlet } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet/>
      <Login />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
