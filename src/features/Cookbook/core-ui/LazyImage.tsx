import { Skeleton } from "@mui/material";
import React, { ImgHTMLAttributes, useState } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement>;

export default function LazyImage(props: Props) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="flex flex-1 justify-center items-center">
      <Skeleton
        className={props.className}
        variant="rectangular"
        height={180}
        width="100%"
        style={{ display: isLoading ? "block" : "none" }}
      />

      <img
        alt=""
        {...props}
        style={{
          width: "auto",
          display: isLoading ? "none" : "block",
        }}
        onLoad={() => {
          setLoading(false);
        }}
      />
    </div>
  );
}
