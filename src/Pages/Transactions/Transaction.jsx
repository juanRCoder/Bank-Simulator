import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IoMdReturnLeft } from "react-icons/io";
import "./Transaction.css";

const Transaction = () => {
  const [mensajeExito, setMensajeExito] = useState(null);
  const [mensajeError, setMensajeError] = useState(null);
  const [position, setPosition] = useState(-47);
  const [opacityClass, setOpacityClass] = useState("");
  const { id } = useParams();
  const [token, setToken] = useState("");
  const [cantDeposit, setCantDeposit] = useState(0);
  const [accountNumber, setAccountNumber] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "token":
        setToken(value);
        break;
      case "cantDeposit":
        setCantDeposit(parseInt(value));
        break;
      case "accountNumber":
        setAccountNumber(parseInt(value));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token || !accountNumber || !cantDeposit) {
      console.error(
        "Error: Datos incompletos. Por favor, complete todos los campos."
      );
      return;
    }

    try {
      console.log(`/sendDepositUser/${id}`);
      const response = await fetch(`/sendDepositUser/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, accountNumber, cantDeposit }),
      });

      if (response.ok) {
        const idResult = await response.json();
        console.log("id: ", idResult);
        navigate(`/ResultTransaction/${idResult}`);
      } else {
        console.error("Error en la solicitud:", response.statusText);
        setPosition(18);
        setMensajeError("¡Transacción Rechazada!");
        // 3 segundos mostrar mensaje
        setTimeout(() => {
          setPosition(-47);
        }, 3000);
        // ultimo segundo desaparecer
        setTimeout(() => {
          setOpacityClass("transparent");
        }, 2000);
      }
    } catch (error) {
      console.error("Error al procesar la solicitud:", error);
    }
  };
  return (
    <>
      <div className="containerFormTransaction">
        <h1 className="containerTitle">Transferencias de dinero</h1>
        <form
          className="form"
          action={`/sendDepositUser/${id}`}
          onSubmit={handleSubmit}
        >
          <div className="boxForm">
            <h1 className="message">Trasnferencias</h1>
            <label htmlFor="accountNumber" className="accountNumber">
              Numero de cuenta a transferir
            </label>
            <input
              type="number"
              className="inputAccountNumber"
              placeholder="ingrese su Numero de Cuenta"
              required
              id="accountNumber"
              name="accountNumber"
              onChange={handleChange}
              value={accountNumber}
            />
            <label htmlFor="cantDeposit" className="cantDeposit">
              Monto a enviar
            </label>
            <select
              className="inputCantDeposit"
              id="cantDeposit"
              name="cantDeposit"
              onChange={handleChange}
              value={cantDeposit}
              required
            >
              <option value="">Seleccione el monto</option>
              <option value={20}>S/.20.00</option>
              <option value={50}>S/.50.00</option>
              <option value={100}>S/.100.00</option>
              <option value={200}>S/.200.00</option>
            </select>

            <label htmlFor="token" className="token">
              {" "}
              ingrese su token propio
            </label>
            <input
              className="inputToken"
              type="text "
              placeholder="token"
              required="token"
              id="token"
              name="token"
              onChange={handleChange}
              value={token}
            />
            <button className="btnSubmit">Realizar Transaccion</button>
          </div>
        </form>
        <div
          className={`boxIfResult ${opacityClass}`}
          style={{ top: `${position}px` }}
        >
          {mensajeExito}
        </div>
        <div
          className={`boxElseResult ${opacityClass}`}
          style={{ top: `${position}px` }}
        >
          {mensajeError}
        </div>
        <button className="button">
          <Link to={`/getDashboard/${id}`}>
            <IoMdReturnLeft
              title="Regresar"
              style={{ display: "inline-block" }}
            />
            <span className="spanText">Dashboard</span>
          </Link>
        </button>
      </div>
    </>
  );
};

export default Transaction;
