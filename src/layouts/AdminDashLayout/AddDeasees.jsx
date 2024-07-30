import { Editor } from "@tinymce/tinymce-react";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import axiosclient from "../../axiosClient";

function AddDeasees() {
  const editorRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const showToastMessage = () => {
    toast.success("Deseases created successfully!", {
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
              <h5>Record Deasease information</h5>
            </div>

            <Link to="/admin/deseases">
              <FaTimes
                style={{ cursor: "pointer", fontSize: "18px", color: "black" }}
                // onClick={handleCourseModel}
              />
            </Link>
          </div>

          <label htmlFor="">Disease name</label>
          <input type="text" name="name" placeholder="Desease name" />
          <label htmlFor="">Pathogen Type</label>
          <select name="type" id="">
            <option value="virus">virus</option>
            <option value="bacteria">bacteria</option>
            <option value="fungus"> fungus</option>
            <option value="nematode">nematode</option>
          </select>
         

          <label htmlFor="">Symptoms</label>
          <select name="symptoms" id="">
            <option value="spots">spots</option>
            <option value="wilting">wilting</option>
            <option value="discoloration">discoloration</option>
            <option value="stunted growth">stunted growth</option>
          </select>
      
  
<label htmlFor="">Affected Part</label>
<select name="parts" id="">
  <option value="leaves">Leaves</option>
  <option value="stems">stems</option>
  <option value="roots">roots</option>
  <option value="fruits">fruits</option>
</select>
          <label htmlFor=""> Date of Sampling</label>
          <input type="date" name="date" />

          <button>Save</button>
        </form>
      </div>
    </div>
  );
}

export default AddDeasees;
