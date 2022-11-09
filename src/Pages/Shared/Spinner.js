import React from 'react';

const Spinner = () => {
    return (
        <div className='text-center'>
            <div className="radial-progress animate-spin" style={{"--value":80}}></div>
            <h1 className='text-2xl'>Loading.....</h1>
        </div>
    );
};

export default Spinner;