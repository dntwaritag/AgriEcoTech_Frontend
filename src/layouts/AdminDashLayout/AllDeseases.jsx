import React, { useEffect, useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axiosclient from "../../axiosClient";

function AllDeseases() {
    const [diseases, setDeseases] = useState([]); // Initialize as an empty array

    useEffect(() => {
        fetchSoilData()
    }, []);

    const fetchSoilData = () => {
        axiosclient.get('/desease').then(({ data }) => {
            console.log(data);
            setDeseases(data.data);
        });
    };
    const deleteSoil = (id) => {
        axiosclient.delete(`/desease/${id}`).then(() => {
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
                    {diseases.map((item, index) => (
                       
                            <tr key={item._id}>

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
                                            <Link to={`/admin/edit-desease/${item._id}`} className="edit-btn">
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

export default AllDeseases;
