import React from 'react'
import Home from './components/Home/Home'
import Login from './components/login/login.jsx'
import Register from './components/registro/register.jsx'
import UsersList from './components/dashboard/usersList'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link to="/"><a class="nav-link" href="#">Home</a></Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/Login"><a class="nav-link" href="#">Features</a></Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/Register"><a class="nav-link" href="#">Pricing</a></Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/UsersList"><a class="nav-link disabled" href="#">Disabled</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar