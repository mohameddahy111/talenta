import {createBrowserRouter} from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Login from '../pages/Login';
import AdminDashboard from "../pages/AdminDashboard";
import Protector from "../components/admins/Protector";
import AddAdmin from "../components/admins/AddAdmin";
import AddCustomer from "../components/admins/AddCustomer";
import AddProject from "../components/admins/AddProject";
import ClientLayout from "../layouts/ClientLayout";
import Home from "../pages/Home";

export const Roters = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element:<Home/>
      },
      {
        
      }
    ]
  },
  {
    path: "/admins/",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: "/admins/dashboard",
        element: (
          <Protector>
            {" "}
            <AdminDashboard />
          </Protector>
        ),
        children: [
          {path :"/admins/dashboard/add_admin" , element :<AddAdmin/>},
          {path :"/admins/dashboard/Add_customer" , element :<AddCustomer/>},
          {path :"/admins/dashboard/Add_project" , element :<AddProject/>},
        ]

      }
    ]
  }
]);
