import React from 'react';
import useAuth from '../../hooks/useAuth';

import Sidebar from '../Sidebar/Sidebar';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import UserDashboard from './userDashboard/UserDashboard';

const UserAdminDashboard = () => {
 const {admin} =   useAuth()
    return (
        <div className='row lg:w-full'>
            <div className="col-lg-3">
                  <Sidebar/>
            </div>
             <div className="col-lg-9">
               {
                 admin ? <AdminDashboard/> :  <UserDashboard/>
               }   
            
             </div>
              
        </div>
    );
};

export default UserAdminDashboard;