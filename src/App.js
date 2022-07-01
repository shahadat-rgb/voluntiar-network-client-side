import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddVoluntiar from "./Component/AddVoluntiar/AddVoluntiar";
import Login from "./Component/Authentication/Login";
import SignUp from "./Component/Authentication/SignUp";
import Error from "./Component/Error/Error";
import Events from "./Component/Eventes/Events";
import Home from "./Component/FirstHomePage/Home/Home";
import MakeAdmin from "./Component/MakeAdmin/MakeAdmin";
import PrivateOutlet from "./Component/PrivateOutlet/PrivateOutlet";
import RegisterForm from "./Component/Register/RegisterForm";
import AuthProvider from "./Context/AuthProvider";
import UserAdminDashboard from "./Dashboards/UserAdminDashbord/UserAdminDashboard";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voluntier" element={<AddVoluntiar />} />
          <Route path="/login" element={<Login />} />
          <Route  path='/signUp' element={<SignUp/>}/>
          <Route  path="/add-admin" element={<MakeAdmin/>}/>
          <Route path="/dashboard" element={<UserAdminDashboard/>} />
          <Route path="*" element={<Error />} />
          <Route  path ='/*' element={<PrivateOutlet/>} >
                <Route path="events" element={<Events />} />
                <Route path="events/:id" element={<RegisterForm />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
