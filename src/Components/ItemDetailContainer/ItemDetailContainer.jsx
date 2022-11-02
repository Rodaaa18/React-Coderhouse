import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { productsContext } from '../../Context/productContext';
import { getProduct } from '../../Services/firebase';
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [cantidad, setCantidad] = useState(0);
    const { addProduct } = useContext(productsContext);
    let params = useParams();
    useEffect(()=>{
        
        getProduct(params.id).then(res => setProduct(res));
    },[])

  return (
    <div className='container'>
        <div className='row mt-5'> 
        {
               
               <>
                    <div key={product.id} className="card" >
                        <img className="card-img-top card__img" src={product.image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <label htmlFor={product.id}>Cantidad: </label>
                            <div class="input-group">
                                <input type="number" id={product.id} value={cantidad} onChange={(e)=> setCantidad(e.target.value)} class="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                                <span class="input-group-text">${cantidad * product.price}</span>
                            </div>
                            <a href="#" className="btn btn-danger mt-2" onClick={()=>addProduct(product, cantidad)}>Add Product</a>
                            <Link to="/products" className="btn btn-primary mt-2">Volver</Link>
                        </div>
                    </div>
                </>
            
        }
    </div>
    </div>
    )
}

export default ItemDetailContainer