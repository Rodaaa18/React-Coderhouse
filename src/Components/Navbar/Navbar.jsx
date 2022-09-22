import React, { useEffect, useState } from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";
import axios from 'axios';

const Navbar = () => {

    const [categories, setCatgories] = useState([]);

    useEffect(() => {
      axios
      .get("https://fakestoreapi.com/products/categories")
      .then(res => setCatgories(res.data))
    }, [])
    

  return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">E-Shop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Products</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                    </a>
                    <ul className="dropdown-menu">
                        {
                            categories.map((cat, i)=>{
                                return (
                                    <li key={i}><a className="dropdown-item" href="#">{cat[0].toUpperCase() +  
                                        cat.slice(1)}</a></li>
                                )
                            })                            
                        }
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link ">About</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    
                </form>
                <Link className="btn btn-outline-success" to="/login">
                    Iniciar Sesión
                </Link>               
                </div>
            </div>
        </nav>
  )
}

export default Navbar