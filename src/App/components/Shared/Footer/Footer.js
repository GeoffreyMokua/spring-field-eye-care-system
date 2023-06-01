import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-all w-100 p-3">
            <div className="footer row ">
            <div className="col-lg-3 col-xs-12 my-2">
                <h2 style={{fontFamily: 'cursive'}}>SpringField Medical Centre</h2>
                <p>A 2 year journey on medical care!</p>
                
            </div> 
            <div className="col-lg-3 col-xs-12 my-4 ">
                <p>If you feel dusty on your eyes</p>
                <Link to="/appointment"><Button variant="success">Book Appointment</Button></Link>
            </div>
            <div className="col-lg-3 col-xs-12 my-2">
                <h3>Quick Visit</h3>
                <p><Link className="url"  to="/">Home   </Link></p>
                <p><Link className="url"  to="/about">About </Link></p>
                

            </div> 
            <div className="col-lg-3 col-xs-12 my-2">
                <h3>Contact Us</h3>
                <p>info@whitespring.co.ke</p>
                <p>+254721243247 / +254114247906</p>
            </div>
        </div>
        <div>
            <footer>© Copyright 2023 by SFMC</footer>
        </div>
        </div>
  )
}

export default Footer