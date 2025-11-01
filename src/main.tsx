import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing.tsx";
import GetStartedPage from "./pages/get-started.tsx";
import { LINKS } from "./consts/links.ts";
import LatestReleasePage from "./pages/latest-release.tsx";
import MigrationGuidesPage from "./pages/migration-guides.tsx";
import DownloadsPage from "./pages/downloads.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/phpnewdocs">
      <Routes>
        <Route index path={LINKS.home} element={<Landing />} />
        <Route path={LINKS.docs} element={<GetStartedPage />} />
        <Route path={LINKS.releaseNotes} element={<LatestReleasePage />} />
        <Route path={LINKS.migrationGuide} element={<MigrationGuidesPage />} />
        <Route path={LINKS.download} element={<DownloadsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
