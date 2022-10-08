import React, { useState } from 'react'
import "./Login.css";
import swal from 'sweetalert';
import { Navigate } from "react-router-dom";

/* user : john@gmail.com*/
/*pass: m38rmF$*/
const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const USER_LOGIN = "user";
    

    const usuario = {
        "username" : "admin",
        "password" : "admin"
    }
    
    
    const LoginSend=(e)=>{
        e.preventDefault();            
            if(user !== usuario.username){
                swal({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuario o contraseña inválidos',
                });
                setRedirect(false); 
                return;
           }
           if(password !== usuario.password){
            swal({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario o contraseña inválidos',
            });
            setRedirect(false); 
            return;
            }
            if(user !== usuario.username && password !== usuario.password){
                swal({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuario o contraseña inválidos',
                });
                setRedirect(false); 
                return;
           }
            
             swal({
             title: "Sesión iniciada!",
             text: "Bienvenido!",
             icon: "success",
             timer: 3000,
         });   
         setRedirect(true); 
         localStorage.setItem(USER_LOGIN, JSON.stringify(usuario));
    }
        
    
    
  return (
    <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className='login'>
                <div className='login__box'>
                    <div className='login__box__header'>
                        <img className='login__box__header__img' src="https://www.antevenio.com/wp-content/uploads/2020/01/tienda-online.jpg" alt="404 Image Not Found" />
                    </div>
                    <div className='login__box__body'>
                        <form action="" className='login__box__body__form' onSubmit={(e)=>LoginSend(e)} >
                            <div className='login__box__body__form__texts'>
                                <label htmlFor="user"> Usuario</label>
                                <input type="text" name="user" id="user" onChange={(e)=> setUser(e.target.value)} value={user}/>
                            </div>
                            <div className='login__box__body__form__texts'>
                                <label htmlFor="password"> Contraseña:</label>
                                <input type="password" name="password" id="password" onChange={(e)=> setPassword(e.target.value)}value={password}/>
                            </div>
                            <div className='login__box__body__form__texts'>
                                <button className='login__box__body__form__btn' type="submit">Ingresar</button>
                            </div>
                            {
                                redirect ? <Navigate to="/"></Navigate> : null
                            }
                        </form>
                    </div>
                    <div className='login__box__footer'>

                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Login