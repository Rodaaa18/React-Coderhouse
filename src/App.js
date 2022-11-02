import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  useLocation
} from "react-router-dom";
import Login from "./Components/Login/Login.jsx";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';
import React, { useEffect, useState } from 'react'
import Home from './Components/Home/Home.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx';
import {ProductContext} from './Context/productContext.jsx';
import Cart from './Components/Cart/Cart';
function App() {

  let location = useLocation();
  
  
  return (
    <>
    <ProductContext>
      {
        location.pathname !== "/login" && location.pathname !== "/ups" && <Navbar />        
      }  

      <Switch>
        <Route path="/login" exact element={<Login />} />
        <Route path="/" exact element={<Home/>} />
        <Route path="/ups" exact element={<ErrorPage />} />
        <Route path="/products" exact element={<ItemListContainer />} />
        <Route path="/products/:category" exact element={<ItemListContainer />} />
        <Route path="/details/:id" exact element={<ItemDetailContainer />} />
        <Route path="/cart" exact element={<Cart />} />
      </Switch>
      </ProductContext>
    </>
  );
}

export default App;
