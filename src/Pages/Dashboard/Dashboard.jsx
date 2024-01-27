import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const { userId } = useParams();
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const responseFetch = async () => {
      try {
        await fetch(`/getUser/${userId}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((DataServices) => {
            setDatos(DataServices);
          })
          .catch((e) => console.log(e));
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    responseFetch();
  }, [userId]);


  return (
    <>
      <p>{datos}</p>
    </>
  );
};

export default Dashboard;
