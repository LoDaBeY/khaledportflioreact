import DevLandingPage from "Pages/DevPages/DevLandingPage";
import ErrorPage from "Pages/Home/ErrorPage";
import ContactME from "Pages/TranslatorPages/ContactME/ContactME";
import Projects from "Pages/TranslatorPages/Projects/Projects";
import ResumePage from "Pages/TranslatorPages/Resume/ResumePage";
import Services from "Pages/TranslatorPages/Services/Services";
import TranslatorLandingPage from "./Pages/TranslatorPages/HomeTranslatorPage/TranslatorLandingPage"
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    //just now will be the local landing page the dev untill you mange to seperate the CSS files
    path: "/",
    element: <DevLandingPage />,
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
    path: "/ResumePage",
    element: <ResumePage />,
  },
  {
    path: "/Projects",
    element: <Projects />,
  },
  {
    path: "/Services",
    element: <Services />,
  },
  {
    path: "/ContactME",
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
      <App />
  </React.StrictMode>
);
