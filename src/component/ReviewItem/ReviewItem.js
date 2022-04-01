import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {name,price,quantity}=props.product;
    return (
        <div>
            <h5>{name}</h5>
            <p>Price: {price}</p>
        </div>
    );
};

export default ReviewItem;