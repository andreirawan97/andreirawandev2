import axios from "axios";

const imageService = {
  getImage: (filename: string) => {
    return axios.get(
      `https://www.spoonacular.com/cdn/ingredients_100x100/${filename}`
    );
  },
};

export default imageService;
