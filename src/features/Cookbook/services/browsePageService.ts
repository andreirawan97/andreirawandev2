import api, { SECRET } from "../api/api";

const browsePageService = {
  getRandomRecipes: () => {
    return api.get("/recipes/random", {
      params: {
        apiKey: SECRET,
        number: 9,
      },
    });
  },
};

export default browsePageService;
