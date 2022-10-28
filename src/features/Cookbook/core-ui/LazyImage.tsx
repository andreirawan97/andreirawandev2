import { Skeleton } from "@mui/material";
import React, { CSSProperties, ImgHTMLAttributes, useState } from "react";

type Props = {
  skeletonHeight: number;
  containerClassName?: string;
  containerStyle?: CSSProperties;
} & ImgHTMLAttributes<HTMLImageElement>;

export default function LazyImage(props: Props) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className={props.containerClassName}>
      <Skeleton
        className={props.className}
        variant="rectangular"
        height={props.skeletonHeight}
        width="100%"
        style={{ display: isLoading ? "block" : "none", ...props.style }}
      />

      <img
        alt=""
        {...props}
        style={{
          width: "100%",
          display: isLoading ? "none" : "block",
          ...props.style,
        }}
        onLoad={() => {
          setLoading(false);
        }}
      />
    </div>
  );
}
