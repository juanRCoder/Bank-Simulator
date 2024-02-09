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
          console.log(fetchedMovements);
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
            const fechaHoraUTC = new Date(m.time);
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
              <div key={i} className="containerMovements">
                <div className="MovementsDatos">
                  <p className="MovementsName">{m.name}</p>
                  <p className="MovementsFecha">{fechaHoraPeru}</p>
                </div>
                {id === m.id_user && m.deposited ? (
                  <p className="amount" style={{ color: "#e91e63" }}>
                    - S/ {m.deposited}
                  </p>
                ) : m.deposited ? (
                  <p className="amount">- S/ {m.deposited}</p>
                ) : null}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Movements;
