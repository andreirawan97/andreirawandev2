type Props = {
  temp: number;
  caption: string;
  boldTemp?: boolean;
};

export default function WeatherText(props: Props) {
  const { temp, caption, boldTemp } = props;

  return (
    <div className="flex flex-row items-center mb-3">
      <span className={boldTemp ? "text-4xl font-bold w-28" : "text-4xl w-28"}>
        {temp}°
      </span>
      <div className="h-px w-8 bg-gray-500 mx-3" />
      <span>{caption}</span>
    </div>
  );
}
