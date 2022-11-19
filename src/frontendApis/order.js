import React from "react";
import authAxios from "./axiosClient";

export const OrderContext = createContext(null);

export const OrderContextProvider = ({ children }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [orders, setOrders] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const getRecipes = () => {
    authAxios
      .get("/menuitem", {})
      .then((res) => {
        setLoading(false);
        const data = res.data;
        if (data.errorCode !== 0) {
          throw Error(data.error);
        }
        setRecipes(data.menuItems);
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
      });
  };

  const getOrders = () => {
    authAxios
      .get("/order", {})
      .then((res) => {
        setLoading(false);
        const data = res.data;
        if (data.errorCode !== 0) {
          throw Error(data.error);
        }
        setOrders(data.orders);
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
      });
  };

  const createOrder = (tableNo, price) => {
    authAxios
      .post("/order", {
        tableNumber: tableNo,
        price: price,
        orderItems: orderItems,
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

  const completeOrder = (id) => {
    authAxios
      .put(`/order/${id}`, {})
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

  const value = {
    recipes,
    loading,
    errorMsg,
    orderItems,
    setOrderItems,
    getRecipes,
    getOrders,
    createOrder,
    completeOrder,
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

export default OrderContext;