import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getProduct } from '../../MockData/Products';
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    let params = useParams();
    useEffect(()=>{
        console.log(params.id);
        getProduct(params.id).then(res => setProduct(res));
    },[])

  return (
    <div className='container'>
        <div className='row mt-5'> 
        {
            product.map(producto=>{
               return( 
               <>
                    <div key={producto.id} className="card" >
                        <img className="card-img-top card__img" src={producto.image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{producto.title}</h5>
                            <p className="card-text">{producto.description}</p>
                            <Link to="/products" className="btn btn-primary">Volver</Link>
                        </div>
                    </div>
                </>)
            })
        }
    </div>
    </div>
    )
}

export default ItemDetailContainer