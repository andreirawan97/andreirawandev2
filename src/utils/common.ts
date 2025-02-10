export const openLink = (url: string) => {
  window.open(url);
};

export const scrollTo = (elementId: string) => {
  document.getElementById(elementId)?.scrollIntoView({
    behavior: "smooth",
  });
};
