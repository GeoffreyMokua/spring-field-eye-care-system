import React from 'react'
import { useNavigate  } from 'react-router';
import './Appointment.css'

function Appointment() {
  const navigate = useNavigate ();

     const success = () =>{
         navigate.push('/appointment/success')
     }
  return (
    <div className="form">
    <h2 className="text-success fw-bold fs-1 py-3">Book Your Appointment Now</h2>
    <form className="my-5 " onSubmit={success}>
        
        <div className="mb-3">
             <label className="mx-2 text-white fw-bold" htmlFor="name">Name</label>
             <input className="mx-2 w-25" type="text" name="name" placeholder="First Name" required />
             <input className="mx-2 w-25" type="text" name="name" id="name "placeholder="Last Name" required />
             
        </div>  
        
        <div className="mb-3">
            <label className="mx-2 text-white fw-bold" htmlFor="email">Email</label>
            <input required className="w-25" type="email" name="" id="" placeholder="email" />
        </div>
        <div className="mb-3">
            <label htmlFor="age" className="mx-2 text-white fw-bold">Age</label>
            <input type="text" name="" id="" placeholder="age" />
        </div>
        
        <div className="mb-3">
        <label className="mx-2  text-white fw-bold" htmlFor="gender">Gender</label>
        <input type="radio" id="male" name="gender" value="Male"/>
        <label className="mx-2 text-white fw-bold" for="male ">Male</label>
        <input  type="radio" id="female" name="gender" value="Female"/>
        <label  className="fw-bold text-white" for="female">Female</label> 
        </div>
        <div className="mb-3">
            <label className="mx-2 text-white fw-bold" htmlFor="date">Choose Date</label>
            <input required type="date" name="" id="" />
        </div> 
        <div>
            <label  className="mx-2 text-white fw-bold" htmlFor="time">Pick Time</label>
            <input required type="time" name="" id="" /> <br /> <br />
        </div> 
         <input style={{marginLeft:'6%',backgroundColor: 'green', border:'1px solid red',borderRadius:'5px'}} type="submit" value="Book Now" />
    </form>
 </div>
  )
}

export default Appointment