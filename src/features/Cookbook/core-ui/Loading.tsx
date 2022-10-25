import { CircularProgress } from "@mui/material";
import { CSSProperties, ReactNode } from "react";

type Props = {
  loading: boolean;
  containerStyle?: CSSProperties;
  children: ReactNode;
};

export default function Loading(props: Props) {
  const { loading, containerStyle, children } = props;

  return (
    <div style={containerStyle}>
      {loading ? <CircularProgress /> : children}
    </div>
  );
}
