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

function App() {
  const { role } = useContext(UserContext);
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route
            path="/home"
            element={
              role === "chef" ? (
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
          <Route path="/reservation" element={<ViewReservation />} />
          <Route path="/createReservation" element={<CreateReservation />} />
          <Route
            path="/createOrder"
            element={
              <OrderContextProvider>
                <CreateOrder />
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
