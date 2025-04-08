import { createBrowserRouter, Navigate } from "react-router";
import App from "../App";
import ContactPage from "../pages/Contact/Contact";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/contact-us", element: <ContactPage /> },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default router;
