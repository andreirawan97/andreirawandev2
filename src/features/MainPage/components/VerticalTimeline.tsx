import Fade from "react-reveal/Fade";

import { openLink } from "../../../helpers/util";

export type TimelineData = {
  title: string;
  organizationName: string;
  description: string;
  date: string;
  organizationLogo?: string;
  image?: string;
  link?: string;
};

type Props = {
  data: Array<TimelineData>;
};

export default function VerticalTimeline(props: Props) {
  const { data } = props;

  return (
    <div>
      {data.map((item, i) => {
        const notSameWithPrevOrganization =
          i === 0 || item.organizationName !== data[i - 1].organizationName;
        return (
          <div key={i} className="flex flex-row">
            <div className="flex flex-col items-center">
              <div
                style={
                  notSameWithPrevOrganization
                    ? {
                        backgroundColor: "#5158bb",
                        width: 18,
                        height: 18,
                        borderRadius: 18,
                      }
                    : {
                        backgroundColor: "#cbcdeb",
                        width: 12,
                        height: 12,
                        borderRadius: 12,
                        marginLeft: 3,
                        marginRight: 3,
                      }
                }
              />
              {i < data.length - 1 && (
                <div className="w-1 bg-primary-shade flex-1" />
              )}
            </div>

            <Fade>
              <div className="flex flex-col ml-3 pb-4">
                {notSameWithPrevOrganization && (
                  <div className="flex">
                    <div className="p-1 bg-primary-shade rounded-xl px-3 mb-1">
                      <p className="text-primary text-sm font-bold">
                        {item.organizationName}
                      </p>
                    </div>
                  </div>
                )}

                <p
                  className="font-bold"
                  style={
                    !notSameWithPrevOrganization ? { marginTop: -4 } : undefined
                  }
                >
                  {item.title}
                </p>
                {item.image && (
                  <img
                    className="sm:max-w-xs my-3 rounded max-h-36 w-max"
                    src={item.image}
                    alt=""
                  />
                )}
                <span>📅 {item.date}</span>
                <span>{item.description}</span>
                <div>
                  {item.link && (
                    <button
                      className="text-primary"
                      onClick={() => openLink(item.link ?? "")}
                    >
                      View more
                    </button>
                  )}
                </div>
              </div>
            </Fade>
          </div>
        );
      })}
    </div>
  );
}
