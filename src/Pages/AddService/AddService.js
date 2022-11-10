import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {


    const handleAddService=(e)=>{

        e.preventDefault()
        const form = e.target;

        const name = form.name.value
        const description = form.description.value 
        if(description.length > 100){
            toast('Description Text Length exceeded')
        }
        const price = form.price.value 
        const serviceId = form.serviceId.value
        const imgURL = form.imgURL.value

        const service = {
            serviceId : serviceId,
            name : name ,
            img : imgURL,
            price : price,
            desc : description
        }
        fetch('http://localhost:5000/services',{
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(service)
        }).then(res=>res.json())
        .then(data=>{
            
        })
    }

    return (
        <div className='w-full p-4 md:w-3/4 mx-auto'>
            <ToastContainer
                    position="top-center"
                    autoClose={2500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            <h1 className='text-2xl font-semibold'>Add Service</h1>
            <form onSubmit={handleAddService} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Service Name" name='name' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea type="text" placeholder="Service Description" name='description' className="input input-bordered" cols="30" rows="10"></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">
                            Price
                        </span>
                    </label>
                    <input type="number" placeholder="price" name='price' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">
                            Service Id
                        </span>
                    </label>
                    <input type="number" placeholder="service id" name='serviceId' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input type="text" placeholder="service image URL" name='imgURL' className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Service</button>
                </div>
                <p>Don't have an account?? <Link to='/login' className='text-blue underline'>Login</Link></p>
            </form>
        </div>
    );
};

export default AddService;