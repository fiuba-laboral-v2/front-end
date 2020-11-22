import { sortSections } from "$models/sortSections";

describe("sortSections", () => {
  it("sorts by display order", () =>
    expect(
      sortSections([
        {
          title: "2",
          text: "222",
          displayOrder: 2
        },
        {
          title: "1",
          text: "111",
          displayOrder: 1
        }
      ])
    ).toEqual([
      {
        title: "1",
        text: "111",
        displayOrder: 1
      },
      {
        title: "2",
        text: "222",
        displayOrder: 2
      }
    ]));

  it("turns undefined into an empty array", () => expect(sortSections()).toEqual([]));
});
