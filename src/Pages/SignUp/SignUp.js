import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider';
import Spinner from '../Shared/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    document.title = "Please Sign Up";

    const { signUpNewUser, addDisplayNamePhotoURL, setUser, googleSignIn, loading } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photoURL.value;

        signUpNewUser(email, password)
            .then(result => {
                addDisplayNamePhotoURL(name, photo)
                    .then(() => {
                        toast.success('User created Succesfully')
                    })
                    .catch((error) => console.log(error))
                const user = result.user
                setUser(user)
                form.reset();
                navigate('/login')
            })
            .catch(error => console.log(error))

    }

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user)
                navigate('/')
            })
            .catch(error => toast.error(error.message))
    }

    if (loading) {
        return <Spinner></Spinner>
    }
    else {
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
                <h1 className='text-3xl text-center'>Sign Up Here</h1>
                <div className="hero p-3">
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
                            <button onClick={handleGoogleLogIn} className='flex justify-between px-4 py-1 mb-3 m border border-gray-300 rounded-xl items-center w-3/4 mx-auto font-semibold'><FaGoogle className='h-6 w-6 text-blue-600'></FaGoogle>Login With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default SignUp;