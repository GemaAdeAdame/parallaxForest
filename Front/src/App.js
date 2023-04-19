import React from 'react';
import Home from './components/Home/Home';
import Login from './components/login/login.jsx';
import Register from './components/registro/register.jsx';
import UsersList from './components/dashboard/usersList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Coordenadas from './components/Mapa/coordenadas';
import Mapa from './components/Mapa/mapa';
import Fecha from './components/Fecha/Fecha';
import Birds from './components/Birds/Birds'
import Avistamientos from './components/Avistamientos/Avistamientos';

function CoordenadasMapaFecha() {
  return (
    <>
      <Coordenadas />
      <Mapa />
      <Fecha />
    </>
  );
}

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
          <Link to="/coordenadasmapafecha">CoordenadasMapaFecha</Link>
        </li>
        <li>
          <Link to="/birds">Birds</Link>
        </li>
        <li>
          <Link to="/userslist">Users List</Link>
        </li>
        <li>
          <Link to="/avistamientos">Avistamientos</Link>
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
        <Route exact path="/coordenadasmapafecha" element={<CoordenadasMapaFecha />} />
        <Route exact path="/birds" element={<Birds />} />
        <Route exact path="/userslist" element={<UsersList />} />
        <Route exact path="/avistamientos" element={<Avistamientos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;