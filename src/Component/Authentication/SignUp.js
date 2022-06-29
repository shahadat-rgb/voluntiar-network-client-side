import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Link,useNavigate,useLocation} from 'react-router-dom';
import { BsGoogle } from "react-icons/bs";
import useAuth from '../../hooks/useAuth';

import logo from '../../images/Group 1329.png'

const SignUp = () => {
  // state declare for input information
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPass,setConfirmPass] = useState('')
  const [error,setError] = useState('')

  // form useFirebas 
   const {handleGoogleSignIn,auth,setIsLoading} = useAuth()

   const location = useLocation()
   const navigate = useNavigate()
   let { from } = location.state || { from: { pathname: "/" } }

  //  sign in with google
     const handleGoogleSignUp = () =>{
        setIsLoading(true)
         handleGoogleSignIn()
         .then(()=>{
           navigate(from)
           })
        .finally(()=> setIsLoading(false))
     }

    //  create signUp user
    const handleSubmit = () => {
      if (!name && !email && !password && !confirmPass) {
           setError( 'please fill up the full input box')
      } else if (!name) {
          setError("Please write the name")
      }else if (!email) {
          setError("Please write the email")
      }else if (!password) {
          setError("Please write the password")
      }else if (password.length < 6) {
          setError("password minimum type the atlist 6 character")
      } else if (!confirmPass) {
          setError("Please write the confirm password")
      }else if (password !== confirmPass) {
          setError("password don't match ")
      }else{
         setIsLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
       .then(()=>{
          updateProfile(auth.currentUser, {
            displayName: name,
          }).then(() => {
            setError('')
            navigate(from)
          })
          .finally(()=> setIsLoading(false))
        
       }).catch((error)=>{
          if (error.code === 'auth/email-already-in-use') {
              setError("email is already in use")
          }
       })
      }
  }
   

    return (
        <div className='text-center mt-3'>
          <Link to='/'>   <img src={logo} className='w-52 m-auto mb-3' alt="" srcset="" /></Link>
             <div className='signUp-design'>
                 <h3 className='text-white py-2'>Sign Up form</h3>
                 <input type="text" onChange={(e)=>setName(e.target.value)} className='input-type' placeholder='Enter your name' name="name" id="" /> <br /> 
                 <input type="email" onChange={(e)=>setEmail(e.target.value)} className='input-type' placeholder='Enter your email' name="email" id="" /> <br />
                 <input type="password" onChange={(e)=>setPassword(e.target.value)}  className='input-type' placeholder='Enter your password' name="password" id="" /> <br />
                 <input type="password" onChange={(e)=>  setConfirmPass(e.target.value)}  className='input-type' placeholder='Enter your confirm password' name="password" id="" /> <br />
                 <p className='text-warning'><b>{error}</b></p>
                 <button onClick={handleSubmit} className='bg-blue-700 w-full p-2 text-white rounded-md'>Sign Up</button>
                 <BsGoogle className='text-3xl text-orange-400 text-center m-auto mt-2' onClick={handleGoogleSignUp}/>
                 <p className='text-white text-lg font-semibold mt-4 mb-4'>already have an account ?<Link to='/login' className='signin-link'>Sign In</Link></p>
              </div>
            
            
        </div>
    );
};

export default SignUp;