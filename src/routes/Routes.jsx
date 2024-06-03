import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import AvailableCamps from "../pages/AvailableCamps/AvailableCamps";
import Dashboard from "../layouts/Dashboard";
import ManageCamps from "../pages/Dashboard/ManageCamps/ManageCamps";
import PrivateRoute from "./PrivateRoute";
import ManageUserCamps from "../pages/Dashboard/ManageUserCamps.jsx/ManageUserCamps";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "availableCamps",
        element: <AvailableCamps></AvailableCamps>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "manageCamps",
        element: <ManageCamps></ManageCamps>,
      },
      {
        path: "manageUserCamps",
        element: <ManageUserCamps></ManageUserCamps>,
      },
    ],
  },
]);
