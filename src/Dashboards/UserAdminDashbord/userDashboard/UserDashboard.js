import React, { useEffect, useState } from 'react';
import reload from '../../../images/reload.gif'
import useAuth from '../../../hooks/useAuth';
import DashbordBar from '../../../Component/DashbordBar/DashbordBar';
const UserDashboard = () => {
    const {user} = useAuth()
    const [events,setEvents]=useState([])

    useEffect(()=>{
         fetch('http://localhost:4000/show-events-by-mail',{
             method:'GET',
             headers:{  
                 'Content-Type':'application/json',
                 email:user?.email,
             }
         })
         .then(res=>res.json())
         .then(result=>{
             setEvents(result)
         })
     },[])

     const handleDelete = id =>{
        const procced =  window.confirm("Are you sure you want to delete this product")
        if (procced) {
         fetch(`http://localhost:4000/events/${id}`,{
             method:"delete"
         })
         .then(res => res.json())
         .then(data=> {
             if (data.deletedCount > 0) {
                  alert('voluntiar data has been deleted')
                  const reamingProduct = events.filter(vEvnt => vEvnt._id !== id)
                  setEvents(reamingProduct)
             }
         })
        }
     }

    return (
        <div>
               <DashbordBar/>
             {
                events.length<1 && <img src={reload} className='w-44 m-auto mt-5' alt="" srcset="" /> 
             }
              <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3">
              {
                events.map(evnt => {
                    const {organicName,img,date} = evnt
                    return <div key={evnt._id} className='lg:w-4/5 lg:mx-20 mx-6 bg-gray-100'>
                                <img  src={img} className='lg:w-1/2 w-2/5 p-2 float-left mr-8' alt="" />
                                <p className='lg:text-xl lg:mt-7 text-base font-medium mb-2'>{organicName}</p>
                                <p>{date}</p>
                                <button onClick={()=>handleDelete(evnt._id)} className='bg-red-500 py-1 px-2 rounded-sm text-white lg:mt-10'>cancel</button>
                              
            
                          </div> 
                })
            }
              </div>
        </div>
    );
};

export default UserDashboard;