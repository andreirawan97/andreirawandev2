import { AccessTime, Group, MonetizationOn } from "@mui/icons-material";
import { Chip } from "@mui/material";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import xss from "xss";

import {
  Alert,
  IngredientChecker,
  InstructionStep,
} from "../../features/Cookbook/components";
import { Disclosure, LazyImage } from "../../features/Cookbook/core-ui";
import recipeService from "../../features/Cookbook/services/recipeService";
import { Recipe } from "../../features/Cookbook/types/globalTypes";
import { capitalizedFirstLetter } from "../../features/Cookbook/utils/stringUtil";

export default function DetailPage() {
  const { id } = useParams();

  const [error, setError] = useState<string>("");
  const [recipe, setRecipe] = useState<Recipe>();

  useEffect(() => {
    if (id) {
      recipeService
        .getRecipeDetail(id)
        .then((res) => {
          const { data } = res;

          setRecipe(data);
          console.log(data);

          window.document.title = data.title;
        })
        .catch((e) => {
          const _e = e as AxiosError;
          setError(_e.message);
        });
    }
  }, [id]);

  return (
    <div
      className="flex flex-1 flex-col py-6 items-center w-screen min-h-screen px-6 md:px-12 md:py-12"
      style={{
        backgroundColor: "#fcfbff",
      }}
    >
      {recipe && (
        <div className="flex flex-1 flex-col w-full max-w-6xl">
          <div className="flex w-full flex-col lg:flex-row items-center lg:items-start mb-6">
            <LazyImage
              containerClassName="flex sm:w-auto lg:mr-12 mb-6"
              className="rounded-xl max-w-md shadow"
              src={recipe.image}
              skeletonHeight={240}
            />

            <div className="flex flex-2 flex-col items-center md:items-start max-w-xl">
              <p className="font-bold text-2xl mb-3 text-center lg:text-left">
                {recipe.title}
              </p>

              {/* <div className="flex flex-row w-full mb-6">
                <div className="flex flex-col items-center mr-3 rounded-3xl border-2 border-gray-500 bg-gray-500 py-6 px-4">
                  <AccessTime
                    fontSize="large"
                    style={{
                      marginBottom: 18,
                      color: "white",
                    }}
                  />
                  <span className="text-white">
                    {recipe.readyInMinutes} min
                  </span>
                </div>

                <div className="flex flex-col items-center mr-3 rounded-3xl border-2 border-blue-500 bg-blue-500 py-6 px-4">
                  <GroupOutlined
                    fontSize="large"
                    style={{
                      color: "white",
                      marginBottom: 18,
                    }}
                  />
                  <span className="text-white ">
                    {recipe.servings} servings
                  </span>
                </div>

                <div className="flex flex-col items-center rounded-3xl border-2 border-green-500 bg-green-500 py-6 px-4">
                  <MonetizationOnOutlined
                    fontSize="large"
                    style={{
                      color: "white",
                      marginBottom: 18,
                    }}
                  />
                  <span className="text-white ">${recipe.pricePerServing}</span>
                </div>
              </div> */}

              <div className="flex flex-col w-full mb-6">
                <div className="flex flex-row items-center mb-1">
                  <AccessTime className="mr-3" />

                  <span
                    style={{
                      color: "#4b4b65",
                    }}
                  >
                    {recipe.readyInMinutes} min
                  </span>
                </div>

                <div className="flex flex-row items-center mb-1">
                  <Group className="text-blue-500 mr-3" />

                  <span
                    style={{
                      color: "#4b4b65",
                    }}
                  >
                    {recipe.servings} servings
                  </span>
                </div>

                <div className="flex flex-row items-center">
                  <MonetizationOn className="text-green-500 mr-3" />

                  <span
                    style={{
                      color: "#4b4b65",
                    }}
                  >
                    ${recipe.pricePerServing}
                  </span>
                </div>
              </div>

              {(!!recipe.diets.length || !!recipe.dishTypes.length) && (
                <div className="flex flex-row flex-wrap max-w-xl">
                  {!!recipe.diets.length &&
                    recipe.diets.map((diet) => (
                      <Chip
                        key={diet}
                        label={capitalizedFirstLetter(diet)}
                        style={{
                          marginRight: 8,
                          marginBottom: 12,
                        }}
                      />
                    ))}
                  {!!recipe.dishTypes.length &&
                    recipe.dishTypes.map((dishType) => (
                      <Chip
                        key={dishType}
                        label={capitalizedFirstLetter(dishType)}
                        style={{
                          marginRight: 8,
                          marginBottom: 12,
                        }}
                      />
                    ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full max-w-6xl mb-6">
            <Disclosure title="Summary">
              <div
                className="text-justify"
                dangerouslySetInnerHTML={{
                  __html: xss(recipe.summary),
                }}
              />
            </Disclosure>
          </div>

          <div className="flex flex-col md:flex-row w-full max-w-6xl">
            <div className="flex flex-1 flex-col md:mr-6 mb-6">
              <Disclosure title="Ingredients" defaultOpen>
                {recipe.extendedIngredients.map((ingredient, i) => (
                  <IngredientChecker ingredient={ingredient} key={i} />
                ))}
              </Disclosure>
            </div>

            <div className="flex flex-1point5 flex-col mb-6">
              <Disclosure title="Instructions" defaultOpen>
                <div>
                  {recipe.analyzedInstructions.map((a, i) => {
                    return (
                      <div className="flex flex-col mb-3" key={i}>
                        {recipe.analyzedInstructions.length > 1 && (
                          <span className="text-black font-bold mb-3 text-base">
                            Part {i + 1}
                          </span>
                        )}

                        {a.steps.map((step, j) => (
                          <InstructionStep step={step} key={j} />
                        ))}
                      </div>
                    );
                  })}
                </div>
              </Disclosure>
            </div>
          </div>
        </div>
      )}

      <Alert
        message={error}
        isOpen={!!error}
        onClose={() => setError("")}
        severity="error"
      />
    </div>
  );
}
