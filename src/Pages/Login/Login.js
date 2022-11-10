import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider';
import Spinner from '../Shared/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    document.title = "Please Login";

    const { userLogin, setUser, googleSignIn, loading } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                navigate('/')
                toast.success('Login Succesfull')
                form.reset()
            })
            .catch(error => {
                navigate('/')
                toast.error(error.message)
            })
    }

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                navigate('/')
                toast.success('Google Sign In Successfull')
                setUser(user)
            })
            .catch(error => toast.error(`${error.message}`))
    }

    if (loading) {
        return <Spinner></Spinner>
    }
        return (
            <div className='mt-3'>
                <ToastContainer
                    position="top-center"
                    autoClose={2500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <h1 className='text-3xl text-center'>Please Login</h1>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleFormSubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <p>Don't have an account?? <Link to='/signup' className='text-blue underline'>Sign Up</Link></p>
                            </form>
                            <button onClick={handleGoogleLogIn} className='flex justify-between px-4 py-1 mb-3 m border border-gray-300 rounded-xl items-center w-3/4 mx-auto font-semibold'><FaGoogle className='h-6 w-6 text-blue-600'></FaGoogle>Login With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

export default Login;