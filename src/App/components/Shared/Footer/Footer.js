import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-all w-100 p-3">
            <div className="footer row ">
            <div className="col-lg-3 col-xs-12 my-2">
                <h2 style={{fontFamily: 'cursive'}}>Spring Field Eye Care</h2>
                <p>A 2 year journey on eye care!</p>
                
            </div> 
            <div className="col-lg-3 col-xs-12 my-4 ">
                <p>If you feel dusty on your eyes</p>
                <Link to="/booking"><Button variant="success">Book Appointment</Button></Link>
            </div>
            <div className="col-lg-3 col-xs-12 my-2">
                <h3>Quick Visit</h3>
                <p><Link className="url"  to="/home">Home   </Link></p>
                <p><Link className="url"  to="/about">About </Link></p>
                

            </div> 
            <div className="col-lg-3 col-xs-12 my-2">
                <h3>Contact Us</h3>
                <p>admin@springfield.com</p>
                <p>+254721243247</p>
            </div>
        </div>
        <div>
            <footer>© Copyright 2022 by Spring Field Eye Care</footer>
        </div>
        </div>
  )
}

export default Footer