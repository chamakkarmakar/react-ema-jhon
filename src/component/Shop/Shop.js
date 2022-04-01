import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStored } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts]=useProducts([]);

    const [cart, setCart] = useState([]);
   

    useEffect( () =>{
        const storedCart = getStored();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])
    
    const handleToCart= (selectedProduct) =>{
        console.log(selectedProduct)
        const newCart=[...cart, selectedProduct]
        setCart(newCart)
        addToDb(selectedProduct.id);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handleToCart={handleToCart}
                        ></Product>)
                }
            </div>
            <div className="order-summery">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;