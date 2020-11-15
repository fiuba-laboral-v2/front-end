import { interpolateValues } from "$models/interpolateValues";

describe("interpolateValues", () => {
  it("returns the same string if there is no escape delimiter expression", async () => {
    expect(interpolateValues("this is a test", { name: "cachito" })).toBe("this is a test");
  });

  it("throws an error if the escape delimiter expression is not defined", async () => {
    const failingParameters = () => interpolateValues("this is a test <%= user %>", {});
    expect(failingParameters).toThrow(ReferenceError("user is not defined"));
  });

  it("returns the same string with the value interpolated", async () => {
    expect(interpolateValues("this is a test <%= name %>", { name: "cachito" })).toBe(
      "this is a test cachito"
    );
  });

  it("supports many values to interpolate", async () => {
    expect(
      interpolateValues("this is a test <%= name %> <%= user %>", {
        name: "cachito",
        user: "perez"
      })
    ).toBe("this is a test cachito perez");
  });
});
