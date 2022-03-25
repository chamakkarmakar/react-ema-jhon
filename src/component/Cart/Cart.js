import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p><strong>Selected items: </strong>{cart.length}</p>
            <p><strong>Total Price: </strong>${total}</p>
            <p><strong>Total Shipping: </strong>${shipping}</p>
            <p><strong>Tax: </strong>${tax}</p>
            <p>Grand Total: <strong>${grandTotal}</strong></p>
            <button className='btn-clear'>Clear Cart</button> <br />
            <button className='btn-review'>Review</button>

        </div>
    );
};

export default Cart;