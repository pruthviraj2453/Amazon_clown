import React from 'react'
import { useStateValue } from './StateProvider'
import "./checkout.css"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';


function Checkout() {

  const [{basket}] = useStateValue();

  return (

    <div className='checkout'>  
    <div className='checkout_left'>
      <img 
      className='checkout_ad'
      src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
      alt="" />


      {basket?.length===0 ? (
        <div>
            <h2>Your shopping basket is empty , add items from home page</h2>
        </div>
        ):(
        <div>
            <h2 className='checkout_title'>Your shopping basket</h2>

            { /*Your shopping basket map*/ }
            {basket.map((elements)=>(
                <CheckoutProduct 
                id = {elements.id}
                title = {elements.title}
                price={elements.price}
                rating = {elements.rating}
                image = {elements.image}
                />
            ))}
        </div>
        )}
        </div>
        <div>
            {basket.length>0 && (
                <div className='checkout_right'>
                <Subtotal/>
                </div>
            )}
        </div>
    </div>
  )
}

export default Checkout
