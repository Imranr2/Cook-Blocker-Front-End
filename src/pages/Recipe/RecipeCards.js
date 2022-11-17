import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeCards = ({ recipes }) => {
  return recipes.map((recipe, idx) => {
    <RecipeCard
      name={recipe.name}
      imageUrl={recipe.image.imageUrl}
      price={recipe.price}
      description={recipe.desc}
    />;
  });
};

export default RecipeCards;
