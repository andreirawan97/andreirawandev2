import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

import {
  Alert,
  RecipeList,
  Searchbar,
} from "../../features/Cookbook/components";
import recipeService from "../../features/Cookbook/services/recipeService";
import {
  APIErrorResponse,
  Recipe,
} from "../../features/Cookbook/types/globalTypes";
import { Loading } from "../../features/Cookbook/core-ui";

import "./index.css";
import { useNavigate } from "react-router-dom";

export default function BrowsePage() {
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

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
      const _e = e as AxiosError<APIErrorResponse>;
      if (_e.response) {
        setError(
          `Error ${_e.response.data.code} - ${_e.response.data.message}`
        );
      } else {
        setError("Unknown error occured.");
      }
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

      setRecipes(newRecipes);
    } catch (e) {
      const _e = e as AxiosError<APIErrorResponse>;
      if (_e.response) {
        setError(
          `Error ${_e.response.data.code} - ${_e.response.data.message}`
        );
      } else {
        setError("Unknown error occured.");
      }
    } finally {
      setFetchingMoreRecipes(false);
    }
  };

  const onSubmitSearch = () => {
    if (searchQuery) {
      navigate(`/cookbook/search?q=${searchQuery}`);
    }
    console.log(searchQuery);
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
        Hello, let us help you find a recipe!
      </span>

      <Searchbar
        value={searchQuery}
        onSubmit={onSubmitSearch}
        onClickRandom={getRandomRecipes}
        onChangeText={setSearchQuery}
      />

      <div className="flex flex-1 flex-col mx-3 w-full max-w-4xl items-center mb-3">
        <Loading loading={isFetchingRecipes}>
          {!!recipes.length ? (
            <RecipeList
              onClickGetMoreRecipes={getMoreRandomRecipes}
              isFetchingMoreRecipes={isFetchingMoreRecipes}
              onClickRecipe={onClickRecipe}
              recipes={recipes}
            />
          ) : (
            <></>
          )}
        </Loading>
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
