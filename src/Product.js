import React from 'react'
import "./Product.css"

function Product(props) {
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
        <button>Add to basket</button>
    </div>
  )
}

export default Product
