import { createBrowserRouter, Navigate } from "react-router";
import App from "../App";
import ContactPage from "../pages/Contact/Contact";
import About from "../pages/About/About";
import ServicesPage from "../pages/Services/ServicesPage";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Course from "../pages/Course/Course";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/contact-us", element: <ContactPage /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/services/:id", element: <ServiceDetails /> },
  { path: "/course", element: <Course /> },

  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default router;
