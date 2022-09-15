import { Routes, Route, Navigate } from "react-router-dom";

import { MainPage } from "../pages";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
