import React from 'react';
import {Link} from "react-router-dom"
const Error = () => {
    return (
        <div className='mt-44 text-center bg-gray-200 border mx-auto border-teal-600 lg:w-3/12 p-4'>
            <h1 className='text-red-600 font-bold text-lg'>soory module not found <br /> 404 </h1>
             <Link to='/' > <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 mt-2 rounded">home</button> </Link>
        </div>
    );
};

export default Error;