import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/ContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Spinner from '../Shared/Spinner';

const MyRevies = () => {

    document.title = "My Reviews"

    const { user ,loading } = useContext(AuthContext)
    const [myreviews, setMyreviews] = useState([])
    useEffect(() => {
        fetch(`https://cena-dental-care-server.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyreviews(data)
            })
    }, [user?.email])

    const handleDeleteReview=(id)=>{
        fetch(`https://cena-dental-care-server.vercel.app/reviews/${id}`,{
            method : "DELETE"
        })
        .then(res=>res.json())
        .then(()=>{
            toast.error('Review Deleted')
        })
        const remainingReviews = myreviews.filter(rev => rev._id !== id)
        setMyreviews(remainingReviews)

    }

    

    if(loading){
        return <Spinner></Spinner>
    }
    return (
        <div className='w-full p-5 md:w-3/4 mx-auto'>
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
            <h1 className='text-2xl font-semibold mb-4'>Reviews Added By You...</h1>
            {
                myreviews.length > 0 ? <>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        {
                            myreviews.map(review => <div key={review._id}>
                                <div className='border border-gray rounded-md my-2 p-3'>
                                    <div className='flex'>
                                        <img src={review.photo
                                        } className='w-6 h-6 rounded-full mx-2' alt="" />
                                        <h1>{review.userName}</h1>
                                    </div>
                                    <h1 className='font-semibold text-rose-600 bg-gray-200 p-1 rounded-md my-2'>Service Name : {review?.serviceName}</h1>
                                    <h1 className='font-semibold text-rose-600 bg-gray-200 p-1 rounded-md my-2'>Service Id : {review?.serviceId}</h1>
                                    <p><span className='font-bold italic'>Review</span> : {review.reviewText}</p>
                                    <div className='flex flex-start items-center mt-5'>
                                        <button onClick={()=>handleDeleteReview(review._id)} className='bg-rose-600 py-2 px-4 text-white rounded-md mx-3'>Delete</button>
                                        <Link to={`/reviews/${review._id}`} className='bg-blue-600 py-2 px-4 text-white rounded-md mx-3'>Edit</Link>
                                        {/* <button onClick={()=>handleEditReview(review._id)} className='bg-blue-600 py-2 px-4 text-white rounded-md mx-3'>Edit</button> */}
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </> : <div>
                <h1 className='text-3xl text-center text-rose-600'>No reviews were added.</h1>
                </div>
            }
        </div>
    );
};

export default MyRevies;