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
  if (!nombreCompleto.dni || !nombreCompleto.cardNumber || !nombreCompleto.key) {
    console.error("Error: Datos incompletos. Por favor, complete todos los campos.");
    return;}
  try {
    const response = await fetch("http://localhost:3006/sendUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nombreCompleto),
    });

    if (response.ok) {
      const userId = await response.json();
      navigate(`/getDashboard/${userId}`);
      setGoToDashboard(true);
    } else {
      if (response.status === 400) {
        try {
          const errorResponse = await response.json();
          console.error("Error: Datos no válidos. Detalles:", errorResponse);
        } catch (jsonError) {
          console.error("Error al analizar la respuesta JSON:", jsonError);
        }
      } else {
        console.error("Error en la solicitud:", response.statusText);
      }
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
          name='dni' 
          value={nombreCompleto.dni }
          placeholder="Numero de Dni"
          onChange={handleChange}/>
          <label>DNI</label>
         </div>
         <div className="input-container" >
          <input type="number"
           required 
           id="cardNumber"
           name='cardNumber'
           value={nombreCompleto.cardNumber }
           onChange={handleChange}
           placeholder="Ingrese su numero de tarjeta"/>
          <label>Numero de Tarjeta</label>
         </div>
         <div className="input-container">
          <input type="password" 
          required
           id="key"
           name='key' 
           value={nombreCompleto.key }
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
          <button className="btn-1" onClick={handleSubmit}> INGRESAR</button>
          <button className="btn-2"> AFILIATE</button>         
          
         </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login