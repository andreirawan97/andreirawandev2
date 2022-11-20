import { Masonry } from "@mui/lab";

import { Loading, Button } from "../core-ui";
import { Recipe } from "../types/globalTypes";

import RecipeCard from "./RecipeCard";

type Props = {
  totalRecipes?: number;
  recipes: Recipe[];
  isFetchingMoreRecipes: boolean;
  onClickGetMoreRecipes?: () => void;
  onClickRecipe?: (id: number) => void;
};

export default function RecipeList(props: Props) {
  const {
    recipes,
    onClickRecipe,
    onClickGetMoreRecipes,
    isFetchingMoreRecipes,
    totalRecipes = Number.POSITIVE_INFINITY,
  } = props;

  return (
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
          <RecipeCard recipe={recipe} key={i} onClickRecipe={onClickRecipe} />
        ))}
      </Masonry>

      <Loading loading={isFetchingMoreRecipes}>
        <div>
          {!!(totalRecipes > recipes.length) ? (
            <Button
              label="Load More"
              containerStyle={{
                marginTop: 24,
              }}
              labelStyle={{
                color: "white",
                fontWeight: "bold",
              }}
              onClick={onClickGetMoreRecipes}
            />
          ) : (
            <div
              className="w-2 h-2 bg-gray-400"
              style={{
                borderRadius: 12,
              }}
            ></div>
          )}
        </div>
      </Loading>
    </div>
  );
}
