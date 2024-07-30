import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import axiosclient from "../../axiosClient";

function EditDisease() {
  const [loading, setLoading] = useState(false);
  const [disease, setDisease] = useState({});
  const {_id} = useParams();

  useEffect(() => {
    const fetchDisease = async () => {
      try {
        const response = await axiosclient.get(`/desease/${_id}`);
        setDisease(response.data);
        console.log(disease)
      } catch (error) {
        console.error("Error fetching disease data:", error);
      }
    };

    fetchDisease();
  }, [_id]);

  const showToastMessage = () => {
    toast.success("Disease updated successfully!", {
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
      const response = await axiosclient.put(`/desease/${_id}`, formData, {
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
      <ToastContainer/>
      <div className="research-form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="add-course-header">
            <div>
              <h5>Record Disease Information</h5>
            </div>
            <Link to="/admin/deseases">
              <FaTimes
                style={{ cursor: "pointer", fontSize: "18px", color: "black" }}
              />
            </Link>
          </div>

          <label htmlFor="name">Disease Name</label>
          <input
            type="text"
            name="name"
            placeholder="Disease name"
            defaultValue={disease.name || ""}
            required
          />
          
          <label htmlFor="type">Pathogen Type</label>
          <select name="type" defaultValue={disease.type || ""} required>
            <option value="virus">Virus</option>
            <option value="bacteria">Bacteria</option>
            <option value="fungus">Fungus</option>
            <option value="nematode">Nematode</option>
          </select>

          <label htmlFor="symptoms">Symptoms</label>
          <select name="symptoms" defaultValue={disease.symptoms || ""} required>
            <option value="spots">Spots</option>
            <option value="wilting">Wilting</option>
            <option value="discoloration">Discoloration</option>
            <option value="stunted growth">Stunted Growth</option>
          </select>
      
          <label htmlFor="parts">Affected Part</label>
          <select name="parts" defaultValue={disease.parts || ""} required>
            <option value="leaves">Leaves</option>
            <option value="stems">Stems</option>
            <option value="roots">Roots</option>
            <option value="fruits">Fruits</option>
          </select>

          <label htmlFor="date">Date of Sampling</label>
          <input
            type="date"
            name="date"
            defaultValue={disease.date || ""}
            required
          />

          <button type="submit">
            {loading ? "Saving..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditDisease;
