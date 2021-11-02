import { SocialIcon } from "react-social-icons";
import { StickyContainer, Sticky } from "react-sticky";
import { useState } from "react";

import {
  Modal,
  PersonalProjectList,
  SectionHeader,
  VerticalTimeline,
} from "../components";
import { organizationExperiences } from "../data/organizationExperiences";
import { personalProjects, works } from "../data/projects";

import {
  CV,
  ImageAndre,
  ImageConmedia,
  ImageCSIC,
  ImageIFRA,
  ImageUMN,
  LogoTraveloka,
} from "../assets";
import { openLink, scrollTo } from "../helpers/util";

export default function MainPage() {
  let [isModalOpen, setModalOpen] = useState(false);

  function closeModal() {
    setModalOpen(false);
  }

  function openModal() {
    setModalOpen(true);
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row content-container">
        <button className="font-bold" onClick={openModal}>
          andreirawan.dev
        </button>
      </div>

      <StickyContainer className="mb-6">
        <Sticky>
          {({ style }) => (
            <div
              id="aboutMe"
              style={{ ...style, backgroundColor: "white", zIndex: 1 }}
            >
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

              <button
                onClick={() => {
                  window.open(CV);
                }}
                className="bg-primary text-white px-3 py-2 shadow rounded-lg text-sm mb-6 mr-3"
              >
                {`Download my resume 📝`}
              </button>

              <button
                className="bg-primary text-white px-3 py-2 shadow rounded-lg text-sm mb-6"
                onClick={() => scrollTo("myProjects")}
              >
                {`See my projects -->`}
              </button>

              <div className="flex flex-row items-center">
                <SocialIcon
                  className="mr-3"
                  style={{
                    zIndex: 0,
                  }}
                  url="https://www.linkedin.com/in/andre-irawan-baa512168/"
                />
                <SocialIcon
                  className="mr-3"
                  style={{
                    zIndex: 0,
                  }}
                  url="mailto: andreirawan97@gmail.com"
                />
                <SocialIcon
                  style={{
                    zIndex: 0,
                  }}
                  url="https://www.github.com/andreirawan97"
                />
              </div>
            </div>
            <div className="flex flex-1 justify-center lg:justify-end">
              <img style={{ width: "80%" }} src={ImageAndre} alt="" />
            </div>
          </div>
        </div>
      </StickyContainer>

      <StickyContainer>
        <Sticky>
          {({ style }) => (
            <div id="myStory" style={{ ...style, backgroundColor: "white" }}>
              <SectionHeader title="My story" />
            </div>
          )}
        </Sticky>

        <div
          className="content-container"
          style={{ backgroundColor: "#f2f4f6" }}
        >
          <h3 className="mt-3 mb-6">
            My most recent <span className="text-primary">education</span>
            {" 🎓"}
          </h3>

          <div className="flex lg:flex-row flex-col mt-3">
            <div className="flex flex-1 justify-center lg:justify-start lg:pr-12">
              <img
                className="rounded-xl"
                src={ImageUMN}
                alt=""
                style={{
                  width: "100%",
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

              <ul className="dotted-list">
                {organizationExperiences.map((experience, i) => (
                  <li key={i}>{experience}</li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="mt-9 mb-6">
            My <span className="text-primary">achievements</span>
            {" 🏆"}
          </h3>

          <div className="flex lg:flex-row flex-col">
            <div className="flex-1 justify-center lg:pr-3 pb-6">
              <div className="flex flex-col rounded-xl bg-white shadow">
                <img className="rounded-xl mb-3" src={ImageCSIC} alt="" />
                <div className="flex flex-col px-3 pb-3">
                  <span className="mb-3">
                    1st Place in Computer Science Innovation Challenge (CSIC)
                    2017
                  </span>
                  <button
                    className="text-primary font-bold"
                    onClick={() =>
                      openLink(
                        "https://ultimagz.com/berita-kampus/infinite-loop-usung-inovasi-bernama-emergency-di-csic/"
                      )
                    }
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 justify-center lg:px-3 pb-6">
              <div className="flex flex-col rounded-xl bg-white shadow">
                <img className="rounded-xl mb-3" src={ImageIFRA} alt="" />
                <div className="flex flex-col px-3 pb-3">
                  <span className="mb-3">
                    1st Place in IFRAPreneur Business Concept Competition
                    (IFBCC) 2018
                  </span>
                  <button
                    className="text-primary font-bold"
                    onClick={() =>
                      openLink(
                        "https://www.tribunnews.com/bisnis/2018/07/22/ifra-2018-semangat-entrepreneurship-usia-muda-mulai-tumbuh"
                      )
                    }
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 justify-center lg:pl-3 pb-6">
              <div className="flex flex-col rounded-xl bg-white shadow">
                <img className="rounded-xl mb-3" src={ImageConmedia} alt="" />
                <div className="flex flex-col px-3 pb-3">
                  <span className="mb-3">
                    Presenter in CONMEDIA ICON-SONICS 2021
                  </span>
                  <button
                    className="text-primary font-bold"
                    onClick={() =>
                      openLink(
                        "https://www.detik.com/edu/perguruan-tinggi/d-5767417/gelar-konferensi-internasional-umn-angkat-isu-teknologi--pembangunan"
                      )
                    }
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StickyContainer>

      <StickyContainer className="mb-3">
        <Sticky>
          {({ style }) => (
            <div
              id="myProjects"
              style={{ ...style, backgroundColor: "white", zIndex: 1 }}
            >
              <SectionHeader title="My projects" />
            </div>
          )}
        </Sticky>

        <div className="content-container">
          <h3 className="mt-3 mb-6">
            My <span className="text-primary">personal projects</span>
            {" 🧑‍🔬"}
          </h3>

          {personalProjects.map((data, i) => (
            <PersonalProjectList key={i} data={data} />
          ))}

          <h3 className="mt-9 mb-6">
            My <span className="text-primary">works</span>
            {" 🏢"}
          </h3>

          <VerticalTimeline data={works} />
        </div>
      </StickyContainer>

      <div
        style={{
          width: 12,
          height: 12,
          borderRadius: 12,
          backgroundColor: "grey",
          alignSelf: "center",
        }}
      />

      <Modal
        title="Oops"
        description="Did i forgot to change it? 🤔"
        show={isModalOpen}
        onCloseModal={closeModal}
      />

      {/* <StickyContainer className="mb-6">
        <Sticky>
          {({ style }) => (
            <div style={{ ...style, backgroundColor: "white", zIndex: 1 }}>
              <SectionHeader title="My expertise" />
            </div>
          )}
        </Sticky>

        <div className="content-container">
          <h3 className="mt-3 mb-6">
            My <span className="text-primary">skills</span>
          </h3>
          {skills.map((skill) => (
            <div className="flex flex-row items-center">
              <div className="flex-1 pr-1">
                <p className="font-bold text-lg text-right">{skill.name}</p>
              </div>
              <div className="flex-1 pl-1">
                <Rating rating={skill.rating} />
              </div>
            </div>
          ))}
        </div>
      </StickyContainer> */}
    </div>
  );
}
