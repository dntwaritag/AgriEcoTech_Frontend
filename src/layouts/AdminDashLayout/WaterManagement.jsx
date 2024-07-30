import React from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function WaterManagement() {
    const researches = [
        {
            id: 1,
            source: "silt",
            amount: "56ml",
            frequency: "45HZ",
            waterpH: "0.67l",
            cost:"1400",
            date:"12/9/2023"
        },
        {
          id: 4,
          source: "Rainfall",
          amount: "45ml",
          frequency: "75HZ",
          waterpH: "0.89l",
          cost:"170",
          date:"12/9/2023"
      },
      {
        id: 3,
        source: "silt",
        amount: "Musanze",
        frequency: "12HZ",
        waterpH: "0.67l",
        cost:"200",
        date:"12/9/2023"
    },
      
       
        
    ];

    return (
        <div className="admin-research-wrapper">
            <div className="admin-research-header">
                <h3>Water Management</h3>
                <Link to="/admin/add-water">Add new</Link>
            </div>

            <table id="customers">
               
                <tr>
                    {/* <th><input type="checkbox" /></th> */}
                    <th>water source</th>
                    <th>Irrigation amount</th>
                    <th>irrigation frequency</th>
                    <th>Water pH</th>
                    <th>cost</th>
                  <th>Date of sampling</th>
                    <th>Action</th>
                </tr>
            <tbody>
            {researches.map((item, index) => (
                    <>
                        <tr key={item.id}>
                           
                            <td>{item.source}</td>
                            <td>{item.amount}</td>
                            <td>{item.frequency}</td>
                            <td>{item.waterpH}</td>
                            <td>$ {item.cost}</td>
                            <td>{item.date}</td>
                           
                            <td>
                            <div className="td-flex">
                        <div className="td-flex-desc">
                        </div>
                        <div className="td-flex-desc">
                            <Link to={`/admin/edit-water/${item.id}`} className="edit-btn">
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

export default WaterManagement;
