import { arrayMaxOrZero } from "$models/arrayMaxOrZero";

describe("omitTypename", () => {
  it("returns zero on empty array", () => {
    expect(arrayMaxOrZero([])).toEqual(0);
  });

  it("returns the max number in the array", () => {
    expect(arrayMaxOrZero([1, 2, 3, 4, 5])).toEqual(5);
  });

  it("returns the max number in the array even if it is repeated", () => {
    expect(arrayMaxOrZero([1, 2, 3, 4, 5, 5])).toEqual(5);
  });

  it("returns the max number in the array even if the other numbers are repeated", () => {
    expect(arrayMaxOrZero([1, 1, 3, 3, 5])).toEqual(5);
  });
});
