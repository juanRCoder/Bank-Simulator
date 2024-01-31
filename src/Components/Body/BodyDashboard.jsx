import React from "react";
import "./BodyDashboard.css";
import { Link } from 'react-router-dom'
const BodyDashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="container">
          <div className="funcionalidades">
            <h1>¿Que Vamos Hacer Hoy?</h1>
            <ul className="grupo-superior">
              
              <li>
                <Link to="/Transactions/:id"><button>TRANSACTION</button></Link>
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
