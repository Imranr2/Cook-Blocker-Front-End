import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ChefHome from "./pages/Home/ChefHome";
import ServerHome from "./pages/Home/ServerHome";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";
import PrivateRoutes from "./utils/PrivateRoutes";
import { useContext } from "react";
import UserContext from "./frontendApis/user";
import { RecipeContextProvider } from "./frontendApis/recipe";
import ViewRecipe from "./pages/Recipe/ViewRecipe";
import CreateRecipe from "./pages/Recipe/CreateRecipe";
import { ViewReservation } from "./pages/Reservation/ViewReservation";
import CreateReservation from "./pages/Reservation/CreateReservation";
import CreateOrder from "./pages/Order/CreateOrder";
import { OrderContextProvider } from "./frontendApis/order";
import ViewOrder from "./pages/Order/ViewOrder";
import { ReservationContextProvider } from "./frontendApis/reservation";
import { TableContextProvider } from "./frontendApis/table";

function App() {
  const { role } = useContext(UserContext);
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route
            path="/home"
            element={
              localStorage.getItem("role") === "chef" ? (
                <RecipeContextProvider>
                  <ChefHome />
                </RecipeContextProvider>
              ) : (
                <ServerHome />
              )
            }
          />
          <Route
            path="/recipe"
            element={
              <RecipeContextProvider>
                <ViewRecipe />
              </RecipeContextProvider>
            }
          />
          <Route
            path="/createRecipe"
            element={
              <RecipeContextProvider>
                <CreateRecipe />
              </RecipeContextProvider>
            }
          />
          <Route
            path="/reservation"
            element={
              <ReservationContextProvider>
                <ViewReservation />
              </ReservationContextProvider>
            }
          />
          <Route
            path="/createReservation"
            element={
              <ReservationContextProvider>
                <TableContextProvider>
                  <CreateReservation />
                </TableContextProvider>
              </ReservationContextProvider>
            }
          />
          <Route
            path="/order"
            element={
              <OrderContextProvider>
                <ViewOrder />
              </OrderContextProvider>
            }
          />
          <Route
            path="/createOrder"
            element={
              <OrderContextProvider>
                <TableContextProvider>
                  <CreateOrder />
                </TableContextProvider>
              </OrderContextProvider>
            }
          />
        </Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
