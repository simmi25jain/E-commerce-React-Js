import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import First from "./pages/First";
import Home from "./pages/Home";
import Blog from "../src/pages/Blog";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/Singleproduct";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/product/:id",
        element: <SingleProduct />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
    ],
  },
]);
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;