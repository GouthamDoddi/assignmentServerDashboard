import React from "react";
import "./App.css";
import HomePage from "./components/Pages/HomePage";
import WelcomePage from "./components/Pages/WelcomePage";
import Dashboard from "./components/Pages/Dashboard";
import allReducers from "./redux/reducers";
// import { httpClient } from "./HttpClient";

import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: allReducers,
});

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </Provider>
  );
}

render(<App />, document.getElementById("root"));
