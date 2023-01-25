import React, { useEffect, useState } from 'react'
import Service from '../Service/Service';
import { Row } from 'react-bootstrap';
import './Services.css'

function Services() {
    const [services, setServices] = useState([]);
    const token = localStorage.getItem("patientToken");
    const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
    useEffect(()=>{
        fetch('http://127.0.0.1:8080/services', config)
        .then(res=> res.json())
        .then(data => setServices(data))
    }, [])
    console.log(services);
    console.log(token)
  return (
     <div className="mt-4 mx-5">
            <h2 className="fs-1 text-success fw-bold">Our Eye Cares</h2>
            <Row className="cards" xs={1} md={3}>
               {
          // services.map(service => <Service key={service.id} service={service}></Service>)
        services ? services.map(service =><Service service={service}/>) : "loading"
          //  doctors ? doctors.map(doctor =><Doctor doctor={doctor}/>): "loading"
               }
           </Row>
        </div>
  )
}

export default Services