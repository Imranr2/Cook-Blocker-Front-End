import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import NavBar from "../../components/Navbar";
import MenuButton from "../../components/MenuButton";
import { useNavigate } from "react-router-dom";
import ReservationTable from "./ReservationTable";
import { useContext } from "react";
import ReservationContext from "../../frontendApis/reservation";

export const ViewReservation = () => {
  const { loading, refresh, getReservations } = useContext(ReservationContext);

  useEffect(() => {
    getReservations();
  }, [refresh]);

  const navigate = useNavigate();

  return (
    <>
      {!loading && (
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
              <MenuButton
                onClick={() => navigate("/createReservation")}
                sx={{ fontSize: "16px", fontWeight: 500 }}
              >
                Create Reservation
              </MenuButton>
            </Grid>
          </Grid>
          <Grid sx={{ padding: "20px 56px" }}>
            <ReservationTable />
          </Grid>
        </Grid>
      )}
    </>
  );
};
