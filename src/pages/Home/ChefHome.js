import React from "react";
import NavBar from "../../components/Navbar";
import { Typography, Box, Grid } from "@mui/material";
import MenuCard from "../../components/MenuCard";
import MenuButton from "../../components/MenuButton";
import Prompt from "../../components/Prompt";
import UserContext from "../../frontendApis/user";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

const ChefHome = () => {
  const { name } = useContext(UserContext);
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
      <NavBar></NavBar>
      <Box>
        <Box
          sx={{
            height: "92px",
            paddingTop: "20px",
            paddingBottom: "9px",
            paddingLeft: "56px",
          }}
        >
          <Typography variant="h5" sx={{ color: "primary.contrastText" }}>
            Welcome back, Chef{" "}
            <Typography
              variant="h5"
              display="inline"
              sx={{ color: "primary.light" }}
            >
              {localStorage.getItem("name")}
            </Typography>
          </Typography>
        </Box>
        <Prompt />
        <Grid
          container
          padding={"32px 100px"}
          direction="row"
          justifyContent="space-around"
        >
          <MenuCard>
            <Typography variant="h6" sx={{ color: "primary.contrastText" }}>
              Recipes
            </Typography>
            <Box component="img" src="recipe.svg"></Box>
            <MenuButton onClick={() => navigate("/recipe")}>
              View Recipes
            </MenuButton>
            <MenuButton onClick={() => navigate("/createRecipe")}>
              Create Recipe
            </MenuButton>
          </MenuCard>
          <MenuCard>
            <Typography variant="h6" sx={{ color: "primary.contrastText" }}>
              Orders
            </Typography>
            <Box component="img" src="order.svg"></Box>
            <MenuButton onClick={() => navigate("/order")} sx={{ mb: "47px" }}>
              View Orders
            </MenuButton>
          </MenuCard>
        </Grid>
      </Box>
    </Grid>
  );
};

export default ChefHome;
