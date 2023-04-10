import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/login/Login";

const Router = () => {
    return (
       <BrowserRouter>
          < Navbar />
          <Routes>
             <Route path="/" />
              
          </Routes>
       </BrowserRouter>
    );
 };
 
 
 export default Router