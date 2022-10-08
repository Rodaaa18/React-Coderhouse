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
function App() {

  const [cartList, setCartList] = useState([]);
  let location = useLocation();
  const addProduct=(product)=>{
    let carrito = [... cartList];
    carrito.push(product)
    setCartList(carrito);    
  }
  
  return (
    //Encerrar a todos con el Context, crear carpeta Store o Context. Creo el UserContext o como quiera depende que guarde. importar de react el createContext.
    //const userContext = createContext().
    // definimos Provider.function UserContextProvider(props){ return(
    // <userContext.Provider value={ {user : user} }>
    //{props.children}
    //  estos los pongo aca abajo en el App encerrando todo
    //</userContext.Provider>
    //) }
    <>
      {
        location.pathname !== "/login" && location.pathname !== "/ups" && <Navbar cartList={cartList} />
        
      }      
      <Switch>
        <Route path="/login" exact element={<Login />} />
        <Route path="/" exact element={<Home cartList={cartList} />} />
        <Route path="/ups" exact element={<ErrorPage />} />
        <Route path="/products" exact element={<ItemListContainer addProduct={addProduct} />} />
        <Route path="/details/:id" exact element={<ItemDetailContainer />} />
      </Switch>
    </>
  );
}

export default App;
