import { useRef } from 'react';
import Sidebar from '../../Dashboards/Sidebar/Sidebar';
import DashbordBar from '../DashbordBar/DashbordBar';

const AddVoluntiar = () => {
    const nameRef = useRef()
    const imgRef = useRef()

    const handleSubmit = e =>{
      const name = nameRef.current.value;
      const img =  imgRef.current.value;
      const allVoluntiarInfo = { name , img}
      fetch('https://dry-scrubland-89748.herokuapp.com/add-voluntiar',{
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
      <div className="row lg:w-full">
        <div className="col-lg-3">
           <Sidebar/>
        </div>
        <div className="col-lg-9">
           <DashbordBar/>
        <div className='lg:w-2/5 w-11/12 m-auto p-3 bg-gray-200'>
          <form onSubmit={handleSubmit} >
             <p className='text-2xl text-center mb-3 font-semibold'>Add Event</p>
            <input className='p-2 rounded w-full'  type="text" name="name" placeholder='name' ref={nameRef} id="" /><br /> <br />
            <input className='p-2 rounded w-full ' type='text' name='image' placeholder='enter img url' ref={imgRef} alt="" /> <br /> <br />
            <input className='w-full rounded-md p-2 bg-blue-700 text-white'  type="submit" value="Add Voluntiar" />
          </form>
          </div>
        </div>
        </div>
    );
};

export default AddVoluntiar;