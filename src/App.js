import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { UserContextProvider } from "./frontendApis/user";
import Home from "./pages/Home/Home";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="home" element={<Home />}></Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
