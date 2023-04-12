import React from 'react';
import Home from './components/Home/Home';
import Login from './components/login/login.jsx';
import Register from './components/registro/register.jsx';
import UsersList from './components/dashboard/usersList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

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
        <Route exact path="/userslist" element={<UsersList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;