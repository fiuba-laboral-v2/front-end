import { EMPTY_SPACE } from "$models/emptySpace";

describe("emptySpace", () => {
  it("is an empty space", async () => {
    expect(EMPTY_SPACE).toEqual(" ");
  });
});
