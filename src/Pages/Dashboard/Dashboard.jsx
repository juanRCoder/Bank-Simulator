import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BodyDashboard from "../../Components/Body/BodyDashboard";
import Footer from '../../Components/Footer/Footer'
import NavbarDashboard from "../../Components/Navbar/NavbarDashboard";
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
    <div className="border-b-2 border-black ">
      
    <NavbarDashboard/>
    <BodyDashboard/>
      {" "}
      {datos && (
        <>
        
          <p>Nombre: {datos.name}</p>
          <p>Monto: {datos.amount}</p>
        </>
      )}
    </div>
      <div className="-mt-20 absolute w-full">
     <Footer  />
     </div> 
    
    </>
  );
};

export default Dashboard;
