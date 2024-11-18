import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  console.log("Rendering SignUp component"); // Log to ensure it's rendered

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    pass: "",
    role: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    if (!formData.fname || !formData.lname || !formData.email || !formData.pass || !formData.role) {
      setError("Please fill all the fields");
      setSuccess("");
      return;
    }

    console.log("Form data submitted:", formData); // Log form data

    // Send data to PHP backend
    fetch("http://localhost/react-db/signup.php", {  // Change this to your actual PHP path
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),  // Send the form data as JSON
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from server:", data); // Log response from server
        if (data.success) {
          setSuccess(data.message); // Show success message
          setError(""); // Clear any previous error message
        } else {
          setError(data.message); // Show error message
          setSuccess(""); // Clear any previous success message
        }
      })
      .catch((error) => {
        console.error("Error occurred:", error); // Log error
        setError("An error occurred. Please try again.");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form className="shadow w-450 p-3" onSubmit={handleSubmit}>
        <h4 className="display-4 fs-1">Create Account</h4>
        <br />
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        {success && (
          <div className="alert alert-success" role="alert">
            {success}
          </div>
        )}

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              name="fname"
              value={formData.fname}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lname"
              value={formData.lname}
              onChange={handleInputChange}
            />
          </div>
        </div>

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

        <div className="mb-3">
          <label className="form-label">Role</label>
          <select
            className="form-control"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Select a role
            </option>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>

        {/* Login Link */}
        <div className="mt-3">
          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
