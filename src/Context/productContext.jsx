import React, { createContext } from 'react'
import { useState } from 'react'

const productsContext = createContext();

const ProductContext = (props) => {

    const [cantidades, setCantidades] = useState(0);

    const [productList, setProductList] = useState([]);

    const addProduct=(producto, cantidad)=>{
        let product = [... productList];
        let newProducto = {... producto, cantidad};
        let finded = productList.find(p=> p.id == producto.id);

        if(productList.length === 0){
            product.push(newProducto)
            setProductList(product); 
            return;
        }
        
        if(finded){
            let cantidadVieja = Number(finded.cantidad);
            let newCantidad = Number(cantidad);
            finded.cantidad = cantidadVieja + newCantidad;
            return;
        }
        
        product.push(newProducto)
            setProductList(product); 
            return;
        
        
      }
      const removeProduct=(idProduct)=>{
        let newList = productList.filter((producto)=> producto.id !== idProduct);
        setProductList(newList);
      }
      const totalPrice=()=>{
        let total =0;
        productList.forEach(prod=>{
            total += (cantidades * prod.price)
        })
        return total;
      }
    return (
        <productsContext.Provider value={ {addProduct, productList, removeProduct, totalPrice, cantidades } }>
            {props.children}
        </ productsContext.Provider>
        )
}

export  { ProductContext , productsContext}