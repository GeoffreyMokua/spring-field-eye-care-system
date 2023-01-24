import React, { Component, createContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Register from "../register"
export const PatientContext = createContext();
export const PatientContextProvider = (props) => {
  const navigate = useNavigate();
  const [done, setDone] = useState(false);
  const [onLogin, setLogin] = useState({});
  const [patient, setPatient] = useState({});
  const [modal, setModal] = useState(false);
  // function handleNotification() {
  //   setModal(true);
  //   handleClose();
  // }
     function handleClose() {
    setTimeout(() => {
      setModal(false);
      navigate("/login");
    }, 3000);
     }
    
    function onSubmit(data) {
    console.log(data);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify(data),
        }).then((res) => {
      if (res.ok) {
        res.json().then((patient) => {
          localStorage.clear();
          localStorage.setItem("patientToken", patient.jwt);
          localStorage.setItem("patient", `${patient.patient.id}`)
          localStorage.setItem("patient_data", JSON.stringify(patient));
          setLogin((onLogin) => patient);
        //  handleNotification()
          console.log(patient)
        });
      } else {
        res.json().then((error) => alert(error.errors));
      }
    });
    }
    //  This function is called in the Register Component
    function onSubmition(data) {
    fetch("/patients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
         
          setPatient(data);
          localStorage.clear();
          localStorage.setItem("patientToken", data[1].token);
          localStorage.setItem("patient", data[0].id);
          localStorage.setItem("patient_data", JSON.stringify(data));
          // handleNotification();
        });
      } else {
        res.json().then((error) => alert(error.errors));
      }
    });
    }
    
  const token = localStorage.getItem("patientToken");
  const patient_id = localStorage.getItem("patient");
  const contextValue = { onSubmit, onSubmition, patient_id, modal, token,done,setDone };
  return (
    <PatientContext.Provider value={contextValue}>
      {props.children}
    </PatientContext.Provider>
  );
};