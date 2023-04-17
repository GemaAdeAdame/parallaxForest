import React from 'react';
import Home from './components/Home/Home';
import Login from './components/login/login.jsx';
import Register from './components/registro/register.jsx';
import UsersList from './components/dashboard/usersList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Coordenadas from './components/Mapa/coordenadas';
import Mapa from './components/Mapa/mapa';
import Fecha from './components/Fecha/Fecha'
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/coordenadas">Coordenadas</Link>
        </li>
        <li>
          <Link to="/mapa">Mapa</Link>
        </li>
        <li>
          <Link to="/fecha">Fecha</Link>
        </li>
        <li>
          <Link to="/userslist">Users List</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/coordenadas" element={<Coordenadas />} />
        <Route exact path="/mapa" element={<Mapa />} />
        <Route exact path="/fecha" element={<Fecha />} />
        <Route exact path="/userslist" element={<UsersList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;