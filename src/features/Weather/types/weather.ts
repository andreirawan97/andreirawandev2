export type GetWeatherParams = {
  lat: string;
  lon: string;
};

export type GetWeatherResponse_Weather_Icon =
  | "01d"
  | "01n"
  | "02d"
  | "02n"
  | "03d"
  | "03n"
  | "04d"
  | "04n"
  | "09d"
  | "09n"
  | "10d"
  | "10n"
  | "11d"
  | "11n"
  | "13d"
  | "13n"
  | "50d"
  | "50n";

export type GetWeatherResponse_Weather = {
  id: number;
  main: string;
  description: string;
  icon: GetWeatherResponse_Weather_Icon;
};

export type GetWeatherResponse_Wind = {
  speed: number;
  deg: number;
};

export type GetWeatherResponse_Clouds = {
  all: number;
};

export type GetWeatherResponse_Sys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export type GetWeatherResponse_Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

export type GetWeatherResponse = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: GetWeatherResponse_Weather[];
  base: string;
  main: GetWeatherResponse_Main;
  visibility: number;
  wind: GetWeatherResponse_Wind;
  clouds: GetWeatherResponse_Clouds;
  dt: number;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};
