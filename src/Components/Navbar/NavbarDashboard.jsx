import React from 'react'
import logo from '../../images/logo.png'
import { Link, useParams } from 'react-router-dom'



const NavbarDashboard = () => {
    
  return (
    <>
        <div  style={{
            backgroundColor: "rgba(0, 0, 0, 0.1)",
        }} className='flex shadow-md  shadow-slate-600  border-b-2 border-black rounded-lg'>
        <div className=' flex-col'>
        <img className='-mt-10 mr-12 w-80 '  src={logo} alt="" /> 
      
        </div>
        <div className='flex items-center mx-4'>
        <ul className='flex justify-evenly mx-10'>
            <li className='mx-8 text-xl text-blue-800 font-bold '><button>Information Account</button> </li>
            <li className='mx-8 text-xl text-blue-800 font-bold' ><button> Personal Details</button></li>
            <li className='mx-8 text-xl text-blue-800 font-bold'><button> Contact Us</button></li>

            <li className='mx-5 text-xl'><Link to="/"><button
  class="group flex items-center justify-start w-11 h-11 bg-blue-500 rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
>
  <div
    class="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
  >
    <svg fill="white" viewBox="0 0 512 512" class="w-4 h-4">
      <path
        d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
      ></path>
    </svg>
  </div>
  <div
    class="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
  >
    Logout
  </div>
</button>
</Link>
</li>
            
        </ul>
        </div>
    </div>
    
    </>
  )
}

export default NavbarDashboard
