import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../features/Cookbook/core-ui";

import { LandingAnimationData } from "../../features/Cookbook/lottie-files";

import "./index.css";

export default function LandingPage() {
  const navigate = useNavigate();

  const onClickBrowseNow = () => {
    navigate("/cookbook/browse");
  };

  return (
    <div
      className="w-full h-screen xl:px-48 lg:px-32 md:px-16"
      // style={{
      //   background:
      //     "radial-gradient(circle at 10% 20%, rgb(255, 197, 61) 0%, rgb(255, 94, 7) 90%)",
      //   WebkitBackdropFilter: "blur(11.3px)",
      //   backdropFilter: "blur(11.3px)",
      // }}
    >
      <div className="flex flex-row h-full flex-1">
        <div className="md:flex hidden flex-1 items-center ">
          <div
            style={{
              maxWidth: 700,
            }}
          >
            <Lottie
              loop
              animationData={LandingAnimationData}
              style={{
                maxWidth: "100%",
                height: "auto",
                backgroundColor: "transparent",
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
            label="Browse Now"
            onClick={onClickBrowseNow}
            labelStyle={{
              fontWeight: "bold",
              color: "white",
            }}
          />
        </div>
      </div>
    </div>
  );
}