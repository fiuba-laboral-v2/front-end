import { TextFormatter } from "$models/TextFormatter";

const testCapitalize = (input: string, output: string) =>
  expect(TextFormatter.capitalize(input)).toEqual(output);

describe("toUpperCase", () => {
  it("Replaces the first character in words with its upper case counterpart", () =>
    testCapitalize("something interesting", "Something Interesting"));

  it("Keeps spaces", () =>
    testCapitalize("  someThing   MORE interestIng  ", "  Something   More Interesting  "));
});
