import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { AboutUs } from "./Components/Aboutus";
import { Contact } from "./Components/Contact";
import Error from "./Components/Error";
import Appbody from "./Components/Appbody";
import AppHeader from "./Components/AppHeader";
import Restromenu from "./Components/Restromenu";

const RootElement = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div className="appClassName" id="appId">
      <AppHeader />
      <Outlet />
    </div>
  );
};

const appRouternavigator = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Appbody />,
      },
      {
        path: "Home",
        element: <Appbody />,
      },
      {
        path: "About",
        element: <AboutUs />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Restaurants/:RestroName/:restroID",
        element: <Restromenu />,
      },
    ],
  },
]);

RootElement.render(<RouterProvider router={appRouternavigator} />);
