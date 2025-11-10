import React from 'react';
import Banner from './HomeComponents/Banner';
import Category from './HomeComponents/Category';
import BannerSection from './HomeComponents/BannerSection';

const Home = () => {
    return (
        <div className='container mx-auto px-10'>
            <Banner></Banner>
            <Category></Category>
            <BannerSection></BannerSection>
        </div>
    );
};

export default Home;