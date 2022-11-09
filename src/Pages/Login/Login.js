import React from 'react';
import {FaGoogle} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Login = () => {
    document.title = "Please Login"
    return (
        <div className='mt-3'>
            <h1 className='text-3xl text-center'>Please Login</h1>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Don't have an account?? <Link to='/signup' className='text-blue underline'>Sign Up</Link></p>
                        </form>
                        <button className='flex justify-between px-4 py-1 mb-3 m border border-gray-300 rounded-xl items-center w-3/4 mx-auto font-semibold'><FaGoogle className='h-6 w-6 text-blue-600'></FaGoogle>Login With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;