import React from "react";
import cambio from "../../Images/cambio.png";
import car from "../../Images/car.png";
import cardd from"../../Images/cardd.png";
import money from "../../Images/money.png";
import saving from "../../Images/saving.png";
import sueldo from "../../Images/sueldo.png";
import fondo from "../../images/fondo.png";
import tour from "../../Images/tour.png";
import Carousel from "../Carousel/Carousel";

const Blogin = () => {
  return (
    <>
      <div>
       <Carousel/>
        <div className="flex mt-10 justify-center">
          <ul className="flex ml-20 text-blue-900">
            <li className="mr-20">
              <button><img className="ml-10 w-16" src={cambio} alt="" />
              Exchange currency</button>
            </li>
            <li className="mr-20">
              <button><img className="ml-10 w-16" src={car} alt="" />
              Vehicle Insurance</button>
            </li>
            <li className="mr-20">
              <button><img className="ml-2 w-16" src={cardd} alt="" />
              Get a Card</button>
            </li>
            <li className="mr-20">
              <button><img className="ml-2 w-16" src={money} alt="" />
              Salary Advance</button>
            </li>
            <li className="mr-20">
              <button><img className="ml-10 w-16" src={saving} alt="" />
              Saving Your Money</button>
            </li>
            <li className="mr-20">
              <button><img className="ml-2 w-16" src={sueldo} alt="" />
              Money Loans</button>
            </li>
          </ul>
        </div>
        <div
          className="h-screen flex items-center justify-center shadow-2xl shadow-black"
          style={{
            backgroundImage: `url(${fondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: 500,
            width: 1200,
            marginLeft: 80,
            marginTop: 30,
            borderRadius: 10,
          }}
        >
          <div
            className="flex  justify-between"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "red",
              height: 400,
              width: 1000,
            }}
          >
            <div className="bg-slate-200 w-5/12 h-96 mt-2 ml-10 rounded-l justify-center text-center">
              <h1 className="mt-20 text-2xl text-blue-900">El verano es mejor #CONHOOLBERTONBANK</h1>
              <p className="mt-10 text-blue-800">
                Atención preferencial y estacionamiento a S/1, <br />
                solo con tu Tarjeta Holberton Bank
              </p>
              <button className="w-40  rounded-3xl h-14 mt-10 bg-white text-blue-950 text-lg  border border-black">
                GET YOUR TRIP{" "}
              </button>{" "}
            </div>
            
            <img className=" mt-2 w-1/2 mr-12 rounded-l h-96 justify-end" src={tour} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogin;