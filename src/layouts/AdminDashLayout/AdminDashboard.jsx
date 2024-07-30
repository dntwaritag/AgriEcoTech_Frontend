import React, { useEffect, useState } from "react";
import { FaSort, FaUser, FaUserGroup } from "react-icons/fa6";
import { GrBusinessService } from "react-icons/gr";

import { BsThreeDotsVertical } from "react-icons/bs";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";


import env from "../../env";
import noPhoto from "/images/notPhoto.png";
import axiosclient from "../../axiosClient";

function AdminDashBoard() {
 


  const getBarColor = (count) => {
    // Customize your color logic here
    if (count > 20) return "#ff0000"; // Red for more than 20 registrations
    if (count > 10) return "#82ca9d"; // Green for 11-20 registrations
    return "#8884d8"; // Default color for 0-10 registrations
  };

  const researches = [
    {
      id:1,
      title:"How to treat soils",
      description:"lorem ipsum doresamnt we are ba htrol lorrems",
      image:"/images/Agri11.jpg"
    },
    {
      id:4,
      title:"top Soild deases",
      description:"lorem ipsum doresamnt we are ba htrol lorrems",
      image:"/images/agri18.jpg"
    },
    {
      id:3,
      title:"Land Management",
      description:"lorem ipsum doresamnt we are ba htrol lorrems",
      image:"/images/agri7.jpeg"
    }
  ]

  const deseases = [
    {
        id: 1,
        name: "silt",
        type: "virus",
        symptoms: "spots",
        parts: "leaves",
        date:"12/9/2023"
    },
    {
      id: 4,
      name: "phonrt",
      type: "bacteria",
      symptoms: "wilting",
      parts: "fruits",
      date:"12/9/2023"
  },
  {
    id: 3,
    name: "miltererous",
    type: "fungus",
    symptoms: "iscloration",
    parts: "roots",
    date:"12/9/2023"
},


  
   
    
];


  return (
    <div className="admin-dashboard-wrapper">
      <div className="admin-chart-container">
      <div className="admin-flex-dash">
        <div className="admin-flex-content mediumgreen">
          {/* <div className="admin-flex-icon">
            <FaUserGroup />
          </div> */}
          <div className="admin-dash-numbers">
            <h5>Total Soils</h5>
            <h2>12
            </h2>
            <div className="increase-container">
              <div className="increase-student"></div>
            </div>
            <p>13% increase in 30 days</p>
        </div>
        </div>
        <div className="admin-flex-content yelloworange">
          {/* <div className="admin-flex-icon">
            <FaUser />
          </div> */}
          <div className="admin-dash-numbers">
            <h5>Total  Diseases Available</h5>
            <h2>45</h2>
            <div className="increase-container">
              <div className="increase-student"></div>
            </div>
            <p>20% increase in 30 days</p>
          </div>
        </div>
        <div className="admin-flex-content bluedodger">
          {/* <div className="admin-flex-icon">
            <GrBusinessService />
          </div> */}
          <div className="admin-dash-numbers">
            <h5>Water usage</h5>
            <h2>67</h2>
            <div className="increase-container">
              <div className="increase-student"></div>
            </div>
            <p>7 % increase in 30 days</p>
          </div>
        </div>
        <div className="admin-flex-content lightcrimson">
          {/* <div className="admin-flex-icon">
            <GrBusinessService />
          </div> */}
          <div className="admin-dash-numbers">
            <h5>Total Remedies</h5>
            <h2>56</h2>
            <div className="increase-container">
              <div className="increase-student"></div>
            </div>
            <p>24 % increase in 30 days</p>
          </div>
        </div>
      </div>
    
    
      </div>
      
<div className="student-reseach-wrapper">
<div className="new-student-wrapper">
        <h5>Latest Recorded Deseases</h5>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Desease name</th>
              <th>Pathogen Type</th>
              <th>Symptoms</th>
              <th>affected Part</th>
              <th>Date recorded</th>
            </tr>
          </thead>
          <tbody>
            {deseases?.map((row, index) => (
              <tr key={index}>
                {/* <td>{row.id}</td> */}
                <td>{row.name}</td>
                <td>{row.type}</td>
                <td>{row.symptoms}</td>
                <td>{row.parts}</td>
             
                <td>{row.date}</td>
            
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="reseach-dash-wrapper">
        <div className="reseach-header-dash">
          <h6>Latest Remedies</h6>
        </div>

<div className="reseach-body-dash">
  {researches.map((item,index)=>(
    <div className="resach-desc-dash">
      <img src={item.image} alt="" />
      <div>
        <h6>{item.title}</h6>
        <p>{item.description}</p>
      </div>
    </div>
  ))}
</div>
      </div>
</div>
    
    </div>
  );
}

export default AdminDashBoard;
