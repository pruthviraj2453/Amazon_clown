import React, { useState } from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product(props) {

  const [value,setValue] = useState(true);

  const [{bakset},dispatch]  = useStateValue();

  const addToBasket = () =>{
    setValue(false);
    dispatch({
        type : "ADD_TO_BASKET",
        item :{
            id : props.id,
            title: props.title,
            image: props.image,
            price : props.price,
            rating : props.rating
        }
    })
  } 
  const removeFromBasket = ()=>{
    setValue(true);
    dispatch({
        type : "REMOVE_FROM_BASKET",
        id : props.id,
    })
  }
  return (
    <div className='product_tile'>
        <div className='product_info' >
        <p>{props.title}</p>
        <p className='product_price'>
            <small>₹</small>
            <strong>{props.price}</strong>
        </p>
        <div className="product_rating">
            {
                Array(props.rating).fill().map((_)=>(
                    <p>⭐️</p>
                ))
            }
            </div>
        </div>
        <img className="product_image" src={props.image} alt=''/>
        <button onClick={value?addToBasket:removeFromBasket}>{value ?"Add to basket ": "Remove from basket"}</button>
    </div>
  )
}

export default Product
