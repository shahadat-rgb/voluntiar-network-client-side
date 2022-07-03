import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import reload from "../../../images/reload.gif";
import "./VolantiarService.css";

const VolantiarService = () => {
  const [events, setEvents] = useState([]);
  const {admin} = useAuth()
  useEffect(() => {
    fetch("http://localhost:4000/add-voluntiar")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="grid  lg:grid-cols-4 sm:grid-cols-2  grid-cols-1 lg:-mt-44 mt-6 mx-5 lg:mx-32 gap-6">
      {events.length < 1 && (
        <img className="w-44" src={reload} alt="" srcset="" />
      )}

      {events.map((event) => {
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
  );
};

export default VolantiarService;
