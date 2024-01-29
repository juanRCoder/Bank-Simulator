import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const { id } = useParams();
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const responseFetch = async () => {
      try {
        await fetch(`/getUser/${id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((userData) => {
            console.log(userData);
            setDatos(userData);
          })
          .catch((e) => console.log(e));
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    responseFetch();
  }, [id]);

  return (
    <>
      {" "}
      {datos && (
        <>
        <p>hola</p>
          <p>Nombre: {datos.name}</p>
          <p>Monto: {datos.amount}</p>
        </>
      )}
    </>
  );
};

export default Dashboard;
