import React from 'react'
import "./ErrorPage.css";
import { Navigate } from "react-router-dom";
import { useState } from 'react';

const ErrorPage = () => {
    const [navigate, setNavigate] = useState(false);

    const handleClick=()=>{
        setNavigate(true);
    }
  return (
    
    <aside className='error'>
        <h1 className='error__title'>404</h1>   
        <h4 className='error__text'>Bienvenido a la página donde nada puede malir sal...</h4>                 
        <img className="error__img"src="https://i.ytimg.com/vi/PmxSBdRSOQE/maxresdefault.jpg" alt="" />
        <p className='error__text'>Digo salir mal, es lo primero que sale mal</p>
        <button type='submit' onClick={handleClick} className='error__btn'>Volver a intentarlo</button>
        {
           navigate ?  <Navigate to="/login"/> : null
        }
    </aside>
  )
}

export default ErrorPage