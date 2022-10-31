import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ChefHome from "./pages/Home/ChefHome";
import ServerHome from "./pages/Home/ServerHome";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";
import PrivateRoutes from "./utils/PrivateRoutes";
import { useContext } from "react";
import UserContext from "./frontendApis/user";
import { RecipeContextProvider } from "./frontendApis/recipe";
import ViewRecipe from "./pages/Recipe/ViewRecipe";
import CreateRecipe from "./pages/Recipe/CreateRecipe";

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
          ></Route>
          <Route
            path="/recipe"
            element={
              <RecipeContextProvider>
                <ViewRecipe />
              </RecipeContextProvider>
            }
          ></Route>
          <Route
            path="/createRecipe"
            element={
              <RecipeContextProvider>
                <CreateRecipe />
              </RecipeContextProvider>
            }
          ></Route>
        </Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
