import React, { useContext, useState } from "react";
import { UserContext } from "../../frontendApis/user";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const { errorMsg, register } = useContext(UserContext);

  const handleRegister = (e) => {
    e.preventDefault();
    register(username, password, name, role);
    setUsername("");
    setPassword("");
    setName("");
    setRole("");
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
        <div className="register-card">
          <div className="register">Create an Account</div>
          <div className="form">
            <form onSubmit={handleRegister}>
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
                />
              </label>
              <label>
                <p>Name</p>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label>
                <p>Role</p>
                <input
                  type="text"
                  placeholder="Role"
                  name="role"
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="last"
                />
              </label>
              <div>
                <button type="submit">Register</button>
              </div>
              <a href="/">Already have an account? Click here</a>
              {errorMsg && <div>{errorMsg}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
