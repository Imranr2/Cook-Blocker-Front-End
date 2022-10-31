import React from "react";
import NavBar from "../../components/Navbar";
import { Typography, Box, Grid } from "@mui/material";
import MenuCard from "../../components/MenuCard";
import MenuButton from "../../components/MenuButton";
import Prompt from "../../components/Prompt";
import UserContext from "../../frontendApis/user";
import RecipeContext from "../../frontendApis/recipe";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const ChefHome = () => {
  const { name } = useContext(UserContext);
  const { getRecipe, createRecipe } = useContext(RecipeContext);
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
            Welcome back, Chef {name}
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
            <MenuButton>View Orders</MenuButton>
          </MenuCard>
        </Grid>
      </Box>
    </Grid>
  );
};

export default ChefHome;
