import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder for authentication logic
    if (!formData.email || !formData.pass) {
      setError("Please fill in all fields.");
    } else {
      setError("");
      console.log("Login data submitted:", formData);
      // Add your login logic here (e.g., API call)
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form className="shadow w-450 p-3" onSubmit={handleSubmit}>
        <h4 className="display-4 fs-1">LOGIN</h4>
        <br />
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="pass"
            value={formData.pass}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>

        <div className="mt-3">
          {/* Use Link component for navigation */}
          <p>Don't have an account? <Link to="/signup" className="link-secondary ms-3">Sign Up</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
