import { isEmpty } from "$models/isEmpty";

describe("isEmpty", () => {
  it("returns true if the value is an empty array", async () => {
    expect(isEmpty([])).toBe(true);
  });

  it("returns true if the value is an empty object", async () => {
    expect(isEmpty({})).toBe(true);
  });

  it("returns true if the value is an empty string", async () => {
    expect(isEmpty("")).toBe(true);
  });

  it("returns true if the value is undefined", async () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  it("returns true if the value is null", async () => {
    expect(isEmpty(null)).toBe(true);
  });

  it("returns false if the value is a number", async () => {
    expect(isEmpty(11)).toBe(false);
  });

  it("returns false if the value is an array of at least one element", async () => {
    expect(isEmpty([null])).toBe(false);
  });

  it("returns false if the value is an object with at least one key", async () => {
    expect(isEmpty({ someKey: "someValue" })).toBe(false);
  });

  it("returns false if the value is a string with at least one character", async () => {
    expect(isEmpty("s")).toBe(false);
  });
});
