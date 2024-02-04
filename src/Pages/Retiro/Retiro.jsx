import React from "react";

import { useState } from "react";


const Retiro = () => {
  const [withdrawal, setWithdrawal] = useState(0);
  const [keyFour, setKeyFour] = useState("");
  const [cardNumber, setCardNumber] = useState("")
  const [dni, setDni] = useState("")
  const [estadoRetiro, setEstadoRetiro] = useState(null);
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "withdrawal":
        setWithdrawal(parseInt(value));
        console.log("Valor de retiro:", value);
        break;
      case "keyFour":
        setKeyFour(value);
        break;
      case "dni":
        setDni(value);
        break;
      case "cardNumber":
        setCardNumber(value);
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!withdrawal || !keyFour|| !dni || !cardNumber) {
      console.error(
        "Error: Datos incompletos. Por favor, complete todos los campos."
      );
      return;
    }

    try {
      const response = await fetch("/sendRetiro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ withdrawal, keyFour, dni, cardNumber }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.withdrawal, data.date);
          setEstadoRetiro("exitoso"); //mensaje exitoso
          setTimeout(() => {
          setEstadoRetiro(null);
        }, 4000); //duracion 4 segundos
      } else {
        console.error("Error en la solicitud:", response.statusText);
        setEstadoRetiro("fallido"); //mensaje de error 
        setTimeout(() => {
         setEstadoRetiro(null);
        }, 4000); //duracion 4 segundos
      }
    } catch (error) {
      console.error("Error al procesar la solicitud:", error);
    }
  };
  console.log("Estado de retiro:", estadoRetiro);
  return (
    <>
          <form action="/sendRetiro" onChange={handleSubmit}> 
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Withdrawal
            
            
              </p><div>
                <label htmlFor="dni" className="block mb-2 text-sm font-medium text-gray-900">
                  Personal ID
                </label>
                <input placeholder="Insert your Personal ID" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="dni" name="dni" value={dni} onChange={handleSubmit} type="text"/>
              </div>
              <div>
                <label htmlFor="cardNumber" className="block mb-2 text-sm font-medium text-gray-900">
                  Card Number
                </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="xxxx xxxx xxxx xxxx" id="cardNumber" name="cardNumber" value={cardNumber} onChange={handleChange} type="number"/>
              </div>
              
              <div className=" mt-4 mb-8 text-xl  h-10 rounded-lg  ml-7 ">
            <select
              className="text-base w-60 h-10 rounded-lg border border-slate-900"
              id="withdrawal"
              name="withdrawal"
              value={withdrawal}
              required
              onChange={handleChange}
            >
              <option value="">Seleccione el monto</option>
              <option value={20}>S/.20.00</option>
              <option value={50}>S/.50.00</option>
              <option value={100}>S/.100.00</option>
              <option value={200}>S/.200.00</option>
            </select>
          </div>
          <div>
                <label htmlFor="keyFour" className="block mb-2 text-sm font-medium text-gray-900">
                  Digit your passcode 
                </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="4 digits" id="keyFour" name="keyFour" value={keyFour} onChange={handleChange} type="text"/>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" type="checkbox" aria-describedby="terms" id="terms"/>
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-light text-gray-500 text-gray-300">
                    I accept the
                    <a href="#" className="font-medium text-primary-600 hover:underline text-primary-500">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              <button className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white" type="submit">
                Create an account
              </button>
            
          </div>
        </div>
      </div></form>
    
      
    </>
  );
};

export default Retiro;