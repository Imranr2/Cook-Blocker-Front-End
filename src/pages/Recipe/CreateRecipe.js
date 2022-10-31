import React from "react";
import NavBar from "../../components/Navbar";
import {
  Typography,
  Box,
  IconButton,
  Grid,
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import RecipeContext from "../../frontendApis/recipe";
import { useContext } from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MenuButton from "../../components/MenuButton";
import CloseIcon from "@mui/icons-material/Close";

const CreateRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const { errorMsg, setErrorMsg, createRecipe } = useContext(RecipeContext);

  const generate = () => {
    return ingredients.map((ingr, idx) => (
      <ListItem
        key={idx}
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => deleteIngredient(ingr)}
          >
            <DeleteOutlineIcon sx={{ color: "primary.light" }} />
          </IconButton>
        }
      >
        <ListItemText primary={ingr.description} sx={{ color: "#A9A9A9" }} />
      </ListItem>
    ));
  };

  const handleUploadImage = (e) => {
    setImage(e.target.files[0]);
    setImageFile(URL.createObjectURL(e.target.files[0]));
  };

  const deleteIngredient = (ingr) => {
    setIngredients(
      ingredients.filter((x) => {
        return x !== ingr;
      })
    );
  };

  const addIngredient = (desc) => {
    if (desc.length === 0) {
      setErrorMsg("Ingredient description cannot be empty");
      return;
    }
    setIngredients([...ingredients, { description: desc }]);
    setIngredient("");
    setErrorMsg("");
  };

  const create = () => {
    createRecipe(recipeName, description, price, steps, image, ingredients);
  };

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
            paddingBottom: "19px",
            paddingLeft: "56px",
          }}
        >
          <Typography variant="h6" sx={{ color: "primary.contrastText" }}>
            Create Recipe
          </Typography>
          <Grid
            container
            direction="row"
            columnGap={5}
            sx={{
              width: "1438px",
              height: "530px",
              backgroundColor: "primary.main",
              marginTop: "24px",
              padding: "38px 34px",
              borderRadius: "10px",
            }}
          >
            <Grid
              container
              direction="column"
              rowGap={2}
              sx={{
                width: "650px",
              }}
            >
              <Grid container direction="column" rowGap={1.5}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "primary.contrastText",
                  }}
                >
                  Recipe Name
                </Typography>
                <TextField
                  value={recipeName}
                  variant="outlined"
                  label={recipeName === "" ? "Recipe Name" : ""}
                  inputProps={{ maxLength: 38 }}
                  InputLabelProps={{
                    shrink: false,
                    style: {
                      color: "#A9A9A9",
                    },
                  }}
                  sx={{
                    backgroundColor: "secondary.main",
                    width: "338px",
                    padding: "px",
                    input: {
                      color: "#A9A9A9",
                    },
                  }}
                  onChange={(e) => setRecipeName(e.target.value)}
                />
                <TextField
                  value={description}
                  variant="outlined"
                  multiline
                  rows={1}
                  label={
                    description === ""
                      ? "A short description of the recipe..."
                      : ""
                  }
                  inputProps={{
                    maxLength: 250,
                    style: {
                      color: "A9A9A9",
                    },
                  }}
                  InputLabelProps={{
                    shrink: false,
                    style: {
                      color: "#A9A9A9",
                    },
                  }}
                  sx={{
                    backgroundColor: "secondary.main",
                    width: "650px",
                  }}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
              <Grid container direction="column" rowGap={1.5}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "primary.contrastText",
                  }}
                >
                  Preparation Details
                </Typography>
                <TextField
                  value={steps}
                  variant="outlined"
                  multiline
                  rows={9.3}
                  label={
                    steps === ""
                      ? "List steps on how to prepare the dish here..."
                      : ""
                  }
                  InputLabelProps={{
                    shrink: false,
                    style: {
                      color: "#A9A9A9",
                    },
                  }}
                  sx={{
                    backgroundColor: "secondary.main",
                    width: "650px",
                  }}
                  onChange={(e) => setSteps(e.target.value)}
                />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Typography
                variant="body1"
                sx={{
                  color: "primary.contrastText",
                }}
              >
                Ingredients
              </Typography>
              <TextField
                value={ingredient}
                variant="outlined"
                error={errorMsg !== ""}
                label={ingredient === "" ? "Type ingredient name here..." : ""}
                InputLabelProps={{
                  shrink: false,
                  style: {
                    color: "#A9A9A9",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => addIngredient(ingredient)}>
                        <AddIcon sx={{ color: "primary.light" }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  backgroundColor: "secondary.main",
                  width: "390px",
                  input: {
                    color: "#A9A9A9",
                  },
                }}
                onChange={(e) => setIngredient(e.target.value)}
              />
              <Paper
                sx={{
                  width: "390px",
                  height: "250px",
                  maxHeight: "250px",
                  backgroundColor: "secondary.main",
                  overflow: "auto",
                }}
              >
                {ingredients.length === 0 ? (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box component="img" src="ingredient.svg" />
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "secondary.contrastText" }}
                    >
                      No ingredients yet
                    </Typography>
                    <Typography sx={{ color: "secondary.contrastText" }}>
                      Add an ingredient using the input box
                    </Typography>
                  </Box>
                ) : (
                  <List>{generate()}</List>
                )}
              </Paper>
              <Typography
                variant="body1"
                sx={{
                  color: "primary.contrastText",
                }}
              >
                Set Price of Dish
              </Typography>
              <TextField
                value={price}
                variant="outlined"
                label={price === "" ? "CAD$" : ""}
                InputLabelProps={{
                  shrink: false,
                  style: {
                    color: "#A9A9A9",
                  },
                }}
                sx={{
                  backgroundColor: "secondary.main",
                  width: "390px",
                  input: {
                    color: "#A9A9A9",
                  },
                }}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Typography
                variant="body1"
                sx={{
                  color: "primary.contrastText",
                }}
              >
                Product Image
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "134px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "secondary.main",
                    width: "250px",
                    height: "250px",
                    gap: "10px",
                  }}
                >
                  {image ? (
                    <Box>
                      <IconButton
                        sx={{
                          position: "fixed",
                          top: 230,
                          right: 75,
                          zIndex: 2000,
                          color: "primary.light",
                        }}
                        onClick={() => setImage(null)}
                      >
                        <CloseIcon />
                      </IconButton>
                      <img
                        src={imageFile}
                        style={{ width: "100%" }}
                        alt="Remove"
                      ></img>
                    </Box>
                  ) : (
                    <>
                      <Box
                        component="img"
                        src="image.svg"
                        sx={{ mt: "-30px" }}
                      ></Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          mt: "-30px",
                          color: "secondary.contrastText",
                        }}
                      >
                        No image selected
                      </Typography>
                      <MenuButton component="label">
                        Browse
                        <input
                          type="file"
                          accept="image/*"
                          hidden
                          onChange={handleUploadImage}
                        ></input>
                      </MenuButton>
                    </>
                  )}
                </Box>
                <MenuButton onClick={create}>Add Recipe</MenuButton>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default CreateRecipe;
