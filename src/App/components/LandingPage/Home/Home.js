import React from 'react'
import Services from '../../Services/Services';
import Banner from '../Banner/Banner'
import Benefits from '../Benefits/Benefits'
import Booking from '../Booking/Booking'
import ServiceHome from '../ServiceHome/ServiceHome'
function Home() {
  return (
    <div>
      
            <Banner></Banner> 
            <ServiceHome></ServiceHome>
            <Services></Services>
            <Booking></Booking> 
            <Benefits></Benefits>
            
    </div>
  )
}

export default Home