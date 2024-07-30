import React from "react";
import logo from "/images/logo3.jpg";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
function Navbar() {
    return (
        <div className="home-nav">
            <div className="home-logo">
                <img src={logo} alt="" />
            </div>
            <div className="home-ul">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="">About us</Link>
                    </li>
                    <li>
                        <Link to="">Remedies</Link>
                    </li>
                  
                    <li>
                        <Link to="/Login">Login</Link>
                    </li>
                    <li>
                        <Link to="/Signup">Signup</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
