import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddVoluntiar from "./Component/AddVoluntiar/AddVoluntiar";
import Login from "./Component/Authentication/Login";
import SignUp from "./Component/Authentication/SignUp";
import Error from "./Component/Error/Error";
import Home from "./Component/FirstHomePage/Home/Home";
import MakeAdmin from "./Component/MakeAdmin/MakeAdmin";
import PrivateOutlet from "./Component/PrivateOutlet/PrivateOutlet";
import RegisterForm from "./Component/Register/RegisterForm";
import AuthProvider from "./Context/AuthProvider";
import UserAdminDashboard from "./Dashboards/UserAdminDashbord/UserAdminDashboard";
import Profile from "./Dashboards/UserAdminDashbord/userDashboard/Profile/Profile";

// import useAuth from "./hooks/useAuth";

function App() {
  // const {admin} = useAuth 
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/add-event" element={<AddVoluntiar />} />
          <Route  path="/dashboard/make-admin" element={<MakeAdmin/>}/>
          <Route path="/dashboard/allevent-list" element={<UserAdminDashboard/>} />
          <Route path="/dashboard/profile" element={<Profile/>} />
          <Route path="/login" element={<Login />} />
          <Route  path='/signUp' element={<SignUp/>}/>
          <Route path="*" element={<Error />} />
          <Route  path ='/*' element={<PrivateOutlet/>} >
                 <Route path="dashboard/register/:id" element={<RegisterForm />} />           
        </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
