import React from "react";
import chip from '../../images/chip.png'

import { Link, useParams } from "react-router-dom";
const BodyDashboard = () => {
  const { id } = useParams();
  return (
    <>
      <div>
        <div className="flex">
          <div className="flex flex-col">
            <h1 className="ml-20 mt-10 text-blue-600 ">¿Que Vamos Hacer Hoy?</h1>
            <ul className="mt-10 ml-20 ">
              <div className="space-y-4">
                <li>
                  <Link to={`/Transactions/${id}`}>
                    <button className="bg-slate-600 rounded-md w-40 h-10">TRANSACTION</button>
                  </Link>
                </li>

                <li>
                  <Link to={`/ListMovements/${id}`}>
                    <button className="bg-slate-600 rounded-md w-40 h-10">MOVEMENTS</button>
                  </Link>
                </li>
                <li>
                  <button className="bg-slate-600 rounded-md w-40 h-10">Estado de Cuenta</button>
                </li>
              </div>
            </ul>
          </div>
          <div className="ml-auto flex flex-col ">
            <p style={{marginRight: 800 }} className="mt-8 text-xl text-blue-600 bg-blue-100 w-full h-10 rounded-md" >MIS PRODUCTOS  </p>
         
          <p className="mt-10 text-xl text-blue-600 ">cuentas de ahorro</p> 
          <div class=" mt-10 bg-slate-500 border border-black w-48 h-64 rounded-lg">
    <div class="flex p-2 gap-1">
    <div class="">
      <span class="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
    </div>
    <div class="circle">
      <span class="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
    </div>
    <div class="circle">
      <span class="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
    </div>
  </div>
  <div className="">
    <h1>BANK SIMULATOR</h1>
    <h1 className="mt-4">Miguel Colmenares</h1>
    <h1 className="mt-4">Card Number</h1>
    <p>xxxx xxxx xxxx xxxx </p>
    <div className="">
    <img className="w-24" src={chip} alt="" />
    </div>
  </div>
  <div class="card__content">
  </div>
</div>


          </div>
          
        </div>
      </div>
      
    </>
  );
};

export default BodyDashboard;
