import "./Login.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Login = () => {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNombreCompleto((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !nombreCompleto.dni ||
      !nombreCompleto.cardNumber ||
      !nombreCompleto.key
    ) {
      console.error(
        "Error: Datos incompletos. Por favor, complete todos los campos."
      );
    }

    try {
      const response = await fetch("/sendUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nombreCompleto),
      });

      if (response.ok) {
        const userId = await response.json();
        navigate(`/getDashboard/${userId}`);
        console.log(`Datos enviados: id ${userId}`);
      } else {
        console.error("Error en la solicitud:", response.statusText);
      }
    } catch (error) {
      console.error("Error al procesar la solicitud:", error);
    }
  };

  return (
    <>
      <main>
        <div className="login">
          <form
            action="/sendUser"
            className="formulario"
            onSubmit={handleSubmit}
          >
            <h2>Banca por Internet </h2>
            <hr />
            <div className="input-container">
              <input
                type="number"
                required
                id="dni"
                name="dni"
                value={nombreCompleto.dni}
                placeholder="Numero de Dni"
                onChange={handleChange}
              />
              <label htmlFor="dni">DNI</label>
            </div>
            <div className="input-container">
              <input
                type="number"
                required
                id="cardNumber"
                name="cardNumber"
                value={nombreCompleto.cardNumber}
                onChange={handleChange}
                placeholder="Ingrese su numero de tarjeta"
              />
              <label htmlFor="cardNumber">Numero de Tarjeta</label>
            </div>
            <div className="input-container">
              <input
                type="password"
                required
                id="key"
                name="key"
                value={nombreCompleto.key}
                onChange={handleChange}
                placeholder="Ingrese su clave de 6 digitos"
              />
              <label htmlFor="key">Clave de 6 digitos</label>
            </div>
            <div className="contraseña">
              <p>
                <a href="recuperar.contraseña.html">Recuperar contraseña</a>
              </p>
            </div>
            <div className="btn">
              <button className="btn-1"> INGRESAR</button>
              <button className="btn-2"> AFILIATE</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
