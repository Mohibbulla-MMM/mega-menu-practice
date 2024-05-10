import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Route from "./Route/Route.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Route}>
      <Layout />
    </RouterProvider>
  </React.StrictMode>
);
