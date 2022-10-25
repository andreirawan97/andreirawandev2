import axios from "axios";

const HOST_NAME = "https://api.spoonacular.com";

// TODO: Put it into env
export const SECRET = "093f1f30aaa54ec8b4f070021d8b4640";

const api = axios.create({
  baseURL: HOST_NAME,
});

export default api;
