import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from './../pages/Home/Home/Home';
import Menu from "../pages/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop";
import ContactUs from "../pages/ContactUs/ContactUs";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../Layout/Dashboard";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import ManageBookings from "../pages/Dashboard/ManageBookings/ManageBookings";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";






export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'/shop',
          element:<PrivetRoute><OurShop></OurShop></PrivetRoute>
        },
        {
          path:'/shop/:title',
          element:<PrivetRoute><OurShop></OurShop></PrivetRoute>
        },
        {
          path:'/contact',
          element:<ContactUs></ContactUs>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'login',
          element:<Login></Login>
        },

      ]
    },
    {
      path:"/dashboard",
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:"manageItems",
          element:<ManageItems></ManageItems>
        },
        {
          path:"home",
          element:<AdminHome></AdminHome>
        },
        {
          path:"booking",
          element:<ManageBookings></ManageBookings>
        },
        {
          path:"addItems",
          element:<AddItems></AddItems>
        },
      ]
    }
  ]);