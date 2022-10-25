import { AxiosResponse } from "axios";
import api, { SECRET } from "../api/api";
import { Recipe, Recipes } from "../types/globalTypes";

const recipeService = {
  getRandomRecipes: (): Promise<AxiosResponse<Recipes>> => {
    return api.get("/recipes/random", {
      params: {
        apiKey: SECRET,
        number: 9,
      },
    });
  },
  getRecipeDetail: (id: string): Promise<AxiosResponse<Recipe>> => {
    return api.get(`/recipes/${id}/information`, {
      params: {
        apiKey: SECRET,
      },
    });
  },
};

export default recipeService;
