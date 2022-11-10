import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/ContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyRevies = () => {

    const { user } = useContext(AuthContext)
    const [myreviews, setMyreviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyreviews(data)
            })
    }, [user?.email])

    const handleDeleteReview=(id)=>{
        console.log('id from btn handler',id)

        fetch(`http://localhost:5000/reviews/${id}`,{
            method : "DELETE"
        })
        .then(res=>res.json())
        .then(()=>{
            toast.error('Review Deleted')
        })
        const remainingReviews = myreviews.filter(rev => rev._id !== id)
        setMyreviews(remainingReviews)

    }

    const handleEditReview=(id)=>{

    }

    return (
        <div className='w-full p-5 md:w-3/4 mx-auto h-screen'>
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
                                    <p><span className='font-bold italic'>Review</span> : {review.reviewText}</p>
                                    <div className='flex flex-start items-center mt-5'>
                                        <button onClick={()=>handleDeleteReview(review._id)} className='bg-rose-600 py-2 px-4 text-white rounded-md mx-3'>Delete</button>
                                        <button onClick={()=>handleEditReview(review._id)} className='bg-blue-600 py-2 px-4 text-white rounded-md mx-3'>Edit</button>
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