import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';


const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div className='order-container'>
            <div className='selected-product'>
                <h2>Selected Products</h2>
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    ></ReviewItem>)
                }
            </div>
            <div className='order-summery'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;