import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import Login from "../../Pages/Login/Login";
import Retiro from "../../Pages/Retiro/Retiro";
import Deposito from '../../Pages/Deposito/Deposito'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openDeposit, setOpenDeposit] = useState(false);
  const [menu, setMenu] = useState("Landing");
  const [Withdrawal, setWithdrawal] = useState(false);

  return (
    <>
      <div
        className="shadow-xl shadow-gray-300 " 
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
      >
        <ul className="list-none flex justify-around text-blue-900 ">
          
          <li className="w-96 mr-10 -mt-14">
            <img src={logo} alt="Bank" />
          </li>
          <li className="mr-28 mt-10 text-2xl ">
            {" "}
            <button onClick={() => setOpenDeposit(true)}>Deposit</button>
            {openDeposit && (
              <div className=" fixed inset-0 z-50 flex items-center justify-center">
                <div
                  className="fixed inset-0 bg-black opacity-60"
                  onClick={() => setOpenDeposit(false)}
                ></div>

                <div className=" rounded-3xl shadow-black shadow-2xl  bg-slate-200 p-8 relative">
                  <button
                    className="absolute top-4 right-4 text-gray-600"
                    onClick={() => setOpenDeposit(true)}
                  ></button>

                  <Deposito />
                </div>
              </div>
            )}
          </li>
          <li className="mr-28 mt-10 text-2xl">
            <button onClick={() => setWithdrawal(true)}>Withdrawal</button>
            {
              Withdrawal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div
                  className="fixed inset-0 bg-black opacity-60"
                  onClick={() => setWithdrawal(false)}
                ></div>

                <div className="rounded-3xl bg-slate-200 p-8 relative">
                  <button
                    className="absolute top-4 right-4 text-gray-600"
                    onClick={() => setWithdrawal(true)}
                  >
                  
                  </button>

                  <Retiro />
                </div>
              </div>
              )
            }
          </li>

          <li className="mr-20 mt-10 text-2xl">
            <button onClick={() => setOpen(true)}>Login</button>
            {open && (
              <div className=" fixed inset-0 z-50 flex items-center justify-center">
                <div
                  className="fixed inset-0 bg-black opacity-60"
                  onClick={() => setOpen(false)}
                ></div>

                <div className="rounded-3xl bg-slate-200 p-8 relative">
                  <button
                    className="absolute top-4 right-4 text-gray-600"
                    onClick={() => setOpen(true)}
                  >
                    
                  </button>

                  <Login />
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
