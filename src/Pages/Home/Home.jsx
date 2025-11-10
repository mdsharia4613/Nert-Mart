import React from 'react';
import Banner from './HomeComponents/Banner';
import Category from './HomeComponents/Category';

const Home = () => {
    return (
        <div className='container mx-auto px-10'>
            <Banner></Banner>
            <Category></Category>
        </div>
    );
};

export default Home;