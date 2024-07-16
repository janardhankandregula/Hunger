import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Headercomponent";
import BodyComponent from "./components/Bodycomponent";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";

const AppLayout = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Errort",
        element: <Error />,
      },
      {
        path: "/restaurant/:resId",
        element: <Menu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
