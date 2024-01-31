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
              <p>{m.deposited}</p>
              <p>{m.withdrawaled}</p>
              <p>{m.for}</p>
              <p>{m.timestamp}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default Movements;
