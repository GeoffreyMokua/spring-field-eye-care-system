import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const token = localStorage.getItem("patientToken");
  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  // const doctor_id = localStorage.getItem("doctor");
    useEffect(()=>{
        fetch("/doctors", config)
        .then(res=> res.json())
        .then(data => setDoctors(data))
    }, [])
  console.log(doctors);
  
  return (
    <div className="m-4" style={{width:'90%'}}>
            <h2 className=" my-3 text-success fw-bold fs-1">Lets Get Introduce With Our Doctors </h2>
            <Row xs={1} md={2} >
                {
                  doctors ? doctors.map(doctor =><Doctor doctor={doctor}/>): "loading"
                }
            </Row>
        </div>
  )
}

export default Doctors