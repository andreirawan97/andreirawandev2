import {
  Icon01d,
  Icon01n,
  Icon02d,
  Icon02n,
  Icon03d,
  Icon03n,
  Icon04d,
  Icon04n,
  Icon09d,
  Icon09n,
  Icon10d,
  Icon10n,
  Icon11d,
  Icon11n,
  Icon13d,
  Icon13n,
  Icon50d,
  Icon50n,
} from "../../../assets/icons/weather";
import { GetWeatherResponse_Weather_Icon } from "../types/weather";

type Props = {
  iconName: GetWeatherResponse_Weather_Icon;
};

export default function WeatherIcon(props: Props) {
  const { iconName } = props;

  const imageSourceMap: Record<GetWeatherResponse_Weather_Icon, string> = {
    "01d": Icon01d,
    "01n": Icon01n,
    "02d": Icon02d,
    "02n": Icon02n,
    "03d": Icon03d,
    "03n": Icon03n,
    "04d": Icon04d,
    "04n": Icon04n,
    "09d": Icon09d,
    "09n": Icon09n,
    "10d": Icon10d,
    "10n": Icon10n,
    "11d": Icon11d,
    "11n": Icon11n,
    "13d": Icon13d,
    "13n": Icon13n,
    "50d": Icon50d,
    "50n": Icon50n,
  };

  return (
    <img alt="" src={imageSourceMap[iconName]} className="w-24 h-24 mb-2" />
  );
}
