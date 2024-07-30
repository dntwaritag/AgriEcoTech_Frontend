import React from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Remedies() {
  const researches = [
    {
      id: 1,
      title: "how to treat crops",
      image: "/images/agri6.jpeg",
      description: "lorem ipsum doresmnt werg nompl yelis folger wers",
    },
    {
      id: 2,
      title: "remedie title",
      image: "/images/agri7.jpeg",
      description: "lorem ipsum doresmnt werg nompl yelis folger wers",
    },
    {
      id: 3,
      title: "importance of crops",
      image: "/images/agri9.jpeg",
      description: "lorem ipsum doresmnt werg nompl yelis folger wers",
    },
  ];

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
          {researches.map((item, index) => (
            <>
              <tr key={item.id}>
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
                <td>{item.description}</td>
    
                <td>
                  <div className="td-flex">
                    <div className="td-flex-desc">
                    </div>
                    <div className="td-flex-desc">
                      <Link
                        to={`/admin/edit-remedie/${item.id}`}
                        className="edit-btn"
                      >
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

export default Remedies;
