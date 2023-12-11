import React from "react";
import "./App.css";

import Dashboard from "./components/Pages/Dashboard";
// import { httpClient } from "./HttpClient";

import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

render(<App />, document.getElementById("root"));
