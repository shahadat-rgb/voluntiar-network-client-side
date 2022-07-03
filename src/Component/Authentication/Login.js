import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { BsGoogle } from "react-icons/bs";
import useAuth from '../../hooks/useAuth';
import './Login.css'

import logo from '../../images/Group 1329.png'
const Login= () => {
  // state declare for input information
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')

  const location = useLocation()
  const navigate = useNavigate()
  let { from } = location.state || { from: { pathname: "/" } }

    const {handleGoogleSignIn,auth,setIsLoading} = useAuth()


    const handleGoogleLogin = () =>{
      setIsLoading( true)
         handleGoogleSignIn()
         .then(()=>{
           navigate(from) 
           })
        .finally(() =>setIsLoading(false))
    }
 
    // sign in user
    const handleSubmit = () => {
      if ( !email && !password) {
           setError( 'please fill up the full input box')
      } else if (!email) {
          setError("Please write the email")
      }else if (!password) {
          setError("Please write the password")
      }else if (password.length < 6) {
          setError("password minimum type the atlist 6 character")
      }else{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setError("");
          navigate(from);
        })
        .finally(()=> setIsLoading(false))
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            setError("Wrong password!");
          } else if (error.code === "auth/user-not-found") {
            setError("Wrong email!");
          } 
        });
      }
  }
 
  const handlePassReset = () =>{
    sendPasswordResetEmail(auth,email)
    .then((result)=>{
       alert('plese checking the email,then clik the show link and reset your new password')
    })
  }
    return (
      <div className='text-center mt-3'>
     <Link to='/'> <img src={logo} className='w-52 m-auto mb-3' alt="" srcset="" /></Link>
             <div className='signUp-design'>
                 <h3 className='text-white py-2 text-2xl font-semibold'>Sign In form</h3>
                 <input type="email" className='input-type' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email' name="email" id="" /> <br />
                 <input type="password"  className='input-type' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' name="password" id="" /> <br />
                 <p className='text-warning'><b>{error}</b></p>
                 <button className='bg-blue-700 w-full p-2 text-white rounded-md' onClick={handleSubmit}>Login</button>
                 <BsGoogle className='text-3xl text-orange-400 text-center m-auto mt-2' onClick={handleGoogleLogin}/>
                  <h6 style={{color:"white",cursor:"pointer",marginTop:"10px"}} onClick={handlePassReset}>Forgotten password</h6>
                 <p className='text-white text-lg font-semibold mt-4 mb-4' >you don't have an account ?<Link to='/signUp' className='signin-link'>Sign Up</Link></p>
        
             </div>
            
            
        </div>
    );
};

export default Login;













// import React from 'react';
// import logo from '../../images/Group 1329.png'
// import {BsGoogle} from "react-icons/bs"
// import { Link } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
// import './Login.css'
// const Login = () => {
//   const {handleGoogleSignIn} = useAuth()

  
//   return (
//     <div>
//  <Link to='/'>
//     <img  src={logo} className='w-52 mt-5 pb-6 m-auto' alt="" srcset="" />    
//  </Link>
    
//      <div className='bg-gray-400 h-80 w-11/12  lg:w-3/6 m-auto'>
//       <div className="pt-32 lg:w-1/2 m-auto w-11/12">
//       <p  onClick={handleGoogleSignIn} className='cursor-pointer text-2xl font-semibold bg-gray-200 p-2 w-full rounded-3xl'>  <BsGoogle className='text-orange-700 text-2xl float-left mt-1 lg:ml-20 ml-8'/>google sign in </p>

//       </div>
//      </div>
        
//     </div>
//   );
// };

// export default Login;

