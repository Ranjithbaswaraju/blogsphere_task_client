import axios from "axios";
import React, { useState } from "react";
import { baseURL } from "../src/App.jsx";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("author");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(`${baseURL}/auth/signup`, {
        name,
        email,
        password,
        role,
      });
      alert(result.data.message || "signup succesfull");
      navigate("/Login");
    } catch (err) {
      console.log(err || "signup failed");
    }
  };

  return (
    <>
      <div style={{ width: "350px", margin: "40px auto" }}>
        <h2>Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Email</label>
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Password</label>
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Role</label>
            <br />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="author">Author</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account?</p>
        <button
          type="button"
          onClick={() => navigate("/login")}
          style={{ cursor: "pointer", padding: "5px 10px", marginTop: "5px" }}
        >
          Go to Login
        </button>
      </div>
    </>
  );
};

export default Signup;
