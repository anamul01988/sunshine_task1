import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useProductDetail = inventoryId => {
    // const {inventoryId} = useParams();
    const [inventory, setInventory] = useState({});
    useEffect(()=>{
        const url = `https://peaceful-savannah-96683.herokuapp.com/inventory/${inventoryId}`;
        // console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data =>setInventory(data))
    },[inventoryId]);
    return [inventory];
};

export default useProductDetail;