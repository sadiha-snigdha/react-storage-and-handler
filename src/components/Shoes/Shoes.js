import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 55;
    const second = 65;
    const result = multiply(first, second)
    const sum = add(first, second)
    return (
        <div>
            <h3>This is shoes component!</h3>
            <p>Result: {result} and Sum: {sum}</p>

        </div>
    );
};

export default Shoes;