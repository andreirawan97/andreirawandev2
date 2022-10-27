import { AccessTime, GroupOutlined } from "@mui/icons-material";

import { LazyImage } from "../core-ui";
import { Recipe } from "../types/globalTypes";

type Props = {
  recipe: Recipe;
  onClickRecipe?: (id: number) => void;
};

export default function RecipeCard(props: Props) {
  const { recipe, onClickRecipe } = props;

  return (
    <div
      className="hover:scale-105 transition-transform cursor-pointer"
      onClick={() => {
        onClickRecipe && onClickRecipe(recipe.id);
      }}
    >
      <div className="flex flex-1 flex-col rounded-xl bg-white shadow-lg">
        {recipe.image && (
          <LazyImage
            src={recipe.image}
            className="rounded-t-xl"
            skeletonHeight={180}
          />
        )}

        <span className="font-bold mb-6 mx-3 text-center mt-6">
          {recipe.title}
        </span>

        <div className="flex flex-row items-center justify-evenly mb-6">
          <div className="flex flex-col items-center">
            <AccessTime />
            <span className="text-gray-500">{recipe.readyInMinutes} min</span>
          </div>

          <div className="flex flex-col items-center">
            <GroupOutlined color="info" />
            <span className="text-gray-500">{recipe.servings} servings</span>
          </div>
        </div>
      </div>
    </div>
  );
}
