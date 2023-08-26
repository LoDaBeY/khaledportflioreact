import DevLandingPage from "Pages/DevPages/DevLandingPage";
import ErrorPage from "Pages/Home/ErrorPage";
import Home from "Pages/Home/Home";
import ContactME from "Pages/TranslatorPages/ContactME/ContactME";
import Projects from "Pages/TranslatorPages/Projects/Projects";
import ResumePage from "Pages/TranslatorPages/Resume/ResumePage";
import Services from "Pages/TranslatorPages/Services/Services";
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
  {
    path: "*",
    element: <ResumePage />,
  },
  {
    path: "*",
    element: <Projects />,
  },
  {
    path: "*",
    element: <Services />,
  },
  {
    path: "*",
    element: <ContactME />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
