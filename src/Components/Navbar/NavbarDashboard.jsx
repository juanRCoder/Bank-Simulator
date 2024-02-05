import React from 'react'
import logo from '../../images/logo.png'
import { useParams } from 'react-router-dom'


const NavbarDashboard = () => {
    
  return (
    <>
    <div style={{
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }} className='flex  rounded-lg'>
        <div className=' flex-col'>
        <img className='-mt-10 mr-12 w-80 '  src={logo} alt="" /> 
        <h1 className='ml-20 text-2xl mt-4 text-blue-950'> Bienvenido </h1>
        </div>
        <div className='flex items-center mx-4'>
        <ul className='flex justify-evenly mx-10'>
            <li className='mx-20'>x </li>
            <li className='mx-20'>x</li>
            <li className='mx-20'>x</li>
            <li className='mx-20'>x</li>
            
        </ul>
        </div>
    </div>
    
    </>
  )
}

export default NavbarDashboard
