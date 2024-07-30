

import { Editor } from "@tinymce/tinymce-react";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import axiosclient from "../../axiosClient";

function AddRemedie() {
  const editorRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const showToastMessage = () => {
    toast.success("Remedie created successfully!", {
      position: "top-right",
      style: { zIndex: 999999 }, // Set the z-index here
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("title", e.target.title.value);
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
              <h5>Add new Remedie</h5>
            </div>
            <Link to="/admin/remedies">
              <FaTimes
                style={{ cursor: "pointer", fontSize: "18px", color: "black" }}
                // onClick={handleCourseModel}
              />
            </Link>
          </div>
<label htmlFor="">title</label>
<input type="text" name="title" placeholder='Add Remedie title' id="" />

          <label htmlFor=""> Remedie Description</label>
                    <Editor
                  apiKey="7r0bh29yxdmdtp5mz4bad2sk3q19u0kfidtkxcnnu0v9u0w5" // api key
                  
                  // value={course.description}
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  init={{
                    height: 200,
                    menubar: false,
                    plugins:
                      "advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount",
                    toolbar:
                      "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | image",
                    paste_data_images: true,
                    images_upload_handler: async (
                      blobInfo,
                      success,
                      failure
                    ) => {
                      // You can implement your image upload logic here if needed.
                      // For demonstration, we just call success.
                      success(
                        "data:" +
                          blobInfo.blob().type +
                          ";base64," +
                          blobInfo.base64()
                      );
                    },
                  }}/>
          <label htmlFor="">  Remedie Photo</label>
          <input type="file" name="image" placeholder="choose file" />
       
          <button>Save</button>
        </form>
      </div>
    </div>
  );
}

export default AddRemedie;
