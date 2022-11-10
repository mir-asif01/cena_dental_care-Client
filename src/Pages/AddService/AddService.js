import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {

    document.title = "Add a new service"

    const navigate = useNavigate()
    const handleAddService=(e)=>{

        e.preventDefault()
        const form = e.target;

        const name = form.name.value
        const description = form.description.value 
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
        fetch('https://cena-dental-care-server.vercel.app/services',{
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(service)
        }).then(res=>res.json())
        .then(()=>{
            toast.success('New Service added')
            form.reset()
            navigate('/')
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
            <h1 className='text-2xl text-center font-semibold underline'>Add a Service</h1>
            <form onSubmit={handleAddService} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Service Name" required name='name' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea type="text" placeholder="add Description in less than 100 letters" required name='description' className="input input-bordered" cols="30" rows="10"></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">
                            Price
                        </span>
                    </label>
                    <input type="number" placeholder="price" required name='price' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">
                            Service Id
                        </span>
                    </label>
                    <input type="number" placeholder="please provide a unique service id" required name='serviceId' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input type="text" placeholder="please provide a image online URL" required name='imgURL' className="input input-bordered" />
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