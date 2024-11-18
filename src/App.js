import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./log";
import SignUp from "./Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for "/" to redirect to "/login" */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
