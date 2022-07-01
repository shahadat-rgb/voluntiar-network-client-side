import React, { useState } from 'react';
import Sidebar from '../../Dashboards/Sidebar/Sidebar';
import DashbordBar from '../DashbordBar/DashbordBar';


const MakeAdmin = () => {
    const [email,setEmail] = useState('')
    
    const handleBlur = e =>{
         setEmail(e.target.value)
    }
    const handleAdminSubmit = e =>{
        const user =  {email}
        fetch('http://localhost:4000/users/admin',{
            method:"put",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data => {
              if (data.modifiedCount) {
                 alert('admin created successfully')
              }
        })
        e.preventDefault()
    }

    return (
         <div className="row w-full">
            <div className="col-lg-3">
               <Sidebar/>
            </div>
            <div className="col-lg-9">
                <DashbordBar/>
            <div className=''>
               <form onSubmit={handleAdminSubmit} className=' bg-gray-200 lg:w-2/5 w-11/12 m-auto p-3'>
                    <h2 className="font-semibold text-2xl text-center mb-4">Make Admin</h2>
                    <input type='email' onBlur={handleBlur} placeholder='write email' className="w-full p-2 rounded-md"  /> <br /> <br />
                    <input className="w-full rounded-md p-2 bg-blue-700 text-white" type="submit" value='make admin'/>
                 </form>
               </div>
            </div>
         </div>
    );
};

export default MakeAdmin;