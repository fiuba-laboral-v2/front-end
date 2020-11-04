import { NumberFormatter } from "$models/NumberFormatter";

describe("formatMoney", () => {
  it("executes formatNumber and adds a $ before", () =>
    expect(NumberFormatter.formatMoney(12345.67888)).toEqual("$12.345,679"));

  it("formats 0", () => expect(NumberFormatter.formatMoney(0)).toEqual("$0"));

  it("formats a negative number", () => expect(NumberFormatter.formatMoney(-12)).toEqual("$-12"));
});
