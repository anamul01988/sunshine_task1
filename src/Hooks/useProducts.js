import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://peaceful-savannah-96683.herokuapp.com/inventory')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])
    return [products, setProducts];
};

export default useProducts;