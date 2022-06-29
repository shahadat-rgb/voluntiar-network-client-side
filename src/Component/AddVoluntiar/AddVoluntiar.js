import React, { useRef, useState } from 'react';
import Navbar from '../FirstHomePage/Navbar/Navbar';

const AddVoluntiar = () => {
    const nameRef = useRef()
    const imgRef = useRef()

    const handleSubmit = e =>{
      const name = nameRef.current.value;
      const img =  imgRef.current.value;
      const allVoluntiarInfo = { name , img}
      fetch('http://localhost:4000/add-voluntiar',{
        method:"post",
        headers:{
            'content-type':"application/json"
        },
        body:JSON.stringify(allVoluntiarInfo)
      })
      .then(res => res.json())
      .then(data =>  {
               if (data.insertedId){
                         alert('data has been added in database')
                         e.target.reset()
               } 
      
      })
      e.preventDefault()
    }
    return (
        <div>
            <Navbar/>
        <div className='lg:w-96 m-auto bg-gray-200 pb-5'>
          <form onSubmit={handleSubmit} >
            <input className='p-2 rounded w-80 mt-5 ml-8'  type="text" name="name" placeholder='name' ref={nameRef} id="" /><br /> <br />
            <input className='p-2 rounded w-80 mt-5 ml-8' type='text' name='image' placeholder='enter img url' ref={imgRef} alt="" /> <br /> <br />
            <input className='ml-32 bg-black text-white py-2 px-4'  type="submit" value="Add Voluntiar" />
          </form>
          </div>
        </div>
    );
};

export default AddVoluntiar;