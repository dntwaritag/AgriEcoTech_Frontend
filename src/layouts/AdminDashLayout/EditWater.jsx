import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import axiosclient from "../../axiosClient";

function EditWater() {
  const editorRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const showToastMessage = () => {
    toast.success("Water usage data created successfully!", {
      position: "top-right",
      style: { zIndex: 999999 },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      source: e.target.source.value,
      amount: e.target.amount.value,
      frequency: e.target.frequency.value,
      waterpH: e.target.waterpH.value,
      cost: e.target.cost.value,
      date: e.target.date.value,
    };
    try {
      const response = await axiosclient.post("/water", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      showToastMessage();
      setTimeout(() => {
        window.location.href = "/admin/water";
      }, 3000);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div className="add-research-wrapper">
      <div className="research-form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="add-course-header">
            <div>
              <h5>Record Water Usage Data</h5>
            </div>
            <Link to="/admin/water">
              <FaTimes
                style={{ cursor: "pointer", fontSize: "18px", color: "black" }}
              />
            </Link>
          </div>

          <label htmlFor="source">Water Source</label>
          <select name="source" required>
            <option value="ground water">Ground Water</option>
            <option value="surface water">Surface Water</option>
            <option value="rain water">Rain Water</option>
            <option value="reclaimed water">Reclaimed Water</option>
          </select>

          <label htmlFor="amount">Irrigation Amount</label>
          <input name="amount" type="text" placeholder="Irrigation amount" required />

          <label htmlFor="frequency">Irrigation Frequency</label>
          <input type="text" name="frequency" placeholder="Irrigation Frequency" required />

          <label htmlFor="waterpH">Water pH</label>
          <input type="text" name="waterpH" placeholder="Water pH" required />

          <label htmlFor="cost">Cost</label>
          <input type="text" name="cost" placeholder="Cost" required />

          <label htmlFor="date">Date of Sampling</label>
          <input type="date" name="date" required />

          <button type="submit">{loading ? "Saving..." : "Save"}</button>
        </form>
      </div>
    </div>
  );
}

export default EditWater;
