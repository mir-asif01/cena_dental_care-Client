import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditReview = () => {

    document.title = "Edit review"

    const review = useLoaderData()
    const { reviewText } = review

    const handleEditReview=(e)=>{

        e.preventDefault()
        const editedText = e.target.reviewText.value 
        console.log(editedText)
        const updatedText = {
            editedText : editedText
        };

        fetch(`https://cena-dental-care-server.vercel.app/reviews/${review._id}`,{
            method : "PUT",
            headers : {
                "content-Type": "application/json"
            },
            body : JSON.stringify(updatedText)
        }).then(res=>{})
        .then(()=>{
            toast.success('Review Updated')
        })
    }

    return (
        <div className='w-full p-4 md:w-2/4 mx-auto'>
            <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            <h1 className='text-2xl font-semibold mb-3'>Edit Your review</h1>
            <div>
                <form onSubmit={handleEditReview}>
                    <div className='flex flex-col'>
                        <label htmlFor="">Edit Review</label>
                        <textarea name="reviewText" className='p-3 outline-none border border-gray-400 rounded-md' defaultValue={reviewText} cols="30" rows="5"></textarea>
                    </div>
                    <button className='bg-cyan-500 py-2 px-5 text-white rounded-md mt-2' type='submit'>Save Changes</button>
                </form>
            </div>
        </div>
    );
};

export default EditReview;