import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link>Login</Link></li>
        <li><Link>Log Out</Link></li>
    </>

    return (
        <div>
            <div className="navbar shadow-sm shadow-slate-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/'><h1 className='text-xl font-semibold'>Cena Dentals</h1></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='bg-white text-orange-600 py-2 px-5 hover:bg-orange-600 hover:text-white font-semibold border border-orange-600 rounded-md'>Call Us</button>
                </div>
            </div>
        </div>
    );
};

export default Header;