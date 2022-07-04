import { useEffect, useState } from 'react';
import DashbordBar from '../../../Component/DashbordBar/DashbordBar';
import useAuth from '../../../hooks/useAuth';
import reload from '../../../images/reload.gif';
const UserDashboard = () => {
    const {user} = useAuth()
    const [events,setEvents]=useState([])

    useEffect(()=>{
         fetch('https://dry-scrubland-89748.herokuapp.com/show-events-by-mail',{
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
         fetch(`https://dry-scrubland-89748.herokuapp.com/events/${id}`,{
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
                    const {organicName,img,date,status} = evnt
                    return <div key={evnt._id} className='bg-gray-100 rounded-xl lg:mx-1 mx-2'>
                                <img  src={img} className='lg:w-2/5 w-44 h-32 p-3 float-left' alt="" />
                                <p className='lg:text-xl lg:mt-7 mt-4 text-base font-medium mb-2'>{organicName}</p>
                                <p className='text-blue-700 font-semibold float-left mt-1'>{date}</p>
                                <div className="text-right">
                                    {
                                        status === 'pending' ?
                                        <button className='bg-gray-200 text-red-500 px-4 py-2 rounded-md mr-2 font-semibold'>{status}</button>
                                        :
                                        status ==='Done' ?
                                        <button className='bg-gray-200 text-green-500 px-4 py-2 rounded-md mr-2 font-semibold'>{status}</button>
                                        :
                                        <button className='bg-gray-200 text-blue-500 px-4 py-2 rounded-md mr-2 font-semibold'>{status}</button>

                                    } 

                                
                                </div>
                                <button onClick={()=>handleDelete(evnt._id)} className='bg-red-400 px-3 py-1 rounded-sm text-white'>cancel</button>                              
                          </div> 
                })
            }
              </div>
        </div>
    );
};

export default UserDashboard;