import React from "react";
import chip from "../../images/chip.png";
import { Link, useParams } from "react-router-dom";
import transaction from "../../images/transaction.png";
import movements from "../../images/movements.png";
import estado from "../../images/estado.png";
import cambio from "../../Images/cambio.png";
import car from "../../Images/car.png";
import cardd from "../../Images/cardd.png";
import money from "../../Images/money.png";
import saving from "../../Images/saving.png";
import sueldo from "../../Images/sueldo.png";
import back from "../../images/back.png";
const BodyDashboard = ({ name, monto, cardNumber }) => {
  const { id } = useParams();
  return (
    <>
      <div>
        <div className="flex mainDashboard">
          <div className="flex flex-col  rounded-md">
            <ul className="mt-10 ml-20 ">
              <div className="space-y-4 mb-4">
                <li>
                  <button className="button">
                    <Link to={`/Transactions/${id}`}>
                      <img
                        className="img"
                        src={transaction}
                        alt=""
                      />
                      <span className="spanText">Transaction</span>
                    </Link>
                  </button>
                </li>

                <li>
                  <button className="button">
                    <Link to={`/ListMovements/${id}`}>
                      <img
                        className="img"
                        src={movements}
                        alt=""
                      />
                      <span className="spanText">Movements</span>
                    </Link>
                  </button>
                </li>
                <li>
                  <button className="button">
                    <Link to={`/ListMovements/${id}`}>
                      <img
                        className="img"
                        src={estado}
                        alt=""
                      />
                      <span className="spanText2">Status Account</span>
                    </Link>
                  </button>
                </li>
              </div>
            </ul>
          </div>
          <div
            style={{ backgroundColor: "#ffffff", width: "100%" }}
            className="  ml-1 mt-1  rounded-md borde flex flex-col "
          >
            <div className="z-10 shadow-xl shadow-black bg-slate-100 w-11/12 h-96 mt-10 ml-10 rounded-lg containInfoCard">
              <div className="flex floatCard">
                <div className="ml-20 mb-8 mt-10 bg-slate-300 border w-48 h-64 rounded-lg statusCard">
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
                  <div>
                    <h1
                      className="font-inter"
                      style={{
                        textAlign: "center",
                        padding: "0px",
                        fontWeight: "600",
                        color: "#fff",
                        textShadow: "0px 3px 5px #fff",
                      }}
                    >
                      BANK SIMULATOR
                    </h1>
                    <h1 className="mt-4 font-inter text-white nameCard">
                      User
                    </h1>
                    <h1 className="font-inter text-white">{name}</h1>
                    <h1 className="mt-4 font-inter nameCard text-white">
                      Card Number
                    </h1>
                    <h1 className="numberCard text-white">{cardNumber}</h1>
                    <h1 className="mt-4 font-inter nameCard text-white">
                      Amount S/.
                    </h1>
                    <p className="Price text-white">{monto}</p>
                    <div className="">
                      <img
                        className="w-20 chipCard"
                        src={chip}
                        alt="chipCard"
                      />
                    </div>
                  </div>
                </div>

                <div className=" flex ml-40  flex-col optionsMainDashboard">
                  <div>
                    <ul
                      className="flex space-x-8  mt-10 font-inter"
                      style={{ color: "#0c889f", fontWeight: "700" }}
                    >
                      <li className="mr-2">
                        <button>
                          <img className="w-20 ml-8" src={cambio} alt="" />{" "}
                          Exchange currency
                        </button>
                      </li>
                      <li>
                        <button>
                          {" "}
                          <img className="w-20 ml-4" src={car} alt="" />
                          Vehicle Insurance
                        </button>
                      </li>
                      <li>
                        <button>
                          {" "}
                          <img className="w-20 ml-2" src={cardd} alt="" />
                          Your Card Info
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul
                      className="flex space-x-10 mt-10 font-inter"
                      style={{
                        color: "#0c889f",
                        fontWeight: "700",
                        textAlign: "center",
                      }}
                    >
                      <li>
                        <button>
                          {" "}
                          <img className="w-20 ml-6" src={money} alt="" />
                          Salary Advance
                        </button>
                      </li>
                      <li>
                        <button>
                          {" "}
                          <img className="w-20 ml-8" src={saving} alt="" />
                          Saving Your Money
                        </button>
                      </li>
                      <li>
                        <button>
                          {" "}
                          <img className="w-20 ml-2" src={sueldo} alt="" />
                          Money Loans
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="card__content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyDashboard;
