import React from "react";
import "./Retiro.css";
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
        //setEstadoRetiro("exitoso"); //mensaje exitoso
        //setTimeout(() => {
        //  setEstadoRetiro(null);
        //}, 4000); //duracion 4 segundos
      } else {
        console.error("Error en la solicitud:", response.statusText);
       // setEstadoRetiro("fallido"); //mensaje de error 
       // setTimeout(() => {
       //  setEstadoRetiro(null);
      //  }, 4000); //duracion 4 segundos
      }
    } catch (error) {
      console.error("Error al procesar la solicitud:", error);
    }
  };

  return (
    <>
           <form className="form" action="/sendRetiro" onSubmit={handleSubmit}>
        <div className="title">
          Welcome,
          <br />
          <span>Retira Dinero </span>
        </div>
        <div>
          <label htmlFor="dni">Introducir Dni</label>
          <input
            type="dni"
            placeholder="Introduzca su numero de DNI"
            name="dni"
            id="dni"
            required
            value={dni}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div>
          <label htmlFor="cardNumber">Introduzca su Numero de Tarjeta</label>
          <input
            type="cardNumber"
            placeholder="Introducir Contraseña 4 digitos"
            name="cardNumber"
            id="cardNumber"
            required
            value={cardNumber}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div>
          <label htmlFor="withdrawal">Seleccione la Cantidad de Retiro</label>
          <select
            className="input"
            id="withdrawal"
            name="withdrawal"
            onChange={handleChange}
            value={withdrawal}
            required
          >
            <option value="">Seleccione el monto</option>
            <option value={20}>S/.20.00</option>
            <option value={50}>S/.50.00</option>
            <option value={100}>S/.100.00</option>
            <option value={200}>S/.200.00</option>
          </select>
        </div>
        <div>
          <label htmlFor="keyFour">Introducir Contraseña de 4 Digitos</label>
          <input
            type="keyFour"
            placeholder="Introducir Contraseña 4 digitos"
            name="keyFour"
            id="keyFour"
            required
            value={keyFour}
            onChange={handleChange}
            className="input"
          />
        </div>
        <button className="button-confirm">Retirar →</button>
      </form>
      
    </>
  );
};

export default Retiro;