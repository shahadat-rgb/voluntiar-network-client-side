import React from 'react';
import {Link} from "react-router-dom"
const Error = () => {
    return (
        <div className='m-auto text-center border border-teal-600 lg:w-52 p-4 mt-12'>
            <h1 className='text-red-600 font-bold text-lg'>soory module not found <br /> 404 </h1>
             <Link to='/' > <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 mt-2 rounded">home</button> </Link>
        </div>
    );
};

export default Error;