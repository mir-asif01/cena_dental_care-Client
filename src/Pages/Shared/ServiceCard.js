import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, name, img, desc, price } = service
    return (
        <div className='flex flex-col items-start justify-center m-3 shadow-md p-3 rounded-md'>
            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} className="w-full h-48 mb-1" alt="" />
                </PhotoView>
            </PhotoProvider>
            <div>
                <h1 className='font-semibold'>{name}</h1>
                <h1 className='font-semibold'>Price : ${price}</h1>
                <p>{desc.length > 100 ? desc.slice(0,100) : desc}</p>
            </div>
            <Link to={`/services/${_id}`} className='py-2 px-5 mt-2 text-white bg-cyan-500 rounded-md'><button>View Details</button></Link>
        </div>
    );
};

export default ServiceCard;