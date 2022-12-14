import React from "react";
import "../style.css";
import { UserContext } from "../../frontendApis/user";
import { useContext, useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { errorMsg, login } = useContext(UserContext);

  const handleLogin = (e) => {
    login(username, password);
    e.preventDefault();
    setUsername("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="left">
        <img className="landing-image" src="/LandingImage.svg" alt="" />
        <div className="title">
          <span style={{ color: "#EB7C68" }}>Cook</span>
          <span style={{ color: "#EAECF5" }}>Blocker</span>
        </div>
      </div>
      <div className="right">
        <div className="login-card">
          <div className="login">Login</div>
          <div className="form">
            <form onSubmit={handleLogin}>
              <label>
                <p>Username</p>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label>
                <p>Password</p>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="last"
                />
              </label>
              <div>
                <button type="submit">Login</button>
              </div>
              <a href="/register">Don't have an account? Click here</a>
              {errorMsg && <div>{errorMsg}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
