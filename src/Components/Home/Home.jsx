import React, { useEffect, useState } from 'react'
import "./Home.css";
import Navbar from '../Navbar/Navbar.jsx';
import swal from 'sweetalert';
import { Navigate } from "react-router-dom";
import ErrorPage from '../ErrorPage/ErrorPage.jsx';

const Home = (props) => {
    

    const [user, setUser] = useState({});

    useEffect(()=>{
        const usuario = JSON.parse(localStorage.getItem("user"));
        setUser(usuario);
    },[])

    
    if(user != null){
        return (
            <div></div>
          )
    }else {
        return <Navigate to="/ups"></Navigate>
    }
  
}

export default Home