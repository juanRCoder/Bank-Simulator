import './Deposito.css'
import  { useState } from "react";


const Deposito = () => {
    const [accountNumber, setAccountNumber] = useState("");
    const [deposit, setDeposit] = useState("");
    const [dni, setDni] = useState("");
  
    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
          case "accountNumber":
            setAccountNumber(value);
            break;
          case "deposit":
            setDeposit(value);
            console.log("Valor de deposit:", value);
            break;
          case "dni":
            setDni(value);
            break;
          default:
            break;
        }
      };
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (
        !dni ||
        !accountNumber ||
        !deposit
      ) {
        console.error(
          "Error: Datos incompletos. Por favor, complete todos los campos."
        );
        return; 
      }
  
      try {
        const response = await fetch("/sendDeposit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({accountNumber, deposit, dni}),
        });
  
        if (response.ok) {

          const data = await response.json();
          // RUTA PARA MASTERS
         console.log(response.ok,"exito")
        } else {
          console.error("Error en la solicitud:", response.statusText);
        }
      } catch (error) {
        console.error("Error al procesar la solicitud:", error);
      }
    };

  return (

    <>
    <div className="container">
    <div className="form_area">
        <p className="title">DEPOSIT MONEY </p>
        <form action="sendDeposit"
             onSubmit={handleSubmit}  >
            <div className="form_group">
                <label className="sub_title" htmlFor="number">Account Number</label>
                <input placeholder="Enter your Account Number" 
                className="form_style" 
                type="number" 
                required
                id='accountNumber'
                name='accountNumber'
                value={accountNumber}
                onChange={handleChange}/>
            </div>
            <div className="form_group">
            <select className='options'
              id="deposit"
              name="deposit"
              value={deposit}
              required   
              onChange={handleChange}         
            >
              <option value="">Seleccione el monto</option>
              <option value={20}>S/.20.00</option>
              <option value={50}>S/.50.00</option>
              <option value={100}>S/.100.00</option>
              <option value={200}>S/.200.00</option>
              
            </select>
            </div>
            <div className="form_group">
                <label className="sub_title" htmlFor="number">DNI</label>
                <input placeholder="Enter your personal ID"
                 id="dni"
                 name='dni'
                  className="form_style" 
                  type="number"
                   required
                   value={dni}
                   onChange={handleChange}
                   />
            </div>
            <div>
                <button className="btn">DEPOSIT</button>
                </div><a className="link" href="">
        
    </a></form></div><a className="link" href="">
</a></div>
    </>
  )
}

export default Deposito