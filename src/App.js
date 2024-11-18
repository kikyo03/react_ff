import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./log";
import SignUp from "./Signup";

const App = () => {
  return (
    <Router basename="/react_ff">  {/* Use the same basename as your deployed app */}
      <Routes>
        {/* Route for "/" to redirect to "/login" */}
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Add any other routes you want */}
      </Routes>
    </Router>
  );
};

export default App;
