import { Routes, Route, Navigate } from "react-router-dom";
import { Page } from "../components";

import { MainPage } from "../pages";
import {
  LandingPage as CookbookLandingPage,
  BrowsePage as CookbookBrowsePage,
  DetailPage as CookbookDetailPage,
} from "../pages/Cookbook";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      <Route
        path="/cookbook"
        element={
          <Page title="Cookbook">
            <CookbookLandingPage />
          </Page>
        }
      />
      <Route
        path="/cookbook/browse"
        element={
          <Page title="Cookbook">
            <CookbookBrowsePage />
          </Page>
        }
      />
      <Route
        path="/cookbook/browse/:id"
        element={
          <Page title="Cookbook">
            <CookbookDetailPage />
          </Page>
        }
      />
      <Route path="/cookbook/*" element={<Navigate to="/cookbook" />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
