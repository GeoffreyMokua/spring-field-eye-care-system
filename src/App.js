import React from "react";
import { Routes, Route } from "react-router-dom";
import About from './App/components/About/About';
import Appointment from "./App/components/Appointment/Appointment";
// import Successfull from "./App/components/Appointment/Successfull";
import Doctor from "./App/components/Doctor/Doctor";
import Doctors from "./App/components/Doctors/Doctors";
import Home from "./App/components/LandingPage/Home/Home";
import Login from "./App/components/Login/Login";
import Register from "./App/components/Register/Register";
import Service from "./App/components/Service/Service";
import ServiceDetails from "./App/components/ServiceDetails/ServiceDetails";
import Services from "./App/components/Services/Services";
import Footer from "./App/components/Shared/Footer/Footer";
import Header from "./App/components/Shared/Header/Header";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/register" element={<Register />} />

        <Route path="/service" element={<Service />} />

        <Route path="service">
              <Route index element={<Services />} />
              <Route path=":name" element={<ServiceDetails />} />
            </Route>
        
        <Route path="/service_details" element={<ServiceDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="services">
              <Route index element={<Services />} />
              <Route path=":name" element={<ServiceDetails />} />
            </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
