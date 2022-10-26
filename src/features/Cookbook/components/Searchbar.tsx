import React, { SyntheticEvent } from "react";
import { IconButton } from "@mui/material";
import { Search, CasinoOutlined, Tune } from "@mui/icons-material";

import { Button } from "../core-ui";
import { COLORS } from "../constants/colors";

type Props = {
  value?: string;
  onChangeText?: (value: string) => void;
  onSubmit?: () => void;
  onClickRandom?: () => void;
  onClickFilter?: () => void; // If not undefined, it will automatically show the filter button
};

export default function Searchbar(props: Props) {
  const { onChangeText, onClickRandom, value, onSubmit, onClickFilter } = props;

  const _onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onSubmit && onSubmit();
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-3xl mb-12">
      <div className="flex flex-row items-center relative px-6 py-3 self-center bg-white rounded-3xl shadow-lg w-full md:mr-6 mb-6 md:mb-0">
        <Search
          style={{
            marginRight: 24,
          }}
        />

        <div className="flex flex-row items-center w-full mr-8">
          <form className="w-full" onSubmit={_onSubmit}>
            <input
              className="w-full"
              value={value}
              onChange={(e) => {
                onChangeText && onChangeText(e.target.value);
              }}
              placeholder="What do you want to eat?"
            />
          </form>
        </div>

        {onClickFilter && (
          <IconButton
            style={{
              position: "absolute",
              right: 6,
              backgroundColor: COLORS.PRIMARY,
            }}
          >
            <Tune
              style={{
                color: "white",
              }}
              fontSize="inherit"
            />
          </IconButton>
        )}
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
