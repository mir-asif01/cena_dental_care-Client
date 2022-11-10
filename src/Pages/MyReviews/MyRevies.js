import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/ContextProvider';

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

    return (
        <div className='w-full p-5 md:w-3/4 mx-auto h-screen'>
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
                                        <button className='bg-rose-600 py-2 px-4 text-white rounded-md mx-3'>Delete</button>
                                        <button className='bg-blue-600 py-2 px-4 text-white rounded-md mx-3'>Edit</button>
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