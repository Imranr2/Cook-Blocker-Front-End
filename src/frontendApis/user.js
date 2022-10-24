import authAxios from "../frontendApis/axiosClient";
import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
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
    errorMsg,
    setErrorMsg,
    isAuth,
    setIsAuth,
    register,
    login,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
