import './Landing.css'

import cardd from '../../images/cardd.png'
import money from '../../images/cambio.png'
import cambio from '../../images/money.png'
import saving from '../../images/saving.png'
import car from '../../images/car.png'
import sueldo from '../../images/sueldo.png'
import campaña from '../../images/campaña.jpg'
import tour from '../../images/tour.png'

const Landing = () => {
 
  return (
    <>
    <div className='imagen'>
    <img src={campaña} alt="" />
      </div>
      <div>
        <h1>TENEMOS PRODUCTOS PARA TI</h1>
        <ul className='lista-productos'>
          <li><img src={cardd} alt="" /><p>Obten una Tarjeta de <br />Credito</p></li>
          <li><img src={money} alt="" /><p> Necesito un <br /> Prestamo </p></li>
          <li><img src={saving} alt="" /><p>Obten una Cuenta <br /> Ahorros</p> </li>
          <li><img src={cambio} alt="" /><p> Quiero Cambiar <br /> Dolares</p></li>
          <li><img src={car} alt="" /> <p>Necesito un Seguro <br /> Vehicular</p></li>
          <li><img src={sueldo} alt="" /><p>Busco Adelanto de <br /> Sueldos</p></li>
        </ul>
      </div>
      <div className='fondo'>
        <div className='fondo-1'>
          
            
            <img src={tour} alt="" />
        
           
          </div>
        
        </div>
      

    </>
  )
}

export default Landing;