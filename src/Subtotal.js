import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import "./subtotal.css"
import { getBasketTotal } from './Reducer';


function Subtotal() {

  const[{basket},dispatch] = useStateValue();



  return (
    <div className='subtotal'>

        {/* price */}

        <CurrencyFormat 

        renderText={(value)=>(
            <>
            <p>
                Subtotal ({basket.lenght} items ) : <strong>{value}</strong>
            </p>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType='text'
        thousandSeparator = {true}
        prefix={'₹'}
        />
        <button>Proceed to checkout</button>
        
    </div>
  )
}

export default Subtotal
