import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { router } from "./routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="mx-auto max-w-screen-xl">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
