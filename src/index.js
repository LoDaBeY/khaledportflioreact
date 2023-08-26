import DevLandingPage from "Pages/DevPages/DevLandingPage";
import Home from "Pages/Home/Home";
import TranslatorLandingPage from "Pages/TranslatorPages/TranslatorLandingPage";
import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/TranslatorLandingPage",
    element: <TranslatorLandingPage />,
  },
  {
    path: "/DevLandingPage",
    element: <DevLandingPage />,
  },
  {
    path: "*",
    element: <DevLandingPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
