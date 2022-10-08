import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css";
import { getProducts } from '../../MockData/Products.js';
import { Link } from 'react-router-dom';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        //  axios
        // .get("https://fakestoreapi.com/products")
        // .then(res => setProducts(res.data))
        getProducts().then(res => setProducts(res));
      }, []);

    
  return ( 
    <div className='container'>
        <div className='row mt-5'>                         
                {
                    products.map(prod=>{
                        return(
                            <div key={`${prod.id}key`} className='col-xs-12 col-sm-8 col-md-6 col-lg-4 col-xl-3'>
                            <div  className="card card__style" >
                                <img src={prod.image} className="cardlist__img" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card__title card-title">{prod.title}</h5>
                                    <p className="card-text mt-0">${prod.price}</p>
                                    <a href="#" className="btn btn-danger" onClick={()=>props.addProduct(prod)}>Add Product</a>
                                    <Link to={`/details/${prod.id}`} className="btn btn-primary ml-3" >Details</Link>
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