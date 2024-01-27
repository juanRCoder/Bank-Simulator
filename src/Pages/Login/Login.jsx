import './Login.css'

const Login = () => {
  return (
    <>
    <div>
      <div className="login">
        <form action="#" className="formulario">
          <h2>Banca por Internet </h2>
          <hr />
         <div className="input-container">
          <input type="number" required />
          <label>Numero de Tarjeta</label>
         </div>
         <div className="input-container">
          <input type="password" required />
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