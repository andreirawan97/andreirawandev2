import { CircularProgress } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { AccessTime, GroupOutlined } from "@mui/icons-material";

import { Alert, Searchbar } from "../../features/Cookbook/components";
import browsePageService from "../../features/Cookbook/services/browsePageService";
import { MOCK_RECIPES } from "../../features/Cookbook/mocks/recipes";
import { Recipe } from "../../features/Cookbook/types/globalTypes";
import { LazyImage } from "../../features/Cookbook/core-ui";

import "./index.css";

export default function BrowsePage() {
  const [recipes, setRecipes] = useState<Recipe[]>();
  const [isFetchingRecipes, setFetchingRecipes] = useState(true);
  const [error, setError] = useState<string>("");

  const getRandomRecipes = async () => {
    try {
      setRecipes(undefined);
      setFetchingRecipes(true);
      setError("");

      const { data } = await browsePageService.getRandomRecipes();
      setRecipes(data.recipes);
    } catch (e) {
      const _e = e as AxiosError;
      setError(_e.message);
    } finally {
      setFetchingRecipes(false);
    }
  };

  useEffect(() => {
    getRandomRecipes();
  }, []);

  return (
    <div
      className="flex flex-1 flex-col items-center py-12 min-h-screen px-12"
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

      <div className="flex flex-1 flex-col mx-3  w-full max-w-4xl items-center">
        {isFetchingRecipes ? (
          <CircularProgress />
        ) : (
          recipes &&
          !!recipes && (
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
                <div key={i}>
                  <div className="flex flex-1 flex-col rounded-xl bg-white shadow-lg">
                    {recipe.image && (
                      <LazyImage src={recipe.image} className="rounded-t-xl" />
                    )}

                    <span className="font-bold mb-6 mx-3 text-center mt-6">
                      {recipe.title}
                    </span>

                    <div className="flex flex-row items-center justify-evenly mb-6">
                      <div className="flex flex-col items-center">
                        <AccessTime />
                        <span className="text-gray-500">
                          {recipe.readyInMinutes} min
                        </span>
                      </div>

                      <div className="flex flex-col items-center">
                        <GroupOutlined color="info" />
                        <span className="text-gray-500">
                          {recipe.servings} servings
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Masonry>
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
