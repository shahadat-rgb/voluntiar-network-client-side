import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'
const Header = () => {
    return (
        <div className='vulantiar-banner sm:w-full'>
            <Navbar/>
            <div className="text-center lg:mt-12 mt-6">
            <h1 className='lg:text-4xl text-lg font-bold '>I GROW BY HELPING PEOPLE IN NEED</h1>
             <input className='px-4 py-2  lg:w-80 mt-3' type="search" name="search" id="" /><button className='bg-blue-600 text-white px-4 py-2'>Search</button>
            </div>
        </div>
    );
};

export default Header;