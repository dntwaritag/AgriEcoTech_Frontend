import React from "react";
import thumb1 from "/images/agri18.jpg";
import { Link } from "react-router-dom";
function Thumbnail() {
    return (
        <div className="pharmacy-thumb-wrapper">
                <img src={thumb1} alt="" />
                
            <div className="pharmacy-thumb1">
                <h1>Smart way of Farm with AgriEcoTech </h1>
                <p>Build your future with us</p>
                <Link to='/signup' className="start-phrmacy-btn">Get started</Link>
            </div>
        </div>
    );
}

export default Thumbnail;
