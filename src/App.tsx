import React from "react";

import MainRoute from "./routes/MainRoute";

import "./styles/typography.css";
import "./styles/theme.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
  );
}

export default App;
