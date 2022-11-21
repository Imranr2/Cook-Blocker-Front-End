import React from "react";
import { useState } from "react";
import { createContext } from "react";
import authAxios from "./axiosClient";

export const RecipeContext = createContext(null);

export const RecipeContextProvider = ({ children }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const getRecipes = async () => {
    await authAxios
      .get("/menuitem", {})
      .then((res) => {
        setLoading(false);
        const data = res.data;
        if (data.errorCode !== 0) {
          throw Error(data.error);
        }
        setRecipes(data.menuItems);
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
      });
  };

  const getRecipeWithID = (id) => {
    authAxios
      .get(`/menuitem/${id}`, {})
      .then((res) => {
        const data = res.data;
        if (data.errorCode !== 0) {
          throw Error(data.error);
        }
        setRecipe(data.menuItem);
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
      });
  };

  const createRecipe = (
    name,
    description,
    price,
    steps,
    image,
    ingredients
  ) => {
    const formData = new FormData();
    formData.append("image", image);

    authAxios
      .post("/menuitem/image", formData, {
        headers: {
          "Content-Type": "multipaprt/form-data",
        },
      })
      .then((res) => {
        const data = res.data;
        return authAxios.post("/menuitem", {
          name: name,
          desc: description,
          price: parseFloat(price),
          steps: steps,
          image: { imageUrl: data.imageUrl },
          ingredients: ingredients,
        });
      })
      .then((res) => {
        const data = res.data;
        if (data.errorCode !== 0) {
          throw Error(data.error);
        }
      })
      .catch((err) => {
        console.log(err.message);
        setErrorMsg(err.message);
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
      });
  };

  const deleteRecipe = (id) => {
    authAxios
      .delete(`/menuitem/${id}`, {})
      .then((res) => {
        const data = res.data;
        if (data.errorCode !== 0) {
          throw Error(data.error);
        }
      })
      .catch((err) => {
        setErrorMsg(err.messsage);
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
      });
  };

  const value = {
    recipes,
    recipe,
    loading,
    errorMsg,
    setErrorMsg,
    selectedRecipe,
    setSelectedRecipe,
    getRecipes,
    getRecipeWithID,
    createRecipe,
    deleteRecipe,
  };

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};

export default RecipeContext;
