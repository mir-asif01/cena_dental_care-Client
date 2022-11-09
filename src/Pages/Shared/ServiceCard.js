import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id,name,img,desc,price} = service
    return (
        <div className='flex flex-col items-start justify-center m-3 shadow-md p-3 rounded-md'>
            <img src={img} className="w-full h-48 mb-1" alt="" />
            <div>
                <h1 className='font-semibold'>{name}</h1>
                <h1 className='font-semibold'>Price : ${price}</h1>
                <p>{desc}</p>
            </div>
            <Link to={`/services/${_id}`} className='py-2 px-5 mt-2 text-white bg-cyan-500 rounded-md'><button>View Details</button></Link>
        </div>
    );
};

export default ServiceCard;