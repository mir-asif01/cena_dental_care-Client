import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = () => {

    const service = useLoaderData()
    const { _id, name, img, desc, price } = service
    return (
        <div className='my-4 flex flex-col md:flex-row'>
            {/* service details  */}
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
            </div>
        </div>
    );
};

export default ServiceDetails;