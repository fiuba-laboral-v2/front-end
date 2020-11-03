import { NumberFormatter } from "$models/NumberFormatter";

describe("formatCuit", () => {
  it("Formats correct cuit number", () =>
    expect(NumberFormatter.formatCuit(23390499569)).toEqual("23-39049956-9"));

  it("Does not validate that number is correct cuit", () =>
    expect(NumberFormatter.formatCuit(12345)).toEqual("12-345-"));
});
