import React, { useState, useEffect } from 'react';

const useData = () => {
    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        fetch('/category.json')
        .then(res =>  res.json())
        .then(data => setCategorys(data))
    } ,[])
    return { categorys }
};

export default useData;