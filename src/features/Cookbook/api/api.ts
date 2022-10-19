import axios from "axios";

const HOST_NAME = "https://api.spoonacular.com";

// TODO: Put it into env
export const SECRET = "";

const api = axios.create({
  baseURL: HOST_NAME,
});

export default api;
