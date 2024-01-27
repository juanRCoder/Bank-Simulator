import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from '../Components/Navbar/Navbar';
import Landing from '../Pages/Landing/Landing';
import Login from '../Pages/Login/Login';
import Footer from '../Components/Footer/Footer';



const Routers = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>

    </Routes>
    <Footer></Footer> 
    </BrowserRouter>
    </>
  )
}

export default Routers;