import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Order = () => {
    const [products, setProducts]=useProducts();
    const [cart,stCart] = useCart(products)
    return (
        <div>
            <h2>Order Details</h2>
            <p>Orders: {products.length}</p>
            <p>Cart: {cart.length}</p>
        </div>
    );
};

export default Order;