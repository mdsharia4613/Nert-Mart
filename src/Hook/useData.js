import React, { useState, useEffect } from 'react';

const useData = () => {
    const [categorys, setCategorys] = useState([]);
    const [bannerSection, setBannerSection] = useState([]);

    useEffect(() => {
        fetch('/bannersection.json')
        .then(res => res.json())
        .then(data => setBannerSection(data))
    } ,[])
    useEffect(() => {
        fetch('/category.json')
        .then(res =>  res.json())
        .then(data => setCategorys(data))
    } ,[])
    return { categorys, bannerSection }
};

export default useData;