 import React from 'react'
 import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'


 function CheckoutProduct(props) {

    const [{basket},dispatch] = useStateValue();

    const removeFromBasket = ()=>{
        dispatch({
            type : "REMOVE_FROM_BASKET",
            id: props.id,
        });
    }


   return (
     <div className='checkout_product'>
        <img className='checkout_productImage' src={props.image} alt="" />
        <div className="checkout_productInfo">
            <p className='checkout_productTitle'>{props.title}</p>
            <p className='checkout_productPrice'>
                <small>₹</small>
                <strong>{props.price}</strong>
            </p>
            <div className="checkout_productRating">
            {
                Array(props.rating).fill().map((_)=>(
                    <p>⭐️</p>
                ))
            }
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
     </div>
   )
 }
 
 export default CheckoutProduct
 