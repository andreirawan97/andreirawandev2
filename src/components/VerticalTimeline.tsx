export type TimelineData = {
  title: string;
  organizationName: string;
  description: string;
  date: string;
  organizationLogo?: string;
  image?: string;
};

type Props = {
  data: Array<TimelineData>;
};

export default function VerticalTimeline(props: Props) {
  const { data } = props;

  return (
    <div>
      {data.map((item, i) => (
        <div key={i} className="flex flex-row">
          <div className="flex flex-col items-center">
            <div
              className="bg-primary"
              style={{
                width: 24,
                height: 24,
                borderRadius: 24,
              }}
            />
            {i < data.length - 1 && (
              <div className="w-1 bg-primary-shade flex-1" />
            )}
          </div>
          <div className="flex flex-col ml-3 pb-6">
            <div className="flex">
              {(i === 0 ||
                item.organizationName !== data[i - 1].organizationName) && (
                <div className="p-1 bg-primary-shade rounded-xl px-3 mb-1">
                  <p className="text-primary text-sm font-bold">
                    {item.organizationName}
                  </p>
                </div>
              )}
            </div>
            <p className="font-bold">{item.title}</p>
            <span>📅 {item.date}</span>
            <span>{item.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
