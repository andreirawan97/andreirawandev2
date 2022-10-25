import { CircularProgress } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

import {
  Alert,
  RecipeCard,
  Searchbar,
} from "../../features/Cookbook/components";
import recipeService from "../../features/Cookbook/services/recipeService";
import { Recipe } from "../../features/Cookbook/types/globalTypes";
import { Button } from "../../features/Cookbook/core-ui";

import "./index.css";

export default function BrowsePage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isFetchingRecipes, setFetchingRecipes] = useState(false);
  const [isFetchingMoreRecipes, setFetchingMoreRecipes] = useState(false);
  const [error, setError] = useState<string>("");

  const getRandomRecipes = async () => {
    try {
      setRecipes([]);
      setFetchingRecipes(true);
      setError("");

      const { data } = await recipeService.getRandomRecipes();
      setRecipes(data.recipes);
    } catch (e) {
      const _e = e as AxiosError;
      setError(_e.message);
    } finally {
      setFetchingRecipes(false);
    }
  };

  const getMoreRandomRecipes = async () => {
    try {
      setFetchingMoreRecipes(true);
      setError("");

      const { data } = await recipeService.getRandomRecipes();
      const newRecipes = [...recipes, ...data.recipes];

      console.log(newRecipes);

      setRecipes(newRecipes);
    } catch (e) {
      const _e = e as AxiosError;
      setError(_e.message);
    } finally {
      setFetchingMoreRecipes(false);
    }
  };

  const onClickRecipe = (id: number) => {
    window.open(`/cookbook/browse/${id}`);
  };

  useEffect(() => {
    getRandomRecipes();
  }, []);

  return (
    <div
      className="flex flex-1 flex-col items-center py-12 min-h-screen px-6"
      style={{
        backgroundColor: "#fcfbff",
      }}
    >
      <span
        className="font-bold md:text-4xl text-2xl text-center mb-6"
        style={{
          color: "#4b4b65",
        }}
      >
        Hello, let us find you find a recipe!
      </span>

      <Searchbar onClickRandom={getRandomRecipes} />

      <div className="flex flex-1 flex-col mx-3 w-full max-w-4xl items-center">
        {isFetchingRecipes ? (
          <CircularProgress />
        ) : (
          !!recipes.length && (
            <div className="flex flex-1 w-full flex-col items-center">
              <Masonry
                columns={{
                  xs: 1,
                  sm: 2,
                  md: 2,
                  lg: 3,
                  xl: 3,
                }}
                spacing={3}
              >
                {recipes.map((recipe, i) => (
                  <RecipeCard
                    recipe={recipe}
                    key={i}
                    onClickRecipe={onClickRecipe}
                  />
                ))}
              </Masonry>

              {isFetchingMoreRecipes ? (
                <CircularProgress />
              ) : (
                <Button
                  label="Load More"
                  containerStyle={{
                    marginTop: 24,
                  }}
                  labelStyle={{
                    color: "white",
                    fontWeight: "bold",
                  }}
                  onClick={getMoreRandomRecipes}
                />
              )}
            </div>
          )
        )}
      </div>

      <Alert
        message={error}
        isOpen={!!error}
        onClose={() => setError("")}
        severity="error"
      />
    </div>
  );
}
