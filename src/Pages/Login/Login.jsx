import './Login.css'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';





const Login = () => {

const [nombreCompleto, setNombreCompleto] = useState("");
const [goToDashboard, setGoToDashboard] = useState(false);
const navigate = useNavigate();

const handleChange = (event) => {
  const { name, value } = event.target;
  setNombreCompleto((prev) => ({ ...prev, [name]: value }));
};

const handleSubmit = async () => {
  try {
    const response = await fetch("http://localhost:3006/sendUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nombreCompleto),
      
    });

    if (response.ok) {
      const userId = await response.json();
        navigate(`/dashboard/${userId}`); 
      setGoToDashboard(true);
    } else {
      console.error("Los datos no son correctos");
    }
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
  }
};

  return (
    <>
    <div>
      <div className="login">
        <form action="#" className="formulario">
          <h2>Banca por Internet </h2>
          <hr />
          <div className="input-container" >
          <input type="number" 
          required 
          id='dni' 
          value={nombreCompleto.dni || ""}
          placeholder="Numero de Dni"
          onChange={handleChange}/>
          <label>DNI</label>
         </div>
         <div className="input-container" >
          <input type="number"
           required 
           id="cardNumber"
           value={nombreCompleto.cardNumber || ""}
           onChange={handleChange}
           placeholder="Ingrese su numero de tarjeta"/>
          <label>Numero de Tarjeta</label>
         </div>
         <div className="input-container">
          <input type="password" 
          required
           id="key" 
           value={nombreCompleto.key || ""}
           onChange={handleChange}
           placeholder="Ingrese su clave de 6 digitos"/>
          <label>Clave de 6 digitos</label>
         </div>
         <div className="contraseña">
          <p >
            <a href="recuperar.contraseña.html">Recuperar contraseña</a>
          </p>
         </div>
         <div className='btn'>
          <button className="btn-1"> INGRESAR</button>
          <button className="btn-2"> AFILIATE</button>         
          
         </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login