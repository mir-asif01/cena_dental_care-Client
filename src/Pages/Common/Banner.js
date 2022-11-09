import React from 'react';

const Banner = () => {
    return (
        <div className='w-full p-2 md:w-3/4 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <img src="https://img.freepik.com/free-vector/female-dentist-doing-dental-work-customers-medical-clinic_1150-50295.jpg?size=626&ext=jpg&ga=GA1.2.1723441158.1667733428&semt=sph" className='w-72 h-72' alt="" />
                    <h1 className='text-2xl font-bold'>Modern Technologies</h1>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src="https://img.freepik.com/free-vector/patient-sitting-medical-chair-during-visit-treatment-isolated-flat-vector-illustration-cartoon-dentist-working-diagnostic-cabinet-stomatology-dental-clinic-concept_74855-13192.jpg?size=626&ext=jpg&ga=GA1.2.1723441158.1667733428&semt=sph" className='w-72 h-72' alt="" />
                    <h1 className='text-2xl font-bold'>John is an Experienced Dentist.</h1>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src="https://img.freepik.com/free-vector/flat-dental-care-concept-illustration_23-2148982240.jpg?size=338&ext=jpg&ga=GA1.2.1723441158.1667733428&semt=sph" className='w-72 h-72' alt="" />
                    <h1 className='text-2xl font-bold'>Speacial Care For Childrens.</h1>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src="https://img.freepik.com/free-vector/flat-dental-care-concept-illustration_23-2148982241.jpg?size=338&ext=jpg&ga=GA1.2.1723441158.1667733428&semt=sph" className='w-72 h-72' alt="" />
                    <h1 className='text-2xl font-bold'>Affordable costings.</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;