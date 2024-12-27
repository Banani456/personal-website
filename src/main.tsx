import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//"predeploy": "npm run build",
//"deploy": "gh-pages -d build",
//"dev": "vite",
//"build": "tsc -b && vite build",
