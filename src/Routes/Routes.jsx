import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Components/Navbers/Navber';
import Footer from '../Footer/Footer';

const Routes = () => {
    return (
        <div className='container mx-auto '>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Routes;