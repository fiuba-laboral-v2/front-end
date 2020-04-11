import { toUpperCase } from "$utils/toUpperCase";

const testUpperCase = (input: string, output: string) =>
  expect(toUpperCase(input)).toEqual(output);

describe("toUpperCase", () => {
  it("Replaces the first character in words with its upper case counterpart", () =>
    testUpperCase("something interesting", "Something Interesting")
  );

  it("Keeps spaces", () =>
    testUpperCase("  someThing   MORE interestIng  ", "  Something   More Interesting  ")
  );
});
