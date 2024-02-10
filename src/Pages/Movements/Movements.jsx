import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdReturnLeft } from "react-icons/io";
import "./Movements.css";

function Movements() {
  const { id } = useParams();
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/UserMovements/${id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
          const data = await response.json();
          const fetchedMovements = data.userMovements;
          setMovements(fetchedMovements);
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
  }, [id]);

  return (
    <>
      <div className="MovementsTitle">
        <h1>Movimientos</h1>
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
      {/* Modo desarrollo */}
      {/* <div className="containerMovements" style={{marginTop: "120px"}}>
        <div className="MovementsDatos">
          <p className="MovementsName">Jhon Doe</p>
          <p className="MovementsFecha">05-febrero, 15:34</p>
        </div>
        <p className="amount">S/ 1500</p>
      </div> */}

      {/* Modo Producción */}
      <div>
        {movements &&
          movements.map((m, i) => {
            const fechaHoraUTC = new Date(m.timestamp);
            const opciones = {
              day: "2-digit",
              month: "long",
              hour: "2-digit",
              minute: "2-digit",
              timeZone: "America/Lima",
            };
            const fechaHoraPeru = fechaHoraUTC.toLocaleString(
              "es-PE",
              opciones
            );

            return (
              // Deposito y Retiro desde el banco || Deposito y retiro de n usuario a otro n usuario
              <div key={i} className="containerMovements">
                {((m.fromUser === "Bank Simulator" && id === m.forUserId) ||
                  id === m.forUserId) && (
                  <div className="MovementsDatos">
                    <p className="MovementsName">{m.fromUser}</p>
                    <p className="MovementsFecha">{fechaHoraPeru}</p>
                    {m.depositAmount !== undefined && (
                      <p className="amount">S/ {m.depositAmount}</p>
                    )}
                    {m.withdrawalAmount ? (
                      <p className="amount" style={{ color: "#e91e63" }}>
                        - S/ {m.withdrawalAmount}
                      </p>
                    ) : null}
                  </div>
                )}
                {id === m.fromUserId && m.depositAmount && (
                  <div className="MovementsDatos">
                    <p className="MovementsName">{m.forUser}</p>
                    <p className="MovementsFecha">{fechaHoraPeru}</p>
                    {m.depositAmount ? (
                      <p className="amount" style={{ color: "#e91e63" }}>
                        - S/ {m.depositAmount}
                      </p>
                    ) : null}
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Movements;
