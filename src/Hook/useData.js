import React, { useState, useEffect } from 'react';

const useData = () => {
    const [categorys, setCategorys] = useState([]);
    const [cardsItems, setCardItems] = useState([]);
    
    useEffect(() => {
        fetch("/product.json")
        .then(res => res.json())
        .then(data => setCardItems(data))
    } ,[])
    useEffect(() => {
        fetch('/category.json')
        .then(res =>  res.json())
        .then(data => setCategorys(data))
    } ,[])
    return { categorys, cardsItems }
};

export default useData;