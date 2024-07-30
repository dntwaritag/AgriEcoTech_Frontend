import React from "react";
import { FaEnvelope, FaFacebook, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from '/images/logo3.jpg'
export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-content">
                     <img src={logo} alt="" /> 
                    <h3>Agroecotech</h3>
                    <p >Manage All with Agroecotech</p>
                    <div className="footer-links">
                        <Link>
                            <FaFacebook />
                        </Link>
                        <Link>
                            <FaX />
                        </Link>
                        <Link>
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>
                <div className="footer-content">
                    <h3>Quick Links</h3>
                    <Link>About</Link>
                    <Link>Remedies</Link>
                    <Link>Login</Link>
                    <Link>Signup</Link>
                </div>
                <div className="footer-content">
                    <h3>services</h3>
                    {/* <p>Farm Operations</p> */}
                    <Link>Soil Health Monitorings</Link>
                    <Link>Water Management</Link>
                    <Link>Crop Deasease Prediction</Link>
                 
                </div>
                <div className="footer-content">
                    <h3>Contact information</h3>
                    <div className="contact-icons">
                        <span>
                            {" "}
                            <FaPhone />
                        </span>{" "}
                        <p>+ (250) 788 896 890</p>
                    </div>
                    <div className="contact-icons">
                        <span>
                            <FaEnvelope />
                        </span>
                        <p>info@denysNtwaritaganzwa.com</p>
                    </div>
                    {/* <div className="contact-icons">  <span><FaLocationDo /></span> 
          <p>Norrsken House Kigali, KN 78 St, Kigali, Rwanda</p></div> */}
                </div>
            </div>
            <footer>
                <p>Copyright © 2024 Pharmacy. All rights reserved.</p>
            </footer>
        </div>
    );
}
