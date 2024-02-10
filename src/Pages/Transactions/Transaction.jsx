import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IoMdReturnLeft } from "react-icons/io";
import "./Transaction.css";

const Transaction = () => {
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
        navigate(`/ResultTransaction/${idResult}`);
      } else {
        const errorMessage = await response.json();

        setPosition(30);
        setMensajeError(
          errorMessage.error.includes("Insufficient balance") ? errorMessage.error : "Transaction Declined!"
        );

        // Mostrar mensaje por 3 segundos
        setTimeout(() => {
          setPosition(-47);
          // Desaparecer último segundo
          setTimeout(() => {
            setOpacityClass("transparent");
          }, 2000);
        }, 3000);
      }
    } catch (error) {
      console.error("Error al procesar la solicitud:", error);
    }
  };
  return (
    <>
      <div className="containerFormTransaction">
        <h1 className="containerTitle">Money Transfers</h1>
        <form
          className="form"
          action={`/sendDepositUser/${id}`}
          onSubmit={handleSubmit}
        >
          <div className="boxForm">
            <h1 className="message">Transfers</h1>
            <label htmlFor="accountNumber" className="accountNumber">
              Account number to be transferred
            </label>
            <input
              type="number"
              className="inputAccountNumber"
              placeholder="Enter the account number"
              required
              id="accountNumber"
              name="accountNumber"
              onChange={handleChange}
              value={accountNumber}
            />
            <label htmlFor="cantDeposit" className="cantDeposit">
              Amount to send
            </label>
            <select
              className="inputCantDeposit"
              id="cantDeposit"
              name="cantDeposit"
              onChange={handleChange}
              value={cantDeposit}
              required
            >
              <option value="">Select Amount</option>
              <option value={20}>S/.20.00</option>
              <option value={50}>S/.50.00</option>
              <option value={100}>S/.100.00</option>
              <option value={200}>S/.200.00</option>
            </select>

            <label htmlFor="token" className="token">
              {" "}
              Enter your own token
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
            <button className="btnSubmit">Make Transaction</button>
          </div>
        </form>
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
