import React, { useState } from "react";
import AdminNav from "./AdminNav";
import AdminSideBar from "./AdminSideBar";
import { Navigate, Outlet } from "react-router-dom";
// import { usestateContext } from "../../Context/ContextProvider";
function AdminLayout() {
  // const { user } = usestateContext();
  // if (!user || user.role !== "admin") {
  //   return <Navigate to="/" />;
  // }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="Admin-Layout-wrapper">
      <AdminNav isModalOpen={isModalOpen}  toggleModal={toggleModal} />
      <AdminSideBar toggleModal={toggleModal} isModalOpen={isModalOpen} />
      <div className="outlet-wrapper">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
