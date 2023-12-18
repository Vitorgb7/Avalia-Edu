import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';

import { Outlet } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet/>
      <Login />
    </div>
  );
}

export default App;
