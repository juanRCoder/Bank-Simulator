import React from 'react'
import './BodyDashboard.css'
const BodyDashboard = () => {
  return (
    <>
    <div className='dashboard'>
      
        <div className='container'>
        <h1 className='title-1'>¿Que Vamos Hacer Hoy?</h1>
            <div className='funcionalidades'>
                <div>
                <ul className='lista-funcionalidades'>
                  <li><button>Retiro</button></li>
                  <li><button>Transacciones</button></li>
                </ul>
                </div>
                <ul className='lista-funcionalidades'>
                <li><button></button></li>
                <li><button></button></li>

                </ul>
                
            </div>
           
        </div>
        <div className='container-2'>
                <h1>mis productos  </h1>
                <h3>Cuenta Ahorro      S/.</h3>
                <p></p>
            </div>
            
    </div>
    </>
  )
}

export default BodyDashboard