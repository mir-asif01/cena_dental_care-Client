import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../Context/ContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ServiceDetails = () => {
    document.title = "Service details"

    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    const service = useLoaderData()
    const { _id, name, img, desc, price, serviceId } = service

    const handleAddReview = (e) => {
        e.preventDefault()
        const form = e.target

        const ReviewAddedOn = new Date().getTime()
        const reviewText = form.reviewText.value;
        const userName = user?.displayName
        const userEmail = user?.email
        const photo = user?.photoURL

        const review = {
            reviewText: reviewText,
            userName: userName,
            photo: photo,
            userEmail: userEmail,
            serviceId: serviceId,
            serviceName: name,
            ReviewAddedOn: ReviewAddedOn
        }

        const newReviews = [...reviews, review]
        setReviews(newReviews)

        fetch('https://cena-dental-care-server.vercel.app/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Review Added..')
                }
            })

        // console.log(reviewText, userName, photo,serviceId,userEmail)
        // console.log(review)
        form.reset()
    }

    useEffect(() => {
        fetch(`https://cena-dental-care-server.vercel.app/reviews?serviceId=${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [serviceId])

    return (
        <div className='my-4 flex flex-col md:flex-row'>
            {/* service details  */}
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
            <div className='md:flex-0 p-2 md:p-4 w-full lg:w-72 border-r-2'>
                <h1 className='text-xl font-semibold underline mb-2'>Service Details</h1>
                <PhotoProvider className='h-full w-full'>
                    <PhotoView src={img}>
                        <img src={img} className="w-full h-48 mb-1" alt="" />
                    </PhotoView>
                </PhotoProvider>
                <div>
                    <h1 className='font-semibold'>{name}</h1>
                    <h1 className='font-semibold'>Price : ${price}</h1>
                    <p>{desc}</p>
                </div>
            </div>
            {/* reviews */}
            <div className='md:flex-grow p-2 md:p-4'>
                <h1 className='text-xl font-semibold underline mb-2'>Reviews</h1>
                {
                    reviews.length > 0 ? <div>
                        <div>
                            {
                                reviews.map(review => <div key={review._id}>
                                    <div className='border border-gray rounded-md my-2 p-3'>
                                        <div className='flex'>
                                            <img src={review.photo
                                            } className='w-6 h-6 rounded-full mx-2' alt="" />
                                            <h1>{review.userName}</h1>
                                        </div>
                                        <p><span className='font-bold italic'>Review</span> : {review.reviewText}</p>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div> : <div>
                        <h1 className='text-rose-500 italic'>No reviews added yet</h1>
                    </div>
                }

                <div className='mt-7'>
                    {
                        user ? <>
                            <h1 className='text-xl font-semibold underline mb-2'>Add Your Own Review</h1>
                            <form onSubmit={handleAddReview}>
                                <div className='flex flex-col justify-center items-start'>
                                    <textarea name="reviewText" id="" cols="30" rows="5" className='border border-gray-300 outline-none p-2 rounded-md' placeholder='Review Text'></textarea>
                                    <button className='py-2 px-5 bg-cyan-600 text-white rounded-md mt-2' type='submit'>Add Review</button>
                                </div>
                            </form>
                        </> :
                            <>
                                <h1 className='text-center text-2xl font-semibold'>Please <Link className='text-blue-600 underline' to='/login'>Login</Link>To Add Review.</h1>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;