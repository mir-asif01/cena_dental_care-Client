import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Shared/ServiceCard';

const ServiceDetails = () => {

    const service = useLoaderData()
    const { _id, name, img, desc, price } = service
    return (
        <div className='my-4 flex'>
            {/* service details  */}
            <div className='flex-0 p-2 md:p-4 w-full lg:w-56 border-r-2'>
                <h1 className='text-xl font-semibold underline mb-2'>Service Details</h1>
                <img src={img} className='w-full' alt="" />
                <div>
                    <h1 className='font-semibold'>{name}</h1>
                    <h1 className='font-semibold'>Price : ${price}</h1>
                    <p>{desc}</p>
                </div>
            </div>
            {/* reviews */}
            <div className='flex-grow p-2 md:p-4'>
                <h1 className='text-xl font-semibold underline mb-2'>Reviews</h1>
            </div>
        </div>
    );
};

export default ServiceDetails;