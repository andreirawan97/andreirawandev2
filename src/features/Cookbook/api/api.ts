import axios from "axios";

const HOST_NAME = "https://api.spoonacular.com";

// TODO: Put it into env
export const SECRET = "943288d9290c4eee8578349265a62b81";

const api = axios.create({
  baseURL: HOST_NAME,
});

export default api;
