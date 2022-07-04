import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from '../../images/Group 1329.png';

const RegisterForm = () => {
  const {user} = useAuth()
  const navigate = useNavigate()
  const { id } = useParams();
  const [registers, setRegisters] = useState([]);
  const { name, img } = registers;
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const { register, handleSubmit } = useForm();



 const onSubmit = data =>{
     fetch("https://dry-scrubland-89748.herokuapp.com/events",{
      method:'post',
      headers:{
        'content-type':"application/json"
      },
      body:JSON.stringify({...data, status:"pending"})
     })
     .then(res => res.json())
     .then(data => {
             if (data.insertedId) {
                alert("register information has been save in database")
                navigate("/dashboard/allevent-list")
             }
     })
 }

  useEffect(() => {
    fetch(`https://dry-scrubland-89748.herokuapp.com/events/${id}`)
      .then((res) => res.json())
      .then((data) => setRegisters(data));
  }, [id]);
  return (
    <div>
    <Link to='/'> <img className="m-auto w-44 pt-10 pb-10" src={logo} alt="" srcset="" /></Link>
      <form onSubmit={handleSubmit(onSubmit)} className=' bg-gray-200 lg:w-2/5 w-11/12 m-auto p-3'>
        <h2 className="font-semibold text-2xl text-center mb-4">Registration From</h2>
        <input type='text' defaultValue={user.displayName} className="w-full p-2 rounded-md" {...register("name",{required:true})} /> <br /> <br />
        <input type='email' defaultValue={user.email} className="w-full p-2 rounded-md" {...register("email",{required:true} )} /> <br /> <br />
        <input type='text' defaultValue={name} className="w-full p-2 rounded-md" {...register("organicName" ,{required:true})} /> <br /> <br />
        <input type='text' defaultValue={img} className="w-full p-2 rounded-md" {...register("img",{required:true})}/> <br /> <br />
        <input type='date' defaultValue={date} className="w-full p-2 rounded-md" {...register("date",{required:true})}/> <br /> <br />
        {/* <input type="number" {... register("age", { min: 18, max: 99 })} /> <br /> <br /> */}
        <input className="w-full rounded-md p-2 bg-blue-700 text-white" type="submit" value='Register'/>
      </form>
    </div>
  );
};

export default RegisterForm;
