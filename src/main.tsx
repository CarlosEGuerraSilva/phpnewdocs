import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route index path="/*" element={<Landing />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
