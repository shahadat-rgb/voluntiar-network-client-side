import React from 'react';
import useAuth from '../../hooks/useAuth';

const DashbordBar = () => {
    const {user} = useAuth()
    return (
        <div className="bg-blue-500 w-full  p-3 mb-10 mt-2 rounded-lg"> 
             <p className='text-white font-semibold lg:text-2xl text-sm float-left '>Dahboard</p>
             { user.email &&  <p className='text-white lg:text-2xl text-sm text-right'> welcome { user.displayName} </p> }
        </div>
    );
};

export default DashbordBar;