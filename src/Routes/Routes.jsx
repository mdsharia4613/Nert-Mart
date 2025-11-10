import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Components/Navbers/Navber';

const Routes = () => {
    return (
        <div className='container mx-auto '>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Routes;