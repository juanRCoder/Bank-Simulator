import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdReturnLeft } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import logoBank from "../../images/logo.png";
import "./ResultTransaction.css";

function ResultTransaction() {
  const { idResult, id } = useParams();
  const [mensajeExito, setMensajeExito] = useState(null);
  const [position, setPosition] = useState(-47);
  const [opacityClass, setOpacityClass] = useState("");
  const [transaction, setTransaction] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/ResultTransaction/${idResult}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
          const data = await response.json();

          // Formatear la fecha y hora
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

          setTransaction({ ...data, formattedTime: fechaHoraPeru });
          setPosition(18);
          setMensajeExito("¡Transacción exitosa!");
          // 3 segundos mostrar mensaje
          setTimeout(() => {
            setPosition(-47);
          }, 3000);
          // ultimo segundo desaparecer
          setTimeout(() => {
            setOpacityClass("transparent");
          }, 2000);
        } else {
          console.error(
            "Error en la respuesta del servidor:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, [idResult]);

  const print = () => {
    window.print();
  }

  return (
    <>
      <div className="containerResultTransaction">
        <div>
          {transaction && (
            <div className="boxResultTransaction">
              <div className="boxResult" title="checke deposito" onClick={print}>
                <div className="boxHeader">
                  <h1>Depositado</h1>
                  <FaCheckCircle className="iconCheck" />
                  <p>Monto:</p>
                </div>
                <div className="boxAmount">
                  <span>S/</span>
                  <p>{transaction.amount}</p>
                </div>
                <div className="boxInfo">
                  <p className="user">{transaction.for}</p>
                  <p className="time">{transaction.formattedTime}</p>
                </div>
                <div className="boxLogo">
                  <img src={logoBank} alt="logoBank" title="logoBank" />
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className={`boxIfResult ${opacityClass}`}
          style={{ top: `${position}px` }}
        >
          {mensajeExito}
        </div>
        <button className="button">
          <Link to={`/getDashboard/${transaction.id_user}`}>
            <IoMdReturnLeft
              title="Regresar"
              style={{ display: "inline-block" }}
            />
            <span className="spanText">Dashboard</span>
          </Link>
        </button>

        <button className="button2">
          <Link to={`/getDashboard/${transaction.id_user}`}>
            <IoMdReturnLeft
              title="Regresar"
              style={{ display: "inline-block" }}
            />
            <span className="spanText">Transferencia</span>
          </Link>
        </button>
      </div>
    </>
  );
}

export default ResultTransaction;
