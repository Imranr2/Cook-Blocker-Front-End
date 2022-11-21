import React from "react";
import NavBar from "../../components/Navbar";
import { Typography, Box } from "@mui/material";
import MenuCard from "../../components/MenuCard";
import MenuButton from "../../components/MenuButton";
import Prompt from "../../components/Prompt";
import UserContext from "../../frontendApis/user";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const ServerHome = () => {
  const { name } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <NavBar></NavBar>
      <Box>
        <Box
          sx={{
            height: "92px",
            paddingTop: "30px",
            paddingBottom: "19px",
            paddingLeft: "56px",
          }}
        >
          <Typography variant="h4" sx={{ color: "primary.contrastText" }}>
            Welcome back, Server {name}
          </Typography>
        </Box>
        <Prompt />
        <Box
          padding={"32px 100px"}
          display="flex"
          justifyContent={"space-around"}
        >
          <MenuCard>
            <Typography variant="h6" sx={{ color: "primary.contrastText" }}>
              Reservations
            </Typography>
            <Box component="img" src="reservation.svg"></Box>
            <MenuButton onClick={() => navigate("/reservation")}>
              View Reservations
            </MenuButton>
            <MenuButton onClick={() => navigate("/createReservation")}>
              Create Reservation
            </MenuButton>
          </MenuCard>
          <MenuCard>
            <Typography variant="h6" sx={{ color: "primary.contrastText" }}>
              Orders
            </Typography>
            <Box component="img" src="order.svg"></Box>
            <MenuButton onClick={() => navigate("/order")}>
              View Orders
            </MenuButton>
            <MenuButton onClick={() => navigate("/createOrder")}>
              Create Order
            </MenuButton>
          </MenuCard>
        </Box>
      </Box>
    </Box>
  );
};

export default ServerHome;
