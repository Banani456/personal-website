import { StrictMode } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

//"predeploy": "npm run build",
//"deploy": "gh-pages -d build",
//"dev": "vite",
//"build": "tsc -b && vite build",
