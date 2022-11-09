import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider';

const Header = () => {

    const { userSignOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        userSignOut()
            .then(() => alert('log out successfull'))
            .catch(error => console.log(error))
    }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {
            user?.uid ? <>
                <li><Link >Add Services</Link></li>
                <li><Link >My Reviews</Link></li>
                <li><button onClick={handleLogOut} className='text-white bg-sky-800'>Log Out</button></li>
            </> :  <li><Link to='login' className='bg-sky-800 text-white'>Login</Link></li>
        }
       

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
                    <Link to='/'>
                        <img src="https://images-platform.99static.com//MpDGcVXJFKTsTAgFLV0kfvolLd8=/1479x130:1979x630/fit-in/500x500/99designs-contests-attachments/67/67802/attachment_67802431" className='h-14 w-14 rounded-full' alt="" />
                    </Link>
                </div>
                <div className={`${user ? 'navbar-center' : 'navbar-end'} hidden lg:flex`}>
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;