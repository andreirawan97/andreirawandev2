import axios from "axios";

const HOST_NAME = "https://api.spoonacular.com";

const api = axios.create({
  baseURL: HOST_NAME,
});

export default api;
