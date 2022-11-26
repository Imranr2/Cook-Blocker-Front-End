import React from "react";
import { createContext } from "react";
import { useState } from "react";
import authAxios from "./axiosClient";

export const ReservationContext = createContext(null);

export const ReservationContextProvider = ({ children }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const getReservations = () => {
    authAxios
      .get("/reservation", {})
      .then((res) => {
        setLoading(false);
        const data = res.data;
        if (data.errorCode !== 0) {
          throw Error(data.error);
        }
        setReservations(data.reservations);
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
      });
  };

  const createReservation = (
    customerName,
    customerPhone,
    tableNumber,
    pax,
    dateTime
  ) => {
    authAxios
      .post("/reservation", {
        customerName: customerName,
        customerPhone: customerPhone,
        tableNumber: tableNumber,
        pax: pax,
        dateTime: dateTime,
      })
      .then((res) => {
        const data = res.data;
        if (data.errorCode !== 0) {
          throw Error(data.error);
        }
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
      });
  };

  const fulfillReservation = (id) => {
    setRefresh(true);
    authAxios
      .put(`/reservation/${id}`, {})
      .then((res) => {
        const data = res.data;
        if (data.errorCode !== 0) {
          throw Error(data.error);
        }
        setRefresh(false);
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
      });
  };

  const deleteReservation = (id) => {
    console.log("fk");
    setRefresh(true);
    authAxios
      .delete(`/reservation/${id}`, {})
      .then((res) => {
        const data = res.data;
        if (data.errorCode !== 0) {
          throw Error(data.error);
        }
        setRefresh(false);
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
      });
  };

  const value = {
    reservations,
    loading,
    errorMsg,
    refresh,
    getReservations,
    createReservation,
    fulfillReservation,
    deleteReservation,
  };

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
};

export default ReservationContext;
