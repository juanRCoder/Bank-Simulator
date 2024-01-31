import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../Components/Navbar/Navbar";
import Landing from "../Pages/Landing/Landing";
import Login from "../Pages/Login/Login";
import Footer from "../Components/Footer/Footer";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Deposito from "../Pages/Deposito/Deposito";
import Retiro from "../Pages/Retiro/Retiro";
import Transaction from "../Pages/Transactions/Transaction";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/getDashboard/:id" element={<Dashboard />} />
          <Route path="/Deposito" element={<Deposito/>}/>
          <Route path="/Retiro" element={<Retiro/>}/>
          <Route path="/Transactions/:id" element={<Transaction/>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
};

export default Routers;
