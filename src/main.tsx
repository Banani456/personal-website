import { StrictMode } from "react";
import { HashRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <HashRouter basename="/personal-website">
    <StrictMode>
      <App />
    </StrictMode>
  </HashRouter>
);
