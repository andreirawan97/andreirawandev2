import { Checkbox } from "@mui/material";
import { useState } from "react";
import { Recipe_ExtendedIngredient } from "../types/globalTypes";

type Props = {
  ingredient: Recipe_ExtendedIngredient;
};

export default function IngredientChecker(props: Props) {
  const { ingredient } = props;

  const [isChecked, setChecked] = useState(false);

  const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="flex flex-col mb-1">
      <div className="flex flex-row items-center">
        <Checkbox
          style={{
            marginRight: 6,
          }}
          checked={isChecked}
          onChange={onChangeCheckbox}
        />

        <span
          className="cursor-pointer text-base"
          onClick={() => {
            setChecked((prevIsChecked) => !prevIsChecked);
          }}
          style={{
            textDecoration: isChecked ? "line-through" : "none",
          }}
        >
          {ingredient.original}
        </span>
      </div>
    </div>
  );
}
