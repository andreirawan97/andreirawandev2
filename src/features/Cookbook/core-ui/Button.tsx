import { CSSProperties, ReactNode } from "react";

import { COLORS } from "../constants/colors";

type Props = {
  label: string;
  onClick?: () => void;
  iconLeft?: ReactNode;
  containerStyle?: CSSProperties;
  labelStyle?: CSSProperties;
};

export default function Button(props: Props) {
  const { label, onClick, iconLeft, containerStyle, labelStyle } = props;

  return (
    <div
      className="flex flex-row px-6 py-3 rounded-3xl cursor-pointer shadow-lg"
      style={{
        backgroundColor: COLORS.PRIMARY,
        ...containerStyle,
      }}
      onClick={onClick}
    >
      {iconLeft && <div className="mr-3">{iconLeft}</div>}
      <span style={{ ...labelStyle }}>{label}</span>
    </div>
  );
}
