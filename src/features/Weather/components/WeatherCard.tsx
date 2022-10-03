import { IconHumidity, IconWindSpeed } from "../../../assets/icons/weather";

type WeatherCard_InfoType = "windSpeed" | "humidity";

type Props = {
  infoType: WeatherCard_InfoType;
  value: number;
};

export default function WeatherCard(props: Props) {
  const { infoType, value } = props;

  const infoTypeImageMap: Record<WeatherCard_InfoType, string> = {
    humidity: IconHumidity,
    windSpeed: IconWindSpeed,
  };

  const infoTypeLabelMap: Record<WeatherCard_InfoType, string> = {
    humidity: "Humidity",
    windSpeed: "Wind Speed",
  };

  return (
    <div className="flex flex-col items-center mr-6">
      <img alt="" src={infoTypeImageMap[infoType]} className="w-14 h-14 mb-3" />
      <span className="gray">{infoTypeLabelMap[infoType]}</span>

      <div className="h-px w-8 bg-gray-500 my-3" />

      <span className="font-light text-3xl">{value}</span>
    </div>
  );
}
