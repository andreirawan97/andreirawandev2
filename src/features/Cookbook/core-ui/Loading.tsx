import { CircularProgress } from "@mui/material";
import { CSSProperties } from "react";

type Props = {
  loading: boolean;
  containerStyle?: CSSProperties;
  children: JSX.Element;
};

export default function Loading(props: Props) {
  const { loading, containerStyle, children } = props;

  return loading ? (
    <div style={containerStyle}>
      <CircularProgress />
    </div>
  ) : (
    children
  );
}
