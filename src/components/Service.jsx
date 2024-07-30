import React from "react";
import { FaInstalod, FaRegListAlt } from "react-icons/fa";
import { LuBarChartHorizontalBig } from "react-icons/lu";
function Service() {
  return (
    <div className="service-wrapper">
      <div className="service-container">
        <div className="service-content">
          <div className="service-desc">
            <FaInstalod className="service-icons" />
           
            <h3>Soil Health</h3>
            <p>
            Assess soil quality and provide recommendations
            </p>
          </div>
        </div>
        <div className="service-content">
          <div className="service-desc">
            <FaRegListAlt className="service-icons" />
            <h3>water usage optimisation</h3>
            <p>
            Optimize water usage through IoT sensors and data analytics
            </p>
          </div>
        </div>
        <div className="service-content">
          <div className="service-desc">
            <LuBarChartHorizontalBig className="service-icons" />
            <h3>crop disease prediction</h3>
            <p>
            Use AI to detect crop diseases early and suggest remedies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
