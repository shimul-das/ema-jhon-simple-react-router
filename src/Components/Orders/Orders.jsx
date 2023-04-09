import React, { useState } from 'react'
import './orders.css'
import Cart from '../Cart/Cart'
import { useLoaderData } from 'react-router-dom'
import ReviewItem from '../ReveiwItem/ReviewItem';
import Product from '../Product/Product';
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';


const Orders = () => {
const cart=useLoaderData();
const [cart1,setcart1]=useState(cart);
const handleRemovefromcart=(id)=>{
    const remaining=cart1.filter(product=>product.id!=id);
    setcart1(remaining);
    removeFromDb(id)
}
const handleclearcart=(id)=>{
    setcart1([]);
    deleteShoppingCart();
}
console.log(cart);
return (
<div className='shopContainer'>
    <div className='reviewContainer'>
        {
            cart1.map( order => <ReviewItem key={order.id} order={order} handleRemovefromcart={handleRemovefromcart}></ReviewItem>)
        }
    </div>
    <div className='cartContainer'>
        <Cart cart={cart1} handleclearcart={handleclearcart}></Cart>
    </div>

</div>
)
}

export default Orders