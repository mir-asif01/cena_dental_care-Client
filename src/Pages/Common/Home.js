import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../Shared/ServiceCard';

const Home = () => {

    const homePageServices = useLoaderData()

    return (
        <div className='my-4 p-2 md:p-5'>
            <h2 className='text-xl mb-3'>Popular Services of Dr. John Cena</h2>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {
                    homePageServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='text-center my-3'>
                <Link to='/services'><button className='py-2 px-5 rounded-md bg-cyan-400 text-white'>See All</button></Link>
            </div>
        </div>
    );
};

export default Home;