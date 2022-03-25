const add = (first, second) => {
    return first + second;
}

// export default add;

const multiply = (first, second) => {
    return first * second;
}

const getTotalPrice = cosmetics => {
    const reducer = (previous, current) => previous + current.price;
    const total = cosmetics.reduce(reducer, 0);
    return total;
}

export {
    add, 
    multiply,
    getTotalPrice as getTotal
};