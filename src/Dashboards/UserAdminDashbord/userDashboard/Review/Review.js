import React from 'react';
import DashbordBar from '../../../../Component/DashbordBar/DashbordBar';
import useAuth from '../../../../hooks/useAuth';
import Sidebar from '../../../Sidebar/Sidebar';

const Review = () => {
    const {user}  = useAuth()
      return (
        <div className='row lg:w-full'>
            <div className="col-lg-3">
                <Sidebar/>
            </div>
            <div className="col-lg-9">
                <DashbordBar/>
                  <div className="text-center bg-gray-200 lg:w-2/4 w-11/12 m-auto lg:p-5 p-2 rounded-md">
                     <img className='m-auto' src={user.photoURL} alt="" srcset="" />
                      {/* <p>{user.displayName.charAt(0).toUpperCase()}</p> */}

                     <p className='mt-3 text-blue-700 font-semibold text-2xl'>{user.displayName}</p>
                     <p className='text-green-700 font font-semibold lg:text-1xl mb-3'>{user.email}</p>
                  </div>
            </div>
        </div>
    );
};

export default Review;