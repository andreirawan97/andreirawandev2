import { Button } from "@mui/material";
import Lottie from "lottie-react";

import { LandingAnimationData } from "../../features/Cookbook/lottie-files";

export default function LandingPage() {
  return (
    <div className="w-full h-screen px-52">
      <div className="flex flex-row h-full flex-1">
        <div className="flex flex-1 items-center">
          <Lottie
            loop
            animationData={LandingAnimationData}
            style={{
              width: 600,
            }}
          />
        </div>

        <div className="flex flex-1 flex-col justify-center items-end">
          <h1 className="font-bold text-5xl mb-3">Learn Cooking</h1>
          <span className="font-light text-xl mb-3">
            Explore 100,000+ recipes
          </span>

          <Button
            variant="contained"
            style={{
              color: "white",
              textTransform: "none",
            }}
          >
            Browse Now
          </Button>
        </div>
      </div>
    </div>
  );
}
