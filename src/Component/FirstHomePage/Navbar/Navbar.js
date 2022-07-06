import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/Group 1329.png";
import "./Navbar.css";
const Navbar = () => {
  const {user} = useAuth( )
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
            <ul className="lg:flex text-base pt-3.5 lg:py-2">
              <li className=" pt-2"><NavLink className="mr-5 hover:text-blue-900 font-medium text-lg " to='/' >Home</NavLink></li>
              <li className=" pt-2"> <NavLink className="mr-5 hover:text-blue-900 font-medium text-lg" to='/donation'>Donation</NavLink></li>
              <li className=" pt-2"> <NavLink className="mr-5 hover:text-blue-900 font-medium text-lg" to='/blog'>Blog</NavLink></li>
              <li className=" pt-2"> <NavLink className="mr-5 hover:text-blue-900 font-medium text-lg" to='/contack'>conack</NavLink></li>
              <li className=" pt-2"> <NavLink className="mr-5 hover:text-blue-900 font-medium text-lg" to='/Review'>Review</NavLink></li>
               {
                user.email ? <li className=""><NavLink className="mr-5 font-medium text-lg" to='/dashboard/allevent-list'> <button className="inline-flex items-center bg-blue-700 text-white  py-3 px-3 focus:outline-none hover:bg-blue-700  rounded text-base">Dashbord
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                   <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
           </button></NavLink></li> 
                :
               <li>
                 <NavLink to='/login'>
                <button className="inline-flex items-center bg-black text-white  py-3 px-7 focus:outline-none hover:bg-blue-700 hover:text-white rounded text-base">Login
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                       <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
               </button>
                 </NavLink>
               </li>
              }              
              <li>
               
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
