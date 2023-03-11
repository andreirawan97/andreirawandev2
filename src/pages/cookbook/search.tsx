import React, { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { useRouter } from "next/router";

import recipeService from "../../features/Cookbook/services/recipeService";
import {
  CookbookHeader,
  RecipeList,
  Searchbar,
} from "../../features/Cookbook/components";
import {
  APIErrorResponse,
  Recipe,
} from "../../features/Cookbook/types/globalTypes";
import { Loading } from "../../features/Cookbook/core-ui";
import { Alert } from "../../components";

export default function SearchPage() {
  const router = useRouter();
  const { q } = router.query as {
    q: string;
  };

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
    if (q) {
      getSearchResult(q);
    }
  }, [q]);

  const onSubmitSearch = () => {
    if (searchQuery) {
      router.push({
        pathname: "/cookbook/search",
        query: {
          q: searchQuery,
        },
      });
    } else {
      router.push("/cookbook/browse");
    }
  };

  const onClickGetMoreRecipes = () => {
    getMoreSearchResult(q);
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
      <CookbookHeader />

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
                  Showing results for <b>"{q}"</b>
                </span>

                <span className="md:ml-6 text-sm text-gray-500">
                  {totalResults} results
                </span>
              </div>

              <RecipeList
                totalRecipes={totalResults}
                isFetchingMoreRecipes={isFetchingMoreRecipes}
                onClickGetMoreRecipes={onClickGetMoreRecipes}
                onClickRecipe={onClickRecipe}
                recipes={recipes}
              />
            </div>
          ) : (
            <div className="flex flex-col md:flex-row mb-6 md:items-center">
              <span className="text-xl">
                Showing results for <b>"{q}"</b>
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
