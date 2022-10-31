import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  if (isTokenExpired(document.cookie)) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

const isTokenExpired = (cookieString) => {
  let cookies = cookieString.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let key = cookies[i].split("=")[0];
    if (key === "token") {
      return false;
    }
  }
  return true;
};

export default PrivateRoutes;
