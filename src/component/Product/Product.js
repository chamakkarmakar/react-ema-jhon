import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, price, ratings, img, seller } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <small>Manufacturer: {seller}</small> <br />
                <small>Ratings: {ratings} stars</small>
            </div>
            <button onClick={() => props.handleToCart(props.product)} className='btn-cart'>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;