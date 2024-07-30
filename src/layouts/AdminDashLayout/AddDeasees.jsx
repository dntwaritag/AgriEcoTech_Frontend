import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import axiosclient from "../../axiosClient";

function AddDiseases() {
  const [loading, setLoading] = useState(false);

  const showToastMessage = () => {
    toast.success("Disease created successfully!", {
      position: "top-right",
      style: { zIndex: 999999 },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      name: e.target.name.value,
      type: e.target.type.value,
      symptoms: e.target.symptoms.value,
      parts: e.target.parts.value,
      date: e.target.date.value,
    };
    
    try {
      const response = await axiosclient.post("/desease", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      showToastMessage();
      setTimeout(() => {
        window.location.href ="/admin/deseases";
      }, 3000);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-reseach-wrapper">
      <div className="research-form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="add-course-header">
            <div>
              <h5>Record Disease Information</h5>
            </div>
            <Link to="/admin/diseases">
              <FaTimes
                style={{ cursor: "pointer", fontSize: "18px", color: "black" }}
              />
            </Link>
          </div>

          <label htmlFor="name">Disease Name</label>
          <input type="text" name="name" placeholder="Disease name" required />
          
          <label htmlFor="type">Pathogen Type</label>
          <select name="type" required>
            <option value="virus">Virus</option>
            <option value="bacteria">Bacteria</option>
            <option value="fungus">Fungus</option>
            <option value="nematode">Nematode</option>
          </select>

          <label htmlFor="symptoms">Symptoms</label>
          <select name="symptoms" required>
            <option value="spots">Spots</option>
            <option value="wilting">Wilting</option>
            <option value="discoloration">Discoloration</option>
            <option value="stunted growth">Stunted Growth</option>
          </select>
      
          <label htmlFor="parts">Affected Part</label>
          <select name="parts" required>
            <option value="leaves">Leaves</option>
            <option value="stems">Stems</option>
            <option value="roots">Roots</option>
            <option value="fruits">Fruits</option>
          </select>

          <label htmlFor="date">Date of Sampling</label>
          <input type="date" name="date" required />

          <button type="submit">
            {loading ? "Saving..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddDiseases;
