import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Components/Navbers/Navber';

const Routes = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Routes;