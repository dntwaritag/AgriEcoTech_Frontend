import { Editor } from "@tinymce/tinymce-react";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import axiosclient from "../../axiosClient";

function AddWater() {
  const editorRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const showToastMessage = () => {
    toast.success("water created successfully!", {
      position: "top-right",
      style: { zIndex: 999999 }, // Set the z-index here
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("title", e.target.title.value);
    formData.append("author", e.target.author.value);
    formData.append("date", e.target.date.value);
    formData.append("description", editorRef.current.getContent());
    formData.append("image", e.target.image.files[0]);
    try {
      const response = await axiosclient.post("/reseaches", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      showToastMessage();
      setTimeout(() => {
        // handleCourseModel();
        window.location.href = "/admin/cms/researches";
      }, 3000);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div className="add-reseach-wrapper">
      <div className="research-form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="add-course-header">
            <div>
              <h5>Record water usageData</h5>
            </div>
            <Link to="/admin/water">
              <FaTimes
                style={{ cursor: "pointer", fontSize: "18px", color: "black" }}
                // onClick={handleCourseModel}
              />
            </Link>
          </div>

          <label htmlFor="">Water source</label>
          <select name="" id="">
            <option value="ground water">ground water</option>
            <option value=" surface water"> surface water</option>
            <option value="rain water">rain water</option>
            <option value="reclaimed water">reclaimed water</option>
          </select>

          <label htmlFor="">Irrigation Amount</label>
          <input name="amount" type="text" placeholder="Irrigation amount" />
          <label htmlFor="">Irrigation Frequency</label>
          <input type="text" name="frequency" placeholder="Irrigation Frequency" />
          <label htmlFor="">Water pH</label>
          <input type="text" name="waterpH" placeholder="Water pH" />
          <label htmlFor="">Cost</label>
          <input type="text" placeholder="Cost" />
          <label htmlFor=""> Date of Sampling</label>
          <input type="date" name="date" />
         

          <button>Save</button>
        </form>
      </div>
    </div>
  );
}

export default AddWater;
