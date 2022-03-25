import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;

    const addToCart = (id) =>{
        addToDb(id);
    }

    // const addToCartWithParameter = () => addToCart(id);

    const removeFromCart = (id) => {
        removeFromDb(id);
    }

    return (
        <div className='product'>
            <h1>Client Name: {name}</h1>
            <p>Price: {price}</p>
            <p><small>Customer ID: {id}</small></p>
            {/* <button onClick={addToCartWithParameter}>Add to cart</button> */}
            <button onClick={() => addToCart(id)}>Add to cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;