import React, { useEffect, useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axiosclient from "../../axiosClient";

function WaterManagement() {
    const [diseases, setDeseases] = useState([]); // Initialize as an empty array

    useEffect(() => {
        fetchSoilData()
    }, []);

    const fetchSoilData = () => {
        axiosclient.get('/water').then(({ data }) => {
            console.log(data);
            setDeseases(data.data);
        });
    };
    const deleteSoil = (id) => {
        axiosclient.delete(`/water/${id}`).then(() => {
            // After successful deletion, fetch the updated soil data
            fetchSoilData();
            console.log('deleted successfully')
        }).catch((error) => {
            console.error("There was an error deleting the desease record!", error);
        });
    };



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
            {diseases.map((item, index) => (
                  
                        <tr key={item._id}>
                           
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
                            <Link to={`/admin/edit-water/${item._id}`} className="edit-btn">
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

export default WaterManagement;
