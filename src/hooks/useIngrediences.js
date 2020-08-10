import { useState, useEffect } from "react";
import axios from "axios";

const useRecipeIngredients = ({ }) => {
  const url = "https://exercise.cngroup.dk/api/recipes/ingredients/";
  const [ingredients, setIngredients] = useState({ ingredients: [], error: "" });

  useEffect(() => {
    fetchRecipes();
  });

  const fetchRecipes = async () => {
    try {
      const result = await axios(url);
      setIngredients({ ingredients: result.data, error: "" });
    } catch ({ message }) {
      setIngredients({ ...ingredients, error: message });
    }
  };

  return ingredients;
};

export default useRecipeIngredients;