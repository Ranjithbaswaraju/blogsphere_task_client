import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { baseURL } from "../src/App";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(`${baseURL}/auth/login`, {
        email,
        password,
      });
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("user", JSON.stringify(result.data.user));
      alert("Login successful");

      if (result.data.user.role === "author") {
        navigate("/author");
      } else if (result.data.user.role === "admin") {
        navigate("/admin");
      }
       else {
        navigate("/signup");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
    console.log("hello")
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary" className="w-100">
          Login
        </Button>
      </Form>
      <p style={{ color: "red" }}>Create Account?</p>
      <button
        type="button"
        onClick={() => navigate("/signup")}
        style={{ cursor: "pointer", padding: "5px 10px", marginTop: "5px" }}
      >
        Go to Signup
      </button>
    </>
  );
};
export default Login;
