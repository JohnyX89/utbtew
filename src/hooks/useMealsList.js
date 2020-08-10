import { useState, useEffect } from "react";
import axios from "axios";

const useMealsList = () => {
  const url = "https://exercise.cngroup.dk/api/recipes";
  const [meals, setMeals] = useState({
    meals: [],
    error: ""
  });

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      const response = await axios(url);
      setMeals({
        meals: response.data,
        error: ""
      });
      
    } catch ({ message }) {
      setMeals({
        ...meals,
        error: message
      });
    }
  };

  return meals;
};

export default useMealsList;