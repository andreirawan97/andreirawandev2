import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";

import { ImagePlaceholderWeather } from "../assets";
import { IconLocation } from "../assets/icons/weather";
import { WeatherIcon, WeatherText } from "../features/Weather/components";
import WeatherCard from "../features/Weather/components/WeatherCard";
import weatherService from "../features/Weather/services/weather-service";
import { GetWeatherResponse } from "../features/Weather/types/weather";
import getCurrentDateString from "../features/Weather/utils/date";

export default function WeatherPage() {
  const [weatherData, setWeatherData] = useState<GetWeatherResponse>();

  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        weatherService
          .getWeather({
            lat: String(latitude),
            lon: String(longitude),
          })
          .then((res) => {
            const { data } = res;
            setWeatherData(data);
          });
      });
    } else {
      setError(true);
      setErrorMessage("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="flex flex-1 w-screen h-screen">
      {weatherData ? (
        <div className="flex flex-1 w-screen-h-screen">
          <img
            src={ImagePlaceholderWeather}
            alt=""
            className="w-full object-cover"
          />

          <div className="absolute w-screen h-screen flex flex-1 flex-col">
            <div className="flex flex-2 justify-between flex-row p-12">
              <span className="font-light text-2xl">
                {getCurrentDateString()}
              </span>

              <div className="flex flex-row items-center h-max">
                <img className="mr-1 w-10 h-10" src={IconLocation} alt="" />
                <span className="font-light text-5xl">{weatherData?.name}</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="flex flex-1 flex-row bg-white py-12 px-16">
                <div className="flex flex-3 flex-row items-center">
                  <div className="flex flex-col justify-center items-center mr-16">
                    <WeatherIcon iconName={weatherData.weather[0].icon} />
                    <span className="text-2xl">
                      {weatherData.weather[0].main}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <WeatherText
                      boldTemp
                      temp={weatherData.main.temp}
                      caption="Current temperature"
                    />
                    <WeatherText
                      temp={weatherData.main.temp_min}
                      caption="Min. temperature"
                    />
                    <WeatherText
                      temp={weatherData.main.temp_max}
                      caption="Max. temperature"
                    />
                  </div>
                </div>

                <div className="flex flex-4 flex-row items-center justify-end">
                  <WeatherCard
                    infoType="humidity"
                    value={weatherData.main.humidity}
                  />
                  <WeatherCard
                    infoType="windSpeed"
                    value={weatherData.wind.speed}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <Snackbar
        open={isError}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          {errorMessage}
          tes123
        </Alert>
      </Snackbar>
    </div>
  );
}
