import { Routes, Route, Navigate } from "react-router-dom";

import { MainPage, WeatherPage } from "../pages";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="weather" element={<WeatherPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
