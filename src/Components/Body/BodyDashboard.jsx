import React from "react";
import chip from "../../images/chip.png";
import { Link, useParams } from "react-router-dom";
import transaction from "../../images/transaction.png";
import movements from "../../images/movements.png";
import estado from "../../images/estado.png";
import cambio from "../../Images/cambio.png";
import car from "../../Images/car.png";
import cardd from"../../Images/cardd.png";
import money from "../../Images/money.png";
import saving from "../../Images/saving.png";
import sueldo from "../../Images/sueldo.png";
const BodyDashboard = () => {
  const { id } = useParams();
  return (
    <>
      <div>
        <div className="flex">
          <div
            className="flex flex-col border border-black w-96 mt-1 rounded-md"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            }}
          >
            <h1 className="ml-4 mt-10 text-blue-800  text-2xl  text-center">
              ¿What You Will Do Today?
            </h1>
            <ul className="mt-10 ml-20 ">
              <div className="space-y-4 mb-4">
                <li>
                  <Link to={`/Transactions/${id}`}>
                    <button className="bg-zinc-400 rounded-md w-40 h-30">
                      <img
                        className="flex justify-center ml-10"
                        src={transaction}
                        alt=""
                      />
                      TRANSACTION
                    </button>
                  </Link>
                </li>

                <li>
                  <Link to={`/ListMovements/${id}`}>
                    <button className="bg-zinc-400 rounded-md w-40 h-24">
                      <img className="ml-12" src={movements} alt="" />
                      MOVEMENTS
                    </button>
                  </Link>
                </li>
                <li>
                  <button className="bg-zinc-400 rounded-md w-40 h-30">
                    <img className="ml-8" src={estado} alt="" />
                    Estado de Cuenta
                  </button>
                </li>
              </div>
            </ul>
          </div>
          <div style={{
            
          }} className=" w-full ml-1 mt-1  rounded-md border border-black flex flex-col ">
            <p className="mt-8 text-2xl text-blue-900 font-mono  h-10 rounded-md ml-20">
              MIS PRODUCTOS
            </p>

            <p className="mt-10 text-xl text-blue-600 ml-20">
              CUENTA DE AHORRO
            </p>
            <div className="flex ">
              <div className="ml-20 mb-8 mt-10 bg-slate-300 border border-black w-48 h-64 rounded-lg">
                <div className="flex p-2  gap-1 ">
                  <div className="">
                    <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
                  </div>
                  <div className="circle">
                    <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
                  </div>
                  <div className="circle">
                    <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
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
              </div>
              
              <div className=" flex ml-40  flex-col">
                <div className="-mt-20 "><h1 >THERE IS SOME OPTIONS </h1></div>
                <div>
                  <ul className="flex space-x-10  mt-10 ">
                    <li ><button><img className="w-20 ml-8" src={cambio} alt="" /> Exchange currency</button></li>
                    <li><button> <img className="w-20 ml-4" src={car} alt="" />Vehicle Insurance</button></li>
                    <li><button> <img className="w-20 ml-2" src={cardd} alt="" />Your Card Info</button></li>
                  </ul>
                </div>
                <div>
                  <ul className="flex space-x-10 mt-10">
                    <li><button> <img className="w-20 ml-6" src={money} alt="" />Salary Advance</button></li>
                    <li><button> <img className="w-20 ml-8" src={saving} alt="" />Saving Your Money</button></li>
                    <li><button> <img className="w-20 ml-2" src={sueldo} alt="" />Money Loans</button></li>
                  </ul>
                </div>
              </div>

              <div class="card__content"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyDashboard;
