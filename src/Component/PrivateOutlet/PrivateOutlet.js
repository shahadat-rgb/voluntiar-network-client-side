import React from "react";
import { Spinner } from "react-bootstrap";
 import { Navigate ,useLocation, Outlet} from "react-router-dom"; 
import useAuth from "../../hooks/useAuth";


const PrivateOutlet= () => {
  const location = useLocation()
  const {user,isLoading} = useAuth()

 if (isLoading) {
  return <Spinner  animation='border' variant='success' />;

 }

  return  user.email  ? <Outlet/>  : <Navigate to='/login' state={{from:location}}/>
}
export default PrivateOutlet;