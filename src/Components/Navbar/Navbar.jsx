import { Link } from 'react-router-dom'
import './Navbar.css'
import React, { useState, useEffect } from 'react'
import logo from '../../images/logo.png'

const Navbar = () => {

  const [menu, setMenu] = useState("Landing")



  return (
    <>
      <div className='Navbar'>
        <div className='Navlogo'>
          <img src={logo} alt="BANK" />
        
        </div>

        <ul className='nav-menu'>
          <li onClick={() => { setMenu("Home") }}><Link style=
          {{ textDecoration: 'none' }} to="/">Home</Link>  {menu === "Home" ?   <hr /> : <></>}</li>
          <li onClick={() => { setMenu("info") }}><Link  style=
          {{ textDecoration: 'none' }} to="/Deposito">Depositar  Dinero</Link> {menu === "Deposito" ? <hr /> : <></>}</li>
          <li onClick={() => { setMenu("GetAcard") }}><Link style=
          {{ textDecoration: 'none' }} to="/Retiro">Retirar Dinero</Link>{menu === "GetAcard" ? <hr /> : <></>}</li>
         
        </ul>
        <div className='nav-login-car'>
          <Link to="login"><button>Login</button></Link>

          
        </div>
      </div>

    </>
  )
}

export default Navbar