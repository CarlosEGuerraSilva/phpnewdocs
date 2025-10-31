import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing.tsx";
import GetStartedPage from "./pages/get-started.tsx";
import { LINKS } from "./consts/links.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/phpnewdocs">
      <Routes>
        <Route index path={LINKS.home} element={<Landing />} />
        <Route path={LINKS.getStarted} element={<GetStartedPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
