import React from 'react';
import { Link} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from "../../images/Group 1329.png"
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'
import LocalMallOutlined from '@mui/icons-material/LocalMallOutlined'
import SmsOutlined from '@mui/icons-material/SmsOutlined'
import AddOutlined from '@mui/icons-material/AddOutlined'
import PersonAddOutlined from '@mui/icons-material/PersonAddOutlined'
import ExitToApp from '@mui/icons-material/ExitToApp'
const Sidebar = () => {
    const {logOut,admin} = useAuth()
    const userService=['Allevent list', 'Profile']
    const adminService=['Allevent list', 'Add Event', 'Make Admin']
    return (
        <div className='w-full bg-gray-200 lg:h-100 h-15 lg:p-0 pb-3'>
            <div className='pt-4 pb-5'>
                <Link to='/'>
                    <img className='w-44' src={logo} alt=""/>
                </Link>
                 
              </div>
            <div>
        {
                 admin && adminService.map((item,index)=>{
                    return(
                    <Link style={{color:`${window.location.pathname ==='/dashboard/'+item.toLowerCase().split(' ').join('-') ?'blue':'black'}`}}
                        to={`/dashboard/${item.toLowerCase().split(' ').join('-')}`}>
                        <div className='flex ml-3'>
                        {index===0 && <ShoppingCartOutlined></ShoppingCartOutlined>}
                        {index===1 && <LocalMallOutlined></LocalMallOutlined>}
                        {index===2 && <SmsOutlined></SmsOutlined>}
                        <p className='ml-2 -mt-1 font-semibold text-lg mb-4' >{item}</p>

                    </div>
                    </Link>
                    
                    )
                })
        
            }
{  
    
    !admin && userService.map((item,index)=>{
        return(
                <Link style={{color:`${window.location.pathname==='/dashboard/'+item.toLowerCase().split(' ').join('-')?'blue':'black'}`}}
                    to={`/dashboard/${item.toLowerCase().split(' ').join('-')}` }>
                    <div className='d-flex ml-3'>
                    {index===0 && <LocalMallOutlined></LocalMallOutlined>}
                    {index===1 && <AddOutlined></AddOutlined>}
                    {index===2 && <PersonAddOutlined></PersonAddOutlined>}
                    <p className='ml-2 -mt-1 font-semibold text-lg mb-4'>{item}</p>
                </div>
                </Link>
                )
            })
        }

            <Link to='/'>
                   <div onClick={logOut} className='d-flex ml-3 cursor-pointer'>
                  <ExitToApp></ExitToApp>
                  <p className='ml-2 -mt-1 font-semibold text-lg'>Logout</p>
              </div>
         </Link>
               

            </div>
        </div>
    );
};

export default Sidebar;