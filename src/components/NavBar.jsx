import React, { useEffect, useState } from "react";
import logo from "/images/logo3.jpg";
import { Link } from "react-router-dom";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
    
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 768) {
          setIsModalOpen(false);
        }
      };
  
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return (
        <div className="home-nav">
              {!isModalOpen && (
        <div className="menu-icon" onClick={toggleModal}>
          <FaBars />
        </div>
      )}
 {isModalOpen && (
        <div className="model-open-container">
          <div className={`modal-content ${isModalOpen ? "slide-in" : ""}`}>
            <FaTimes className="close-icon" onClick={toggleModal} />
            <ul className="menu-modal">
              <li>
                <Link to="/" onClick={toggleModal}>
                  {" "}
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleModal}>
                  {" "}
                  About us
                </Link>
              </li>
              <li>
                <Link to="/remedies" onClick={toggleModal}>
                  {" "}
                  Remedies
                </Link>
              </li>
              <li>
                <Link to="/login" onClick={toggleModal}>
                  {" "}
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" onClick={toggleModal}>
                  {" "}
                  Signup
                </Link>
              </li>
             
            </ul>
          </div>
          
        </div>
      )}

            <div className="home-logo">
                <img src={logo} alt="" />
            </div>
            <div className="home-ul">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/remedies">Remedies</Link>
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
