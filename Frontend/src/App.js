import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/navbar'; 
//import About from './Component/Footer/about';
import { Router } from './Component/Router';
import { AuthContextProvider } from './Context/AuthContext';

function app(){
  return(
    <div>
      <Navbar/>
      <AuthContextProvider>
        <Router/>
      </AuthContextProvider>
    </div>

)

}
export default app;

