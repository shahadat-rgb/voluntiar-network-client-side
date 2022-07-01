import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo  from "../../../images/Group 1329.png"
import useAuth from "../../../hooks/useAuth";
const Navbar = () => {
  const {logOut,user} = useAuth( )
  return (
    <div>
      <header className="lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2">
        <div className="flex-1  flex justify-between items-center">
          <Link to="/">
            <img
              className="w-44"
              src={logo}
              alt=""
            />
          </Link>
        </div>

        <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
          <svg
            className="fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className="hidden lg:flex  lg:w-auto w-full" id="menu">
          <nav>
            <ul className="lg:flex text-base pt-4 lg:py-2">
              <li className=" pt-2"><NavLink className="mr-5 hover:text-blue-900 font-medium text-lg " to='/' >Home</NavLink></li>
              <li className=" pt-2"> <NavLink className="mr-5 hover:text-blue-900 font-medium text-lg" to='/voluntier'>Add Voluntiar</NavLink></li>
              <li className=" pt-2"> <NavLink className="mr-5 hover:text-blue-900 font-medium text-lg" to='/add-admin'>Add admin</NavLink></li>

              {
                user.email ? <li className=" pt-2"><NavLink className="mr-5 hover:text-blue-900 font-medium text-lg" to='/dashboard'>Dashboard</NavLink></li> 
                :
                <NavLink to='/login'>
                <button className="inline-flex items-center bg-black text-white  py-3 px-7 focus:outline-none hover:bg-blue-700 hover:text-white rounded text-base">Login
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                       <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
               </button>
                 </NavLink> 
              }
              <li className=" pt-2"><NavLink className="mr-5 hover:text-blue-900 font-medium text-lg" to='/events'>eventes</NavLink></li>
               <li>
               {
                user.email && <p className="mt-2 mr-1 font-semibold text-lg" >welcome || <span className='text-blue-700 font-semibold text-lg'><b>{user.displayName}</b></span></p>

                }
               </li>
              <li>
               {
                user.email ?
                <NavLink to='/login'>
                <button onClick={logOut} className="inline-flex items-center bg-black text-white  py-3 px-7 focus:outline-none hover:bg-blue-700 hover:text-white rounded text-base">Log out
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                       <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
               </button>
                 </NavLink> :
                   <NavLink to='/login'>
                   <button className="inline-flex items-center bg-black text-white  py-3 px-7 focus:outline-none hover:bg-blue-700 hover:text-white rounded text-base">Login
                       <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                       </svg>
                  </button>
                    </NavLink>
                  
               }
            </li>
            </ul>             
          </nav>
        </div>
      </header>
    </div>

    // 
  );
};
export default Navbar;
