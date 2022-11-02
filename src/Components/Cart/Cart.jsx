import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router';
import swal from 'sweetalert';
import { productsContext } from '../../Context/productContext';
import { createBuyOrder } from '../../Services/firebase';

const Cart = () => {

    const { productList ,  cantidades } = useContext(productsContext);
    useEffect(() => {
      
    }, [productList, cantidades])
    const navigate = useNavigate();
    
    const enviarCompra= async (e)=>{
        e.preventDefault();
        swal({
            title: "¡Compra Enviada!",
            text: "¿Desea seguir comprando?",
            icon: "success",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Gracias por tenernos en cuenta!", {
                icon: "success",
              });
              navigate("/products");
            } else {
              productList.map(async (prod, i)=>{
                let orderId = await createBuyOrder(prod);
                swal(`Gracias por su Compra! N° de compra: ${orderId}`);
              })
              
              navigate("/");
              productList.splice(0, productList.length);
              
            }
          });
    }
    

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-xl-12'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Item N°:</th>
                        <th scope="col">Producto:</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio Unitario</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList.map((prod, i)=>{
                            return(
                                <tr>
                                    <th scope="row">{i}</th>
                                    <td>{prod.title}</td>
                                    <td>{prod.cantidad}</td>
                                    <td>{prod.price}</td>
                                    <td>{prod.cantidad * prod.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                </table>
                <button type="button" className='btn btn-danger' onClick={(e)=>enviarCompra(e)}>
                    Enviar Compra
                </button>
            </div>
        </div>
    </div>
  )
}

export default Cart