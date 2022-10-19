import React, { CSSProperties } from "react";
import { Search } from "@mui/icons-material";
import { CasinoOutlined } from "@mui/icons-material";
import { COLORS } from "../constants/colors";
import { Button } from "../core-ui";

type Props = {
  onChangeText?: (value: string) => void;
  onClickRandom?: () => void;
};

export default function Searchbar(props: Props) {
  const { onChangeText, onClickRandom } = props;

  return (
    <div className="flex flex-row items-center w-full max-w-3xl mb-12">
      <div className="flex flex-row items-center px-6 py-3 bg-white rounded-3xl shadow-lg w-full mr-6">
        <Search
          style={{
            marginRight: 24,
          }}
        />
        <input
          className="w-full"
          onChange={(e) => {
            onChangeText && onChangeText(e.target.value);
          }}
          placeholder="What do you want to eat?"
        />
      </div>

      <Button
        onClick={onClickRandom}
        iconLeft={
          <CasinoOutlined
            style={{
              color: "white",
            }}
          />
        }
        labelStyle={{
          fontWeight: "bold",
          color: "white",
        }}
        label="Random"
      />
    </div>
  );
}
