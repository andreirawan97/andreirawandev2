import { SocialIcon } from "react-social-icons";
import { StickyContainer, Sticky } from "react-sticky";
import { ImageAndre, ImageUMN, LogoTraveloka } from "../assets";

import { SectionHeader } from "../components";
import { organizationExperiences } from "../data/organizationExperiences";

export default function MainPage() {
  return (
    <div>
      <div className="flex flex-row content-container">
        <p className="font-bold">andreirawan.dev</p>
      </div>

      <StickyContainer className="mb-6">
        <Sticky>
          {({ style }) => (
            <div style={{ ...style, backgroundColor: "white", zIndex: 1 }}>
              <SectionHeader title="About me" />
            </div>
          )}
        </Sticky>

        <div className="content-container">
          <div className="flex lg:flex-row flex-col mt-3">
            <div className="flex-1">
              <h1 className="mb-3">Hello 👋,</h1>
              <h1 className="mb-6">
                I'm <span className="text-primary">Andre Irawan</span>
              </h1>

              <div className="flex flex-row items-center mb-6">
                <h4 className="mr-1">Software Engineer at Traveloka</h4>

                <img className="w-9 h-9" src={LogoTraveloka} alt="" />
              </div>

              <p className="mb-6">
                I have experiences in creating and designing software. I take
                into account both sides of the project, users, and business to
                meet the needs of both. Applying analytical thinking, user
                research, and evaluation of the best method and solution,
                resulting in functional UI designs and 100% sure of its
                implementation, this thanks to the experience in development
                acquired in all these years.
              </p>

              <div className="flex flex-row items-center">
                <SocialIcon
                  className="mr-3"
                  style={{
                    zIndex: 0,
                  }}
                  url="https://www.linkedin.com/in/andre-irawan-baa512168/"
                />
                <SocialIcon
                  style={{
                    zIndex: 0,
                  }}
                  url="mailto: andreirawan97@gmail.com"
                />
              </div>
            </div>
            <div className="flex flex-1 justify-center lg:justify-end">
              <img className="max-w-lg h-auto" src={ImageAndre} alt="" />
            </div>
          </div>
        </div>
      </StickyContainer>

      <StickyContainer>
        <Sticky>
          {({ style }) => (
            <div style={{ ...style, backgroundColor: "white" }}>
              <SectionHeader title="My story" />
            </div>
          )}
        </Sticky>

        <div
          className="content-container"
          style={{ backgroundColor: "#f9fbfc" }}
        >
          <h3 className="mt-3 mb-6">
            My most recent <span className="text-primary">education</span>
          </h3>

          <div className="flex lg:flex-row flex-col mt-3">
            <div className="flex flex-1 justify-center lg:justify-start">
              <img
                className="rounded-xl"
                src={ImageUMN}
                alt=""
                style={{
                  width: "80%",
                  height: "auto",
                }}
              />
            </div>
            <div className="flex flex-1 flex-col justify-center lg:mt-0 mt-6">
              <p className="font-bold">
                I studied Computer Science in{" "}
                <span className="text-primary">
                  Multimedia Nusantara University
                </span>{" "}
                and have many experience in organizations.
              </p>

              <ul>
                {organizationExperiences.map((experience) => (
                  <li>{experience}</li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="mt-9 mb-6">
            My <span className="text-primary">achievements</span>
          </h3>

          <div className="flex lg:flex-row flex-col">
            <div className="flex-1 justify-center">
              <p>aa</p>
            </div>
            <div className="flex-1 justify-center">b</div>
            <div className="flex-1 justify-center">c</div>
          </div>
        </div>
      </StickyContainer>
    </div>
  );
}
