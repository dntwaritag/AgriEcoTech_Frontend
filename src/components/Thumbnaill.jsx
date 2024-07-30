import React from "react";
import thumb1 from "/images/thumb1.webp";
function Thumbnail() {
    return (
        <div className="pharmacy-thumb-wrapper">
                <img src={thumb1} alt="" />
            
            <div className="pharmacy-thumb1">
                <h1>Smart way of Farm with AgriEcoTech </h1>
                <p>Build your future with us</p>
                <button className="start-phrmacy-btn">Get started</button>
            </div>
        </div>
    );
}

export default Thumbnail;
