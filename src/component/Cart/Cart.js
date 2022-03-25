import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p><strong>Selected items: </strong>{cart.length}</p>
            <p><strong>Total Price: </strong></p>
            <p><strong>Total Shipping: </strong></p>
            <p><strong>Tax: </strong></p>
            <p>Grand Total: <strong></strong></p>

        </div>
    );
};

export default Cart;