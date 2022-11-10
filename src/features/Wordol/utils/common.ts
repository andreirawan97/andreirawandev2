import { ALL_WORD_LIST, COMMON_WORD_LIST } from "../constants/wordList";

export const isAnEnglishWord = (word: string) => {
  return ALL_WORD_LIST.includes(word);
};

export const generateRandomWord = () => {
  const randomIndex = Math.ceil(Math.random() * COMMON_WORD_LIST.length - 1);

  return COMMON_WORD_LIST[randomIndex];
};
