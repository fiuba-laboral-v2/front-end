import { NumberFormatter } from "$models/NumberFormatter";

describe("formatMoney", () => {
  it("Executes formatNumber and adds a $ before", () =>
    expect(NumberFormatter.formatMoney(12345.67888)).toEqual("$12.345,679"));
});
