import React from 'react';

const Blog = () => {
    document.title = "My Blog"
    return (
        <div className='p-2 md:p-4'>
            <h1 className='text-xl font-semibold'>Welcome to My Blog</h1>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='p-2 m-3'>
                    <h1 className='text-xl font-bold italic'>Difference between SQL and NoSQL</h1>
                    <p className='border-l-4 border-cyan-600 pl-3'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                </div>
                <div className='p-2 m-3'>
                    <h1 className='text-xl font-bold italic'>What is JWT, and how does it work?</h1>
                    <p className='border-l-4 border-cyan-600 pl-3'>What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
                </div>
                <div className='p-2 m-3'>
                    <h1 className='text-xl font-bold italic'>What is the difference between javascript and NodeJS?</h1>
                    <p className='border-l-4 border-cyan-600 pl-3'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                </div>
                <div className='p-2 m-3'>
                    <h1 className='text-xl font-bold italic'>How does NodeJS handle multiple requests at the same time?</h1>
                    <p className='border-l-4 border-cyan-600 pl-3'>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;