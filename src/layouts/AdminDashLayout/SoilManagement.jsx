import React, { useEffect } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axiosclient from "../../axiosClient";

function SoilManagement() {
    const researches = [
        {
            id: 1,
            type: "silt",
            location: "Musanze",
            image: "/images/agri6.jpeg",
            moisture: "0.67l",
            nutrients: "Potassium",
            slope:"1400m",
            date:"12/9/2023"
        },
        {
            id: 2,
            type: "clay",
            location: "Huye",
            image: "/images/agri0.jpg",
            moisture: "0.67l",
            nutrients: "Phosphorus",
            slope:"1400m",
            date:"12/9/2023"
        },
        {
            id: 3,
            type: "sand",
            location: "kigali",
            image: "/images/agri7.jpeg",
            moisture: "0.67l",
            nutrients: "Nitrogen",
            slope:"1400m",
            date:"12/9/2023"
        },
        
    ];

    useEffect(()=>{
        axiosclient.get('/').then(({data})=>{
console.log(data)
        })
    },[])
    return (
        <div className="admin-research-wrapper">
            <div className="admin-research-header">
                <h3>Soil Data</h3>
                <Link to="/admin/add-soil">Add new</Link>
            </div>

            <table id="customers">
               
                <tr>
                    {/* <th><input type="checkbox" /></th> */}
                    <th>Image</th>
                    <th>Soil type</th>
                    <th>location</th>
                    <th>date of sampling</th>
                    <th>moisture</th>
                    <th>Nutrients</th>
                    <th>slope</th>
                    <th>Action</th>
                </tr>
            <tbody>
            {researches.map((item, index) => (
                    <>
                        <tr key={item.id}>
                           
                            <td><img style={{width:'70px',height:"70px",borderRadius:"7px"}} src={item.image} alt="" /></td>
                            <td>{item.type}</td>
                            <td>{item.location}</td>
                            <td>{item.date}</td>
                            <td>{item.moisture}</td>
                            <td>{item.nutrients}</td>
                            <td>{item.slope}</td>
                            <td>
                            <div className="td-flex">
                        <div className="td-flex-desc">
                            <Link className="eye-dash-link">
                                <FaEye />
                            </Link>
                        </div>
                        <div className="td-flex-desc">
                            <Link to={`/admin/edit-soil/${item.id}`} className="edit-btn">
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

export default SoilManagement;
