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
  searchRecipe: (
    query: string,
    offset: number = 0
  ): Promise<
    AxiosResponse<{
      number: number;
      offset: number;
      results: Recipe[];
      totalResults: number;
    }>
  > => {
    return api.get(`/recipes/complexSearch`, {
      params: {
        addRecipeInformation: true,
        apiKey: SECRET,
        number: 9,
        query,
        offset,
      },
    });
  },
};

export default recipeService;
