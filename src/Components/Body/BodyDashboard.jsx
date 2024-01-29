import React from "react";
import "./BodyDashboard.css";
const BodyDashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="container">
          <div className="funcionalidades">
            <h1>¿Que Vamos Hacer Hoy?</h1>
            <ul className="grupo-superior">
              <li>
                <button>Deposito</button>
              </li>
              <li>
                <button>Retiro</button>
              </li>
              <li>
                <button>Transacciones</button>
              </li>
            </ul>
            <ul className="grupo-inferior">
              <li>
                <button>Mis Movimientos</button>
              </li>
              <li>
                <button>Estado de Cuenta</button>
              </li>
            </ul>
          </div>
          <div>
            <p>mis productos </p>
          </div>
          <div>cuentas de ahorro </div>
        </div>
      </div>
    </>
  );
};

export default BodyDashboard;
