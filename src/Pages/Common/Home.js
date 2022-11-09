import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../Shared/ServiceCard';
import Banner from './Banner';
import Campaign from './Campaign';

const Home = () => {

    const homePageServices = useLoaderData()

    return (
        <div className='my-4 p-2 md:p-5'>
            <h2 className='text-2xl font-semibold mb-3'>Popular Services of Dr. John Cena</h2>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {
                    homePageServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='text-center my-3'>
                <Link to='/services'><button className='py-2 px-5 rounded-md bg-cyan-400 text-white'>See All</button></Link>
            </div>

            {/* free check up  */}
            <Campaign></Campaign>

            {/* faq section  */}

            <h2 className='text-2xl font-semibold text-center my-3'>Frequently Asked Questions</h2>
            <div className='px-10 md:px-28 mx-auto mb-7'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-2">
                    <div className="collapse-title text-xl font-medium">
                        What are the common dental problems?
                    </div>
                    <div className="collapse-content">
                        <p>Tooth Decay(Tooth decay is also known as dental caries or dental cavities),
                            Gum Disease(Gingivitis is the early stage and mild form of gum or periodontal disease),
                            Bad Breath,
                            Sensitive Teeth,
                            Cracked or Broken Teeth,
                            Receding Gums,
                            Root Infection,
                            Enamel Erosion.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-2">
                    <div className="collapse-title text-xl font-medium">
                        How to take care of our teeth?
                    </div>
                    <div className="collapse-content">
                        Floss at least once per day,
                        Brush your teeth twice a day with a soft-bristled toothbrush,
                        Use fluoride toothpaste,
                        Replace your toothbrush every 3 to 4 months or sooner if needed,
                        Eat a healthy diet,
                        Avoid sweets and sweetened drinks,
                        Do not smoke.
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-2">
                    <div className="collapse-title text-xl font-medium">
                        Do we need to brush our teeth regularly?
                    </div>
                    <div className="collapse-content">
                        The American Dental Association recommends brushing your teeth twice a day with fluoride toothpaste for two minutes each time. When you brush your teeth, you help remove food and plaque — a sticky white film that forms on your teeth and contains bacteria.
                    </div>
                </div>
            </div>
            {/* banner */}
            <Banner></Banner>
        </div>
    );
};

export default Home;