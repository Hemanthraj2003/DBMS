import React, { useState } from "react";

const Login = ({ setIsLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        setIsLogin(true);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="LoginCard">
      <h1
        style={{
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
        }}
      >
        LOGIN
      </h1>
      <form onSubmit={handleLogin} className="lightGrey">
        <div className="lightGrey">Username</div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <div className="lightGrey">Password</div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
