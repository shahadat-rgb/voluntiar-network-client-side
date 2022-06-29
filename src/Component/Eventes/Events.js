import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Navbar from '../FirstHomePage/Navbar/Navbar';

const Events = () => {
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
    return (
        <div>
            <Navbar></Navbar>
            {
                events.map(evnt => {
                    const {organicName,img,date} = evnt
                    return <div key={evnt._id} className="">
                              <img src={img} className='w-52' alt="" />
                               <p>{organicName}</p>
                                <p>{date}</p>
                          </div>
                })
            }
        </div>
    );
};

export default Events;