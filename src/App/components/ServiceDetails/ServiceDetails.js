import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function ServiceDetails() {
   const {name} = useParams();
    const [service, setService] = useState([]);
    useEffect(()=>{
        fetch(`/services/${name}`)
        .then(res=> res.json())
        .then(data => setService(data))
    }, [])


   
  console.log(service);
  console.log(name)
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
              <h1 className="my-3  text-success fs-2 fw-bold">Detail Info on {service.name} </h1>
              <img className="w-25 h-25 mb-4" src={service.img} alt="" />
              <h4 className="text-danger">Payment: {service.cost} </h4>
              <p className="w-50">{service.description} </p>
             <Link to="/appointment"><Button variant="info my-2" > Book Appointment</Button></Link>
        </div>
      
      
  )
}

export default ServiceDetails