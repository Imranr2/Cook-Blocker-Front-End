import React, { useContext, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import NavBar from "../../components/Navbar";
import MenuButton from "../../components/MenuButton";
import { useNavigate } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import RecipeContext from "../../frontendApis/recipe";
import ActionButton from "../../components/ActionButton";

const ViewRecipe = () => {
  const { loading, getRecipes, recipes, selectedRecipe } =
    useContext(RecipeContext);
  const navigate = useNavigate();

  useEffect(() => {
    getRecipes();
  }, []);

  const renderRecipeCards = () => {
    return recipes.map((recipe, idx) => {
      console.log(recipe.image.imageUrl);
      return (
        <Grid item>
          <RecipeCard
            name={recipe.name}
            imageUrl={recipe.image.imageUrl}
            price={recipe.price}
            description={recipe.desc}
            steps={recipe.steps}
            ingredients={recipe.ingredients}
          />
        </Grid>
      );
    });
  };

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
          <Grid container direction="column" sx={{ flexGrow: "1" }}>
            <Grid container direction="row" sx={{ height: "100%" }}>
              <Grid
                container
                direction="column"
                sx={{ pt: "20px", flex: "3", width: "80%" }}
              >
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
                    All Recipes
                  </Typography>
                  <ActionButton
                    onClick={() => navigate("/createRecipe")}
                    bgHover="secondary.light"
                    colorHover="#3D3C3A"
                    bgColor="transparent"
                    color="primary.light"
                    sx={{
                      width: "140px",
                      padding: "5px 10px",
                      margin: "0px",
                      border: 2,
                    }}
                  >
                    Create Recipe
                  </ActionButton>
                </Grid>

                <Grid
                  container
                  direction="row"
                  columnGap={5}
                  sx={{
                    width: "65em",
                    height: "33em",
                    backgroundColor: "primary.main",
                    mt: "24px",
                    borderRadius: "10px",
                    gap: "60px",
                    padding: "43px 43px",
                    overflow: "auto",
                    alignSelf: "center",
                  }}
                >
                  {renderRecipeCards()}
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  flex: "1",
                  backgroundColor: "primary.main",
                  padding: "38px 34px",
                }}
              >
                {selectedRecipe ? (
                  <Grid container>
                    <Grid container direction="column">
                      <Typography
                        variant="h6"
                        sx={{ color: "primary.contrastText" }}
                      >
                        {selectedRecipe.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "secondary.contrastText" }}
                      >
                        {selectedRecipe.description}
                      </Typography>
                    </Grid>
                    <Grid container direction="column">
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "primary.contrastText" }}
                      >
                        Ingredients
                      </Typography>
                      <Typography>
                        {selectedRecipe.ingredients.map((ingr, idx) => {
                          return (
                            <Typography
                              variant="body2"
                              sx={{ color: "primary.contrastText" }}
                            >
                              {ingr.description}
                            </Typography>
                          );
                        })}
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      direction="column"
                      sx={{ overflow: "auto" }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "primary.contrastText" }}
                      >
                        Preparation
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "primary.contrastText" }}
                      >
                        {selectedRecipe.steps}
                      </Typography>
                    </Grid>
                  </Grid>
                ) : (
                  <Grid
                    container
                    direction="column"
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src="/viewRecipe.svg"></img>
                    <Typography
                      variant="h6"
                      sx={{ color: "secondary.contrastText" }}
                    >
                      Nothing to see here
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "secondary.contrastText" }}
                    >
                      Click on a recipe to view its details.
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ViewRecipe;
