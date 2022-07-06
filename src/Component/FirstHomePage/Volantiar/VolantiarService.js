import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import reload from "../../../images/reload.gif";
import Navbar from "../Navbar/Navbar";
import "./VolantiarService.css";

const VolantiarService = () => {
  const {admin,events} = useAuth()
   const [searchItem,setSearchItem]   = useState('')

  return (
    <div>   
       <div className='vulantiar-banner sm:w-full'>
        <Navbar/>
            <div className="text-center lg:mt-12 mt-6">
          <h1 className='lg:text-4xl text-lg font-bold'>I GROW BY HELPING PEOPLE IN NEED</h1>
          <input  className='px-4 py-2  lg:w-80 mt-3' type="search"  onChange={(e)=>{setSearchItem(e.target.value)}} /><button className='bg-blue-600 text-white px-4 py-2'>Search</button>
       
      </div>
        </div>
    <div className="grid  lg:grid-cols-4 sm:grid-cols-2  grid-cols-1  mt-6 mx-5 lg:mx-32 gap-6 lg:-mt-44">
      {events.length < 1 && (
        <img className="w-44" src={reload} alt="" srcset="" />
      )}

      { 
 
        events.filter((val) =>
        {
              if (searchItem ==='') {
                     return val;
              }else if(val.name.toLowerCase().includes(searchItem.toLowerCase())){
                     return val;
              }    
        }
     ).map((event) => {
        return (
          <div key={event._id} className='mb-5'>
           {
              admin ?
              <div>
              <img className="w-full" src={event.img} alt="" srcset="" />
              <div>
                <p className="bg-yellow-400 p-3 font-normal">{event.name}</p>
              </div>
            </div>
            :
            <Link to={`dashboard/register/${event._id}`} className='cursor-pointer'>
            <img className="w-full" src={event.img} alt="" srcset="" />
            <div>
              <p className='bg-yellow-400 p-3 font-normal'>{event.name}</p>
            </div>
          </Link>
           }
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default VolantiarService;


