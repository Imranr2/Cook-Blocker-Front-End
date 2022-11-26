import React, { useState } from "react";
import { createContext } from "react";
import authAxios from "../frontendApis/axiosClient";

export const TableContext = createContext(null);

export const TableContextProvider = ({ children }) => {
  const [tableNumber, setTableNumber] = useState(-1);
  const [tables, setTables] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);

  const getTables = () => {
    setLoading(true);
    authAxios
      .get("/table", {})
      .then((res) => {
        const data = res.data;
        if (data.errorCode !== 0) {
          throw Error(data.error);
        }
        setTables(data.tables);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(err.messsage);
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
      });
  };

  const value = {
    tableNumber,
    tables,
    errorMsg,
    setTableNumber,
    getTables,
  };

  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};

export default TableContext;
