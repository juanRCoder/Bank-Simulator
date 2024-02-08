import React from "react";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between mt-20 w-full h-full text-white bottom-0 navbarLanding fotterDashboard">
        <div className="ml-20 flex justify-between">
          <div>
            <img className="w-80 -ml-10" src={logo} alt="" />
          </div>
          <div>
            <h1 className="mt-10 ml-80  ">BANK SIMULATOR </h1>
            <p>
              © 2024 Bank-Simulator | Todos los derechos reservados. Sede
              Central, Centenario 156, Comas, Lima, Perú.{" "}
            </p>
            <p className="ml-40">
              {" "}
              BANCO DE SIMULADOR DE HOLBERTOON S.A - RUC 121564599
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
