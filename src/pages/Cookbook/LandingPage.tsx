import { Button } from "@mui/material";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

import { LandingAnimationData } from "../../features/Cookbook/lottie-files";

import "./index.css";

export default function LandingPage() {
  const navigate = useNavigate();

  const onClickBrowseNow = () => {
    navigate("/cookbook/browse");
  };

  return (
    <div className="w-full h-screen xl:px-48 lg:px-32 md:px-16">
      <div className="flex flex-row h-full flex-1">
        <div className="md:flex hidden flex-1 items-center ">
          <div
            style={{
              maxWidth: 600,
            }}
          >
            <Lottie
              loop
              animationData={LandingAnimationData}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center md:items-end items-center">
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
            onClick={onClickBrowseNow}
          >
            Browse Now
          </Button>
        </div>
      </div>
    </div>
  );
}
