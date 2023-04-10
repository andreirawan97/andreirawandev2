export const openLink = (url: string) => {
  window.open(url);
};

export const scrollTo = (elementId: string) => {
  document.getElementById(elementId)?.scrollIntoView({
    behavior: "smooth",
  });
};

export const getBaseURL = () => {
  return process.env.REACT_APP_ENV === "development"
    ? "localhost:3000"
    : "https://andreirawan.dev/";
};
