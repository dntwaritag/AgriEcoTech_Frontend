import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminLayout from "./layouts/AdminDashLayout/AdminLayout";
import AdminDashBoard from "./layouts/AdminDashLayout/AdminDashboard";
import AllDeseases from "./layouts/AdminDashLayout/AllDeseases";
import EditDesease from "./layouts/AdminDashLayout/EditDesease";
import SoilManagement from "./layouts/AdminDashLayout/SoilManagement";
import AddSoil from "./layouts/AdminDashLayout/AddSoil";
import EditSoil from "./layouts/AdminDashLayout/EditSoil";
import WaterManagement from "./layouts/AdminDashLayout/WaterManagement";
import AdminProfile from "./layouts/AdminDashLayout/AdminProfile";
import AddRemedie from "./layouts/AdminDashLayout/AddRemedie";
import Remedies from "./layouts/AdminDashLayout/Remedies";
import EditRemedie from "./layouts/AdminDashLayout/EditRemedie";
import AddWater from "./layouts/AdminDashLayout/AddWater";
import EditWater from "./layouts/AdminDashLayout/EditWater";
import AddDeasees from "./layouts/AdminDashLayout/AddDeasees";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <AdminDashBoard />,
      },
      {
        path: "/admin/soil",
        element: <SoilManagement />,
      },
      {
        path: "/admin/add-soil",
        element: <AddSoil />,
      },
      {
        path: "/admin/edit-soil/:_id",
        element: <EditSoil />,
      },

      {
        path: "/admin/water",
        element: <WaterManagement />,
      },
      {
        path: "/admin/add-water",
        element: <AddWater />,
      },
      {
        path: "/admin/edit-water/:_id",
        element: <EditWater />,
      },
      {
        path: "/admin/deseases",
        element: <AllDeseases />,
      },
      {
        path: "/admin/add-desease",
        element: <AddDeasees />,
      },
      {
        path: "/admin/edit-desease/:_id",
        element: <EditDesease />,
      },
      {
        path: "/admin/add-remedie",
        element: <AddRemedie />,
      },
      {
        path: "/admin/remedies",
        element: <Remedies />,
      },
      {
        path: "/admin/edit-remedie/:_id",
        element: <EditRemedie />,
      },
      {
        path: "/admin/profile",
        element: <AdminProfile />,
      },
      {
        path: "/admin/desease/:_id",
        element: <EditDesease />,
      },
    ],
  },
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
