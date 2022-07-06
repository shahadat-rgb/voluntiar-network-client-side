import DashbordBar from '../../../../Component/DashbordBar/DashbordBar';
import useAuth from '../../../../hooks/useAuth';
import Sidebar from '../../../Sidebar/Sidebar';
import avator from '../../../../images/avatar.png'
const Profile = () => {
    const {user}  = useAuth()
      return (
        <div className='row lg:w-full'>
            <div className="col-lg-3">
                <Sidebar/>
            </div>
            <div className="col-lg-9">
                <DashbordBar/>
                  <div className="text-center bg-gray-200 lg:w-2/4 w-11/12 m-auto lg:p-5 p-2 rounded-md">
                      {
                        user.photoURL ? <img className='m-auto' src={user.photoURL} alt="" srcset="" />
                        :
                        <img className='m-auto w-40' src={avator} alt="" srcset="" />
                       
                      }
                     
                     <p className=' text-blue-700 font-semibold text-2xl'>{user.displayName}</p>
                     <p className='text-green-700 font font-semibold lg:text-1xl mb-3'>{user.email}</p>
                  </div>
            </div>
        </div>
    );
};

export default Profile;