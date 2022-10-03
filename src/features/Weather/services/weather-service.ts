/* eslint-disable import/no-anonymous-default-export */
import { AxiosResponse } from "axios";
import api from "../apis/api";
import { GetWeatherParams, GetWeatherResponse } from "../types/weather";

// TODO: Move this to env
const API_KEY = "69278d8918167453212ad3c483b820c6";

const weatherService = {
  getWeather: (
    params: GetWeatherParams
  ): Promise<AxiosResponse<GetWeatherResponse>> => {
    return api.get("/data/2.5/weather", {
      params: { ...params, units: "metric", appid: API_KEY },
    });
  },
};

export default weatherService;
