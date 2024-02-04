import React, { useState } from "react";
import { useParams } from "react-router-dom";


const Transaction = () => {
  const { id } = useParams();
  const [token, setToken] = useState("");
  const [cantDeposit, setCantDeposit] = useState(0);
  const [accountNumber, setAccountNumber] = useState("");

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
      const response = await fetch(`/sendDepositUser/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, accountNumber, cantDeposit }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.name, data.lastName, data.deposit, data.date);
      } else {
        console.error("Error en la solicitud:", response.statusText);
      }
    } catch (error) {
      console.error("Error al procesar la solicitud:", error);
    }
  };
  return (
    <>
      <form
        className="form"
        action={`/sendDepositUser/${id}`}
        onSubmit={handleSubmit}
      >
        <p class="message">Trasnsacciones con su Banca de Confianza </p>

        <label htmlFor="accountNumber">
          {" "}
          Numero de cuenta a transferir
          <input
            className="input"
            type="number"
            placeholder="ingrese su Numero de Cuenta"
            required
            id="accountNumber"
            name="accountNumber"
            onChange={handleChange}
            value={accountNumber}
          />
        </label>

        <label htmlFor="cantDeposit">
          {" "}
          Monto a enviar
          <select
            className="input"
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
        </label>
        <label htmlFor="token">
          {" "}
          ingrese su token propio
          <input
            className="input"
            type="text "
            placeholder="token"
            required="token"
            id="token"
            name="token"
            onChange={handleChange}
            value={token}
          />
        </label>
        <button className="submit">Realizar Transaccion</button>
      </form>
    </>
  );
};

export default Transaction;
