import React, { useEffect, useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axiosclient from "../../axiosClient";

function Remedies() {
  const [diseases, setDeseases] = useState([]); // Initialize as an empty array

  useEffect(() => {
    fetchSoilData()
  }, []);

  const fetchSoilData = () => {
    axiosclient.get('/remedie').then(({ data }) => {
      console.log(data);
      setDeseases(data.data);
    });
  };
  const deleteSoil = (id) => {
    axiosclient.delete(`/remedie/${id}`).then(() => {
      // After successful deletion, fetch the updated soil data
      fetchSoilData();
      console.log('deleted successfully')
    }).catch((error) => {
      console.error("There was an error deleting the desease record!", error);
    });
  };


  // Function to truncate text
const truncateText = (text, length) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};

const maxLength = 100; // Set your desired maximum length

  return (
    <div className="admin-research-wrapper">
      <div className="admin-research-header">
        <h3>Remedies</h3>
        <Link to="/admin/add-remedie">Add new</Link>
      </div>

      <table id="customers">
        <tr>
          {/* <th><input type="checkbox" /></th> */}
          <th>Image</th>
          <th>title</th>
          <th>description</th>
          <th>Action</th>
        </tr>
        <tbody>
          {diseases.map((item, index) => (
            <tr key={item._id}>
              <td>
                <img
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "7px",
                  }}
                  src={item.image}
                  alt=""
                />
              </td>
              <td>{item.title}</td>
             
             
              <td dangerouslySetInnerHTML={{ __html: truncateText(item.description, maxLength) }} />
              <td>
                <div className="td-flex">
                  <div className="td-flex-desc">
                    <Link to={`/admin/edit-remedie/${item._id}`} className="edit-btn">
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

export default Remedies;
