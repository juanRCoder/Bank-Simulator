import { useState } from "react";
import "./Deposito.css";
import logoBank from "../../images/logo.png";

const Deposito = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [deposit, setDeposit] = useState(0);
  const [dni, setDni] = useState("");
  const [dataBank, setDataBank] = useState({});
  const [position, setPosition] = useState(-625);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "accountNumber":
        setAccountNumber(value);
        break;
      case "deposit":
        setDeposit(parseInt(value));
        break;
      case "dni":
        setDni(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!dni || !accountNumber || !deposit) {
      console.error(
        "Error: Datos incompletos. Por favor, complete todos los campos."
      );
      return;
    }

    try {
      const response = await fetch("/sendDeposit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accountNumber, deposit, dni }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const fechaHoraUTC = new Date(data.time);
        const opciones = {
          day: "2-digit",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "America/Lima",
        };
        const fechaHoraPeru = fechaHoraUTC.toLocaleString("es-PE", opciones);

        setDataBank({ ...data, formattedTime: fechaHoraPeru });
        setPosition(0);
      } else {
        console.error("Error en la solicitud:", response.statusText);
      }
    } catch (error) {
      console.error("Error al procesar la solicitud:", error);
    }
  };

  const print = () => {
    window.print();
  };

  return (
    <>
      <div className="  relative flex w-96 flex-col rounded-xl bg-slate-300 bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 bg-clip-border text-white shadow-lg shadow-cyan-500/40">
          <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
            Deposit Money
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
                htmlFor="accountNumber"
                className="text-xl -mt-5 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                Insert your Account Number
              </label>
              <input
                id="accountNumber"
                name="accountNumber"
                value={accountNumber}
                onChange={handleChange}
                placeholder="Account number"
                className=" mt-2 bg-white peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
            </div>
          </div>
          <div className="  mb-8 text-xl  h-10 rounded-lg  ml-7 ">
            <label htmlFor="deposit">Choose The Amount</label>
            <select
              className=" mt-2 text-base w-11/12 h-10 rounded-lg "
              id="deposit"
              name="deposit"
              value={deposit}
              required
              onChange={handleChange}
            >
              <option value="">Amount </option>
              <option value={20}>S/.20.00</option>
              <option value={50}>S/.50.00</option>
              <option value={100}>S/.100.00</option>
              <option value={200}>S/.200.00</option>
            </select>
          </div>

          <div className="w-80 ml-8 pt-1 ">
            <button
              data-ripple-light="true"
              type="submit"
              className=" mt-10 block w-full select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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

      {dataBank && (
        <div
          className="boxModal"
          onClick={print}
          style={{ top: `${position}px` }}
        >
          <h2>{dataBank.fromUser}</h2>
          <p className="Depositado">Deposited:</p>
          <div className="boxMonto">
            <span>S/</span>
            <p className="Amount">{dataBank.deposited}</p>
          </div>
          <div className="boxDate">
            <p className="dataForUser">
              <span>For:</span>
              {dataBank.forUser}
            </p>
            <p className="dataFecha">
              <span>Date: </span>
              {dataBank.formattedTime}
            </p>
          </div>
          <div className="boxLogo">
            <img src={logoBank} alt="logoBank" title="logoBank" />
          </div>
        </div>
      )}
    </>
  );
};

export default Deposito;
