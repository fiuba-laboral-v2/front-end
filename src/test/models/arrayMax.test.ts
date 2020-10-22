import { arrayMax } from "$models/arrayMax";

describe("omitTypename", () => {
  it("returns zero on empty array", () => {
    expect(arrayMax([])).toEqual(0);
  });

  it("returns the max number in the array", () => {
    expect(arrayMax([1, 2, 3, 4, 5])).toEqual(5);
  });

  it("returns the max number in the array even if it is repeated", () => {
    expect(arrayMax([1, 2, 3, 4, 5, 5])).toEqual(5);
  });

  it("returns the max number in the array even if the other numbers are repeated", () => {
    expect(arrayMax([1, 1, 3, 3, 5])).toEqual(5);
  });
});
