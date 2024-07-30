import React from "react";
import AdminNav from "./AdminNav";
import AdminSideBar from "./AdminSideBar";
import { Navigate, Outlet } from "react-router-dom";
// import { usestateContext } from "../../Context/ContextProvider";
function AdminLayout() {
  // const { user } = usestateContext();
  // if (!user || user.role !== "admin") {
  //   return <Navigate to="/" />;
  // }
  return (
    <div className="Admin-Layout-wrapper">
      <AdminNav />
      <AdminSideBar />
      <div className="outlet-wrapper">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
