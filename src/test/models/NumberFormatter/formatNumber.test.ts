import { NumberFormatter } from "$models/NumberFormatter";

describe("formatNumber", () => {
  it("Transforms number to string using argentine locale, rounding to 3 decimals", () =>
    expect(NumberFormatter.formatNumber(12345.67888)).toEqual("12.345,679"));

  it("Properly formats DNIs", () =>
    expect(NumberFormatter.formatNumber(39049956)).toEqual("39.049.956"));

  it("Accepts strings as well", () =>
    expect(NumberFormatter.formatNumber("39555777")).toEqual("39.555.777"));
});
