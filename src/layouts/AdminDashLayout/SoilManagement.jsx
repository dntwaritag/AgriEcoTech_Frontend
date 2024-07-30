import React, { useEffect, useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axiosclient from "../../axiosClient";

function SoilManagement() {
    const [soils, setSoil] = useState([]); // Initialize as an empty array

    useEffect(() => {
       fetchSoilData()
    }, []);

    const fetchSoilData = () => {
        axiosclient.get('/soil').then(({ data }) => {
            console.log(data);
            setSoil(data.data);
        });
    };


    const deleteSoil = (id) => {
        axiosclient.delete(`/soil/${id}`).then(() => {
            // After successful deletion, fetch the updated soil data
            // fetchSoilData();
            console.log('deleted successfully')
        }).catch((error) => {
            console.error("There was an error deleting the soil record!", error);
        });
    };


    return (
        <div className="admin-research-wrapper">
            <div className="admin-research-header">
                <h3>Soil Data</h3>
                <Link to="/admin/add-soil">Add new</Link>
            </div>

            <table id="customers">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Soil type</th>
                        <th>Location</th>
                        <th>Date of sampling</th>
                        <th>Moisture</th>
                        <th>Nutrients</th>
                        <th>Slope</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {soils.map((item) => (
                        <tr key={item._id}>
                            <td><img style={{ width: '70px', height: "70px", borderRadius: "7px" }} src={item.image} alt="" /></td>
                            <td>{item.type}</td>
                            <td>{item.location}</td>
                            <td>{item.date}</td>
                            <td>{item.moisture}</td>
                            <td>{item.nutrients}</td>
                            <td>{item.slope}</td>
                            <td>
                                <div className="td-flex">
                                    {/* <div className="td-flex-desc">
                                        <Link className="eye-dash-link">
                                            <FaEye />
                                        </Link>
                                    </div> */}
                                    <div className="td-flex-desc">
                                        <Link to={`/admin/edit-soil/${item._id}`} className="edit-btn">
                                            <FaEdit />
                                        </Link>
                                    </div>
                                    <div className="td-flex-desc">
                                    <button className="delete-btn" onClick={() => deleteSoil(item._id)}>
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SoilManagement;
