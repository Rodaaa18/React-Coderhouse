import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Login.css";
/* user : john@gmail.com*/
/*pass: m38rmF$*/
const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const usuario = "john@gmail.com";
    const contraseña = "m38rmF$";

    const LoginSend=()=>{
        if(user === usuario && password === contraseña){
            fetch('https://fakestoreapi.com/auth/login',{
                method:'POST',
                body:JSON.stringify({
                    username: user,
                    password: password
                })
            })
                .then(res=>res.json())
                .then(json=>console.log(json))
        }
        
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
                        <form action="" className='login__box__body__form' onSubmit={LoginSend} >
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