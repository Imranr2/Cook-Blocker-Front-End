import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import NavBar from "../../components/Navbar";
import MenuButton from "../../components/MenuButton";
import { useNavigate } from "react-router-dom";
import StickyHeadTable from "./StickyHeadTable";

export const ViewReservation = () => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      direction="column"
      sx={{
        backgroundColor: "secondary.main",
        height: "100vh",
      }}
    >
      <NavBar />
      <Grid container direction="column" sx={{ pt: "20px" }}>
        <Grid
          container
          direction="row"
          justifyContent={"space-between"}
          sx={{ padding: "0px 56px" }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "primary.contrastText",
              alignSelf: "flex-start",
            }}
          >
            All Reservations
          </Typography>
          <MenuButton onClick={() => navigate("/createRecipe")}>
            Create Reservation
          </MenuButton>
        </Grid>
      </Grid>
      <Grid sx={{ padding: "20px 56px" }}>
        <StickyHeadTable />
      </Grid>
    </Grid>
  );
};
