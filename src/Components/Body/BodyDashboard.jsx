import React from "react";
import "./BodyDashboard.css";
import { Link, useParams} from 'react-router-dom'
const BodyDashboard = () => {
  const { id } = useParams();
  return (
    <>
      <div className="dashboard">
        <div className="container">
          <div className="funcionalidades">
            <h1>¿Que Vamos Hacer Hoy?</h1>
            <ul className="grupo-superior">
              <li>
                <Link to={`/Transactions/${id}`}><button>TRANSACTION</button></Link>
              </li>
            </ul>
            <ul className="grupo-inferior">
            <li>
                <Link to={`/ListMovements/${id}`}><button>Movimientos</button></Link>
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
