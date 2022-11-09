import React from 'react';

const ServiceCard = ({service}) => {
    const {name,img,desc,price} = service
    return (
        <div className='flex flex-col items-start justify-center m-3'>
            <img src={img} className="w-full h-64" alt="" />
            <div>
                <h1>{name}</h1>
                <h1>Price : ${price}</h1>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default ServiceCard;