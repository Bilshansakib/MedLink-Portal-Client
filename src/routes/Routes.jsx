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
import AddCamps from "../pages/Dashboard/AddCamps/AddCamps";
import AdminRoute from "./AdminRoute";
import UpdateData from "../pages/Dashboard/ManageCamps/UpdateData";
import CampDetails from "../pages/Home/CampDetails/CampDetails";
import YourProfile from "../pages/Dashboard/YourProfile/YourProfile";
import Payment from "../pages/Dashboard/Payment/Payment";
import YourCamps from "../pages/Dashboard/YourCamps/YourCamps";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import OrganizerProfile from "../pages/Dashboard/OrganizerProfile/OrganizerProfile";
import ManageRegisteredCamps from "../pages/Dashboard/ManageRegisteredCamps/ManageRegisteredCamps";
import Analytics from "../pages/Dashboard/Analytics/Analytics";
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
        path: "campDetails/:id",
        element: <CampDetails></CampDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:9000/camps/${params.id}`),
      },
      {
        path: "availableCamps",
        element: <AvailableCamps></AvailableCamps>,
      },
      {
        path: "availableCamps/campDetails/:id",
        element: <CampDetails></CampDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:9000/camps/${params.id}`),
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
      // for admin
      {
        index: true,
        path: "organizerProfile",
        element: (
          <PrivateRoute>
            <OrganizerProfile></OrganizerProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "manageCamps",
        element: <ManageCamps></ManageCamps>,
      },
      {
        path: "updateData/:id",
        element: (
          <AdminRoute>
            <UpdateData></UpdateData>
          </AdminRoute>
        ),
        // loader: ({ params }) => getAllCamps(params.id),
        loader: ({ params }) =>
          fetch(`http://localhost:9000/camps/${params.id}`),
      },

      {
        path: "manageUserCamps",
        element: (
          <AdminRoute>
            <ManageUserCamps></ManageUserCamps>
          </AdminRoute>
        ),
      },
      {
        path: "addCamps",
        element: (
          <AdminRoute>
            <AddCamps></AddCamps>
          </AdminRoute>
        ),
      },
      {
        path: "manage-registered-camps",
        element: (
          <AdminRoute>
            <ManageRegisteredCamps></ManageRegisteredCamps>
          </AdminRoute>
        ),
      },
      // user routes
      {
        path: "userProfile",
        element: (
          <PrivateRoute>
            <YourProfile></YourProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "analytics",
        element: (
          <PrivateRoute>
            <Analytics></Analytics>
          </PrivateRoute>
        ),
      },

      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "RegCamps",
        element: (
          <PrivateRoute>
            <YourCamps></YourCamps>
          </PrivateRoute>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <PrivateRoute>
            <PaymentHistory></PaymentHistory>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
