import authAxios from "./axiosClient";
import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("chef");
  const navigate = useNavigate();

  const register = (username, password, name, role) => {
    authAxios
      .post("/register", {
        username: username,
        password: password,
        name: name,
        role: role,
      })
      .then((res) => {
        const data = res.data;
        if (data.errorCode !== 0) {
          throw Error(data.error);
        }
        navigate("/");
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
      });
  };

  const login = (username, password) => {
    authAxios
      .post("/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        const data = res.data;
        if (data.errorCode !== 0) {
          throw Error(data.error);
        }
        const user = data.user;
        setName(user.name);
        setRole(user.role);
        setIsAuth(true);
        navigate("/home");
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
      });
  };

  const value = {
    name,
    role,
    errorMsg,
    isAuth,
    register,
    login,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
