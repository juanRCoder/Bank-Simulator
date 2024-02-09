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
       <div className="relative flex w-96 flex-col rounded-xl bg-slate-300 bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 bg-clip-border text-white shadow-lg shadow-cyan-500/40">
          <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
            WITHDRAWAL
          </h3>
        </div>
        <form action="/sendDeposit" onSubmit={handleSubmit} className="">
          <div className="flex flex-col gap-4 p-6">
            <div className="relative h-11 w-full min-w-[200px]">
              <label
                htmlFor="dni"
                className="text-xl -mt-6 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                Insert Your Personal ID
              </label>
              <input
                id="dni"
                name="dni"
                value={dni}
                onChange={handleChange}
                placeholder="Insert your ID"
                className="bg-white peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
            </div>
            <div className=" mt-4 relative h-11 w-full min-w-[200px]">
              <label
                htmlFor="cardNumber"
                className="text-xl -mt-5 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                Insert your Account Number
              </label>
              <input
                id="cardNumber"
                name="cardNumber"
                value={cardNumber}
                onChange={handleChange}
                placeholder="Card number"
                className=" mt-2 bg-white peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
            </div>
          </div>
          <div className=" mt-4 mb-14 text-xl  h-10 rounded-lg  ml-7  ">
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
          <div className="relative h-11 w-80 ml-8  min-w-[200px]">
              <label
                htmlFor="keyFour"
                className="text-xl -mt-6 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                Insert Your Passcode 4 digits
              </label>
              <input
                id="keyFour"
                name="keyFour"
                value={keyFour}
                onChange={handleChange}
                placeholder="Insert your pasccode 4 digits"
                className="bg-white peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
            </div>

          <div className="p-6 pt-0">
            <button
              data-ripple-light="true"
              type="submit"
              className="block w-full select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Deposit
            </button>
            <div>
            <p className=" text-center mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                 Don't have enought money,
              <br />
              we lend you money with high interest <br />
              </p>
              </div>
              <div className="flex justify-center text-center ">
              <a
                className=" mt-4 font-sans text-sm font-bold leading-normal text-cyan-500 "
                href="#loans"
              >
                LOANS
              </a>
              </div>
            
          </div>
        </form>
      </div>
      
    </>
  );
};

export default Retiro;