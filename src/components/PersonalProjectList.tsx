import Fade from "react-reveal/Fade";

import { PersonalProject } from "../data/projects";

type Props = {
  data: PersonalProject;
};

export default function PersonalProjectList(props: Props) {
  const { data } = props;
  const { description, githubLink, name, projectLink, usedTechnologies } = data;

  const onClickProjectLink = () => {
    window.open(projectLink);
  };

  const onClickGithubLink = () => {
    window.open(githubLink);
  };

  return (
    <Fade>
      <div className="flex flex-row flex-1 mb-3">
        <div className="h-auto w-1 bg-primary-shade rounded" />
        <div className="flex flex-1 flex-col p-3">
          <p className="font-bold">{name}</p>
          <span>{description}</span>
          <span>Used technologies: {usedTechnologies}</span>
          <div className="flex flex-row">
            {projectLink && (
              <span
                onClick={onClickProjectLink}
                className="text-primary font-bold mr-2 cursor-pointer"
              >
                Open
              </span>
            )}
            <span
              onClick={onClickGithubLink}
              className="text-primary cursor-pointer"
            >
              View more
            </span>
          </div>
        </div>
        {/* <div className="h-auto w-1 bg-primary-shade rounded" /> */}
      </div>
    </Fade>
  );
}
