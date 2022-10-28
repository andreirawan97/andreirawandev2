import { capitalizedFirstLetter } from "../stringUtil";

describe("stringUtil", () => {
  test.each`
    initial                   | expected
    ${"cat dog"}              | ${"Cat Dog"}
    ${"test"}                 | ${"Test"}
    ${"head slinging slicer"} | ${"Head Slinging Slicer"}
  `("capitalizedFirstLetter", ({ initial, expected }) => {
    expect(capitalizedFirstLetter(initial)).toEqual(expected);
  });
});
