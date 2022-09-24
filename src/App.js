import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Login from "./Components/Login/Login";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import React, { useEffect, useState } from 'react'
function App() {
  const [cartList, setCartList] = useState([]);
  const addProduct=(product)=>{
    let carrito = [... cartList];
    carrito.push(product)
    setCartList(carrito);
}
  return (
    <Router>
      <Navbar cartList = {cartList}/>
      <Switch>
        <Route path="/login"exact element={<Login /> } />
        <Route path="/products" exact element={<ItemListContainer addProduct = {addProduct}/>} /> 
      </Switch>
  </Router>
  );
}

export default App;
