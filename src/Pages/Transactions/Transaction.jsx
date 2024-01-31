    import React, { useState } from 'react'
    import'./Transaction.css'

    const Transaction = () => {
        const [dni, setDni] = useState('')
        const [token, setToken] = useState('')
        const [cantDeposit, setCantDeposit] = useState(0)
        const [accountNumber, setAccountNumber] = useState('')
       
      
        const handleChange = (event) => {
            const { name, value } = event.target;
            switch (name) {
              case 'dni':
                setDni(parseInt(value));
                console.log('Valor de retiro:', value);
                break;
              case 'token':
                setToken(value);
                break;
              case 'cantDeposit':
                setCantDeposit(value);
                break;
              case 'accountNumber':
                setAccountNumber(value);
                break;
              default:
                break;
            }
          };
        
          const handleSubmit = async (e) => {
            e.preventDefault();
            if (!dni || !token || !accountNumber || !cantDeposit) {
              console.error('Error: Datos incompletos. Por favor, complete todos los campos.');
              return;
            }
        
            try {
              const response = await fetch('/sendDepositUser/:idUser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ dni, token, accountNumber, cantDeposit }),
              });
        
              if (response.ok) {
                const data = await response.json();
                console.log(data.cantDeposit, data.date);
              } else {
                console.error('Error en la solicitud:', response.statusText);
              }
            } catch (error) {
              console.error('Error al procesar la solicitud:', error);
            }
          };
    return (
        
        <>
            <form class="form"
            action='/sendDepositUser/:idUser'
            onSubmit={handleSubmit}>
        
        <p class="message">Trasnsacciones con su Banca de Confianza </p>
            <div class="flex">
            
            <label htmlFor='dni'> Ingrese su Dni
                <input className="input" 
                type="number" 
                placeholder="Ingrese su Numero de DNI" 
                required 
                name='dni' 
                id='dni'
                value={dni}
                onChange={handleChange}/>
            </label>
        </div>  
                
        <label htmlFor='accountNumber'> Numero de cuenta
            <input className="input" 
            type="number" 
            placeholder="ingrese su Numero de Cuenta" 
            required 
            id='accountNuber' 
            name='accountNumber'
            onChange={handleChange}
            value={accountNumber}/>
            
        </label> 
            
        <label> Monto a enviar
        <select
                className="input"
                id="cantDeposit"
                name="cantDeposit"
                onChange={handleChange}
                value={cantDeposit}               
                required
            >
                <option value="">Seleccione el monto</option>
                <option value={20}>S/.20.00</option>
                <option value={50}>S/.50.00</option>
                <option value={100}>S/.100.00</option>
                <option value={200}>S/.200.00</option>
            </select>
        </label>
        <label> ingrese su token
            <input 
            className="input" 
            type="text " 
            placeholder="token" 
            required="token"
            id='token'
            name='token'
            onChange={handleChange}
            value={token}/>
            
        </label>
        <button class="submit">Realizar Transaccion</button>
        
    </form>
        </>
    )
    }

    export default Transaction