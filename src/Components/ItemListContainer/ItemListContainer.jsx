import React, { useContext, useEffect, useState } from 'react'
import "./ItemListContainer.css";
import { Link, useLocation, useParams } from 'react-router-dom';
import { productsContext } from '../../Context/productContext.jsx';
import { getProducts, getProductsByCategory } from '../../Services/firebase';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    
    
    let params = useParams();
    useEffect( () => {
       params.category ? getProductsByCategory(params.category).then(resp => setProducts(resp)) : getProducts().then(res => setProducts(res));
       
      }, [params.category]);

    
  return ( 
    <div className='container'>
        <div className='row mt-5'>                         
                {
                    products.map(prod=>{
                        return(
                            <div key={prod.id} className='col-xs-12 col-sm-8 col-md-6 col-lg-4 col-xl-3'>
                            <div  className="card card__style" >
                                <img src={prod.image} className="cardlist__img" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card__title card-title">{prod.title}</h5>
                                    <p className="card-text mt-0">${prod.price}</p>
                                    
                                    <Link to={`/details/${prod.id}`} className="btn btn-primary ml-3 mt-2" >Details</Link>
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