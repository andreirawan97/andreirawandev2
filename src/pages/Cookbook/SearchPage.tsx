import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AxiosError } from "axios";

import recipeService from "../../features/Cookbook/services/recipeService";
import { RecipeList, Searchbar } from "../../features/Cookbook/components";
import {
  APIErrorResponse,
  Recipe,
} from "../../features/Cookbook/types/globalTypes";
import { Loading } from "../../features/Cookbook/core-ui";
import { Alert } from "../../components";

export default function SearchPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({
    q: "", // Query
  });

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFetchingRecipes, setFetchingRecipes] = useState(false);
  const [isFetchingMoreRecipes, setFetchingMoreRecipes] = useState(false);
  const [error, setError] = useState<string>("");

  const getSearchResult = async (query: string) => {
    try {
      setFetchingRecipes(true);

      const { data } = await recipeService.searchRecipe(query);

      setRecipes(data.results);
      setTotalResults(data.totalResults);
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

  const getMoreSearchResult = async (query: string) => {
    try {
      const _offset = recipes.length;

      setFetchingMoreRecipes(true);

      const { data } = await recipeService.searchRecipe(query, _offset);

      setRecipes((oldRecipes) => [...oldRecipes, ...data.results]);
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

  useEffect(() => {
    const query = searchParams.get("q");

    if (query) {
      setSearchQuery(query);
      getSearchResult(query);
    } else {
      navigate("/cookbook/browse");
    }
  }, [navigate, searchParams]);

  const onSubmitSearch = () => {
    searchParams.set("q", searchQuery);
    setSearchParams(searchParams);
  };

  const onClickGetMoreRecipes = () => {
    getMoreSearchResult(searchQuery);
  };

  const onClickRecipe = (id: number) => {
    window.open(`/cookbook/browse/${id}`);
  };

  return (
    <div
      className="flex flex-1 flex-col items-center py-12 min-h-screen px-6"
      style={{
        backgroundColor: "#fcfbff",
      }}
    >
      <div className="flex flex-1 flex-col mx-3 w-full max-w-4xl items-center mb-3">
        <Searchbar
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmit={onSubmitSearch}
        />

        <Loading loading={isFetchingRecipes}>
          {!!recipes.length ? (
            <div className="flex flex-1 w-full flex-col">
              <div className="flex flex-col md:flex-row mb-6 md:items-center">
                <span className="text-xl">
                  Showing results for <b>"{searchParams.get("q")}"</b>
                </span>

                <span className="md:ml-6 text-sm text-gray-500">
                  {totalResults} results
                </span>
              </div>

              <RecipeList
                isFetchingMoreRecipes={isFetchingMoreRecipes}
                onClickGetMoreRecipes={onClickGetMoreRecipes}
                onClickRecipe={onClickRecipe}
                recipes={recipes}
              />
            </div>
          ) : (
            <div className="flex flex-col md:flex-row mb-6 md:items-center">
              <span className="text-xl">
                Showing results for <b>"{searchParams.get("q")}"</b>
              </span>

              <span className="md:ml-6 text-sm text-gray-500">
                {totalResults} results
              </span>
            </div>
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
