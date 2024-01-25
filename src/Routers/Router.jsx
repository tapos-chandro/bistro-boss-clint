import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from './../pages/Home/Home/Home';
import Menu from "../pages/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop";





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
          element:<OurShop></OurShop>
        },
        {
          path:'/shop/:title',
          element:<OurShop></OurShop>
        },

      ]
    },
  ]);