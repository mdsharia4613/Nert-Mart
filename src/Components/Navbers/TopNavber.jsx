import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from "../../assets/images/logo.png";
import { AiOutlineFire } from 'react-icons/ai';

const TopNavber = () => {
    const navLinkStyle = ({ isActive }) => isActive ? 'text-green-500  transition-all duration-500 bg-transparent font-semibold' : 'hover:text-green-600 transition-all  duration-500 hover:bg-transparent font-semibold'

    const navLink = (
        <>  <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
            <li><NavLink to="/about" className={navLinkStyle}>About</NavLink></li>
            <li><NavLink to="/shop" className={navLinkStyle}>Shop</NavLink></li>
            <li><NavLink to="/menu" className={navLinkStyle}>Mega Menu</NavLink></li>
            <li><NavLink to="/blog" className={navLinkStyle}>Blog</NavLink></li>
            <li><NavLink to ="/pages" className={navLinkStyle}>Pages</NavLink></li>
            <li><NavLink to="/contact" className={navLinkStyle}>Contact</NavLink></li>
        </>
    )

    return (
        <>
            <div className=''>
                <div className="navbar  shadow-sm container mx-auto px-10 ">
                    <div className="navbar-start py-2">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {navLink}
                            </ul>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={logo} alt="" />
                            <div>
                                <Link to="/" className='text-3xl font-black heading'>Nest</Link>
                                <p className='text-[8px] text-gray-500 font-semibold'>MART & GROCERY</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <AiOutlineFire className='text-green-400'></AiOutlineFire>
                                <p className='text-sm font-bold cpr'>Hot Deals</p>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex ">
                        <ul className="menu menu-horizontal px-1">
                            {navLink}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn bgcpr ">Login</a>
                    </div>
                </div>
           </div>
        </>
    );
};

export default TopNavber;