import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movements() {
  const { id } = useParams();
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    const responseFetch = async () => {
      try {
        const response = await fetch(`/UserMovements/${id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
          const data = await response.json();
          const movements = data.userMovements;
          console.log(movements);
          setMovements(movements);
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

    responseFetch();
  }, [id]);

  return (
    <>
      <div>
        {movements &&
          movements.map((m, i) => (
            <div key={i}>
              {m.deposited && <p>Deposited: {m.deposited}</p>}
              {m.withdrawaled && <p>Withdrawaled: {m.withdrawaled}</p>}
              <p>by: {m.from_user}</p>
              <p>Timestamp: {m.timestamp}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default Movements;
