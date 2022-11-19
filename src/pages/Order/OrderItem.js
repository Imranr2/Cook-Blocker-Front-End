import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import RecipeContext from "../../frontendApis/recipe";

const OrderItem = ({
  name,
  imageUrl,
  price,
  description,
  steps,
  ingredients,
}) => {
  // const { setSelectedRecipe } = useContext(RecipeContext);

  // const setRecipe = () => {
  //   setSelectedRecipe({
  //     name: name,
  //     description: description,
  //     ingredients: ingredients,
  //     steps: steps,
  //   });
  // };

  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        border: "2px solid #3D3C3A",
        borderRadius: "6px",
      }}
    >
      <Grid
        container
        sx={{
          pl: "45px",
          pr: "45px",
          pt: "19px",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            top: "0",
            right: "0",
            color: "primary.light",
          }}
        >
          <CloseIcon />
        </IconButton>
        <CardActionArea>
          <Box sx={{ width: "12em", height: "12em" }}>
            <img src={imageUrl} style={{ width: "100%" }} alt="Recipe"></img>
          </Box>
        </CardActionArea>
      </Grid>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" sx={{ color: "primary.contrastText" }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "secondary.contrastText" }}>
          {String(description).slice(0, 35) + "..."}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ alignSelf: "flex-end", color: "primary.contrastText" }}
        >
          {"CAD$" + price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OrderItem;
