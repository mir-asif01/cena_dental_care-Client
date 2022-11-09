import React from 'react';
import {FaGoogle} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const SignUp = () => {
    document.title = "Please Sign Up";

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photoURL.value;
        

        form.reset();
    }

    return (
        <div className='mt-3'>
            <h1 className='text-3xl text-center'>Sign Up Here</h1>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleFormSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo URL" name='photoURL' className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <p>Don't have an account?? <Link to='/login' className='text-blue underline'>Login</Link></p>
                        </form>
                        <button className='flex justify-between px-4 py-1 mb-3 m border border-gray-300 rounded-xl items-center w-3/4 mx-auto font-semibold'><FaGoogle className='h-6 w-6 text-blue-600'></FaGoogle>Login With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;