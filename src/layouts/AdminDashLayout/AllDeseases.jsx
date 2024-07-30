import React from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function AllDeseases() {
    const researches = [
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
        <div className="admin-research-wrapper">
            <div className="admin-research-header">
                <h3>Crop Deseases</h3>
                <Link to="/admin/add-desease">Add new</Link>
            </div>

            <table id="customers">
               
                <tr>
                    {/* <th><input type="checkbox" /></th> */}
                    <th>Diseas name</th>
                    <th>Symptoms</th>
                    <th>Pathogen Type</th>
                    <th>Affected part</th>
                  <th>Date</th>
                    <th>Action</th>
                </tr>
            <tbody>
            {researches.map((item, index) => (
                    <>
                        <tr key={item.id}>
                           
                            <td>{item.name}</td>
                            <td>{item.symptoms}</td>
                            <td>{item.type}</td>
                            <td>{item.parts}</td>
                            <td>{item.date}</td>
                           
                            <td>
                            <div className="td-flex">
                        <div className="td-flex-desc">
                        </div>
                        <div className="td-flex-desc">
                            <Link to={`/admin/edit-desease/${item.id}`} className="edit-btn">
                                <FaEdit />
                            </Link>
                        </div>
                        <div className="td-flex-desc">
                            <button className="delete-btn">
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                            </td>
                        </tr>
                    </>
                ))}
            </tbody>
            </table>
        </div>
    );
}

export default AllDeseases;
