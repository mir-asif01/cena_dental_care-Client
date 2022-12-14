import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider';
import ServiceCard from '../Shared/ServiceCard';
import Spinner from '../Shared/Spinner';

const Services = () => {
    const services = useLoaderData()
    document.title = 'Services'

    const {loading} = useContext(AuthContext)
    if(loading){
        return <Spinner></Spinner>          
    }
    else{
        return (
            <div className='my-3 p-2 md:p-3'>
                <h1 className='text-xl mb-3'>All Services from Dr. John Cena</h1>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
            </div>
        );
    }
};

export default Services;