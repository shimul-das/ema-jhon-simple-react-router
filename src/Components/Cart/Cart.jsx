import React from 'react'
import './cart.css'

const Cart = ({cart}) => {
    //console.log(cart);
    let total=0;
    let totalShipping=0;
    for(let product of cart){
      total= total+product.price
      totalShipping=totalShipping+product.shipping;
    }
    const tax=(total*5)/100;
    const grand_total=total+tax
  return (
    <div className='cart'>
        <h4>Order Summary</h4>
        <p className='cart-item'>Added Product:{cart.length}</p>
        <p className='cart-item'>Total Price:${total}</p>
        <p className='cart-item'>Total Shipping Charge:${totalShipping}</p>
        <p className='cart-item'>Tax: ${tax}</p>
        <p className='grand-total'>Grand Total:${grand_total} </p>

    </div>
  )
}

export default Cart