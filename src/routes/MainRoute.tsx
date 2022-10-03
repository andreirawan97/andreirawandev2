import { Routes, Route, Navigate } from "react-router-dom";

import { MainPage } from "../pages";
import { LandingPage as CookbookLandingPage } from "../pages/Cookbook";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      <Route path="/cookbook" element={<CookbookLandingPage />} />
      <Route
        path="/cookbook/browse"
        element={
          <div>
            <span>Browse</span>
          </div>
        }
      />
      <Route path="/cookbook/*" element={<Navigate to="/cookbook" />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
