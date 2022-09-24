import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./ItemListContainer.css"


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
         axios
        .get("https://fakestoreapi.com/products")
        .then(res => setProducts(res.data))
      }, []);

    
  return (
    <div className='container'>
        <div className='row mt-5'>                         
                {
                    products.map(prod=>{
                        return(
                            <div className='col-xs-12 col-sm-8 col-md-6 col-lg-4 col-xl-3'>
                            <div key={prod.id} className="card card__style" >
                                <img src={prod.image} className="card-img-top card__img" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card__title card-title">{prod.title}</h5>
                                    <p className="card__text card-text ">{prod.description}</p>
                                    <p className="card-text">{prod.price}</p>
                                    <a href="#" className="btn btn-primary" onClick={()=>props.addProduct(prod)}>Add Product</a>
                                </div>
                            </div>
                            </div>
                        )
                    })
                }
        </div>
    </div>
  )
}

export default ItemListContainer