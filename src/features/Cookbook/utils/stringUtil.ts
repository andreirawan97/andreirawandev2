export const capitalizedFirstLetter = (str: string) => {
  return str
    .split(" ")
    .map((w) => {
      let _w = w.split("");
      _w[0] = _w[0].toUpperCase();

      return _w.join("");
    })
    .join(" ");
};
