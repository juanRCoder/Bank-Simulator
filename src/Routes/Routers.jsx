import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from '../Components/Navbar/Navbar';
import Landing from '../Pages/Landing/Landing';
import Login from '../Pages/Login/Login';
import Footer from '../Components/Footer/Footer';
import Dashboard from '../Pages/Dashboard/Dashboard';



const Routers = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/getDasboard/:id" element={<Dashboard/>}/>
    </Routes>
    <Footer></Footer> 
    </BrowserRouter>
    </>
  )
}

export default Routers;