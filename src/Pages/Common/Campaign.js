import React from 'react';

const Campaign = () => {
    return (
        <div>
            <h1 className='text-xl font-semibold mb-4'>Free dental health checkup campaign</h1>
            <div className='w-full md:w-3/4 mx-auto flex flex-col-reverse md:flex-row justify-between items-center'>
                <div>
                    <img src="https://img.freepik.com/free-vector/dentistry-set-with-flat-isolated-icons-healthy-damaged-tooth-with-characters-dental-doctors-vector-illustration_1284-74337.jpg?t=st=1668000796~exp=1668001396~hmac=291edb6b1976335e44fc7b8cc976d2fd69fa1009b876a1ffd971313c8db924e0" className='w-96' alt="" />
                </div>
                <div>
                    <h1 className='text-3xl font-semibold italic mb-1'>Offers</h1>
                    <ul className='text-xl'>
                        <li>✔ Free Checkup</li>
                        <li>✔ No Dentist fees</li>
                        <li>✔ Free Tooth Brush</li>
                        <li>✔ <span className='text-rose-500'>30%</span> offer on any medicines</li>
                    </ul>
                    <small className='mt-2 text-rose-500 italic font-bold'>Note : this campaign is only for one day (novembar 9,2022)</small>
                </div>
            </div>
        </div>
    );
};

export default Campaign;